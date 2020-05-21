---
title: Vue-Vuex 状态管理
date: 2018-07-29 14:09:48
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

Vuex是什么
>专为 Vue.js 应用程序开发的 状态管理模式，采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

- Vuex 的状态是响应式的，若 store 中的状态发生变化，那么调用 状态 的组件也会更新
- store 中的状态不能直接改变，
只能通过显示的提交 mutations (`store.commit`、`store.dispatch`)来改变状态，
使得我们可以方便地跟踪每一个状态的变化。

## Vuex 使用
```
npm install vuex --save
```

`main.js`：

``` javascript
import store from './store'

// 将状态从根组件 '注入' ，让子组件能通过 this.$store 访问
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```

`store.js`：
``` javascript
import Vue from 'vue'
import Vuex from 'vuex'

// 作为插件使用
Vue.use(Vuex)

// 定义容器, 并作为模块导出
export default new Vuex.Store({

  // 状态：store.state
  state: {
    token: '',
  },

  // 计算状态：store.getters
  getters: {
    loginStatus: state => {
      return state.token
    },
  },

  // 更改状态：store.commit()
  mutations: {
    setToken (state, value) {
      state.token = value
      localStorage.setItem('TOKEN', value)
    }
  }

  // 更改状态(异步)：store.dispatch()
  mutations: {
    setToken (state, value) {
      state.token = value
      localStorage.setItem('TOKEN', value)
    }
  }
})
```

## store
类似容器，包含应用的大部分状态
```html
<!-- 模板中调用 -->
<span>{{ store.state.activePage }}</span>
```
``` javascript
// 组件中调用
export default {
  created () {
    this.store.state.activePage
    this.store.commit('activePage', 'home')
  }
}
```

## State
Vuex 使用单一状态树，这可以让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。需要注意，单状态树和模块化并不冲突！

由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可
```javascript
computed: {
  count () {
    return store.state.count // this.$store.state.count
  }
}
```

## Getter
`Getter(state, getters)` 可以从 store 中的 state 中派生出一些状态（过滤、计数），类似于计算属性
`getter` 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
>完整请参照 https://vuex.vuejs.org/zh-cn/getters.html\

## Mutation
`mutation` 必须是同步函数，且需遵守 Vue 的响应规则

- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  -  类似于事件：事件类型 (type) 和 一个 回调函数 (handler)
  - 调用 `store.commit(type, payload)` 方法来触发mutations中的相关方法。
- 最好提前在你的 store 中初始化好所有所需属性
- 当需要在对象上添加新属性时，
  - 使用 `Vue.set(obj, 'newProp', 123)`
  - 或者以新对象替换老对象：`state.obj = { ...state.obj, newProp: 123 }`
>完整请参照：https://vuex.vuejs.org/zh-cn/mutations.html

## Action
Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。
- 通过 store.dispatch 方法触发

`store.dispatch` 可以处理被触发的 action 的处理函数返回的 Promise，并且 `store.dispatch` 仍旧返回 Promise。
```javascript
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  }
}
```
现在你可以：
```javascript
store.dispatch('actionA').then(() => {
  // ...
})
```
在另外一个 action 中也可以：

```javascript
// 假设 getData() 和 getOtherData() 返回的是 Promise
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```

>完整请参照：https://vuex.vuejs.org/zh-cn/actions.html

## 辅助函数

- 当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。
为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性。
```javascript
// 使用 ES6 的解构赋值导入
import { mapState } from 'vuex'

export default {
  created () {
    console.log(this.activePage)
    this.setActivePage('home')
  }，
  computed: {
    ...mapState({
      // 使用对象展开运算符将此对象混入到外部对象中
    })
  }
  computed: mapState(

    // 映射 this.token 为 store.state.token
    'token',
    // 映射多个状态
    ['token', 'count'],

    // 箭头函数可使代码更简练
    token: state => state.token,

    // 传字符串参数 'token' 等同于 `state => state.token`
    tokenAlias: 'token',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    tokenPlus (state) {
      return `Bearer ${state.token}`
    }
  )
}
```
>参考博客 https://blog.csdn.net/ligang2585116/article/details/78964349
