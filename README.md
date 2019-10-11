## CSS

- 盒模型

  - [CSS 盒模型详解](https://juejin.im/post/59ef72f5f265da4320026f76)

- 垂直居中

  > 其实要想水还很再水出方法 12、方法 13 等等，但是主要问题并不在这里，我觉得大家都喜欢问垂直居中问题的主要目的，还是想考验大家对基础 css 的了解，定位、布局、元素等，比如说相对布局和绝对布局，比如说块级元素和行内元素，比如说 margin 和 padding，比如说百分比的参照者，比如说伪元素的运用，比如说 transform 用法等等。
  > 最主要考察的是对这些基础实际运用能力和理解能力，并不是说面试官真的想知道你了解多少种垂直居中的方法，他只是想了解一下面试者 css 的基础罢了。

  - [15 种 CSS 居中的方式](https://www.zcfy.cc/article/centering-in-css-a-complete-guide-css-tricks)

- 三栏布局

  - [CSS 七种三栏布局技巧](https://zhuanlan.zhihu.com/p/25070186?refer=learncoding)
  - [聊聊为什么淘宝要提出「双飞翼」布局](https://github.com/zwwill/blog/issues/11)

- 选择器权重计算方式

  - [css 权重和超越!important](https://juejin.im/post/5ce607a7e51d454f6f16eb3d#heading-6)

- 清除浮动的方法

  - [清除浮动的四种方式及其原理理解](https://juejin.im/post/59e7190bf265da4307025d91)

- 什么是 BFC、可以解决哪些问题

  - [学习 BFC](https://juejin.im/post/59b73d5bf265da064618731d#heading-9)

- position

  - static（静态定位）
    对象遵循标准文档流中，top, right, bottom, left 等属性失效。

  - relative（相对定位）
    对象遵循标准文档流中，依赖 top, right, bottom, left 等属性相对于该对象在标准文档流中的位置进行偏移，同时可通过 z-index 定义层叠关系。

  - absolute（绝对定位）
    对象脱离标准文档流，使用 top, right, bottom, left 等属性进行绝对定位（相对于 static 定位以外的第一个父元素进行绝对定位） 同时可通过 z-index 定义层叠关系。

  - fixed（固定定位）
    对象脱离标准文档流，使用 top, right, bottom, left 等属性进行绝对定位（相对于浏览器窗口进行绝对定位）同时可通过 z-index 定义层叠关系。

  > 标准文档流
  > 标准文档流指在不使用其他与排列和定位相关的特殊 CSS 规则时，元素的默认排列规则。

- 如何实现一个自适应的正方形

  - [自适应正方形](https://juejin.im/post/5b12ae3de51d4506d73f0bb4)

- 如何用 css 实现一个三角形

  > 当盒模型的 width/height 为 0 时，border 边的形状是一个三角形，通过只设置三条边的 border ，并将所绘制的三角形相邻两边的 border 的颜色设置为 transparent, 最后通过调整 border-width 的比例绘制自己所需要的三角形

  - [绘制三角形](https://www.cnblogs.com/v-weiwang/p/5057588.html)

## ES6

- let、const、var 区别

  - [let、const、var 区别](https://juejin.im/post/5b640ae551882506e232d067)

- 箭头函数与普通函数的区别

  - [箭头函数与普通函数的区别](https://juejin.im/post/5c76972af265da2dc4538b64)

- 变量的结构赋值

  - [变量的结构赋值](https://yehanzhou.github.io/2016/12/06/destructuring/)

- ES6 的继承与 ES5 相比有什么不同

  > ES5 的继承是通过 prototype 或构造函数机制来实现。ES5 的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到 this 上(Parent.apply(this))。
  >
  > ES6 的继承机制实质上是先创建父类的实例对象 this(所以必须先调用父类的 super()方法)，然后再用子类的构造函数修改 this。

  - [深入 JavaScript 继承原理](https://juejin.im/post/5a96d78ef265da4e9311b4d8#heading-7)

- js 模块化（commonjs/AMD/CMD/ES6）

  - [js 模块化（commonjs/AMD/CMD/ES6）](https://juejin.im/post/5ba9f5bff265da0af2136fd5)
