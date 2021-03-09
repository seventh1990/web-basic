## 一面

一面就主要围绕项目，底层构建，项目优化，工具链解决方案，框架实现基本原理，数据中间切层，数据结构与算法

- 40 分钟聊简历项目

### 事件&异步

- 事件循环 iiii
- taskSum(1000,()=>{console.log(1)}).task(1200,()=>{console.log(2)}).task(1300,()=>{console.log(3)})，这里等待 1s，打印 1，之后等待 1.2s，打印 2，之后等待 1.3s，打印 3
  [实现](./JS/task.html)
- 宏任务微任务
- promise
- [promise async settimeout 先后次序](./JS/promise-async-settimeout.html)
- 怎么将一个异步方法 promise 化(new Promise())，以及[实现 promise.all()方法](./JS/promise.all.html)
- requestAnimationFrame 和 setTimeout、setInterval 的区别，requestAnimationFrame 可以做什么
- [事件委托](https://juejin.cn/post/6844903589052153869)
- 点击 table 的 td 显示 td 内容
- 实现 当 ul 点击时 输出 子元素 li 的内容

### 浏览器

- 前端跨域；后台响应头要加什么；[jsonp 的实现（要代码）方式](./JS/JSONP.html) iii
- 浏览器 reflow 和 repaint
- 前端缓存、会话机制
- 获取页面所有 img 并且下载
- 两个同源 tab 之间的交互，数据同步
- 前端安全、DOS

### 网络

- 计算机网络知识 TCP UDP
- http 握手原理
- http 请求都包含哪些字段
- http 的方法有哪几种
- [http 请求幂等性](https://www.jianshu.com/p/eef1d6eecdc7)(N 次变换与 1 次变换的结果相同)
- cookie 结构有什么字段
- https 协议的过程
- https 获取加密密钥的过程
- html meta 标签有啥作用
- css <link/>为什么要放在头部
- csrf/xss 攻击原理

### JS

- [fetch 取消](https://juejin.cn/post/6844904113130438663)
- 请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可 iiiii
  [实现](./JS/limit-fetch.html)

- 日期转化为 2 小时前，1 分钟前等
- 固定日期与当前时间格式化处理

- 什么是闭包
- 实现一个 bind 函数 iii
- 多个 bind 连接后输出的值
- bind 函数运行结果
- 实现 sum(1)(2)(3).valueOf()，实现这么一个 sum 函数，返回 6

- throttle 实现 iii
- 实现 debounce

- 实现一个子类实例可以继承父类的所有方法
- 组合继承
- js 原型链继承
- js 原型继承 & 原型链
- prototype 继承的实现
- 类式继承的方案
- 借用构造继承，几种组合继承方式
- 三个继承方式的优缺点
- instanceof

- 浅拷贝与深拷贝区别
- 描述一个深拷贝流程，涉及循环引用

- [数字千分位处理，正则和非正则都要实现 iii](https://mrluo.life/article/detail/115)

- 换行字符串格式化
- 多空格字符串格式化为数组
- 改写一段代码，不考虑随机延时的影响，按顺序输出一段数字
- 设计一套机制，两个千位大数相乘
- 代码实现连续点击 3 次每次间隔不超过 1 秒然后弹出页面（类似安卓的关于手机彩蛋）
- 给说有数组对象添加一个方法，返回出现频率>=n 的元素列表；
- [1,2,3].map(parseInt) 执行结果

- proxy
- == 的隐式转化
- [类数组:](https://juejin.cn/post/6844903711022514184)
  访问、赋值、获取长度上的操作与数组是一致的；
  类数组对象不能直接使用数组的方法；
  Array.prototype.slice.call(arguments)

### Vue

- vue 项目开发环境如何配置？wepack-dev-server 热更新功能实现原理
- vue 的 v-model 原理
- vue 双向绑定 i
- vue 的 $nextTick; 计算属性如何更新;
- 列表 diff 中 key 的作用
- 场景题：Vue CheckBoxGroup/CheckBox 设计
- vue 数据驱动视图原理？更新视图的过程是否是同步的操作？
- vue 发布订阅和虚拟 dom 代码实现
- 虚拟 dom 深度递归算法实现原理
- 实现 mvvm

- vue 单页多页的区别，vue-router 实现原理
- vuex 底层流程和实现原理以及数据流向

### 算法

- 冒泡算法
- 最长子序列
- 二叉树中序遍历
- 二叉树搜寻算法
- 二叉树遍历
- 二叉树是否存在某个路径的和等于一个值
- 二叉树路径总和（leetcode 112）
- 给定一个不含重复数字的数组 arr,指定个数 n,目标和 sum,判断是否含有由 n 个不同数字相加得到 sum 的情况（leetcode 40 变种， 数字不得重复使用）
- 给定一个数组，一个期望值，找到数组中两个相加等于期望值

- 数组去重
- versions 是一个项目的版本号列表，因多人维护，不规则
  var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']
  要求从小到大排序，注意'1.45'比'1.5'大
  sorted=['1.5','1.45.0','3.3.3.3.3.3','6']

### CSS

- [CSS 三行省略](https://juejin.cn/post/6844903461209767944)
- [CSS3 新特性](https://www.nowcoder.com/questionTerminal/85d16107dc074d52a69f2e86f08a69b1)
- CSS 硬件加速 - GPU 线程中直接合成、显示：transform
- [setTimeout 动画与 CSS animation 区别 (PS:requestAnimationFrame)](https://developer.mozilla.org/zh-CN/docs/Web/Performance/CSS_JavaScript_animation_performance)
- [CSS 画出一个三角形](http://www.cssaaa.com/css3/84.html)
- display 的各个属性值
- [盒模型的两种计算方式(content-box、border-box)](https://juejin.cn/post/6844903505983963143#heading-26)
- [bfc 块级格式化上下文](https://juejin.cn/post/6844903495108132877#heading-9)
- [宽是高的一半的垂直居中，里面有字体也要垂直居中](./CSS/宽是高一半垂直居中.html)
- 水平垂直居中
- CSS 布局
  [双栏固定布局](https://github.com/zwwill/blog/issues/11)
  [上中下三栏布局](https://juejin.cn/post/6844903570219745288)
  屏幕占满和未占满的情况下，使 footer 固定在底部，尽量多种方法。

### 其他

- [原码，补码，反码](https://www.zhihu.com/question/20159860)

- webpack 性能优化

- 测试 单测、集成测试
- 自动化集成
- Docker 应用

- nodejs 的事件循环
- Process.nextTick，setImmediate 和 promise.then 的优先级
  Process.nextTick，promise, setImmediate 的优先级
- event 类 on once 等方法
- nodejs 相关的应用（答：开发命令行工具、web 服务，ssr，数据库操作等）
- express、koa、redis 等技术相关应用
- Nodejs express koa
- Koa 中间件机制及代码实现
- express koa 中间件原理
- express ctx 中间键代码实现
- node 网关

- 实现一个方法，参数是一个 generator 函数，执行结果是执行完所有 generator 中的 yield

- libUA

- react diff 算法，key 的作用，setData 的机制，事件合成
- react 新版本的特性
- React Fiber 原理以及为什么 componentWillRecievedProps 会废弃
- react 生命周期
- react diff 算法
- react 合成事件原理
- React Hook 原理
- react fiber 原理
- react vdom 和 vue 的区别
- React Hook, Fiber Reconciler ,新的生命周期
- getDerivedStateFromPros 为什么是 Static
- redux 异步
- redux 异步中间件原理
- promise 封装 setstate
- redux 基本组成和设计单向数据流
