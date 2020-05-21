---
title: node.js npm & nrm & nvm
date: 2018-04-21 08:08:11
publish: true
categories:
  - 后端开发
tags: Node.js
---

## node.js 安装
node.js官网下载地址 ：https://nodejs.org/en/download/current/
安装包带有 npm ，自动添加了系统环境变量
![这里写图片描述](https://wildye.cn/static/images/blog/50721b11/01.png)

- Linux（Ubuntn 16.4）

```javascript
// 在 github 上获取源码
$ sudo git clone https://github.com/nodejs/node.git 
Cloning into 'node'... 

// 修改目录权限
$ sudo chmod -R 755 node

// 使用 ./configure 创建编译文件
$ cd node
$ sudo ./configure
$ sudo make
$ sudo make install

// 查看 node 版本
$ node --version

// Ubuntu apt-get命令安装
sudo apt-get install nodejs
sudo apt-get install npm
```

## NVM 安装
1. 下载 nvm-noinstall.zip，[github项目地址](https://github.com/coreybutler/nvm-windows/releases)
2. 解压到想安装的路径（比如：`D\dev\nvm`）
3. 安装配置settings.txt（若无，则在 `D\dev\nvm` 下新建一个）

```
root: D:\dev\nvm      // 配置`nvm.exe` 所在目录
path: D:\dev\nodejs   // 配置 node快捷方式路径
arch: 64              // 配置32/64
proxy:                // 表示代理，一般不用配置
// node 下载镜像源指向淘宝，避免卡顿
node_mirror: https://npm.taobao.org/mirrors/node/
// npm 下载镜像源指向淘宝
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

4. 进入环境变量面板 Win + R  => sysdm.cpl  
5. 新建 `NVM_HOME` 、 `NVM_SYMLINK`

![这里写图片描述](https://wildye.cn/static/images/blog/50721b11/02.png)

6. 将 `NVM_HOME` 、 `NVM_SYMLINK` 加入 `Path` 变量中

![这里写图片描述](https://wildye.cn/static/images/blog/50721b11/03.png)

7. 验证环境变量
cmd窗口输入 set [变量名] 查看上面配置的变量，安装完成！

## NPM 安装
已集成至 nodejs

## NRM 安装
```git
npm install -g nrm

// 安装淘宝镜像
npm install -g cnpm --registry=http://registry.npm.taobao.org

cnpm install -g less
```

## NVM - 指令
```javascript
// 安装最新版本
nvm install lastest

// 安装指定版本，可模糊安装
nvm install [nodejs版本号]

// 删除已安装的指定版本，语法与install类似
nvm uninstall [版本号]

// 切换使用指定的nodejs版本
nvm use [版本号]

// 列出所有安装的版本
nvm ls 

// 列出所以远程服务器的版本（官方node version list）
nvm ls-remote 

// 显示当前的版本
nvm current 

// 给不同的版本号添加别名
nvm alias 

// 删除已定义的别名
nvm unalias 

// 在当前版本node环境下，重新全局安装指定版本号的npm包
nvm reinstall-packages 
```

## NPM - 指令
```javascript
// 在当前目录生成 package.json 文件,添加 -y 或 --yes 则为默认配置
npm init -y

// 默认在当前下生成目录(node_modules)安装， -g 全局下安装(nodejs所在目录下)
npm install -g [package]

// 根据当前目录下 package.json 配置，进行依赖安装
// 若不想保存在package.json中，改为 --no-save
npm install [--save]

// 运行依赖（发布）
npm install --save
npm install -S

// 开发依赖（辅助）
npm install --save-dev
npm install --save-D

// 卸载模块
npm uninstall [package]

// 查看当前目录或全局的模块，可指定层级为0
npm ls [-g] [--depth=0]

// 查看当前过期模块 
// current：显示当前安装版本、
// latest：显示模块最新版本、
// wanted：显示不破坏当前代码的可升级版本
npm outdated

// 查看全局安装地址
npm root -g

// 升级模块版本
npm update [package]

// 查看模块信息
npm ll[la] [--depth-0]

// 查看模块的当前版本
npm list [package]

// 查找包含该字符串的模块
npm search [string]

// 列出模块信息，包括历史版本，
// field 查看某个具体信息，比如（versions) 
// --json 输出全部结果
npm view <package> [field] [--json]

// 在浏览器端查看项目（项目主页）
npm home [package]

// 浏览器端打开项目地址（github）
npm repo [package]

// 查看项目文档
npm docs [package]

// 查看项目bug
npm bugs [package]

// 移除当前不在 package.json 中但是存在node_modules中的模块
npm prune

// 不使用npm install 而连接某个模块，通常用作开发本地模块
npm link
```

## NRM - 指令
```javascript
// 全局安装
npm install -g nrm

// 切换镜像源
nrm use cnpm
```
```javascript
// 列出可用源
nrm ls
```
![这里写图片描述](https://wildye.cn/static/images/blog/50721b11/04.png)
```javascript
// 测试所有源的响应时间
nrm test
```
![这里写图片描述](https://wildye.cn/static/images/blog/50721b11/05.png)

> 参考引用：  
> [npm link的基本用法及实例](https://blog.csdn.net/u014291497/article/details/75194456)  
> [npm 模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html#toc18)
