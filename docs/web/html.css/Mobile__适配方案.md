---
title: 移动端 - 适配方案
date: 2018-04-29 11:30:22
publish: true
categories:
  - 前端开发
tags:
---

## 百分比适配

高度百分比不太好计算，不建议单独使用，配合其他方案使用

```html
<div class="box1"></div>
<div class="box2"></div>
<div class="box3"></div>
<div class="box4"></div>
```
```css
div {
  width: 25%;
  height: 100px;
  float: left
}
.box1 { background: red }
.box2 { background: blue }
.box3 { background: green }
.box4 { background: yellow }
```
![这里写图片描述](https://wildye.cn/static/images/blog/edc03f42/01.gif)

## viewport 适配
通过JS计算比例，动态生成 `meta viewport` 标签

- `initial-scale` 初始比例
- `minimum-scale` 最小缩放比例
- `maximum-scale` 最大缩放比例
```javascript
(function(){

  // 获取当前屏幕宽度
  var w = window.screen.width;
  
  // 目标尺寸宽度，设计图宽度以 640px 为例
  var targetW = 640;
  
  // 缩放比例：当前尺寸/目标尺寸
  var scale = w/targetW;

  // 创建 meta 标签，动态设置视口
  var meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content = "user-scalable=no,initial-scale=" + scale + ",minimum-scale=" + scale + ",maximum-scale=" + scale;

  // 插入 head 中
  document.head.appendChild(meta);
})()
```
## rem 适配 
- 设计图选取，以 `640px` 设计宽度为例
- 使用 `rem` 单位，根据根节点 `html` 的字体大小进行计算
```javascript
// 获取 document 元素
var html = document.documentElement;

// 获取设备宽度
var deviceWidth = html.getBoundingClientRect().width;

// 设置根元素 html 字体大小，这里按 640/100 的比例计算
html.style.fontSize = deviceWidth/6.4 + 'px';
```
- 现在，css实际尺寸与图纸尺寸比例为 `1:100`，`1rem = 100px`
```css
div {
  // 设计图尺寸为100px，则css设置为 1rem
  width: 1rem;
}
```
