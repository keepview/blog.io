---
title: JavaScript 预编译/预解析
date: 2018-03-26 20:28:35
publish: true
categories:
  - 前端开发
tags: 原生JS
---

```javascript
var name = "ande";
var age = 18;
function fn(argument){
  console.log(name); // undefaned
  var name = "lilei";
  var age = 9;
}
fn()

// 生成 GO(global object) 全局对象
window
  name = undefaned;
  age = undefaned;
  // 生成 AO(active object) 活动对象
  function(){
    name = undefaned;
    age = undefaned;
  }
```
预编译的步骤：

1. 先分析参数，形参作为属性名，实参作为属性值
2. 分析var声明，变量名作为属性名，值为undefaned，遇同名不做改变
3. 分析函数声明，函数名为属性名，函数体为属性值，遇同名，则覆盖
若变量名与函数名同名，则保留函数，删除变量
