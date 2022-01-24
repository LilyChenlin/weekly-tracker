(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{620:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一即是全-浏览器渲染周期-硬件加速和排版布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一即是全-浏览器渲染周期-硬件加速和排版布局"}},[t._v("#")]),t._v(" 一即是全 — 浏览器渲染周期，硬件加速和排版布局")]),t._v(" "),s("p",[t._v("每一台电子设备的显示器每秒按照一定的帧数刷新，浏览器必须尝试匹配刷新率以使用户获得流畅的体验。而要将新的一帧输出到显示器上，浏览器首先要完成“渲染周期”和“像素管道”\n"),t._v(" "),t._v("\n大多数的设备是以 60FPS 的速度运行的，这表示每16ms就要输出一帧。FPS表示每秒钟帧的速率，更高的FPS就意味着每一帧有更高的速率。比如120FPS，每帧花费的时间就不能超过8ms。")]),t._v(" "),s("p",[t._v("更糟糕的是，浏览器往往会增加一些额外的开销，并且可能会占用每帧长达4ms的时间；所以在生产中，我们大概需要用每一帧12ms的速率来达到60FPS。而在120FPS下，每帧仅有4ms的时间。")]),t._v(" "),s("p",[t._v("如果浏览器无法给足每一帧要拥有的时间，就会产生掉帧。这将会使画面不流畅，也会使用户有一个糟糕的体验。")]),t._v(" "),s("p",[t._v("对渲染周期的深入了解，以及如何使用现有工具对其进行分析，使我们能够最大限度的每一帧所需要占用的时间 ———— 这是对于浏览器中前端性能至关重要的一点")]),t._v(" "),s("h2",{attrs:{id:"渲染周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染周期"}},[t._v("#")]),t._v(" 渲染周期")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/1400/0*DLbVQYU3MX7tAOhZ.jpg",alt:""}})]),t._v(" "),s("p",[t._v("以上是在渲染帧时渲染周期的五个阶段")]),t._v(" "),s("h3",{attrs:{id:"js-css动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-css动画"}},[t._v("#")]),t._v(" JS/CSS动画")]),t._v(" "),s("p",[t._v("某些 JS或者CSS动画会导致视觉变化，从而引起渲染")]),t._v(" "),s("h3",{attrs:{id:"样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[t._v("#")]),t._v(" 样式")]),t._v(" "),s("p",[t._v("匹配信息然后将新的CSS选择器或规则应用于指定DOM元素")]),t._v(" "),s("h3",{attrs:{id:"布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),s("p",[t._v("计算DOM元素的新几何形状")]),t._v(" "),s("h3",{attrs:{id:"绘制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绘制"}},[t._v("#")]),t._v(" 绘制")]),t._v(" "),s("p",[t._v("为页面的不同区域绘制或填充新的像素点")]),t._v(" "),s("h3",{attrs:{id:"合成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成"}},[t._v("#")]),t._v(" 合成")]),t._v(" "),s("p",[t._v("将所有单独绘制的图层组合在一起，准备显示")]),t._v(" "),s("p",[t._v("需要注意的是，运行的阶段和完成帧渲染的时间取决于正在更改的元素属性。通常一种视觉效果会有好几种不同的实现方式，但是有些方式的渲染成本是很高的。")]),t._v(" "),s("p",[t._v("属性可以分为形式，合成两种，顺便说一句，复合属性的渲染成本是最低的。")]),t._v(" "),s("h2",{attrs:{id:"为什么合成属性要优于形式属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么合成属性要优于形式属性"}},[t._v("#")]),t._v(" 为什么合成属性要优于形式属性？")]),t._v(" "),s("p",[t._v("形式属性就是指会更改元素的形和式的属性（比如宽高，位置，颜色等），形式属性的使用往往会产生重绘或者回流。\n合成属性就是指"),s("code",[t._v("transform")]),t._v("和"),s("code",[t._v("opacity")]),t._v("之类的属性，这类属性在使用时会将元素提升到合成层，在一些浏览器上不会产生重绘或回流。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/1400/0*J3a2iTyob8EQq8pC.jpg",alt:""}}),t._v("\n当我们使用式（颜色，背景图等）一类的属性时，不会对元素的形（宽高，位置等）产生影响，所以就不会走Layout阶段。\n不同的式属性会占用不同的渲染时间，但通常比形属性的渲染时间要快。\n我们还可以通过最小化重绘区域来优化渲染速度，只是我们之后要谈的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/700/0*HOi12ZBWi8pX0gGE.jpg",alt:""}}),t._v("\n当我们使用合成属性时，会跳过Layout和Paint阶段，这也是合成属性占用最小渲染时间的原因。\n合成属性利用硬件加速来完成繁重的渲染工作，来帮助我们减少一帧所占用的时间，这对于动画和滚动相关的阻塞点非常有用。但是这里会发生一个问题，我们之后会谈到。")]),t._v(" "),s("p",[t._v("合成属性包括：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Transfrom：")]),t._v(" "),s("p",[t._v("平移，缩放，旋转，倾斜元素")])]),t._v(" "),s("li",[s("p",[t._v("Opacity：")]),t._v(" "),s("p",[t._v("元素的透明度")])]),t._v(" "),s("li",[s("p",[t._v("Filter*：")]),t._v(" "),s("p",[t._v("模糊，对比度，灰度，色调和阴影效果")])])]),t._v(" "),s("p",[t._v("注：某些浏览器不会对 Filter 进行硬件加速")]),t._v(" "),s("p",[t._v("虽然每帧都使用合成属性几乎不可能办到。\n但通我们可以用合成属性去替代形式属性做相同的视觉效果，仅仅通过这三个属性的互相组合，就可以达到一个惊人的数量了。")]),t._v(" "),s("p",[t._v("还有最后一个重要的概念将会使你更了解合成属性： Layers（层）\n"),s("img",{attrs:{src:"https://miro.medium.com/max/700/0*DZs1plzSxAyhDG9w.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"饭后甜点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#饭后甜点"}},[t._v("#")]),t._v(" 饭后甜点")]),t._v(" "),s("p",[t._v("层，或者合成层，是在浏览器中可以被提升到有自己独立绘制区域的DOM元素\n一个独立的图层，在其本身的视觉效果发生变化时，只需要渲染其本身。\n良好的图层使用可以最大限度地减少绘画区域，而浏览器则通过一套内部标准来决定将DOM元素提升到合成层还是降级到普通层。")]),t._v(" "),s("p",[t._v("如果DOM元素：")]),t._v(" "),s("ol",[s("li",[t._v("拥有3D或透视变化的CSS属性")]),t._v(" "),s("li",[t._v("使用了视频加速解码的"),s("code",[t._v("<video>")]),t._v("元素")]),t._v(" "),s("li",[t._v("使用了3D环境或硬件加速2D环境的"),s("code",[t._v("<canvas>")]),t._v("元素")]),t._v(" "),s("li",[t._v("使用了合成插件")]),t._v(" "),s("li",[t._v("通过动画来转换元素的透明度")]),t._v(" "),s("li",[t._v("使用了硬件加速的CSS Filter属性")]),t._v(" "),s("li",[t._v("有一个层级较低的，拥有合成层的兄弟元素")]),t._v(" "),s("li",[t._v("扩展"),s("a",{attrs:{href:"https://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome中的硬件加速"),s("OutboundLink")],1),t._v("\n上述将会导致DOM元素被提升到合成层")])]),t._v(" "),s("p",[t._v("只有提升到合成层的元素才能使用硬件加速。如果在使用合成元素的时候，浏览器没有提升元素，那么渲染周期中的Paint阶段就不会被跳过。")]),t._v(" "),s("p",[t._v("通常来讲，使用合成属性中的单一属性（比如transform，opacity）是不会引起浏览器提升操作的。但是动画类的合成属性将会在动画开始时提升层级，在动画结束时降级。层级的提升和降低并非对所有合成属性都是毫无代价的。")]),t._v(" "),s("p",[t._v("但是CSS的一个新属性"),s("code",[t._v("will-change")]),t._v("，可以将一个DOM元素提升层级。如果我们想通知浏览器即将发生一个"),s("code",[t._v("transform")]),t._v("方面的变化，并需要将其提升。那我们可以写作"),s("code",[t._v("will-change: transform")])]),t._v(" "),s("p",[t._v("这将会使该元素保持提升，并不会在被其他标准降级。")]),t._v(" "),s("p",[t._v("通过合成属性和"),s("code",[t._v("will-change")]),t._v("的适当配合，很有可能会创建一个在加载过后，几乎不需要再重绘或回流的页面。")]),t._v(" "),s("h2",{attrs:{id:"物极必反"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#物极必反"}},[t._v("#")]),t._v(" 物极必反")]),t._v(" "),s("p",[t._v("如果我们想把页面上的每一个元素都提升到合成层渲染，这样不仅不会使渲染速度变快，反而会使浏览器过载。\n我们还应当警惕合成层激增 —— 当我们使用"),s("code",[t._v("will-change")]),t._v("来提升元素时，可能会让被提升元素的兄弟元素也被提升，这也会导致浏览器过载。\n所以我们应当慎用"),s("code",[t._v("will-change")]),t._v("，只把它用于没必要重绘的情况。")]),t._v(" "),s("h2",{attrs:{id:"测试是检验结果的唯一标准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试是检验结果的唯一标准"}},[t._v("#")]),t._v(" 测试是检验结果的唯一标准")]),t._v(" "),s("p",[t._v("在改进渲染周期的过程中，我们要注意以下两点：")]),t._v(" "),s("ol",[s("li",[t._v("确定可以改进的地方")]),t._v(" "),s("li",[t._v("分析并验证更改后的渲染周期")])]),t._v(" "),s("h3",{attrs:{id:"性能分析器-performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能分析器-performance"}},[t._v("#")]),t._v(" 性能分析器 Performance")]),t._v(" "),s("p",[t._v("开发者工具中的Performance选项卡允许录制一段时间内用户与网页的任何交互。完成录制后，这些信息以时间线的形式呈现，详细说明每个帧的每个事件、渲染周期阶段、函数调用等。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/proxy/0*ANZutdH4gcHAjR9_",alt:""}})]),t._v(" "),s("p",[t._v("点击单个帧将会看到其单独的渲染周期阶段耗时。\n可以据此查找运行频率过高、运行时间过长以及丢失的帧，然后调查原因。")]),t._v(" "),s("p",[t._v("Summary选项卡中的饼图将会展示渲染帧时各个阶段所消耗的时间。")]),t._v(" "),s("p",[t._v("须知：")]),t._v(" "),s("ol",[s("li",[t._v("单击Layout或Paint将会展示更详细的信息")]),t._v(" "),s("li",[t._v("Performance 占用的时间是不会被计算在内的，Disable JavaScript sample 将会减少总耗时，但同时也不会看到单个JS脚本耗时")]),t._v(" "),s("li",[t._v("可以通过限制CPU性能或网络速度来测试网页在坏情况下的表现，以便为用户做一个更具包容性的网页")]),t._v(" "),s("li",[t._v("启用 screenshots 可以使用可视化应用程序观察在特定帧中发生的情况")]),t._v(" "),s("li",[t._v("Update Layer Tree 是浏览器管理所有层状态的事件 —— 如果这里耗时很长，那表示有太多的层或过于臃肿的DOM元素")])]),t._v(" "),s("h3",{attrs:{id:"渲染面板-rendering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染面板-rendering"}},[t._v("#")]),t._v(" 渲染面板 Rendering")]),t._v(" "),s("p",[t._v("打开Rendering的一种方法是在开发者工具的更多选项中，找到"),s("code",[t._v("rendering")]),t._v("并点选上"),s("code",[t._v("Paint flashing")]),t._v("。\n"),s("code",[t._v("rendering")]),t._v("中包含了大量有用的工具，在深入研究性能分析器以找出问题所在之前，它们非常有助于快速查找问题。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/0*HghPwo5qPJNlASLS.png",alt:""}})]),t._v(" "),s("p",[s("code",[t._v("Paint flashing")]),t._v("将显示页面的哪些区域在绘制过程中以及何时被重新绘制。\n可以使用此工具来检查使用"),s("code",[t._v("will-change")]),t._v("提升元素是否成功减少一些不必要的重绘。")]),t._v(" "),s("p",[s("code",[t._v("Layout Shift Regions")]),t._v("将显示引起回流的区域。使用此工具来验证是否移除了不必要的回流现象，或确定发生回流的位置。")]),t._v(" "),s("p",[s("code",[t._v("Layer borders")]),t._v(" 将展示页面上正在使用的合成层，这对于调查您的元素是否按预期提升非常有用。"),s("a",{attrs:{href:"https://source.chromium.org/chromium/chromium/src/+/main:cc/debug/debug_colors.cc;l=16",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击此处查看更多边框颜色含义"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("最后，"),s("code",[t._v("Frame Rendering Stats")]),t._v("和"),s("code",[t._v("Scrolling performance issues")]),t._v("也很有用，它们分别拥有实时帧速率指示器和滚动性能分析。")]),t._v(" "),s("h3",{attrs:{id:"图层面板-layers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图层面板-layers"}},[t._v("#")]),t._v(" 图层面板 Layers")]),t._v(" "),s("p",[t._v("可以在开发者工具的更多里打开图层面板。\n图层面板会展示所有图层的交互式3D视图。")]),t._v(" "),s("p",[t._v("选择指定图层将会展示以下信息：")]),t._v(" "),s("ol",[s("li",[t._v("指定图层为什么被提升")]),t._v(" "),s("li",[t._v("该图层占用的内存")]),t._v(" "),s("li",[t._v("图层尺寸")]),t._v(" "),s("li",[t._v("图层被重绘的次数")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/0*rTb-CGD70GQp0FLK.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"全即是一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全即是一"}},[t._v("#")]),t._v(" 全即是一")]),t._v(" "),s("p",[t._v("在这里，我们将通过动画渐变加载占位符的例子，来展示如何使用现有工具和渲染周期知识提升性能")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/776/1*N3Wg87dPnAQn1Kfj5ifY_Q.gif",alt:""}})]),t._v(" "),s("p",[t._v("通常是通过在动画背景上叠加形状来完成的。\n为方便起见，我们将只考虑背景。")]),t._v(" "),s("h3",{attrs:{id:"通过形属性实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过形属性实现"}},[t._v("#")]),t._v(" 通过形属性实现")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/mttrx/pen/rNGzdKo",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Codepen 上查看代码和预览"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("由于CodePen是在iframe中运行代码，所以开发者工具中的性能检测工具并不对其生效。如果想进行测试，需要把代码Down到本地")]),t._v(" "),s("p",[t._v("这种实现方式将会带给用户最糟糕的体验")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" gradientAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -30%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 130%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("这里使用了一个渐变div, 添加了left位移动画,left就是一个形属性，这将导致每一帧都会走一遍渲染周期的全部阶段。")]),t._v(" "),s("p",[t._v("以下是性能分析器中每一帧的渲染周期的外在显示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/700/1*Z3MjF6deaBiSfgrUmEzqrA.png",alt:""}})]),t._v(" "),s("p",[t._v("请注意，上面的红线表示正在发生布局偏移。启用“Layout Shift Regions”后，请注意渐变始终以紫色突出显示 - 它会导致每帧布局偏移：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/700/1*csiQOw-ens9uIwjc3ju8YA.png",alt:""}})]),t._v(" "),s("p",[t._v("最后，这是整个渲染周期所花费的总时间——这将有助于与下一个版本进行比较。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/302/1*exqWlW2nOU_mWf44iX6bXA.png",alt:""}})]),t._v(" "),s("p",[t._v("尽管每帧都触发了回流，但它实际上不太可能降低浏览器的速度以影响您的帧速率。我已经限制了我的 CPU 以使其更加引人注目。请记住，这是一个非常小的示例；基本上没有多少东西需要计算。对于复杂的应用程序，就会看到切实的影响——尤其是低端设备。")]),t._v(" "),s("h3",{attrs:{id:"通过式属性实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过式属性实现"}},[t._v("#")]),t._v(" 通过式属性实现")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/mttrx/pen/bGooVVe",target:"_blank",rel:"noopener noreferrer"}},[t._v("在Codepen上查看代码和预览"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("这种方式通过更改背景位置来达成样式效果，这仅仅会引起重绘。")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" gradientAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -45% 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 145% 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("请注意，现在性能分析器没有显示渲染周期的Layout阶段，并且不再显示表示布局偏移的红色：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/700/1*fVlu3wl7IYNQnUkKLCJUWg.png",alt:""}})]),t._v(" "),s("p",[t._v("'Layout Shift Regions' 不在生效，而'Paint flashing enabled'使整个页面都变成了绿色，它在重新绘制每一帧：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/692/1*sLYf1b6okPHqgME3ELRvVg.png",alt:""}})]),t._v(" "),s("p",[t._v("现在仅通过式属性（之所以耗时比形属性要多，是因为这里包括了"),s("code",[t._v("Recalculate Style")]),t._v("重新计算的时间）来改善渲染时间，式属性的前三者都要小于形属性：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/302/1*mGXbOxEF7ipCo_w9y3cZxw.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"通过合成属性实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过合成属性实现"}},[t._v("#")]),t._v(" 通过合成属性实现")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/mttrx/pen/YzrrweQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("在Codepen上查看代码和预览"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在这个实现中，我们不会使用任何形式属性。")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" gradientAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("333%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("性能分析器现在是空的！")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/283/1*26Au-xlojjp5J7Etg_dQrQ.png",alt:""}})]),t._v(" "),s("p",[s("code",[t._v("paint flashing")]),t._v("或"),s("code",[t._v("Layout shift regions")]),t._v("都不会生效。\n浏览器自动将元素提升（由于动画合成属性），使用硬件加速跳过了渲染周期的两个阶段，在这里没必要使用"),s("code",[t._v("will-change")]),t._v("。\n但是，如果您经常打开和关闭此动画，或者使用JS手动更改每帧动画，"),s("code",[t._v("will-change")]),t._v("可能会很有用。")]),t._v(" "),s("p",[t._v("启用"),s("code",[t._v("Layer borders")]),t._v("后，可以看到橙色轮廓：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/560/1*OWKh3V6TdzJ185aoR00AWQ.png",alt:""}})]),t._v(" "),s("p",[t._v("使用三种方式实现了同一种视觉效果，明显最后一种耗时更少，性能更好。\n虽然只只是一个简单的示例，但是见微知著，这其中的方法也可以应用在大型的项目中。")]),t._v(" "),s("h2",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://medium.com/@matthew.costello/frontend-web-performance-the-essentials-0-61fea500b180",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frontend Web Performance: The Essentials [0]"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("译文出自："),s("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker",target:"_blank",rel:"noopener noreferrer"}},[t._v("weekly-tracker"),s("OutboundLink")],1),t._v(" 项目，期待你的加入！")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://medium.com/@matthew.costello/frontend-web-performance-the-essentials-0-61fea500b180",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看原文"),s("OutboundLink")],1),t._v("对比阅读")]),t._v(" "),s("li",[t._v("发现错误？"),s("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/frontend_focus/523/frontend_web_performance.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交 PR"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译者："),s("a",{attrs:{href:"http://github.com/myx981008",target:"_blank",rel:"noopener noreferrer"}},[t._v("一绪"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("校对者："),s("a",{attrs:{href:"https://github.com/daodaolee",target:"_blank",rel:"noopener noreferrer"}},[t._v("daodaolee"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);