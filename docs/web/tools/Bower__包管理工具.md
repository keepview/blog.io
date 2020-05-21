---
title: 前端包管理工具 bower
date: 2018-05-31 11:18:09
publish: true
categories:
  - 前端开发
tags:
  - Bower
---

## 简介
bower 是一个前端包管理工具，能够帮我们管理Web站点上的各种框架，类库，如 jQuery、Bootstrap、easyUI 等。

优点：
- 版本管理，保证包是最新(默认)或指定的版本
- 扁平依赖，如果多个包依赖于一个包，例如jQuery，那么Bower将只下载jQuery一次，这样做有助于减少页面加载。

## 安装环境支持
node http://nodejs.cn/download/  
git https://git-scm.com/downloads
```javascript
// 推荐全局安装
npm install bower –g
```

## 使用
在项目根目录下新建 `.bowerrc` 主文件, 
win下通过sublime新建或者cmd改名  
目录结构
```
├── .bowerrc
└── bower.json
```

`.bowerrc` 文件：
主要用来配置安装路径，若未指定则默认为 当前目录下的 bower_components目录中
```javascript
{  
  "directory" : "js/lib" // 包安装路径
  "storage": {  
    "packages" : "~/.bower/packages"  // 包本地缓存路径
  }
}  
```

`bower.json` 文件：
无论是使用bower来为项目管理外部依赖，还是准备制作一个包，都是通过 bower.json 文件来进行的
```javascript
{  
  "name": "",              // 必须，如果需要注册包，则该包名唯一。  
  "description": "",       // 包描述  
  "main": "",              // 入口文件，bower本身不使用，供第三方构建工具会使用  
  "homepage": [],          // 主页，包介绍页
  "ignore": [              // bower安装的忽略排除项
    "node_modules",
    "bower_components",
  ],
  "dependencies": {        // 依赖包
    "jquery": "^3.3.1"
  },                    
  "resolutions": {},       // 包引用冲突自动使用该模块指定的包版本
｝  
```

## 常用命令
```md
# 帮助获取bower指令及信息
bower help

# 搜索插件
bower search

# 打开插件的官方主页
bower home

# 安装插件
bower install <package>

# 卸载插件
bower uninstall <package>

# 包的信息
bower info

# 初始化插件, 生成bower.json文件
bower init

# 列出当前目录下的所有包及依赖关系
bower list

# 根据包名查询包的url
bower lookup

# 删除无关的包 
bower prune

# 注册一个自己的包
bower register <packageName>  <url>

# 更新项目的包
bower update

# 缓存管理
bower cache 
```
