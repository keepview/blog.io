---
title: jQuery对应JavaScript书写
date: 2018-03-21 22:57:03
publish: true
categories:
  - 前端开发
tags: jQuery
---

## DOM 属性
- jQuery
```javascript
el.html()
el.text() // 取得所有匹配元素的内容
el.val()  // 获得匹配元素的当前值
```
- JavaScript
```javascript
el.innerHTML()
el.innerText()   // 老版本火狐不兼容
el.textContent() // 老版本IE不兼容
```

## DOM 查询
- 根据 标签 获取元素，返回 DOM 元素集合
```javascript
// jQuery
$("div")

// JavaScript
document.getElementsByTagName("div"); // IE4 +

// 返回的是元素集合，有length属性，需配合索引使用
document.getElementsByTagName("div")[0].style.color = "blue";
```

- 根据 `name` ，返回元素集合
```javascript
// jQuery
$("div[name = 'value']")

// JavaScript
document.getElementsByName("name")
```

- 根据 `id` 获取元素
```javascript
// jQuery
$("## idName")

// JavaScript
document.getElementById("idName")
```

- 根据 `class`  ，返回元素集合
```javascript
// jQuery
$(".className")

// JavaScript
document.getElementsByClassName("className") // IE8 +
```

- 使用选择器 (selectors)， 返回匹配的元素
```javascript
// jQuery
$("div")
$("## id")
$(".class")

// JavaScript, 非实时
document.querySelector("## id")       // 返回匹配第一个元素
document.querySelectorAll(".class") // 返回匹配的元素集合
```
## DOM 更改
- 尾部追加DOM元素（parent 父元素 ，child 子元素）
```javascript
// jQuery
$("parent").append($("child"));

// JavaScript
var elem = document.getElementById("parent")
var p = document.createElement("p");             // 创建元素节点
var content = document.createTextNode("content") // 创建文本节点
p.appendChild();                                 // 填充内容
elem.appendChild(p);                             // 将元素追加到尾部
```
- 头部追加DOM元素
```javascript
// jQuery
$("parent").prepend($("child"));

// JavaScript, 剪切操作
appendChild()
parent.insertBefore(a, b)  // 在 b 之前插入 a
```
- 删除DOM元素
```javascript
// jQuery
$("child").remove();

// JavaScript
child.remove()         // 彻底删除
el.removeChild(child); // 删除 child 元素, 返回被删元素, 暂存对象
```
- 替换DOM元素
```javascript
// jQuery
$("p").replaceWith("<p>Paragraph</p>")

// JavaScript
elem.replaceChild(newElement, oldElement)
```
## 操作 Class
- 添加类
```javascript
// jQuery
$("selector").addClass("className");

// JavaScript
elem.classList.add("className");
```
- 删除类
```javascript1
// jQuery
$("selector").removeClass("className");

// JavaScript
elem.classList.remove("className");
```
- 检测类是否存在
```javascript
// jQuery
$("selector").hasClass("classNames")

// JavaScript
elem.classList.contains("classNames")
```

## 添加样式或属性
- 添加CSS样式
```javascript
// jQuery
$("selector").css("color","## FFF"); // 设置单个属性值
$("selector").css({                // 设置多个属性值
	"color":"## FFF",
	"padding-left":"10px"
});

// JavaScript, 样式属性使用驼峰名
elem.style.color = "## FFF";
elem.style.paddingLeft = "10px";
```
- 获取CSS值
```javascript
// jQuery
$("selector").css("color");  // 获取属性值

// JavaScript
el.style.color;  //返回RGB值，只能获取内嵌CSS属性中的值
```
- 添加属性
```javascript
// jQuery
$("selector").attr("id","main");                      // 设置单个属性值
$("selector").attr({"id":"main","name":"main",...});  // 设置多个属性值
```
- 测试用例，每次点击按钮，a 元素的 word + 1
```html
<a world = "1"></a>
<button>add one</button>
```
```javascript
$("selector").attr("attributeName",function(index, oldValue){
	return newValue;
});

$("button").click(function(){
	$("a").attr("world", function(index, val){
		return ~~val+1;
	});
})

// JavaScript（attributeName 属性名,attributeValue 属性值）
elem.setAttribute("attributeName","attributeValue");
```
- 获取元素节点属性
```javascript
// jQuery
$("selector").attr("attributeName");

// JavaScript
el.getAttribute("attributeName");
```
- 移除元素节点属性
```javascript
// jQuery
$("selector").removeAttr("attributeName");

// JavaScript
elem.removeAttribute("attributename");
```
##  Event 事件
- 事件绑定
```javascript
// jQuery
$("selector").on("click", function() {

});

// JavaScript
elem.addEventListener("click", function() {

});
```
- 解绑事件
```javascript
// jQuery
$("selector").on("click", function() {

});

// JavaScript
el.removeEventListener("click", function() {

});
```
## 显示隐藏
- jQuery
```javascript
$("selector").show();  // 显示
$("selector").hide();  // 隐藏
```
- JavaScript
```javascript
el.style.display = '';  	// 显示
el.style.display = 'none';  // 隐藏
```
## 页面加载初始化
- jQuery
```javascript
// 方式一
$(function(){

})

// 方式二
$(document).ready(function(){

})

// $() 默认为 $(document)
$().ready(function(){

})

// 方式三 - 闭包
(function($){
	
})(jQuery)
```
- JavaScript
```javascript
window.onload = function(){

}
```
