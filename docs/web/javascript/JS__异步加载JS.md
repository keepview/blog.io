---
title: JavaScript异步加载JS
date: 2018-03-26 14:36:41
publish: true
categories:
  - 前端开发
tags:
---

## script 标签属性
defer *HTML4中定义，兼容 IE 4+ 和 firebox 3.5 +*  
async *HTML5中引入*
```html
<!-- 等待页面(DOM)文档解析完成后执行 -->
<script defer src="one.js" onload="callBack()"></script>

<!-- 加载完成后自动执行，代码不能写在标签中 -->
<script async src="one.js" onload="callBack()"></script>
```

## XMLHttpRequest 脚本注入
```javascript
var xhr = new XMLHttpRequest();
xhr.open("get","one.js",true);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
    if(xhr.status >= 200 && xhr.status < 300 || xhr.status ==304){
      var script = document.createElement("script");
      script.type = "text/javascript"
      script.text = xhr.responseText;
      document.body.appendchild(script);
    }
  }
}
```

## 动态创建 script 元素
readystatechange //readyState的状态改变时触发

readystate 状态：
| 状态码| 状态 | 备注 | 
|-| - | - | 
| 0 | "uninitilized" | 未初始化 | 
| 1 | "loading" | 开始下载 | 
| 2 | "loaded" | 下载完成 | 
| 3 | "interactive" | 解析/数据完成下载但尚不可用 | 
| 4 | "completed" | 所有数据已准备就绪 | 
```javascript
function loadScript(url,callback){
  var script = document.createElement("script");
  script.type = "text/javascript";
  if(script.readyState){ // IE
    script.onreadystatechange = function(){
      if(script.readyState == "loaded" || script.readyState == "completed"){
        callback();
      }
    }
  }else{ //Other
    script.onload = function(){
      callback();
    };
  }
  script.src = url;
  document.head.appengChild(script);
}

loadScript("one.js",function(){
  Application.init();
})
```


## LazyLoad
- 下载地址 https://github.com/rgrove/lazyload/
- 文件大小：2.66 KB 
- loadScript( )函数的增强版
```javascript
<script type="text/javascript" src="lazyLoad-min.js"></script>
<script type="text/javascript">
  LazyLoad.js("one.js",function(){
    Application.init();
  });

  // 加载多个
  LazyLoad.js(["one.js","two.js"],function(){
    Application.init();
  });
</script>
```
## LABjs
- 下载地址 https://www.drupal.org/project/labjs
- 文件大小：5.37 KB 
- 适用于按指定顺序加载，有依赖关系，支持链式操作*
- $LAB.script()：方法用来定义需要下载的JavaScript文件*
- $LAB.wait()：用来指定文件下载并执行完毕后所调用的函数*
- `.setOptions(AlwaysPreserveOrder:false)` 默认false，若为true，则每个script()后都会默认设置一个wait()，使得链上的脚本一个个执行。
```javascript
<script type="text/javascript" src="lab.js"></script>
<script type="text/javascript">
  $LAB.setOptions({AlwaysPreserveOrder:true})
    .script("one.js").wait() // 尽管是并行下载，但one在two之前执行
    .script("two.js")
    .wait(function(){
      Application.init();	
    })
</script>
```
## sea.js
- 下载地址 https://github.com/seajs/examples
- 适用于模块化开发 加载
```html
<script type="text/javascript" src="sea.js"></script>

<script type="text/javascript">

  // 配置 seajs
  seajs.config({
    base: "../sea-modules/",
    alias: {
      "jquery": "jquery/jquery/1.10.1/jquery.js"
    }
  })
  
  // 加载入口模块
  seajs.use("../static/hello/src/main")

  // 所有模块都通过 define 来定义
  define(function(require, exports, module) {

    // 通过 require 引入依赖
    var $ = require('jquery');
    var Spinning = require('./spinning');

    // 通过 exports 对外提供接口
    exports.doSomething = ...;

    // 或者通过 module.exports 提供整个接口
    module.exports = ...;

  });
</script>
```
