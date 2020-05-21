---
title: JavaScript 字符串
date: 2018-04-20 21:41:49
publish: true
categories:
  - 前端开发
tags: 原生JS
---

## 合并字符串 concat()
将多个字符串合并，返回新字符串
```javascript
str1.concat([str2[, str3 [, ...[, strN]]]])
```

## 索引查询 charAt()
返回指定索引位置处的字符
```javascript
str.charAt(index)
```

## 字符查询 indexOf()、lastIndexOf()
返回 strObj 对象内第一次出现子字符 str 的索引，若无则返回 -1
```javascript
// 从左往右
strObj.indexOf(str[, startIndex])
// 从右往左
strObj.lastIndexOf(str[, startIndex])
```

## 正则匹配 match()
返回正则匹配的结果(数组)，若无则返回 -1
```javascript
strObj.match(RegEx)
```

## 截取字符串 substr()、substring()
返回一个截取的子字符串
```javascript
// 从指定位置开始且指定长度
strObj.substr(startIndex[,length])
// 较小参数作为起始，较大参数作为结束
strObj.substring(start[,end])
```

## 字符串替换 replace()
返回根据正则替换后的字符串的复制
```javascript
strObj.replace(RegEx, newStr)
```

## 搜索字符串 search()
返回正则匹配字符索引值，若无则返回 -1
```javascript
strObj.search(RegEx)
```

## 字符串截取 slice()
与 substring 相似
```javascript
strObj.slice(start[, end])
// start  end 无效
// start < 0 ? length + start
// end < 0 ? length + end
```

## 分割 split()
将字符串分割存入数组并返回，默认分隔符为空格，可指定字符或正则
```javascript
// limit 限制返回元素个数
strObj.split([separator[, limit]])
```

## 转换大小写 toLowerCase()、toUpperCase()
```javascript
// 转小写
strObj.toLowerCase()
// 转大写
strObj.toUpperCase()
```

## 转化 valueOf()
```javascript
strObj.valueOf()

// 数组转字符串，元素由 , 分隔
Arrar.valueOf()
// 返回时间戳，1970.1.1日午夜开始计
Date.valueOf()
```

## toString
```javascript
// radix 为数字N，则转化为 N 进制
strObj.toString([radio])
// 同 valueOf()
Arrar.toString()
// 转字符类型的 'true' 或 'false'
Boolean.toString()
```
