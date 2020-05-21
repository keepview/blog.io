---
title: Node.js 模块系统
date: 2018-05-19 19:09:41
publish: true
categories:
  - 后端开发
tags: Node.js
---

一个文件就是一个模块，在模块中 变量、函数、对象都属于该模块，对外是不可见的

## 模块加载 - 优先级

模块加载一次以后会形成缓存文件，再次加载读取的是缓存
![这里写图片描述](https://wildye.cn/static/images/blog/4eacaea8/01.jpg)

## 模块加载 - 导入与导出

导入模块
```javascript
const fs = require('fs')
```

导出模块，对外提供接口
```javascript
exports = moduleName
module.exports = moduleName

// 或者这样写
exports = module.exports = moduleName
```

`exports` 和 `module.exports` 的区别

- 两者的初始值都指向同一个空对象， `exports` => `{}` <= `module.exports`
- `exports` 是引用的 `module.exports` 的值
- `require()` 返回的是 `module.exports` 而不是 `exports`
- 让 `exports` 指向 `module.exports`：`exports = module.exports`

## 全局变量
- `__dirname`：文件路径
- `__filename`：文件全路径

## 原生模块 http.
```javascript
// 导入模块
const http = require('http');
const fs = require('fs');

// 创建 http 服务
const server = http.createServer();

// 监听请求事件
server.on('request',(request,response)=>{

  // 设置请求头
  response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

  // 排除多余响应
  if(request.url !== '/favicon.ico'){
  
    // 判断请求地址和请求方式
    if(request.url == '/' && request.method == 'GET'){
    
      // 响应内容
      response.end(fs.readFileSync('./home.html'));
      
    }else if(request.url == '/login' && request.method == 'GET'){
      response.end(fs.readFileSync('./login.html'));
    }else if(request.url == '/register' && request.method == 'GET'){
      response.end(fs.readFileSync('./register.html'));
    }

  }

})

// 设置端口
server.listen('80');
```

## 原生模块 fs.
`fs` 模块中的方法均有异步和同步版本，同步方法没有回调，直接返回结果
```javascript
const fs = require('fs');
```

- 读取文件  
语法：`fs.readFile(path[, options], callback)`
```javascript
// 同步
let data = fs.readFileSync('/etc/data.txt', 'utf8');

// 异步
fs.readFile('/etc/data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 读取多个文件
fs.readFile('./01.js','utf8',(err,data1)=>{
  console.log(data1);
}).then(fs.readFile('./01.js','utf8',(err,data2)=>{
  console.log(data2);
})).then(fs.readFile('./01.js','utf8',(err,data3)=>{
  console.log(data3);
}))
```

- 写入文件  
语法：`fs.writeFile(file, data[, options], callback)`
```javascript
fs.writeFile('target.txt', 'data.json', (err) => {
  if (err) throw err;
  console.log('文件已保存!');
});
```

- 创建目录  
语法：`fs.mkdir(path[, mode], callback)`

- 读取目录下文件集合，返回数组  
语法：`fs.readdir(path[, options], callback)`

- 文件状态 stats()
```javascript
// 是否为文件
stats.isFile()

// 是否为文件夹
stats.isDirectory()
```

- 接收数据  
`fs.createReadStream(path[, options])` 导入到服务  
`fs.createWriteStream(path[, options])` 服务进行存储
```javascript
// Demo: 传文件的时候显示百分比

'use strict';
const fs = require('fs');
const rs = fs.createReadStream('./abc.ASF');   // 读文件流
const ws = fs.createWriteStream('./abc1.ASF'); // 写文件流

var count = fs.statSync('./abc.ASF').size;     // 获取文件的大小

var data = 0;
rs.on('data',function(chunk){
  data += chunk.length;
  console.log('传输的进度为：' + parseInt(data/count*100) + '%');
  ws.write(chunk);
})
rs.on('end',function(){
  console.log('传输完成');
  ws.end();
})
```

## 原生模块 path.
处理文件路径

- 规范化路径，注意`../` 和 `./`  
语法：`path.normalize(path)`

- 连接路径  
语法：`path.join([path1][, path2][, ...])`

- 路径转对象  
语法：`path.parse(path)`

```javascript
path.parse('/home/user/dir/file.txt');

{ 
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
```

## 原生模块 url.

- 将 URL 地址解析成对象  
语法：`url.parse(urlPath[, boolean[, boolean]])`  
参数1：需要解析的 URL 地址  
参数2：默认false，若为true，则以对象形式存储 `query` 的值  
参数3：默认false，若为true，则参数1可省缺协议，以保证 `host` 的正常获取

```javascript
{
  protocol: 'https:',                                            // 底层协议
  slashes: true,                                                 // 是否有协议的双斜线
  auth: null,                                                    // 身份验证
  host: 'www.wildye.cn',                                         // 域名或ip地址
  port: null,                                                    // 端口
  hostname: 'www.wildye.cn',                                     // 主机名
  hash: null,                                                    // 哈希值，对应锚点参数
  search: '?name=jquery&v=1.11.3',                               // 查询字符串参数
  query: 'name=jquery&v=1.11.3',                                 // 参数串
  pathname: '/static/lib/',                                      // 路径名
  path: '/static/lib/?name=jquery&v=1.11.3',                     // 路径
  href: 'https://www.wildye.cn/static/lib/?name=jquery&v=1.11.3' // 完整 url 地址
}
```

- 将对象转化为 URL 地址  
语法：`url.format(urlObj)`
![这里写图片描述](https://wildye.cn/static/images/blog/4eacaea8/02.jpg)

- 生成 URL 地址  
语法：`url.resolve(str1[, str2[, ...strN]])`  
语法：`url.resolveObject(urlObj)`
![这里写图片描述](https://wildye.cn/static/images/blog/4eacaea8/03.jpg)

## 原生模块 querystring.
- 序列化参数
语法：`querystring.stringify(obj[, separator[, equal]])` 序列化参数  
参数1：需要解析的对象  
参数2：设置分隔符，默认 `&`  
参数3：设置赋值符，默认 `=`

```javascript
let qs = require('querystring ');
let obj = { name:'xm', like:['play', 'game'], age:'' };

// 序列化参数对象
let one   = qs.stringify(obj);
let two   = qs.stringify(obj, ',');
let three = qs.stringify(obj, ',', ':');

console.log(one)   // => 'name=xm&like=play&like=game&age='
console.log(two)   // => 'name=xm,like=play,like=game,age='
console.log(three) // => 'name:xm,like:play,like:game,age:'
```

- 反序列化  
语法：`querystring.parse(obj[, separator[, equal[, count]]])`   
参数1：需要解析的对象  
参数2：分隔符  
参数3：赋值符  
参数4：参数个数限制

```javascript
// 反序列化参数对象，如果不是默认分隔符和赋值符，需指定
console.log(qs.parse(obj))
console.log(qs.parse(obj, ','))
console.log(qs.parse(obj, ',', ':'))
// => {name:'xm', like:['play', 'game'], age:''}
```
- URL 编码  
语法：`querystring.escape(str)`   
解码：`querystring.unescape(str)`   
![这里写图片描述](https://wildye.cn/static/images/blog/4eacaea8/04.jpg)
