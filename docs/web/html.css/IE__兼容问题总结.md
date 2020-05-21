---
title: IE兼容问题总结
date: 2018-03-22 17:19:39
publish: true
categories:
  - 前端开发
tags:
  - IE
---

## IE10 new Date() 传参不兼容问题
``` javascript
// IE10 报错、Chrome 通过
new Date('2020-02-06');

// IE10 通过、Chrome 通过
new Date('2020/02/06');

// 把-替换成/传入即可
const t = '2020-02-06'.replace('-', '/');
new Date(t);
```

## 获取滚动条位置
- `window.pageXOffset` 和 `window.pageYOffset` 在`IE8`及以下是不兼容的
- 当 `document.body.scrollLeft` 起作用时 `document.documentElement.scrollLeft` 失效，反之亦然
- `document.body.scrollTop` 正常调用失效，需封装
```javascript
// 兼容解决方案：
function getScrolloffset(){
  if(window.pageXOffset){
    return{
      x : window.pageXOffset,
      y : window.pageYOffset
    }
  }else{
    return{
      x : document.body.scrollLeft + document.documentElement.scrollLeft,
      y : document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}
```

## 获取视口（viewport）尺寸
`document.compatMode`：查看浏览器解析模式
```javascript
// CSS1Compat 标准模式
document.documentElement.clientWidth
document.documentElement.clientHeight

// BackCompat 混杂模式
document.body.clientWidth
document.body.clientHeight
```
```javascript
// 兼容解决方案：
function getViewport(){
  if (window.innerWidth) {
    return{
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  }else{
    if(document.compatMode == "BackCompat"){
      return{
        w: document.body.clientWidth,
        h: document.body.clientHeight
      }
    }else{
      return{
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    }
  }
}
```
## 获取元素位置 IE8及以下缺失属性宽/高属性
```javascript
el.getBoundingClientRect())                 // IE8及以下缺失 width 和 height 属性
console.log("Width:" + div.offsetWidth);;   // IE7以下不加边框尺寸
console.log("Height:" + div.offsetHeight);  // IE7以下不加边框尺寸
console.log("Left:" + div.offsetLeft);      // IE7及以上 OK
console.log("Top:" + div.offsetTop);        // IE7及以上 OK
```
`clientWidth`、`clientHeight`、`scrollWidth`、`scrollHeight`

尺寸（有滚动条） = `content + 3px`;

尺寸（无滚动条） = `content + padding * 2`;

## IE8 兼容 border-radius 属性方案
IE8及以下不支持 border-radius属性，如果要想在IE浏览器中实现圆角的效果

- 利用VML矢量可标记语言作为画笔绘出圆角  
下载：http://css3pie.com/download-latest-1.x

- 在 IE8及一下引入 PIE.js 文件
```html
<!--[if lte IE 8]>
	<script src="PIE.js"></script>
<![endif]-->
```
- less code
```less
input {
  border: 1px solid #000;
  .ie8-border-radius(10px);
}

// 解决IE8不支持圆角
.ie8-border-radius(@size: 5px) {
  position: relative;
  z-index: 2;
  -moz-border-radius: @size;
  -webkit-border-radius: @size;
  border-radius: @size;
  behavior: url(PIC.htc); // 相对于html文件路径
}
```
- IE 找 `PIC.htc` 文件是相对 html文件路径来找的
- 需要有定位属性 `position:relative` 和较高的层级 `z-index: 2`
