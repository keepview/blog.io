---
title: Vue-事件修饰符
date: 2018-05-07 11:04:01
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

## 事件修饰符

Vue 为 `v-on` / `@` 绑定事件提供了修饰符，通过 `.` 来调用修饰符

- `.stop`
阻止事件 **冒泡**，调用 `event.stopPropagation()` 
```html
<a @click.stop="fn()">click me</a>
```
- `.preven`
阻止 **默认** 行为，调用 `event.preventDefault()`  
```html
<a @click.prevent="fn()">click me</a>

<!-- 支持链式调用 -->
<a @click.stop.prevent="fn()">click me</a>
```
- `.capture`
在 **捕获** 阶段中监听事件([capture模式](https://segmentfault.com/q/1010000005875549/a-1020000005876367))，默认为 **冒泡** 阶段中监听事件
```html
<a @click.capture="fn()">click me</a>
```
- `.self` 
只有直接绑定在该元素上的事件才执行，跳过冒泡事件和捕获事件
```html
<a @click.self="fn()">click me</a>
```

## 按键事件
- `.{keyCode | keyAlias}`
只当事件是从特定键触发时才触发回调。  

  常用键别名: 
  `.enter`、`.tab`、`.delete`、`.esc`、`.space`、`.up`、`.down`、`.left`、`.right`
  
  自定义按键别名： 
  `Vue.config.keyCodes.home = 36`
```html
<!-- 键别名 -->
<input @keyup.enter="fn()">

<!-- 键代码，对应 keyCode -->
<input @keyup.13="fn()">
```

- `.native`
给 Vue 组件绑定原生事件

- `.once`
只触发一次回调。

- `.left`
(2.2.0) 只当点击 **鼠标左键** 时触发。

- `.right`
(2.2.0) 只当点击 **鼠标右键** 时触发。

- `.middle`
(2.2.0) 只当点击 **鼠标中键** 时触发。

- `.passive`
(2.3.0) 以 [{ passive: true } 模式](https://www.cnblogs.com/ziyunfei/p/5545439.html) 添加侦听器
