---
title: Plugin JS 粒子动画
date: 2018-05-19 10:16:44
publish: true
categories:
  - 前端开发
---

## canvas-nest.js
轻量，只有1.6 kb，

- 只能通过给`script`标签设置属性来进行配置
- 无法指定容器元素，默认覆盖整个页面

![这里写图片描述](https://wildye.cn/static/images/blog/a53845b1/01.gif)

- Github：https://github.com/hustcc/canvas-nest.js
- CodePen：https://codepen.io/wildye/pen/xjmjaj

配置参数
```html
<script color="0,0,255" opacity='0.7' zIndex="-2" count="99" src="https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js"></script>
```
```javascript
var canvasNext = document.createElement("script");

canvasNext.color = "0, 0, 0"; // 粒子颜色(RGB)
canvasNext.opacity = '0.5';   // 粒子透明度
canvasNext.zIndex = '-1';     // 画布层级
canvasNext.count = '150';     // 粒子数量
canvasNext.src = 'https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js';

document.body.appendChild(canvasNext)
```

## particle.js
原生 JavaScript 实现
![这里写图片描述](https://wildye.cn/static/images/blog/a53845b1/02.gif)

- 官网：https://www.awesomes.cn/repo/VincentGarreau/particles-js
- Github：https://github.com/VincentGarreau/particles.js
- CodePen：https://codepen.io/wildye/pen/OZrJOo

安装导入
```javascript
// npm
npm install particles.js

// bower
bower install particles.js --save
```
语法：`particlesJS(element, options, callback)`
  - `element`：目标容器元素，默认使用 ID 选择器，无需前缀 `#`
  - `options`：参数配置，JSON对象

```html
<!-- 目标容器元素 -->
<div id="container"></div>

<!-- 引入插件 -->
<script src="particles.min.js"></script>

<!-- 插件配置调用 -->
<script>
particlesJS("contarner", {}, function(){
  console.log("callback");
})
</script>
```

配置参数 - 枚举项
- 粒子的颜色 `particles.color.value:`
```javascript
"#ff0000"                 // HEX
{ r: 155, g: 33, b: 74 }  // RGB
{ h: 360, s: 55, l: 24 }  // HSL
["#F45552", "#50C6FB"]    // 数组, 多参数传递
"random"                  // 随机
```

- 粒子的形状 `particles.shape.type`
```javascript
"circle"            // 圆形
"edge"              // 正方形
"triangle"          // 等边三角形
"polygon"           // 多边形，边数受 polygon.nb_sides 影响
"star"              // 星形，边数受 polygon.nb_sides 影响
"image"             // 自定义粒子，通过图片
["circle", "edge"]  // 数组, 多参数传递
```

- 粒子移动方向 `particles.move.direction`
```javascript
"none"  // 默认
"left"
"right"
"top"
"top-left"
"top-right"
"bottom"
"bottom-left"
"bottom-right"
```

- 鼠标悬停模式 `interactivity.events.onhover.mode`
```javascript
"grab"              // 连接临近的
"bubble"            // 气泡、放大效果
"repulse"           // 击退、驱散效果
["grab", "bubble"]  // 数组, 多参数传递
```

- 鼠标单击模式 `interactivity.events.onclick.mode`
```javascript
"push"               // 添加连接节点
"remove"             // 移除连接节点
"bubble"             // 气泡、放大效果
"repulse"            // 击退、驱散效果
["push", "repulse"]  // 数组, 多参数传递
```

配置参数 JSON格式
```javascript
particlesJS("contarner", {
  "particles": {
    "number": {
      "value": 100,              // 固定粒子数量
      "density": {
        "enable": true,          // 启用粒子密度
        "value_area": 800        // 固定粒子数量的区域大小
      }
    },
    "color": {
      "value": "#ffffff"         // 粒子颜色
    },
    "shape": {
      "type": "circle",          // 粒子形状
      "stroke": {
        "width": 0,              // 粒子边框宽度
        "color": "#FF13FE"       // 粒子边框颜色
      },
      "polygon": {
        "nb_sides": 5            // 多边形粒子的边数
      },
      "image": {
        "src": "image/par.svg",  // 自定义粒子(svg/png/gif/jpg)
        "width": 100,            // 自定义粒子图片宽度
        "height": 100            // 自定义粒子图片高度
      }
    },
    "opacity": {
      "value": 0.5,              // 不透明度 0 ~ 1
      "random": false,           // 随机不透明度
      "anim": {
        "enable": false,         // 开启过渡、渐变
        "speed": 1,              // 渐变动画速度
        "opacity_min": 0.1,      // 渐变动画不透明度
        "sync": false
      }
    },
    "size": {
      "value": 3,                // 粒子大小
      "random": true,            // 粒子大小随机
      "anim": {
        "enable": true,          // 开启粒子缩放动画
        "speed": 20,             // 动画速度
        "size_min": .5,          // 最小收缩粒子大小 0 ~ 1
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,            // 开启连接线
      "distance": 150,           // 连接线有效距离
      "color": "#ffffff",        // 连接线颜色
      "opacity": 0.4,            // 连接线不透明度 0 ~ 1
      "width": 1                 // 连接线的宽度
    },
    "move": {
      "enable": true,            // 开启粒子移动
      "speed": 1,                // 移动速度
      "direction": "none",       // 移动方向
      "random": false,           // 移动方向随机
      "straight": false,         // 直接移动
      "out_mode": "out",         // 边缘移出 out、反弹 bounce
      "bounce": false,           // 是否跳动移动
      "attract": {
      "enable": false,           // 粒子之间吸引
      "rotateX": 600,            // X 水平距离
      "rotateY": 1200            // Y 水平距离
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",       // 粒子之间互动检测
    "events": {
      "onhover": {
        "enable": true,          // 开启鼠标悬停
        "mode": "grab"           // 悬停模式
      },
      "onclick": {
        "enable": true,          // 开启鼠标单击
        "mode": "push"           // 单击模式
      },
      "resize": true             // 互动事件调整
    },
    "modes": {
      "grab": {
        "distance": 140,         // 粒子互动抓取距离
        "line_linked": {
          "opacity": 1           // 粒子互动抓取距离连线不透明度
        }
      },
      "bubble": {
        "distance": 400,         // 粒子抓取泡沫效果之间的距离
        "size": 40,              // 粒子抓取泡沫效果之间的大小
        "duration": 2,           // 粒子抓取泡沫效果之间的持续时间
        "opacity": 8,            // 不透明度
        "speed": 3               // 速度
      },
      "repulse": {
        "distance": 200,         // 击退效果距离
        "duration": 0.4          // 击退效果持续时间
      },
      "push": {
        "particles_nb": 4        // 粒子推出的数量
      },
      "remove": {
        "particles_nb": 2        // 粒子移除的数量
      }
    }
  },
  "retina_detect": true          // 视网膜检测，即无闪烁
});
```

## Particleground.js
`1.1.0` 版本之前依赖于 jQuery，`1.1.0` 及之后 原生JavaScript 实现  
相对 particle.js 新增一个 视差效果 (鼠标操作 & 手机陀螺仪)
![这里写图片描述](https://wildye.cn/static/images/blog/a53845b1/03.gif)

- Github：https://github.com/jnicol/particleground
- CodePen：https://codepen.io/wildye/pen/odJoPw

安装导入
```html
<!-- 目标容器元素 -->
<div id="container"></div>

<!-- 引入插件 -->
<script src="jquery.particleground.min.js"></script>

<!-- 插件配置调用 -->
<script>
var pg = particleground(document.getElementById('container'), {

});

$('#container').particleground({ // jQuery

});

// 插件方法调用
pg.pause();

$('#container').particlegound('pause'); // jQuery
</script>
```

配置参数
```javascript
var pg = particleground(document.getElementById('container'), {
  particleRadius: 7,        // 粒子大小
  dotColor: '#666666',      // 粒子颜色
  density: 10000,           // 粒子密度
  lineColor: '#666666',     // 连接线颜色
  lineWidth: 1,             // 连接线宽度
  curvedLines: false,       // 连接线设置为曲线
  minSpeedX: 0.1,           // X 轴 最低速
  maxSpeedX: 0.7,           // X 轴 最高速
  minSpeedY: 0.1,           // Y 轴 最低速
  maxSpeedY: 0.7,           // Y 轴 最高速
  directionX: 'center',     // 粒子运动方向 X 轴, center(边缘反弹)、left、right
  directionY: 'center',     // 粒子运动方向 Y 轴, center(边缘反弹)、up、down
  proximity: 100,           // 粒子互动抓取距离
  parallax: true,           // 开启视差效果
  parallaxMultiplier: 5,    // 视差乘数
  onInit: function() {},    // 初始化后执行
  onDestroy: function() {}  // 解绑元素后执行
});

pg.pause();    // 暂停粒子动画
pg.start();    // 开始粒子动画
pg.destroy();  // 解绑容器元素
```
