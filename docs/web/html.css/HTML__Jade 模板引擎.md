---
title: Jade 模板引擎
date: 2018-04-27 20:31:33
publish: true
categories:
  - 前端开发
tags:
  - 模板引擎
---

## 注意事项
- 使用空格来缩进(使用Tab键，容易出问题)
- 尽量使用 `p #{obj} #{obj}` 避免使用 `p=obj=obj`
- 关键词前面一律不加 `-` 如 each、while、else …
## 环境安装
### 实时编译
``` nodejs
// 全局安装模块
npm install -g jade

// -P（格式化） -w（实时监测）
jade -P -w index.jade
```
### Nodejs 中使用
``` javascript
const http = require('http');
const jade = require('jade');

const server = http.createServer();

server.on('request', (req, res)=>{

	var jadeStr = "a(href='one.html') 栏目one"

	// 编译，jade.compile()返回一个function，需要加上()让它执行
	let one = jade.compile(jadeStr, {pretty:true})();
	console.log(one); // => <a href="one.html">栏目one</a>
	
	// 渲染
	let two = jade.render(jadeStr);
	console.log(two); // => <a href="one.html">栏目one</a>
	
	// 读取文件渲染
	let three = jade.renderFile('./one.jade',{pretty:true});
	
	res.end(three)

})

server.listen(8080);
```
### Express 框架中使用
``` javascript
const express = require('express');
const app = express();

// 导入 jade 模块
const jade = require('jade');

// 更改默认视图模板目录，默认为 views 目录
app.set('views','view')

// 直接到 views 文件夹中去读取
app.set('view engine','jade')

app.get('/', (req, res) => {
	// 渲染模板（views/home.jade）
	res.render('home')
})

```
## 语法 API
- Jade是变体的HTML，使用 `缩进` 来描述元素的层级从属关系
### doctype html
``` jade
// html 4.1
doctype html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"

// html 5，!!!5 写法已废弃
doctype html
```
### 注释
- 注释，使用 `//`，如需注释多行，请缩进注释内容即可
- 不编译注释 ，使用`//-`
- 条件注释（if IE）
``` jade
<!--[if IE 8]>
<script src='html5shiv.min.js'></script>
<script src='respond.min.js'></script>
<![endif]-->
```
### id & class
- 添加 `id`、`class` 属性
``` jade
div.className
div.idName
```
- 添加多个 `id` & `class`
``` jade
div.className#idName
```
- 省略标签，仅适用于 `div` 元素
``` jade
#idName.className
```
### 标签属性
- 设置标签属性，当属性值是 `undefined ` 或者 `null ` 时不会被加上
``` jade
a(href='index.html', title='home')

// 写成多行，可省略逗号
a(
	href='index.html'
	title='home')
```
``` html
<a href="index.html" title="home"></a>
```
- 支持 `:`
``` jade
rss(xmlns:atom="atom")
```
- 链接
``` jade
var user = { id: 12, name: 'hannah' } // 测试对象

// 字符串拼接
a(href='/user/' + user.id)= user.name

// jade修改方式
a(href='/user/#{user.id}')= user.name
```
- 布尔属性，默认为true，若设值为 `false`，则不会加入该属性。
``` jade
input(type='checkbox', checked=false)
```
``` html
<input type="checkbox">
```
- 设置不转码编译，使用 `!=`
``` jade
div='I am <b>very well</b>.' 
```
``` html
<div>I am&lt;b&gt;very well&lt;/b&gt;.</div>
```
``` jade
div!='I am <b>very well</b>.' 
```
``` html
<div>I am <b>very well</b>.</div>
```
- 能自动识别自闭合元素，也可使用 `/` 指明
``` jade
img(src='one.jpg')/
```
``` html
<img src='one.jpg' />
```
- 设置元素行内样式 style
``` jade
ul(style={list-style:none,margin:'5px 10px'})
```
- class 属性，可传递一个数组
``` jade
div(class=['red', 'blue'])
```
### 标签文本
- 设置标签文本（单行）
``` jade
p hannah
```
``` html
<p>hannah</p>
```
- 设置标签文本（多行）
``` jade
p.
	hannah
	logan is wolverine
	
script.
	var obj = {
		name: 'hannah',
		age: 18
	};
	console.log(obj);
```
``` html
<p>
	hannah
	logan is wolverine
</p>

<script>
	var obj = {
		name: 'hannah',
		age: 18
	};
	console.log(obj);
</script>
```
- 设置标签文本（多段文本）
``` jade
p
	|hannah is
	|Shy girl
```
``` html
<p>hannah is Shy girl</p>
```
### 内联 & 块展开
- Jade 支持以自然的方式定义标签嵌套
``` jade
ul
	li.first
		a(href='#') contA
	li
		a(href='#') contB
	li.last
		a(href='#') contC
```
- 块展开可以在一行内创建嵌套的标签，使用 `:` 标识子级
``` jade
ul
	li.first: a(href='#') contA
	li: a(href='#') contB
	li.last: a(href='#') contC
```
### Case 表达式
- 显示匹配项，与 switch 循环一样
``` jade
friends = 5
case friends
	when 0: p you have no friends
	when 1: p you have a friend
	default: p you have #{friends} friends
```
>参考引用：[Jade —— 源于 Node.js 的 HTML 模板引擎](https://segmentfault.com/a/1190000000357534)
