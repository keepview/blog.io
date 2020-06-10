---
title: JavaScript 封装功能函数
date: 2020-06-5 12:44:12
publish: true
sticky: 1
categories:
  - 前端开发
tags: 
  - 原生JS
---

## 浏览器操作相关功能函数

### 复制内容到剪贴板（无插件，兼容所有浏览器）
``` javascript
/**
 * 复制内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
function copyToClip(content, message) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
    if (message == null) {
        alert("复制成功");
    } else{
        alert(message);
    }
}
```
``` html
<button οnclick="copyToClip('内容')"> Copy </button>
```


### 下载文本/图片/视频且不跳转新页面
``` javascript
ajax(url, callback, options) {
    window.URL = window.URL || window.webkitURL;
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    if (options.responseType) {
        xhr.responseType = options.responseType;
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr);
        }
    };
    xhr.send();
},
downloadAjax() {
    let innerurl = this.url;// 文件地址
    var name = this.url.replace(/(.*\/)*([^.]+).*/ig, '$2');
    this.ajax(innerurl, function (xhr) {
        let filename = name + '.' + innerurl.replace(/(.*\.)/, '');
        let content = xhr.response;
        let a = document.createElement('a');
        let blob = new Blob([xhr.response]);
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }, {
        responseType: 'blob'
    });
},
download() {
    if (//是url) {
        this.downloadAjax();
    }
    if (//是下载接口) {
        // 调用接口
        // 携带下载请求参数
        config: {
            download: true
        }
    }
}
```


