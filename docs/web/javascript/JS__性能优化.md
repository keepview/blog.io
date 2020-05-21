---
title: JavaScript 性能优化
date: 2018-05-03 09:54:49
publish: true
categories:
  - 前端开发
tags:
---

## 资源合并

## 缓存

## CDN
使用 CDN 加载常用资源, 减轻服务器压力，速度快，并且可以缓存
- 百度静态资源公共库 http://cdn.code.baidu.com/
- cdnjs https://cdnjs.com/
- BootCDN https://www.bootcdn.cn
```html
<script src="https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
```
```javascript
window.jQuery || document.write('<script src="js/jquery.js">')
```

## 使用 SSR 后端渲染

## 懒加载
```html
<img id='img' src='min.png' lazy-src='max.png' />
```
```javascript
var img = document.getElementById('img');
img.src = img.getAttribute('lazy-src');
```

## 缓存 DOM 查询
```html
// 为缓存 DOM 查询
var i;
for(i = 0; i < document.getElementsByTagName('p').length; i++) {
  // code...
}

// 缓存了 DOM 查询
var pList = document.getElementByTagName('P')
var i;
for (i = 0; i < pList.length; i++) {
  // code...
}
```

## 合并 DOM 插入
```javascript
var listNode = document.getElementById('list')

// 插入 10 个 li 标签
var frag = document.createDocumentFragment();
var x, li;
for(x = 0; x < 10; x++) {
  li = document.createElement('li');
  li.innerHTML = 'List item' + x;
  frag.appendChild(li);
}
// 一次 DOM 插入
listNode.appendChild(frag)
```

## 事件节流
```javascript
var textarea = document.getElementById('text');
var timeoutId;
textarea.addEventListener('keyup', function() {
  if(timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutd = setTimeout(function() {
    // 触发 change 事件
  }, 500)
})
```
## 尽早操作
```javascript
window.addEventListener('load', function() {
  // 页面的全部资源加载完成后才会执行，包括图片、视频等...
})

document.addEventListener('DOMContentLoaded', function() {
  // DOM 渲染完即可执行，此时图片、视频还可能没有加载完
})
```
