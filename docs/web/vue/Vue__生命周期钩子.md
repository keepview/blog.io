---
title: Vue-生命周期钩子
date: 2018-07-03 07:25:36
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

# 生命周期函数
正如其名，组件从被 **创建** 到完成使命后的 **销毁** 的过程，就好比生命的出生到死亡

- `beforeCreate` 创建前
可以在这加个 loading 事件，在加载实例时触发
- `created` 创建后
初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用
- `beforeMount` 载入前
组件完成创建，在挂载元素之前
- `mounted` 载入后
挂载元素，获取到DOM节点
- `beforeUpdate` 更新前
检测到数据变化，但还未渲染
- `updated` 更新后
如果对数据统一处理，在这里写上相应函数
- `beforeDestroy` 销毁前
可以做一个确认停止事件的确认框
- `destroyed` 销毁
已经毁尸灭迹了，诚挚的哀吊一下

| vue 1.0+ | vue 2.0 | Description |
| :- | :- | :- |
| init | beforeCreate | 组件实例刚被创建，组件属性计算之前，如`data`属性等 |
| created | created | 组件实例创建完成，属性已绑定，但DOM还未生成，`$el`属性还不存在 |
| beforeCompile | beforeMount | 模板编译/挂载之前 |
| compiled | mounted | 模板编译/挂载之后 |
| ready | mounted | 模板编译/挂载之后（不保证组件已在`document`中） |
| - | beforeUpdate | 组建更新之前 |
| - | updated | 组建更新之后 |
| - | activeted | for`keep-alive`，组件被激活时调用 |
| - | deactivated | for`keep-alive`，组件被移除时调用 |
| attached | - | 已废弃 |
| detached | - | 已废弃 |
| beforeDestory | beforeDestroy | 组件销毁前调用 |
| destoryed | destroyed | 组件销毁后调用 |

![这里写图片描述](https://wildye.cn/static/images/blog/58c8a9a0/01.jpg)
