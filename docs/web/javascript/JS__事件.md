---
title: JavaScript DOM事件
date: 2018-03-22 14:19:08
publish: true
categories:
  - 前端开发
tags:
 - 原生JS
 - DOM
---

## 事件流 - 从页面中接受事件的顺序

- 事件冒泡
  即事件最开始由具体的元素（文档中嵌套层次最深的那个节点）接受，然后逐级向上传播至最不具体的那个节点（文档）
- 事件捕获
  与冒泡相反

## HTML事件处理
```html
<button id = 'btn' onclick = "conlose.log('HTML事件')">
```

## DOM0级事件处理
```javascript
el.onclick = function(){ conlose.log("DOM0级事件") };
el.onclick = null;
```

## DOM2级事件处理
```javascript
el.addEventListener('clink',fn)  //绑定事件
el.removeEventListener('click',fn)  //解绑事件
// IE支持的方法
el.attachEvent('onclick',fn)  //绑定事件
el.detachEvent('onclick',fn)  //解绑事件
```

## 获取事件类型
```javascript
event.type
```

## 获取事件目标
```javascript
event.target
event.srcElement // IE
```

## 阻止事件冒泡 `stopPropagation()`
```javascript
event.stopPropagation()

// IE 独有，设置true表示阻止冒泡，false不阻止
event.cabncelBubble = true
```

## 阻止默认行为 `preventDefault()`
```javascript
event.preventDefault()

// IE 独有，设置false表示阻止
event.returnValue = false
```

## 事件属性兼容
```javascript
//兼容 火狐   谷歌        IE9之前
var e = e || event || window.event;

//按键
var keycode = e.keyCode || e.which

```

## 定时器（异步非IO）
- 在指定时间后执行一次，time 单位为毫秒 ms
```javascript
setTimeout(function(){

}, time)
```
- 以指定时间为周期循环执行
```javascript
setInterval(function(){

}, time)
```

## IE事件处理及跨浏览器解决方案
```javascript
var eventUtil = {

  // 绑定事件
  addEvent: function(e, type, handler) {
    if (e.addEventListener) {
      e.addEventListener(type, handler, false);
    } else if (e.attachEvent) {
      e.attachEvent('on' + type,handler);
    } else {
      e['on' + type] = handler;
    }
  },

  // 解绑事件
  removeEvent: function(e, type, handler) {
    if (e.removeEventListener) {
      e.removeEventListener(type, handler, false);
    } else if (e.detachEvent) {
      e.detachEvent('on' + type,handler);
    } else {
      e['on' + type] = null;
    }
  },

  // 获取事件对象
  getEvent: function(event) {
    return e ? event : window.event;
  },

  // 获取事件类型
  getType: function(e){
    return e.type
  },

  // 获取事件元素
  getElement: function(e){
    return e.target || e.srcElement;
  },

  // 取消事件默认行为
  preventDefault: function(e){
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  },

  // 取消事件冒泡
  stopPropagation: function(e) {
    if (e.stopPropagation){
      e.stopPropagation();
    }else{
      e.cancelBubble = true;
    }
  }
}
```

## 常见事件类型

| 事件类型 | 事件说明 | 
| - | - |
| click | 单击 | 
| dblclick| 双击 | 
| contextmenu| 右击 | 
| mouseover | 鼠标移入 | 
| mousemove | 鼠标移动 | 
| mouseout | 鼠标移除 | 
| focus| 获取焦点 | 
| input | 表单元素发生了输入，比change更频繁 | 
| change | 表单内容或状态发生改变，完成改变后触发 |
| blur | 失去焦点 |
| keydown | 键盘按键被按下 |
| keyup | 按键弹起 |
| keypress | 按下、只响应字符 |

## 键码对应表
| keyCode | 对应键位 | 
| - | - |
| 37 | 左 | 
| 38 | 上 | 
| 39 | 右 | 
| 40 | 下 | 
| 13 | Enter 回车 | 
| 32 | space 空格 | 
| 27 | Esc | 
| 65 ~ 90 | A ~ Z | 
| 48 ~ 57 | 0 ~ 9 |
| 96 ~ 105 | 小键盘 0 ~ 9 |
| 9 | Tab |
| 20 | CapsLock 大小写切换 |
| 16 | Shift |
| 17 | Ctrl |
| 18 | Alt |
