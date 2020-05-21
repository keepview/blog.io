---
title: Vue 指令
date: 2018-05-02 19:17:39
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

## v-text 输出文本
- 输出html代码
```html
<div id = "app">
  <div v-text = "mes"></div>
  <!-- => hannah -->
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    mes: 'Hannah'
  }
})
```
## v-html 输出HTML
- 输出html代码
```html
<div id="app">
  <div v-html="message"></div>
  <!-- => <h1>Hannah</h1> -->
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    message: '<h1>Hannah</h1>'
  }
})
```
## v-bind 标签属性
- 设置标签属性
```html
<div v-bing:id = 'main' v-bind:class = 'red'></div>

<!-- 简写 -->
<div :id = 'main' :class = 'red'></div>

<!-- 动态切换 class -->
<div :class='{red:1}'></div>
<div :class='{blue:true}'></div>
```
## v-on 事件绑定
- 绑定事件
```html
<button v-on:click = 'show'></button>.
<button v-on:mouseover = 'hide'></button>

<!-- 简写 -->
<button @click = 'show'></button>
<button @mouseover = 'hide'></button>
```
- 阻止默认行为
```html
<a @click.prevent href="https://csdn.net">CSDN</a>
<a @click.prevent="onSubmit" href="https://csdn.net">CSDN</a>
```
## v-if 显示隐藏
```html
<p v-if=true> show </p>
<p v-if="true"> show </p>
<p v-if=false> hide </p>
```
- `v-show` 和 `v-hide`  控制元素的 display
```html
<p v-show=true> show </p>
<p v-hide=true> hide </p>
```
- `v-else-if` 和 `v-else`
```html
<p v-if="state === '0'"> A </p> 
<p v-else-if="state === '1'"> B </p>
<p v-else> C </p> 
```
## v-model 双向数据绑定
```html
<div id="app">
    <input v-model="mes">
    <h1>{{ mes }}</h1>
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  }
})
```
## v-for 遍历
- `v-for = (val, key, index)` 形参位置固定，分别为 值、键名、索引
```html
<ul>
  <li v-for = "val in obj"> {{ val }} </li>
  <li v-for = "(val, key) in obj"> {{ key + val }} </li>
  <li v-for = "(val, key, index) in obj"></li>
</ul>
```
## v-pre 原始输出
```html
<p v-pre>{{message}}</p>
<!-- => {{message}} -->
```
## v-cloak 闪烁
- 当DOM树构建好完成页面的渲染后才执行，且其须要与css一起使用
```html
<p v-cloak>{{message}}</p>
```
## v-once
- 只有当DOM树第一次渲染时起作用，只渲染元素和组件一次
- 元素/组件及其所有的子节点将被视为静态内容并跳过
```html
<!-- 单个元素 -->
<span v-once>This will never change: {{ msg }}</span>

<!-- 有子元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>

<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>

<!-- v-for 指令-->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```

## 全局指令定义
```javascript
// 定义指令
Vue.directive('directiveName', {

  // 钩子函数
  
  bind: function (el) {
    // 初始化
  },
  
  inserted: function (el) {
    // 插入元素时调用
  },
  
  update: function (el) {
    // VNode 更新时调用
    },
    
    componentUpdated: function (el) {
      // VNode 全部更新后调用
    },
    
    unbind: function (el) {
      // 解绑时调用
    }
})
```
## 局部指令定义
```html
new Vue({
  el: '#main',
  directives: {
    // 定义指令
    directiveName: {
      // 钩子函数
      bind: function (el) { 
      },
      inserted: function (el) {
      },
      update: function (el) {
        },
        componentUpdated: function (el) {
        },
        unbind: function (el) {
        }
    }
  }
})
```
