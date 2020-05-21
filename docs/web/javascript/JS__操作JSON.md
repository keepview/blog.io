---
title: JavaScript 操作JSON
date: 2018-04-21 00:03:29
publish: true
categories:
  - 前端开发
tags:
 - 原生JS
 - JSON
password:
description:
---

## 概念
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式，采用完全独立于语言的文本格式，是理想的数据交换格式。同时，JSON是 JavaScript 原生格式，这意味着在 JavaScript 中处理 JSON数据不须要任何特殊的 API 或工具包。
## 基础结构
必须使用双引号`"`包含键值
```javascript
// 键值对的集合，值的有序列表
var JsonObj = {"name":"Hannah", "like":["看书", "电影", "晨跑"]}; 
```
## 数组
```javascript
var jsonArr = [
  {
    "name": "tom",
    "type": "cat"
  },
  {
    "name": "jack",
    "type": "mouse"
  }
]
```
## 对象
```javascript
var jsonObj = {
  "like": ["看书", "电影", "晨跑"],
  "book": ["数字城堡", "刻意练习", "老人与海"]
}
```
## JSON对象和JSON字符串的转换

## 字符串转对象
```javascript
var jsonObject= JSON.parse(jsonstr);
```
## 对象转字符串
```javascript
var jsonstr =JSON.stringify(jsonObject);
```
## 优雅的输出格式
JSON.stringify() 方法的可选参数space，可以指定缩进用的空白字符串，用于美化输出（pretty-print）space参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数没有提供（或者为null）将没有空格。
```javascript
// replacer 分隔符 space 缩进
JSON.stringify(value[, replacer [, space]])

var formatJsonStr=JSON.stringify(jsonObject,undefined, 2);
```
## JSON字符串的替换
工作经常遇到这样的字符串，如下：
![这里写图片描述](https://wildye.cn/static/images/blog/750b9fdf/01.jpg)
  需要经过替换后，才能从字符串转化成JSON对象。这里我们需要用JS实现replaceAll的功能， 将所有的 ' \\" ' 替换成  ' " ' .
代码如下,这里的gm是固定的，g表示global，m表示multiple：
```javascript
var jsonStr=jsonStr.replace(new RegExp('\\"',"gm"), '"' );
```
替换后的效果如下：
![这里写图片描述](https://wildye.cn/static/images/blog/750b9fdf/02.jpg)

## 遍历JSON对象和JSON数组
```javascript
// 遍历JSON对象
var packJson  = {
  "name":"Liza", 
  "password":"123"
};
for(var k in packJson ){  //遍历packJson 对象的每个key/value对,k为key
  alert(k + " " + packJson[k]);
}

// 遍历JSON数组
var packJson = [
  {
    "name":"Liza", 
    "password":"123"
  },
  {
    "name":"Mike", 
    "password":"456"
  }
];
for(var i in packJson){  //遍历packJson 数组时，i为索引
  alert(packJson[i].name + " " + packJson[i].password);
}
```
## 递归遍历
为了实现一些复杂功能常常需要递归遍历JSON对象，这里找出两个递归的例子

- 递归遍历JSON，遇到数组的时候，数组中有超过一个对象，删除第一个对象之后的所有对象
![这里写图片描述](https://wildye.cn/static/images/blog/750b9fdf/03.jpg)
```javascript
// 返回处理后的 json字符串 
function jsonParse(jsonObj) {  
  distinctJson(jsonObj);  
  var last=JSON.stringify(jsonObj, undefined, 2);  
  return last;  
}    
      
// 去掉 json中数组多余的项 
function distinctJson(obj) {  
  if(obj instanceof Array) {  
    if(obj.length > 1) { //数组中有超过一个对象，删除第一个对象之后的所有对象  
      obj.splice(1, (obj.length - 1));  
    }  
    distinctJson(obj[0]);  
  } else if (obj instanceof Object) {  
    for( var index in obj){  
      var jsonValue = obj[index];  
      distinctJson(jsonValue);  
    }  
  }  
} 
```
- 递归查找目标节点（节点id为targetId，有且只有一个），找到后把targetChildren赋值给节点的children
举个例子，原始JSON如下，查找的目标节点id为5
![这里写图片描述](https://wildye.cn/static/images/blog/750b9fdf/04.jpg)
targetChildren为
![这里写图片描述](https://wildye.cn/static/images/blog/750b9fdf/05.jpg)
期望最后处理的JSON结果为:
![这里写图片描述](https://wildye.cn/static/images/blog/750b9fdf/06.jpg)
```javascript
// 递归查找目标节点 
function findTarget(obj,targetId,targetChildren) {  
  if (obj.id==targetId) {  
    obj.children=targetChildren;  
    return true;  
    } else {  
    if(obj.children!=null){  
      for(var i=0; i<obj.children.length; i++){  
        var flag=findTarget(obj.children[i],targetId,targetChildren);  
        if(flag==true) return true;
      }  
    }  
  }  
    return false;  
}
```
> 引用：https://blog.csdn.net/xujie3/article/details/52954940
