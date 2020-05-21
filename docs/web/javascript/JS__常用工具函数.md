---
title: JavaScript 常用工具函数
date: 2018-04-20 12:44:12
publish: true
sticky: 2
categories:
  - 前端开发
tags: 原生JS
---

## 浏览器操作相关browser工具函数

### 返回当前url
``` javascript
export const currentURL = () => window.location.href;
```

### 获取url参数（第一种）
``` javascript
/**
 * @param {*} name
 * @param {*} origin
 */

export function getUrlParam(name, origin = null) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = null;
  if (origin === null) {
    r = window.location.search.substr(1).match(reg);
  } else {
    r = origin.substr(1).match(reg);
  }
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}
```

### 获取url参数（第二种）
``` javascript
/**
 * @param {*} name
 * @param {*} origin
 */
export function getUrlParams(name, origin = null) {
  const url = location.href;
  const pram = url.split('?')[1];
  const keyValue = pram.split('&');
  const obj = {};
  for (let i = 0; i < keyValue.length; i++) {
    const [key, value] = keyValue[i].split('=');
    obj[key] = value;
  }
  return obj[name];
}
```

### 修改url中的参数
``` javascript
/**
 * @param { string } paramName
 * @param { string } replaceWith
 */
export function replaceParamVal(paramName,replaceWith) {
  const oUrl = location.href.toString();
  const re = eval(`/('${paramName}'=)([^&]*)/gi`);
  location.href = oUrl.replace(`${re,paramName}=${replaceWith}`);
  return location.href;
}
```

### 删除url中指定的参数
``` javascript
/**
 * @param { string } name
 */
export function funcUrlDel(name){
  const { origin, pathname, search } = location;
  const baseUrl = `${origin}${pathname}?`;
  const query = search.substr(1);
  if (query.indexOf(name) > -1) {
    const obj = {};
    const arr = query.split('&');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('=');
        obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    const url = `${baseUrl}${JSON.stringify(obj).replace(/[\"\{\}]/g,'').replace(/\:/g,'=').replace(/\,/g,'&')}`;
    return url
  }
}
```

### 获取窗口可视范围的高度
``` javascript
export function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight)
      ? document.body.clientHeight 
      : document.documentElement.clientHeight;
  }
  return clientHeight;
}
```

### 获取窗口可视范围宽度
``` javascript
export function getPageViewWidth() {
  const { compatMode, body, documentElement } = document;
  const { clientWidth } = compatMode === 'BackCompat' ? body : documentElement;
  return clientWidth;
}
```

### 获取窗口宽度
``` javascript
export function getPageWidth() {
  const { compatMode, body, documentElement } = document;
  const { clientWidth } = compatMode === 'BackCompat' ? body : documentElement;
  return Math.max(documentElement.scrollWidth, body.scrollWidth, clientWidth);
}
```

### 获取窗口尺寸
``` javascript
export function getViewportOffset() {
  if (window.innerWidth) {
    return { w: window.innerWidth, h: window.innerHeight };
  } else {
    // ie8及其以下
    return document.compatMode === 'BackCompat'
      // 怪异模式
      ? { w: document.body.clientWidth, h: document.body.clientHeight }
      // 标准模式
      : { w: document.documentElement.clientWidth, h: document.documentElement.clientHeight };
  }
}
```

### 获取滚动条距顶部高度
``` javascript
export function getPageScrollTop() {
  let { documentElement, body } = document;
  return documentElement.scrollTop || body.scrollTop;
}
```

### 获取滚动条距左边的高度
``` javascript
export function getPageScrollLeft() {
  let { documentElement, body } = document;
  return documentElement.scrollLeft || body.scrollLeft;
}
```

### 开启全屏
``` javascript
/**
 * @param {*} element
 */
export function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}
```

### 关闭全屏
``` javascript
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
```

### 返回当前滚动条位置
``` javascript
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});
```

### 滚动到指定元素区域
``` javascript
export const smoothScroll = element =>{
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
};
```

### 平滑滚动到页面顶部
``` javascript
export const scrollToTop = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrollTop - scrollTop / 8);
  }
};
```

### http跳转https
``` javascript
export const httpsRedirect = () => {
  if (location.protocol !== 'https:') {
    location.replace('https://' + location.href.split('//')[1]);
  }
};
```

### 检查页面底部是否可见
``` javascript
export const bottomVisible = () =>{
  const { clientHeight, scrollHeight, clientHeight } = document.documentElement;
  return clientHeight + window.scrollY >= (scrollHeight || clientHeight);
};
```

### 打开一个窗口
``` javascript
/**
 * @param { string } url
 * @param { string } windowName
 * @param { number } width
 * @param { number } height
 */
export function openWindow(url, windowName, width, height) {
  const x = parseInt(screen.width / 2.0) - width / 2.0;
  const y = parseInt(screen.height / 2.0) - height / 2.0;
  const isMSIE = navigator.appName === 'Microsoft Internet Explorer';
  if (isMSIE) {
    const params = `resizable=1,location=no,scrollbars=no,width=${width},height=${height},left=${x},top=${y}`;
    window.open(url, windowName, params);
  } else {
    const params = `${url}ZyiisPopup,resizable=no,scrollbars=no,dialog=yes,modal=yes,width=${width},height=${height},top=${y},left=${x}`
    const win = window.open(params);
    eval('try { win.resizeTo(width, height); } catch(e) { }');
    win.focus();
  }
}
```

### 自适应页面（rem）
``` javascript
/**
 * @param { number } width
 */
export function AutoResponse(width = 750) {
  const target = document.documentElement;
  target.clientWidth >= 600
    ? (target.style.fontSize = '80px')
    : (target.style.fontSize = `${target.clientWidth / width * 100}px`);
}
```

## 日期工具date工具函数

## 浏览器存储相关storage工具函数

## 更多的工具函数

### 获取数据类型，返回字符串
>有传参则判断传参类型，没有则判断调用对象类型，返回字符串
```javascript
// 检测是否已存在此方法
Object.prototype.getType = Object.prototype.getType || function() {
  const self = this;
  // 兼容检测 null、undefined 类型
  if (arguments.length == 1) self = arguments[0];
  return Object.prototype.toString.call(self).slice(8, -1).toLowerCase();
};

// 使用示例
console.log(getType(null));          // -> null
console.log(getType(undefined));     // -> undefined
console.log('abc'.getType());        // -> string
console.log(123 .getType());         // -> number
console.log(true.getType());         // -> boolean
console.log([].getType());           // -> array
console.log({}.getType());           // -> object
console.log(new Date().getType());   // -> date
console.log(new Error().getType());  // -> error
console.log(/^[A-Z]/.getType());     // -> regexp
console.log(function(){}.getType()); // -> function
```

### 异步加载JS
```javascript
/**
* [loadScript 异步加载JS]
* @param  {[String]}   url    [js文件路径]
* @param  {Function} callback [回调函数]
* @return {[type]}            [element]
*/
function loadScript (url, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState){
    // IE
    script.onreadystatechange = function() {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    // Others
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  document.body.appendChild(script);
}();

// 使用示例
loadScript('one.js', function() {
  // code...
})
```

### DOM事件兼容解决方案
```javascript
const eventHelper = {
  // 绑定事件
  addEvent: function(el, type, handler) {
    if (el.addEventListener) {
      el.addEventListener(type, handler, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, handler);
    } else {
      el['on' + type] = handler;
    }
  },
  // 解绑事件
  removeEvent: function(el, type, handler) {
    if (el.removeEventListener) {
      el.removeEventListener(type, handler, false);
    } else if (el.detachEvent) {
      el.detachEvent('on' + type, handler);
    } else {
      el['on' + type] = null;
    }
  },
  // 获取事件对象
  getEvent: function(e) {
    return e ? event : window.event;
  },
  // 获取事件类型
  getType: function(e) {
    return e.type
  },
  // 获取事件元素
  getElement: function(el) {
    return el.target || el.srcElement;
  },
  // 阻止事件默认行为
  preventDefault: function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  },
  // 阻止事件冒泡
  stopPropagation: function(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  },
}
```
```html
<a href = 'login.html' id = 'btn'>login</a>
```

```javascript
// 使用示例
const login = document.getElementById('btn');
// 绑定事件
eventHelper.addEvent(login, 'click', function(e) {
  preventDefault(e);   // 阻止默认行为
  stopPropagation(e);  // 阻止冒泡
  getEvent(e);         // 获取事件对象
  getType(e);          // 获取事件类型
  getElement(e);       // 获取事件元素
});
// 解绑事件
eventHelper.removeEvent(login, 'click', function() {});
```

### 拷贝对象
```javascript    
// 检测是否以已存在
Object.prototype.deepClone = Object.prototype.deepClone || function(obj, proto){
  // 当为空值或不为对象时，直接返回
  if (obj == null || typeof obj !== 'object') return obj;
  let copy;

  // 根据第二个参数决定是否复制原型
  if(proto && typeof(proto) === 'boolean') {
    copy = Object.create(Object.getPrototypeOf(obj));
    console.log(copy);
  }

  // Date类型处理
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Object or Array
  if (obj instanceof Array || obj instanceof Object) {
    copy = (obj instanceof Array)?[]:{};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) copy[key] = deepClone(obj[key]);
    }
    return copy;
  }
  throw new Error('Type Error');
}

// 使用示例
const newObj = deepClone(oldObj);
```

### 鼠标滚轮事件处理
```javascript
function MouseWheelHandle (obj,handle){
  const info = navigator.userAgent;  // 获取浏览器信息
  const down = null;                 // 滚轮状态 true 下 false 上

  // Firefox
  if (info.indexOf("Firefox") !== -1) {
    obj.addEventListener('DOMMouseScroll', function(event) {
      var e = event || window.event;
      down = e.detail > 0 ? true : false;
      handle.call(obj, down, e);
    }, false);
  // Other
  } else {
    obj.onmousewheel = function(event){
      var e = event || window.event;
      down = e.detail > 0 ? true : false;
      handle.call(obj, down, e);
    }
  }
}
```

### 函数设置执行间隔（针对频繁触发的事件）
```javascript
/**
* [throttle 节流]
* @param  {Function} fn  [执行函数]
* @param  {[object]} obj [调用对象]
* @return {[type]}       [undefined]
*/
function throttle(fn, obj) { 
  clearTimeout(fn.t);
  fn.t = setTimeout(function(){
    fn.call(obj);
  }, 500);
}

// 使用示例
function handler() {
  // code...
}
window.onresize = function(){  
  throttle(handler, window); 
};  
```

### 随机生成
- 颜色
```javascript
function getColor(type) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  if (type) {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }
  return `rgb(${r},${g},${b})`;
}
```
- 数值
```javascript
function getRandom(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}
```

### 获取IE浏览器版本
```javascript
function IEVersion() {
  // 取得浏览器的userAgent字符串
  const userAgent = navigator.userAgent;
  // 判断是否IE<11浏览器
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  // 判断是否IE的Edge浏览器
  const isEdge = userAgent.indexOf('Edge') > -1 && !isIE;
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6; //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge';  //edge
  } else if (isIE11) {
    return 11; //IE11
  } else {
    return -1;  //不是ie浏览器
  }
}
```
