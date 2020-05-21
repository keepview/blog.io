---
title: JavaScript 内置属性与方法
date: 2018-04-25 23:44:09
publish: true
categories:
  - 前端开发
tags: 原生JS
---

## 常用
```javascript
window.alert()
window.confirm()
window.prompt('str', 'value')

eval(codeString)

isNaN(numValue)

parseInt(numString[, radix])
parseFloat(numString)

escape(charString)    // 转码(Unicode)
unescape(charString)  // 解码
```
## 数组
```javascript
arrObj.join(separator)  // 转字符

arrObj.sort()           // 排序

arrObj.reverse()        // 反转

arrObj.length
```
## 日期
```javascript
dateObj.getTime()              // 返回系统时间

dateObj.getTimezoneOffset()    // 返回时差

dateObj.Year()                 // 1900~2000可简写为0~100

dateObj.Month()                // 返回 0 ~ 11 ，对应 1 ~ 12 月份

dateObj.Day()                  // 返回 0 ~ 6 ， 0：星期天

dateObj.Date()                 // 返回 1 ~ 31

dateObj.Hours()                // 小时

dateObj.Minutes()              // 分

dateObj.Seconds()              // 秒

dateObj.setTime(milliseconds)  // 设置时间戳，负值为1970年之前

dateObj.toGMTString()          // 返回日期(字符串格式)
dateObj.toUTCString()

dateObj.setYear(numYear)

dateObj.setMonth(numMonth[,dateVal])

dateObj.setDate(numDate)

dateObj.setHours(h[, m[, s[, ms]]])

dateObj.setMinutes(m[, s[, ms]])

dateObj.setSecounds(s[, ms])

Date.parse(dateVal)  // 返回时间戳
Date.UTC(year, month, day[, hours[, min[, sec[, ms]]]])
```
## 数学
```javascript
Math.ceil(number)        // 向上取整
Math.floor(number)       // 向下取整
Math.round(number[, N])  // 舍入，保留N位小数点

Math.random()            //生成0~1之间随机数
Math.abs()
Math.max()
Math.min()

Math.pow(base, N)        // 返回乘方(N次幂)
Math.sqrt(number)        // 平方根
Math.exp(number)         // 幂
Math.log(number)         // 自然对数
Math.atan2(y, x)         // 返回极坐标角度值

Math.sin(number)         // 正弦
Math.asin(number)        // 反正弦

Math.cos(number)         // 余弦
Math.acos(number)

Math.tan(number)         // 正切
Math.atan(number)
```
## 字符串
```javascript
strObj.charAt(index)                     // 返回指定索引位置处的字符
strObj.indexOf(subString[, startIndex])  // 返回 strObj 对象内第一次出现子字符 str 的索引，若无则返回 -1

strVariable.fontcolor(color)             // => <FONT COLOR="BLUE"></FONT>
strVariable.fontsize(intSize)            // => <FONT SIZE="BLUE"></FONT>

strVariable.toLowerCase()                // 转小写
strVariable.toUpperCase()                // 转大写

strVariable.anchor(anchorString)         // 产生一个链接点(anchor)以作超级链接用

strVariable.big()                        // => <BIG></BIG>

strVariable.blink()                      // => <BLINK></BLINK>

strVariable.bold()                       // => <B></B>

strVariable.fixed()                      // => <TT></TT>

strVariable.italice()                    // => <I></I>

strVariable.small()                      // => <SMALL></SMALL>

strVariable.strike()                     // => <STRIKE></STRIKE>

strVariable.sub()                        // => <SUB></SUB>
```
