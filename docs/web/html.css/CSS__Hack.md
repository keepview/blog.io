---
title: CSS Hack
date: 2018-05-01 14:12:56
publish: true
categories:
  - 前端开发
tags:
  - hack
---

# CSS hack
## 渲染模式
`<meta http-equiv="x-ua-compatible" content="webkit|ie-comp|ie-stand">`

- webkit内核渲染
``` html
<meta http-equiv="x-ua-compatible" content="webkit">
```
- IE标准模式渲染
``` html
<meta http-equiv="x-ua-compatible" content="ie-stand">
```
- IE混杂 ( 怪异 ) 模式渲染
``` html
<meta http-equiv="x-ua-compatible" content="ie-comp">
```
- 指定 IE 版本
``` html
<!-- 以最新模式渲染 -->
<meta http-equiv="x-ua-compatible" content="IE=Edge">  

<!-- 遵循文档声明（`doctype`） -->
<meta http-equiv="x-ua-compatible" content="IE=EmulateIE9">  

<!-- 强制以指定模式渲染，忽略 doctype -->
<meta http-equiv="x-ua-compatible" content="IE=9">
```
- 兼容写法
``` html
<meta http-equiv="x-ua-compatible" content="IE=9;IE=8;IE=7;IE=Edge">
```
## 属性前缀（内部hack）

- `S` ，IE 标准模式 Standards mode
- `Q` ，IE 混杂（怪异）模式 Quirks mode

| hack | 语法 | IE6(S) |IE7(S)| IE8(S)|IE9(S)|IE10(S)|IE6(Q)|IE7(Q)|IE8(Q)|IE9(Q)|IE10(Q)|
|:-:|:----|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `*` | `*color:red` | √ | √ |  |  |  | √ | √ | √ | √ | √ |
| `+` | `+color:red` | √ | √ |  |  |  | √ | √ | √ | √ | √ |
| `-` | `-color:red` | √ |  |  |  |  | √ |  |  |  |  |
| `_` | `_color:red` | √ |  |  |  |  | √ | √ | √ | √ |  |
| `#` | `#color:red` | √ | √ |  |  |  | √ | √ | √ | √ | √ |
| `\0` | `color:red\0` |  |  | √ | √ | √ |  |  |  |  |  |
| `\9\0` | `color:red\9\0` |  |  |  | √ | √ |  |  |  |  |  |
| `!important` | `color:red!important` |  | √ | √ | √ | √ |  |  |  |  | √ |

说明：在标准模式中

- `-` 是 IE 6 专有的hack
- `\9` IE 6 / 7 / 8 / 9 / 10 生效
- `\0` IE 8 / 9 / 10 生效
- `\9\0` IE 9 / 10生效

## 选择器前缀（选择器hack）

- IE 6 `*html`
- IE 7 `*+html`
- IE 6 / 7 `@media screen\9 { }`
- IE 8 `@media \0screen { }`
- IE 6 / 7 / 8 `@media \0screen\, screen\9 { }`
- IE 8 / 9 / 10 `@media screen\0 { }`
- IE 9 / 10 `@media screen and (min-width: 0\0) { }`
- IE 10 `@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { }`

## 条件注释（HTML条件注释）

| gt | gte | lt | lte | ! |
|:---:|:---:|:---:|:---:|:---:|
| 大于 | 大于等于 | 小于 | 小于等于 | 非 |

仅 IE 生效
``` html
<!--[if IE]>
	<link rel = "stylesheet" href = "one.css">
<![endif]-->
```
仅 IE 6 生效
``` html
<!--[if IE 6]>   <![endif]-->
```
IE 6 及以上生效
``` html
<!--[if gte IE 6]>   <![endif]-->
```
非 IE8 生效
``` html
<!--[if ! IE 8]>   <![endif]-->
```
非 IE 浏览器生效
``` html
<!--[if ! IE]>   <![endif]-->
```

