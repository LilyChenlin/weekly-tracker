---
title: CSS中 :has() 选择器不仅仅是 “父选择器”
date: '2021-12-22'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['CSS']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220104151801.png)
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
> Safari 技术预览版 137 刚刚发布，对 CSS :has() 提供未标记的支持。通常被称为“父选择器”的 :has() 远不止于此……

## CSS `:has()`?

根据 [selectors-4规范](https://drafts.csswg.org/selectors-4/#has-pseudo)：

> 如果任何带参数的选择器至少匹配一个元素，那么`:has()` 伪类就代表一个元素。

该选择器被称为“父选择器”，默认情况确实允许您选择具有某些子元素的父元素。

```css
/* 匹配包含 <img> 子元素的 <a> 元素 */
a:has(img) { … }

/* 匹配包含<img>直接后代子元素的<a>元素 */
a:has(> img) { … }

/* 匹配不包含任何H元素的 <section> 元素：: */
section:not(:has(h1, h2, h3, h4, h5, h6))
```

赞！

## 不仅仅是父选择器哦

`:has()` 不仅仅是一个父选择器。正如 Adrian Bece 在 [Smashing Magazine](https://www.smashingmagazine.com/2021/06/has-native-css-parent-selector/#css-has-pseudo-class-specification) 上的帖子中所分享的：

```css
/* 匹配具有 <figcaption> 作为子元素的 <figure> 元素 */
figure:has(figcaption) { … }

/* 匹配包含 <figcaption> 子元素的 <figure> 的子元素的 <img> 元素 */
figure:has(figcaption) img { … }
```

下面是规范中的另一个示例：

```css
/* 仅当 <p> 元素紧随其后时才匹配 <h1> 元素 */
h1:has(+ p) { … }
```

当然它也支持 `+`, `~`, `>` …只要是符合 `<forgiving-relative-selector-list>` 的参数都可以。

## 其他特性

就像 `:is()` 一样，`:has()` 具有以下特定特征：

1. `:has()` 选择器的预发是有容错性的
2. `:has()` 的特性在于它传的参数

## 浏览器兼容

如前所述，当前只有Safari TP 137支持它（未标记），Chromium团队目前也在努力实现它，关于火狐浏览器还没有消息。

- WebKit/Safari: [Issue #227702](https://bugs.webkit.org/show_bug.cgi?id=227702) — 已解决
- Blink/Chromium: [Issue #669058](https://bugs.chromium.org/p/chromium/issues/detail?id=669058) — 进行中
- Gecko/Firefox: [Issue #418039](https://bugzilla.mozilla.org/show_bug.cgi?id=418039) — 进行中

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://www.bram.us/2021/12/21/the-css-has-selector-is-way-more-than-a-parent-selector/?utm_source=CSS-Weekly&utm_campaign=Issue-486&utm_medium=web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/css_weekly/486/has_selector.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)