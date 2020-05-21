---
title: LESS 学习总结
date: 2018-04-22 15:20:14
publish: true
categories:
  - 前端开发
tags: LESS
---

## 简介
- LESS属于 CSS 预处理语言，无法像CSS直接被浏览器识别，需编译
- 编译器只起编译作用，使用上仍然引入生成的.css文件
- 编译环境
1. 浏览器端  [less.js](http://www.bootcdn.cn/less.js/) 
```html
  <link rel="stylesheet/less" type="text/css" href="styles.less">
  <script src="less.js" type="text/javascript"></script>
```
2. Node.js 服务端
```
npm install -g less
```
```javascript
var less = require('less')
less.render('master.less', (e,css) => { console.log(css) })
```
3. 桌面客户端
[Koala](http://koala-app.com/index-zh.html) 
[Sublime Text 支持 CSS预处理语言 LESS](https://blog.csdn.net/wildye/article/details/79117689)
```
npm install -g less-plugin-clean-css`
```


## 编译语法
```less
/* 会被编译至CSS */
// 不会编译到CSS

// 作用域-由本地逐级向上查询

// 导入，可省略后缀，不编译css文件类型
@import "lib.less";

// 字符串插值
@path: "http://assets.fnord.com";
background-image: url("@{path}/images/bg.png");

// 避免编译，加上 ~
filter: ~"ms:alwaysHasItsOwnSyntax.For.Stuff()";

// 可使用 JavaScript表达式与环境
@var: `"hello".toUpperCase() + '!'`;
@height: `document.body.clientHeight`;
```

## 变量
`@`作为标识符号，`：`号作为赋值符号；完全的常量，只能定义一次。
```less
@md: 992px;
@base-color: #F8F8F8;

.container {
  width: @md;
  background: @base-color;
}
```
## 混合
混合可以将一个定义好的class A轻松的引入到另一个class B中，
从而简单实现class B继承class A中的所有属性
```less
.box-sizing(@box: border-box) {
  box-sizing: @box;
  -webkit-box-sizing: @box;
  -moz-box-sizing: @box;
}

.container {
  .box-sizing(); // 若无参数可省略()
}

.border(@size, @line, @color){
  border:@arguments; // @arguments 变量,指代传参
}
```
## 嵌套
可以在一个选择器中嵌套另一个选择器来实现继承
```less
ul {
  list-style: none;
  li {
    display: inline-block;
    a {
      padding: .3em .8em;
    }
  }
}
```
## 模式匹配
```less
// 根据不同的值而表现各异
.mixin (dark, @color) {
  color: darken(@color, 10%);
}
.mixin (light, @color) {
  color: lighten(@color, 10%);
}

// @_ 任意值都会被匹配到
.mixin (@_, @color) {
  display: block;
}
```
## 导引表达式
```less
// 明度 lightness 大于 50% 会被匹配
.mixin (@color) when (lightness(@color) >= 50%) { }

// 小于 50% 会被匹配
.mixin (@color) when (lightness(@color) < 50%) { }

// 除 true 外皆为假
.mixin(10); // flase

// 逻辑与 条件使用 , 分隔或 and关键字
.mixin (@a) when (@a > 10), (@a < -10) { }
.mixin (@a) when (@a > 10) and (@a < -10) { }

// 可不传参
.mixin (@a) when (@media = mobile) { }

// 对参数进行比较运算
.max (@a, @b) when (@a > @b) { width: @a }

// 使用is*方法，基于值的类型进行匹配
.mixin (@a, @b: 0) when (isnumber(@b)) { }
```

## 运算
运算提供了加，减，乘，除操作；能够分辨出颜色和单位
```less
@base: 5%;
@filler: @base * 2;
@other: @base + @filler;

color: #888 / 4;
background-color: @base-color + #111;
height: 100% / 2 + @filler;
border: (@width * 2) solid black;
```
## 函数 - Type 检测类型
```less
// 值类型
iscolor();      // 是否为颜色
isnumber();     // 是否为数值
isstring();     // 是否为字符串
iskeyword();    // 是否为keyword
isurl();        // 是否为url(./one.jpg)

// 单位
ispixel(); // px
ispercentage(); // %
isem(); // em
```
## 函数 - Color 颜色
```less
// + 亮度
lighten(@color, 10%);
// - 亮度
darken(@color, 10%); 

// + 饱和度
saturate(@color, 10%); 
// - 饱和度
desaturate(@color, 10%);

// + 透明度
fadein(@color, 10%);
// - 透明度
fadeout(@color, 10%); 
// 指定透明度
fade(@color, 50%)

// 旋转色调角度
spin(@color, 10);
spin(@color, -10);

// 混合颜色
mix(@color1, @color2);

// 灰度(黑白)，移除饱和度 
greyscale(@color) ;
```
## 函数 - Math 运算
```less
// 向上取整
ceil(2.4);   // => 3
// 向下取整
floor(2.6);  // => 2
// 舍入,保留1位小数点
round(1.67, 1); // => 1.7

// 转百分比
percentage(0.5); // => 50%
```
>参考手册：http://less.bootcss.com/functions/
>函数手册：http://www.bootcss.com/p/lesscss/
>书写规范：https://blog.csdn.net/sinat_34056695/article/details/76135760
