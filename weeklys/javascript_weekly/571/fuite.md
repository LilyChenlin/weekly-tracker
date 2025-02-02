---
title: fuite监测web应用中内存泄漏的工具
date: '2022-01-07'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['Tool']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

在我们日常开发中，很少会去调试内存泄漏的问题，虽然是有工具可以实现调试的，但是它调试起来很复杂繁琐，通常也不会准确地告诉我们:我们的系统为什么会出现内存泄漏。
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
在我的印象中，JavaScript是一个自带垃圾回收机制的语言，应该很少会出现内存泄漏的问题。但是当我第一次开始研究内存泄漏时，却发现它却成为了内存泄漏的主要来源。随着研究的深入，我发现在单页面应用程序(Single Page Apps，简称 spa)上是普遍存在内存泄漏问题的，只是很少有人对这些应用做测试。

很少有web开发人员会注意到内存泄漏的问题，通常是因为他们发现自己的网站正在变慢，变卡甚至崩溃，或者偶然间在内存工具中发现页面占用了N兆(甚至N千兆)的内存时，才会考虑系统是否存在内存泄漏。不过当他们注意到这些问题的时候，系统出现内存泄露的点可能就不止一个了。

回顾我之前写过的[关于内存泄露的文章](https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/)就会发现，我通常都会建议开发中通过Chrome的内存监测工具来进行调试，但是由于工具的复杂程度，大部分人都很难通过它来查找除内存泄漏的原因。所以我希望有一个CLI工具来实现这些复杂的操作。

因此我写了一个工具`fuite (法语“ leak”)`。在这个CLI工具中，我们可以用通过它来分析任意的一个网址是否存在内存泄漏的问题。
```
npx fuite https://example.com
```
在执行命令时，`fuite`会默认网站是呈现给用户的一个SPA页面，之后会抓取页面中的内部链接(例如``/about ``或``/contact``)。获取到链接后，会按照下面步骤来执行：
1. 点击链接
2. 点击浏览器的返回按钮
3. 重复操作来监测内存是否增长
当`fuite`监测到内存异常时，会告知我们哪些对象可能会导致内存泄漏。
```
Test         : Go to /foo and back
Memory change: +10 MB
Leak detected: Yes
Leaking objects:
| Object            | # added | Retained size increase |
| ----------------- | ------- | ---------------------- |
| HTMLIFrameElement | 1       | +10 MB                 |
Leaking event listeners:
| Event        | # added | Nodes  |
| ------------ | ------- | ------ |
| beforeunload | 2       | Window |
Leaking DOM nodes:
DOM size grew by 6 node(s) 
```
为了实现这个功能，我在`fuite`中使用了博客文章中阐述的基本策略。他会启动Chrome来运行n次(默认7次),并检查是否有对象发生内存泄漏了n次(7,14,21等）。

`fuite`同时会分析全部的 ``Array``, ``Object``,`` Map``, ``Set``，事件监听器以及整个DOM。假如一个数组在执行了7次后同时也增长了7次，那么这个对象就有可能发生了内存泄漏。
### 测试正式网站
但是令人惊讶的是，仅仅通过点击内部链接并点击浏览器的返回按钮的基本场景就足以发现SPA中的内存泄漏。下面是我对10个前端主流框架的首页进行的测试结果,并发现他们都存在内存泄漏的问题。

| 站点    | 是否发生泄漏 | 内部连接数 | 平均增长 | 最大增长数 |
| ------- | ------------- | -------------- | -------------- | ---------- |
| Site 1  | yes           | 8              | 27.2 kB        | 43 kB      |
| Site 2  | yes           | 10             | 50.4 kB        | 78.9 kB    |
| Site 3  | yes           | 27             | 98.8 kB        | 135 kB     |
| Site 4  | yes           | 8              | 180 kB         | 212 kB     |
| Site 5  | yes           | 13             | 266 kB         | 1.07 MB    |
| Site 6  | yes           | 8              | 638 kB         | 1.15 MB    |
| Site 7  | yes           | 7              | 1.37 MB        | 2.25 MB    |
| Site 8  | yes           | 15             | 3.49 MB        | 4.28 MB    |
| Site 9  | yes           | 43             | 5.57 MB        | 7.37 MB    |
| Site 10 | yes           | 16             | 14.9 MB        | 186 MB     |

在这种情况下，`内部链接`是指所测试的内部链接数目，`平均增长`是指每个链接的平均内存增长(即每次跳转页面并返回) ，而`最大增长`是指内部链接内存泄漏的最大值。值得注意的时，这些数据并不是一次的测试结果而是`fuite`测试了7次之后的结果。

当我们要确定这些结果的真实性时,你可以使用Chrome DevTools的`Memory`工具。下面图片是我选择了测试中性能最差的站点，点击其中的一个链接，然后按下后退键。每次操作都保存一个堆得快照，然后重复操作。

![74a805399e214e6a054c93ad6e9d4ba.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34e6836feb8d47018b63611dd73ae2ff~tplv-k3u1fbpfcp-watermark.image?)

我们可以发现每次点击连接并返回时，内存都会增加约6MB。
### 注意事项
我们要注意的是并不是所有的SPA中的内存泄漏都是需要解决的。比如，当SPA需要维护焦点和滚动状态以正确支持可访问性，这意味着可能会为每个页面导航存储一些小的元数据。`fuite`将会报告此类泄漏，但是需要由开发人员决定是否值得追踪这微小的泄漏。

在开发过程中，一些内存的增长可能是由于浏览器内部的原因造成的(比如JITing)，这是网页无法真正控制的。正因如此，内存增长并不意味着你的代码存在问题，很多情况下内存的增长是不可避免的。

在少数情况下，由于浏览器的一些bug也会造成内存的增长。在分析上面网站时，由于Chrome的bug导致站点#4出现了问题。由于`fuite`是程序，所以很难检测到是否是浏览器的问题。在`fuite`有警告的情况下，我们可以对比下其他浏览器，来确定问题究竟来源于何处。

说完了SPA的应用，在我们传统的MPA(多页面应用程序)中，几乎不可能出现泄漏问题，因为每次当我们切换页面时，浏览器都会清除内存。当然，这都是在浏览器没有bug的前提下。

`fuite`目前只测量页面主框架中的JavaScript堆内存，因此不测量跨域iframe、Web Workers和Service Workers。

### 其他内存泄漏的场景

`fuite`通过获取页面内部链接来进行测试只是一个默认的方案。`fuite`是构建在 Puppeteer之上的，因此你可以通过编写自己的Puppeteer脚本来告知fuite如何去测试你想要测试的内容。这里提供一些可能需要测试的场景：
1. 反复打开/关闭一个模态框
2. 鼠标悬停在某一个元素上时，显示一些提示。当鼠标移出时，删除对应的DOM。
3. 滚动浏览无限加载列表，然后导航离开和返回

在这些场景中，可能会存在你意想不到的内存泄露的问题。当测试了许多应用后，就会发现很多对话框或者工具提示都存储着内存泄漏的问题。

在底层，fuite它是一个相当基本的工具，我不会声称它可以 100% 地完成修复内存泄漏的工作。仍然需要人为因素来弄清楚内存泄漏的具体原因，然后找到一个合理的解决方案。但是我的目标是自动化约 95% 的工作，这样实际上修复 Web 应用程序中的内存泄漏是可以实现的。

### 相关链接

[⛱ 原文地址](https://nolanlawson.com/2021/12/17/introducing-fuite-a-tool-for-finding-memory-leaks-in-web-apps/)

[⛱  fuite GitHub](https://github.com/nolanlawson/fuite)

[⛱  作者视频](https://youtu.be/H0BHL2lo89M)
---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nolanlawson.com/2021/12/17/introducing-fuite-a-tool-for-finding-memory-leaks-in-web-apps/)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/571/fuite.md)
> * 译者：[HongyuYU](https://github.com/chressYu)
> * 校对者：[LilyChenlin](https://github.com/LilyChenlin)
