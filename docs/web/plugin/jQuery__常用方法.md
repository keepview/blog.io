---
title: jQuery 常用方法
date: 2018-05-06 17:21:11
publish: true
categories:
  - 前端开发
tags: jQuery
---

## 链式调用
`jQuery` 所有对象的方法返回的都是对象本身，即 `this` 指向调用它的对象
```javascript
$("li").closest("ul").text()
```

## 解除 `$` 符占用
与其他库共存，`$ === jQuery`，使用 `jQuery` 代替 `$`

`jQuery.noConflict()`，解除 `$` 使用权，优先给其他库使用，调用此方法后 `$` 不再生效

## 转换jQuery对象
原生 javascript DOM 对象不能使用 jQuery 的方法，需转换

- DOM 对象转 jQuery 对象
使用 $() 将 DOM 对象包装起来
```javascript
var span = document.getElementsByTagName(span)[0];

$(span)
```
- jQuery 对象转 DOM 对象
使用 jQuery 的 get(index) 方法
```javascript
var span = $('span').get(0)
```

## 加载方式
![这里写图片描述](https://wildye.cn/static/images/blog/8373a53/01.jpg)

原生加载
```javascript
window.onload = function() {
  // Load加载完成(DOM + 图片)执行
}
```

`$().ready()`
```javascript
$().ready(function() {
  // DOMContentLoaded加载完成执行
})

$(document).ready(function(){
  // 等同于 $().ready()
})

$(function(){
  // 等同于 $().ready()
});
```

推荐写法，闭包
```javascript
(function($){
  // 避免全局变量污染
})(jQuery)
```

## 获取对象内容

文本内容
```javascript
$("#id").text();      // 取值
$(".class").text(""); // 赋值
```

html内容(含标签元素)
```javascript
$("elem").html();   // 取值
$("elem").html(""); // 赋值
```

属性 `value` 值
```javascript
$("elem").val();   // 取值
$("elem").val(""); // 赋值
```

## 属性设置
```javascript
// 获取 img 标签 src 属性值
$('img').attr('src') 

// 设置 img 标签 alt 属性值
$('img').attr('alt', 'this is image') 
```
## 显示隐藏

显示
```javascript
$("elem").show();
$("elem").slideDown(); // 滑入
$("elem").fadeIn();    // 淡入
```

隐藏
```javascript
$("elem").hide();
$("elem").slideUp(); // 滑出
$("elem").fadeOut(); // 淡出
```

切换
```javascript
$("elem").toggle();
$("elem").slideToggle();
$("elem").fadeToggle();
```

## 事件绑定/移除

`on()`  可以做事件委托，委托给父元素完成
```javascript
$("elem").on('click', function() {
  // 绑定事件
});

$("ul").on('click', 'li', function() {
  // 利用事件委托给动态元素绑定事件
});
```

`bind()` 绑定多个不同事件类型，但不能为动态元素绑定事件
```javascript
$("elem").bind('mouseover mouseout', function() {
  // 绑定多个事件
})

$("elem").bind({
  click: function() {
    // 单击事件
  },
  mouseover: function() {
    // 鼠标移入事件
  },
  mouseout: function() {
    // 鼠标移出事件
  }	
})
```

`one()` 绑定一个一次性的事件处理函数
```javascript
$("elem").one(type,[data],fn)
```

`off()` 移除一个或多个事件
```javascript
$("elem").off(events,[selector],[fn])
```

## 样式操作

添加样式  `addClass()`
```javascript
$("elem").addClass(class | function(index, class));

$("elem").addClass("red blue")
$("elem").addClass("red", function() {
  return 'col-md-' + $(this).index();
})
```

移除样式  `removeClass()`
```javascript
$("elem").removeClass(class | function(index, class))
```

切换样式  `toggleClass()`
```javascript
$("elem").toggleClass(class | function(index, class, switch)[, switch])
```

检测是否含有样式  `hasClass()`
```javascript
$("elem").hasClass(class)
```

设置 css 属性  `css()`
```javascript
$("elem").css(name,value);

// 获取属性值
$("elem").css("color");

// 设置属性
$("elem").css("color", "blue");

// 设置多个属性
$("elem").css({
  "color": "blue",
  "backgroound": "white"
});
```

## 查找与遍历

将一组元素转换成其他数组（不论是否是元素数组）
```javascript
$("elem").map(callback);
```

匹配查找元素 `find()` 、 `filter()` 
```javascript
// 在子元素中匹配，返回的是子元素
$("elem").find(expr)
$("p").find("span") === $("p span")

// 操作当前元素集，删除不匹配的元素，得到一个新的集合
$("elem").filter()
// 返回破坏性修改之前的选择 end()
```

获取第N个元素
```javascript
//  index：从 0 开始计算
// -index：从最后一个元素开始倒数，从 1 开始计算
$("elem").eq(index) 
```

获取子元素
```javascript
$("elem").children();
```

获取祖先元素
```javascript
$("elem").parent()
```

获取父元素
```javascript
$("elem").parents()
```

从匹配元素集合中删除元素
```javascript
$("elem").not()
```

将元素添加到匹配元素的集合中
```javascript
$("elem").add()
```

将匹配元素集合缩减为指定范围的子集
```javascript
$("elem").slice()
```

获得匹配元素集合中所有元素的同辈元素
```javascript
$("elem").siblings()
```

获取当前元素之前的一个 `prev()` / 所有 `prevAll()` 元素
```javascript
$("elem").prev()
$("elem").prevAll()
```

获取当前元素之后的一个 `next()` / 所有 `nextAll()` 元素
```javascript
$("elem").next()
$("elem").nextAll()
```

## 节点操作

把所有匹配的元素用其它元素包裹起来
```javascript
// 将 span 标签包含到 a 标签中
$("span").wrap("<a class='wrap'></a>");
```
```html
<a class='wrap'><span></span></a>
```

移除元素

| 表达式 | 自身是否被移除 | 绑定的事件及数据是否被移除 | 
| - | :-: | :- | 
| `$("elem").empty()`  | √ | × | 
| `$("elem").remove()` | √ | √ (无参数时)，有参数时要根据参数所涉及的范围 | 
| `$("elem").detach()` | × | √ (无参数时)，有参数时要根据参数所涉及的范围| 

## Ajax
载入远程 HTML 文件代码并插入至 DOM 中
```javascript
$("elem").load(url, [data], [callback])
```

通过 XMLHttpRequest对象， 发起异步请求加载远程数据

- 参数  
`url`：请求url地址  
`type`：请求方式 POST / GET  
`data`：发送到服务端的数据  
`dataType`：预期服务器返回的数据类型  
`header`：设置请求头

- 回调  
`beforeSend`：发送请求之前调用，并且传入一个`XMLHttpRequest`作为参数  
`dataFilter`：请求成功之后调用，传入返回的数据以及"dataType"参数的值，返回传递给success  
`complete`：当请求完成之后调用这个函数，无论成功或失败。  
`success`：当请求之后调用。传入返回后的数据，以及包含成功代码的字符串  
`error`：在请求出错时调用。传入XMLHttpRequest对象

```javascript
$.ajax({
  url: "localhost:8080/test/",
  type: "POST",
  dataType: "json",
  data: {
    "id": 5,
    "sex": 1
  },
  beforeSend: function(xhr) {
    xhr.setRequestHeader('Content-Type', 'text/html;charset=utf8')
  },
  dataFilter: function(data, type) {
    return data
  },
  success: function(data) {
  },
  error: function(err) {
  }
})
```

配合 ES6中的 `Promise` 异步处理对象，执行后续操作

```javascript
var promise = new Promise(function(resolve, reject){
  $.ajax({
    url: "path",
    type: "GET",
    sussess: function(data) {
      resolve(data)
    },
    error: function(error) {
      reject(error)
    }
  })
})

promise.then(function(data){
  // success code...
},function(error){
  // error code...
})
```
- 简写  
`$.get(url, [data], [callback], [type])`  
`$.post(url, [data], [callback], [type])`  
`$.getJSON(url, [data], [callback])`  
`$.getScript(url, [callback])`

## 序列化
```html
<form>
  <input type="text" name="name" value="hannah" />
  <input type="text" name="age"  value="18" />
</form>
```
```javascript
var str = $("form").serialize());
console.log(str)  // => name=hannah&age=18
```
