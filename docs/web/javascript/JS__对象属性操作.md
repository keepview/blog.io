---
title: JavaScript 对象属性操作
date: 2018-04-26 07:56:43
publish: true
categories:
  - 前端开发
tags: 原生JS
---

## 数据属性（数据描述符）

- `Configurable` 表示能否通过delete删除此属性，能否修改属性的特性，或能否修改把属性修改为访问器属性，如果直接使用字面量定义对象，默认值为true
- `Enumerable` 表示该属性是否可枚举，即是否通过for-in循环或Object.keys()返回属性，如果直接使用字面量定义对象，默认值为true
- `Writable` 能否修改属性的值，如果直接使用字面量定义对象，默认值为true
- `Value` 该属性对应的值，默认为undefined

## 访问器属性（存取描述符）

- `Configurable`  和数据属性的 `Configurable` 一样
- `Enumerable`  和数据属性的 `Enumerable` 一样
- `Get`
- `Set`

## Object.defineProperty()
- 直接在一个对象上定义或修改单个属性， 并返回这个对象。
- 若不指定`configurable`、`writable`、`enumerable `，默认为 false
- 若不指定`value`、`get`、`set`，默认为 undefined
- 参数：obj（目标对象）、prop（属性名）、descriptor（描述符）

```javascript
// 语法
Object.defineProperty(obj, prop, descriptor)

var obj = new Object();
Object.defineProperty(obj, 'name', {
    configurable: false, // 能否通过 delete 删除该属性
    writable: true,      // 能否修改属性值
    enumerable: true,    // 是否可枚举
    value: 'hannah'      // 属性对应的值
})

console.log(obj.name) // => hannah
```
## Object.defineProperties()
- 与 `defineProperty` 不同的是可操作多个属性
```javascript
// 语法
Object.defineProperties(obj, props)

var obj = new Object();
Object.defineProperties(obj, {
    name: {
        configurable: false, // 能否通过 delete 删除该属性
        writable: true,      // 能否修改属性值
        enumerable: true,    // 是否可枚举
        value: 'hannah'      // 属性对应的值
    },
    age: {
        configurable: true,
        value: 18
    }
})

console.log(obj.name, obj.age) // hannah, 18
```
## Object.getOwnPropertyDescriptor()
```javascript
// 语法
Object.getOwnPropertyDescriptor(obj)

var person = {
  name: 'hannah',
  age: 18
}
var name = Object.getOwnPropertyDescriptor(person, 'name');
console.log(name)
```
- 输出：
![这里写图片描述](https://wildye.cn/static/images/blog/b068a1d1/01.jpg)
## Object. getOwnPropertyDescriptor`s`()
```javascript
// 语法
Object.getOwnPropertyDescriptors(obj)

var person = {
  name: 'hannah',
  age: 18
}
var name = Object.getOwnPropertyDescriptors(person);
console.log(name)
```
![这里写图片描述](https://wildye.cn/static/images/blog/b068a1d1/02.jpg)

>参考
>[js中的Object.defineProperty()和defineProperties()](https://segmentfault.com/a/1190000011294519#articleHeader22)
