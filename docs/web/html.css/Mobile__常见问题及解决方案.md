---
title: 移动端 - 常见问题及解决方案
date: 2018-04-29 10:15:51
publish: true
categories:
  - 前端开发
tags:
---

## 视口（viewport）
- `<meta name="viewport" content="...">`，参数之间 `,` 分隔
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0" />
```
- `layout viewport` 是网页的所有内容，他可以全部或者部分展示给用户
- `visual viewport` 就是当前显示给用户内容的窗口，你可以拖动或者放大缩小网页。

| 属性名| 备注 |
| :- | :- |
| width | 设置layout viewport 的宽度，为一个正整数，`width-device` 表示设备宽度 |
| user-scalable | 是否允许用户进行缩放，不允许为 `no` / `0` ，允许为 `yes` / `1`
| initial-scale | 设置页面的初始缩放倍数，`1.0` 表示不缩放 |
| minimum-scale | 允许用户的最小缩放倍数，`0.8` 表示最小缩放0.8倍 |
| maximum-scale | 允许用户的最大缩放倍数，`2.0` 表示最大缩放2倍 |
| height | 设置layout viewport 的高度，这个属性对我们并不重要，很少使用 |

## 屏幕旋转（orientation）
仅 `QQ` 和 `UC` 支持直接设置
- QQ 浏览器
```html
<meta name="X5-orientation" content="portrait|landscape">

<!-- 强制竖屏 -->
<meta name="X5-orientation" content="portrait">

<!-- 强制横屏 -->
<meta name="X5-orientation" content="landscape">
```

- UC 浏览器
```html
<meta name="screen-orientation" content="portrait|landscape">

<!-- 强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- 强制横屏 -->
<meta name="screen-orientation" content="landscape">
```

- 判断状态（竖屏 or 横屏）
```javascript
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);

function hengshuping() {
  if (window.orientation == 90 || window.orientation == -90) {
    // 横屏
  } else {
    // 竖屏
  }
}
```

## 全屏显示（full）
即遮盖浏览器头部信息栏和底部菜单栏
- QQ
```html
<meta name="X5-fullscreen" content="true" />
```

- UC
```html
<meta name="full-screen" content="yes" />
```

## 识别电话号码和邮箱
- 禁止识别电话号码和邮箱
```
<meta name="format-detection" content="telephone=no, email=no" />
```

- 拨打电话和发邮件
```
href="tel:"
href="mailto:"
```

## 默认样式
```less
// 移动端一般没有宋体和微软雅黑，中文字体无需设置
body {
  font-family: Helvetica;
}

// 清除点击阴影
a, input, button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

// 清除按钮圆角
input, button {
  -webkit-appearance: none;
  border-radius: 0
}

// 禁止文字缩放
body *{
  -webkit-text-size-adjust: 100%;
}

// 选中文字设置
p {
  -webkit-user-select: none;
}

// 在一段文字我们没有设置高度时，在webkit内核下，文字的大小被浏览器放大了
/* 给文字设置最大高度 */
p {
  max-height: 36px;
}
```

## IOS 下 body的overflow问题
横向拖动
```html
<html>
  <head></head>
  <body>
    <div id = "wrap">
      <header>头部</header>
      <section>页面内容</section>
    </div>
  </body>
</html>
```
```css
html {
  height: 100%;
  overflow: hidden;
}
body {
  position: relative;
  margin: 0;
  height: 100%;
  overflow: auto;
}
#wrap {
  height: 100%;
  overflow: auto;
}
header {
  position: absolute;
  width: 200%;
  height: 40px;
  color: #FFF;
  background: rgba(0, 0, 0, .5);
}
section {
  padding-top: 40px;
}
```

## 安卓端背景图片模糊问题
- 用同等比例的图片在PC端很清晰，手机端由于devicePixelRatio的原因，图片显示模糊
- 使用 2 倍的背景图来代替 img 标签
```css
.logo {
  display:inline-block;
  width:100%;
  height:50px;
  background: url('../images/logo.png') no-repeat center center;
  -webkit-background-size: 50px 50px;
  background-size: 50px 50px;
}
```

## 图片加载
- 图片加载慢，一般用canvas方法加载
- JS 动态加载
```javascript
function render(count) {

  var padding = 2,
    winWidth = $(window).width(),
    imgWidth = Math.floor((winWidth-padding*3)/4),
    tmpl ='';
    
  var imgs = document.createDocumentFragment();
  
  for (var i = 1; i <= count; i++) {
    var container = document.createElement('canvas');
    container.style.width = container.style.height = imgWidth;
    container.style.paddingLeft = container.style.paddingTop = p;
    
      tmpl += '<li style="width:' + imgWidth 
        + 'px;height:' + imgWidth 
        + 'px;padding-left:' + p 
        + 'px;padding-top:' + padding 
        + 'px;"><canvas id="cvs_' + i + '"></canvas></li>';
    var img = new Image();
    img.index = i;
    img.onload = function(){
      var cvs = $('#cvs_'+this.index)[0].getContext('2d');
      cvs.width = this.width;
      cvs.height = this.height;
      cvs.drawImage(this,0,0);
    }
    img.src = 'img/'+i+'.jpg';
  }
}

// 加载 5 张图片
render(5);
```
