---
title: Vue-cli 3.0 构建项目（二）设置接口代理
date: 2018-07-21 09:20:37
publish: true
categories:
  - 前端开发
tags:
  - Vue-Cli
---

- `vue.config.js`

Vue-cli 3.0 设置接口代理解决跨域问题
vue.config.js是一个可选的配置文件，新建该文件，存放在项目根目录（将自动加载）中

```javascript
// 作为配置文件，直接导出配置对象即可
module.exports = {
	devServer: {
		// 设置主机地址
		host: 'localhost',
		// 设置默认端口
		port: 8080,
		// 设置代理
		proxy: {
			'/api': {
				// 目标 API 地址
				target: 'http://192.168.6.163:8080/',
				// 如果要代理 websockets
				ws: true,
				// 将主机标头的原点更改为目标URL
				changeOrigin: false
			}
		}
	}
}
```
- 调用示例
```
axios.defaults.baseURL = '/api/'
```
