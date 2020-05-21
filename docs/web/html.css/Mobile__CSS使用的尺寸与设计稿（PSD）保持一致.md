---
title: 移动端 - CSS使用的尺寸与设计稿（PSD）保持一致
date: 2018-04-12 09:22:31
publish: true
categories:
  - 前端开发
tags:
  - CSS
---

# 像素概念

- **物理像素 ( physical pixel )**
物理分辨率就是硬件固有的分辨率，是屏幕上最小的物理显示单元

- **设备无关像素 ( 逻辑像素 )**
逻辑分辨率是通过算法达到的，实际显示(用户所见)的分辨率

# CSS中使用的尺寸与设计稿(PSD)保持一致

>###方案一：
- **原理**
将页面宽度固定为屏幕宽度，通过设置根元素 html 的 font-size 与使用 rem 来实现尺寸与设计稿一致

先拿设计稿竖着的横向分辨率除以100得到body元素的宽度：
如果设计稿基于iphone4/5，横向分辨率为640，body的width为640 / 100 = 6.4rem
``` javascript
// 获取设备宽度
var deviceWidth = document.documentElement.clientWidth;

// html的font-size始终等于横向分辨率/body元素宽
if(deviceWidth > 640) deviceWidth = 640;

// 设置html的font-size = 设备宽度 ÷ (设计稿宽度 ÷ 参考像素)
document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
```
CSS尺寸 = PSD尺寸/100


>引用参考
>[移动前端自适应适配布局解决方案和比较](http://caibaojian.com/mobile-responsive-example.html)
>[移动端web页面知识小结之像素、物理像素、逻辑像素](https://blog.csdn.net/aiolos1111/article/details/51880223)
