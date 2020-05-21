---
title: JavaScript 类型检查
date: 2018-04-20 22:40:08
publish: true
categories:
  - 前端开发
tags: 原生JS
---

@[toc]
## 检测方法
```javascript
// 返回一个字符串，来表示数据的类型
typeof()

// 运算符用来检测构造函数是否存在与检测对象的原型链上，返回布尔
instanceof

// 精确判断对象的类型，使用call指向(this)检测对象，String和Array构造重写了toString()方法
Object.prototype.toString.call()
```

## 封装检测方法
```javascript
// 封装 toString 方法
if (!Object.prototype.getType) {
  Object.prototype.getType = function() {
    var me = this;
    if(arguments.length == 1) me = arguments[0];
    var type = Object.prototype.toString.call(me);
    return type.slice(8, -1).toLowerCase();
  }
}
```
## 返回值览表

| 类型| 字面量 | typeof() | Object.prototype.toString.call() | 
| - |  - | - | - |
| 字符串 | 'hope' | string | [object String] |
| 数字 | 123 | number | [object Number] |
| 布尔 | true false | boolean | [object Boolean] |
| 空值 | null | object | [object Null] |
| 未定义 | undefined | undefined | [object Undefined] |
| 函数 | function(){} | object | [object Function] |
| 数组 | [] | object | [object Array] |
| 对象 | {} | object | [object Object] |
| 日期 | new Date | object | [object Date] |
| 正则 | /^[A-Z]$/.test() | object | [object RegExp] |
| 错误 | new Error | object | [object Error] |
