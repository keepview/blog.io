---
title: Vue-router 路由
date: 2018-07-26 23:13:31
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

# vue-router 使用步骤
- 安装模块
```
npm install vue-router --save
```

``` javascript
// 引入模块
import VueRouter from 'vue-router'

// 作为 Vue 的插件
Vue.use(VueRouter)

// 创建路有实例对象
new VueRouter({
    ...配置参数
})
```
- 告诉路由渲染的位置
标签会自动匹配渲染子路由
```
<router-view></router-view>
```
# 功能配置
## hash 和 history模式
- 默认使用hash模式
如果需要兼容至IE9，推荐使用默认的哈希模式
- 切换 history 模式
``` javascript
new Router({
  mode: 'history'
})
```
## router-link 各种配置项
- 导入页面组件
```
import Home from './views/Home.vue'
```
- 配置项
```
new Router({
  // 配置当前导航页高亮样式类
  linkActiveClass: 'is-active',
  routes: [
    {
      // 路径
      path: '/',
      // 名字，推荐，因为路径可能会改动，而 name 不会
      name: 'home',
      // 设置导向的组件页面
      component: Home
    }
  ]
})
```
- 绑定方式
``` html
<!-- 静态绑定 -->
<router-link to="/">home</router-link>

<!-- 动态绑定 -->
<router-link :to="index">home</router-link>          <!-- 变量 -->
<router-link :to="{path:'/'}">home</router-link>     <!-- 路径 -->
<router-link :to="{name:'home'}">home</router-link>  <!-- 名称 -->
```
- 自定义元素标签，默认为 a 标签
```
<router-link to="/" tag="span">home</router-link>
```
- 默认高亮
```
<router-link to="/" active-Class="is-active">home</router-link>
```
## 重定向和别名
- 默认事件为 click 触发，但这是可以改变的
```
<!-- 鼠标移入时触发跳转 -->
<router-link to="/" event="mouseover">home</router-link>
```
- 重定向
```
new Router({
  routes: [
    {
      path: '*',
      name: 'home'

      // 重定向
      redirect: '/home',
      redirect: { path: '/home' }
      redirect: { name: 'home' }

      // 动态设置重定向的目标
      redirect: (to) => {
        if (to.path === '1') {
          return '/home'
        } else if (to.path === '2') {
          return { path: '/home' }
        } else {
          return { name: 'about' }
        }
      }
    }
  ]
})
```
- 别名
访问 /home 和访问 /index 时一样的，且使用别名与标签属性 `to` 的值一致时激活高亮
```
new Router({
  routes: [
    {
      path: '/inedx',
      alias: '/home',
      component: Home
    }
  ]
})
```
## 嵌套路由的使用
- 精确匹配
全包含匹配（默认）: 访问 `/home` 时 `/` 依然处于激活状态
精确匹配：访问 `/home` 时 `/` 不会处于激活状态
``` html
<!-- 设置精确匹配: 添加 exact 属性 -->
<router-link to="/" exact>index</router-link>
``` 
- 嵌套路由
一旦有默认子路由，那就无需在父路由里设置 `name`

```
new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',          // 默认子路由 /home
          name: 'About',
          component: About
        },
        {
          path: 'work',      // 跳转路径 /home/work
          name: 'Work',
          component: Work
        }
      ]
    }
  ]
})
``` 

## 命名视图
- 设置子路由 URL路径 相对于根路径，即去掉 home，组件嵌套不变

```
new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/work',      // 设置`/`，相对与根路径
          name: 'Work',
          component: Work
        }
      ]
    }
  ]
})
```

- 命名视图
在同级展示多个视图（并列显示），而不是嵌套展示

``` html
<router-view></router-view>
<router-view name="slider"></router-view>
```
``` javascript
new Router({
  routes: [
    {
      path: '/home',
      components: {
        default: Home, // 默认组件
        slider: About  // 对应 name="slider" 的视图
      },
    }
  ]
})
```

## 滚动行为
记录滚动条位置，后退或前进后保留页面滚动位置
```
new Router({
  /* 
    浏览器前进后退或切换导航时才会触发
    to: 要进入的目标路由对象
    from: 离开的路由对象
    savePosition: 记录滚动条坐标{x,y} 点击前进后退时记录值
  */
  scrollBehavior: (to, from, savePosition) {
    // 判断地址栏是否有 hash 值
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    // 定位页面滚动位置
    return savePosition ? savePosition : {x: 0, y: 0}
  }
})
```
## 动态路径参数
匹配到的所有路由，全部都映射到同一个组件
路径: `/user/:userId` ，userId为动态路径参数
获取参数: 路由信息对象 `$router.params`
``` javascript
new Router({
  routes: [
    {
      path: '/user:userId?',  // user/1 /user/2, ?:匹配1次或0次
      component: User,
    }
  ]
})
```
- 对组件注入
`$router`，router实例对象
`$router`，当前激活的路由信息对象，每个组件实例都会有
`beforeRouterEnter()`，进入组件前钩子函数
`beforeRouterLeave()`，离开组件前钩子函数
- 路由信息对象
`path` 字符串，对应当前路由的路径
`params` 对象，包含动态路由参数
`quary` 对象，URL 查询参数
`hash` 字符串，当前路由的 hash 值
`fullPath` 字符串，URL包含查询参数和 hash 的完整路径
`matched` 数组，包含当前路由的所有嵌套路径片段的 路由记录
`name` 字符串， 当前路由的名称
## 监控 $router 路由信息对象
```
watch: {
  $route () {
    // 路径发生变化，$router会重新赋值
    console.log(this.$router.params)
  }
}
```
## query 字符串传参
- 设置
```
<router-link to="?name=jack" exact></router-link>
<router-link :to="{path: '', query: {name: 'jack'}}" exact></router-link>
```
- 获取
```
this.$router.query
```
## 导航切换过渡动画 transition 使用
提供了transition的封装组件，添加过渡动画

过渡的 CSS 类名，使用 name 属性改变类名前缀

- v-enter : 定义 `进入` 过渡的 `开始` 状态
- v-enter-active : 定义进入 `活动` 状态
- v-enter-to : 定义进入的 `结束` 状态
- v-leave : 定义 `离开` 过渡的 开始状态
- v-leave-active : 定义离开 活动状态
- v-leave-to : 定义离开的 结束状态
``` html
<transition>
  <router-link to="/home"></router-link>
</transition>
```
``` css
/* 开始（进入）、结束（离开）*/
.v-enter, .v-leave-to {
  opacity: 0
}
/* 结束（进入）、开始（离开）*/
.v-enter-to, .v-leave {
  opacity: 1
}
/* 过渡时间 */
.v-enter-active,
.v-leave-active {
  transition: 1s
}
```
- 过渡模式，默认为同时过渡
`out-in` : 当前元素先进行过渡，完成之后新元素过渡进入
`in-out` : 新元素先进行过渡，完成之后当前元素过渡离开
``` html
<transition mode="out-in">
  <router-link></router-link>
</transition>
```

## 动态设置 name 属性左右切换

- `HTML`
``` html
<transition name="names" mode="out-in">
  <router-link></router-link>
</transition>
```
- `JS`
``` javascript
export default {
  data () {
    return {
      names: 'L'
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index < from.meta.index) {
        this.names = 'right'
      } else {
        this.names = 'left'
      }
    }
  }
}
```
- `CSS`
``` css
.L-enter,
.R-leave-to {
  transform: translateX(100%)
}
.L-leave-to,
.R-enter {
  transform: translateX(-100%)
}
.L-enter-to,
.L-leave,
.R-enter-to,
.R-leave {
  transform: translateX(0)
}
.L-enter-active,
.L-leave-active,
.R-enter-active,
.R-leave-active {
  transition: 1s
}
```
- 设置路由元信息
在路由配置中meta可以配置一些数据，用在路由信息对象中
访问meta中数据：$route.meta
``` javascript
new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { index: 0 }
    },
    {
      path: '/work',
      component: Work,
      meta: { index: 1 }
    },
    {
      path: '/about',
      component: About,
      meta: { index: 2 }
    }
  ]
})
```

## 编程式导航
借助于 router 的实例方法，通过编写代码来实现导航的切换

- `back` : 回退一步
- `forward` : 前进一步
- `go` : 指定前进回退步数
- `push` : 导航到不同url，向 history 栈 `添加` 一个新的记录
- `replace` : 导航到不同url，`替换` history 栈中当前记录
``` javascript
export default {
  methods: {
    backPage () {
      this.$router.back()
    },
    forwardPage () {
      this.$router.forward()
    },
    goPage () {
      this.$router.go(-2)  // 退回2步
      this.$router.go(3)   // 前进3步
      this.$router.go(0)   // 刷新当前页面
    },
    pushPage () {
      this.$router.push('/home')     // 新纪录
    },
    replacePage () {
      this.$router.replace('/home')  // 替换纪录
    },
  }
}
```
## 全局钩子函数
导航发生变化时，导航钩子主要用来拦截导航，让它完成跳转或取消

- 钩子函数
router全局：`beforeEach`、`afterEach`
单个路由：`beforeEnter`
组件中：`beforeRouteEnter`、`beforeRouteUpdate` 、`beforeRouteLeave`

- 钩子函数接收的参数
`to` : 要进入的目标 路由对象    到哪里去
`from` : 正要离开导航的路由对象  从哪里来
`next` : 用来决定跳转或取消导航
``` javascript
let router = new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      beforeEnter: (to, from, next) {
        // 单个路由
        next()
      }
    }
  ]
})

// 进入导航前
router.beforeEach((to, from, next) => {
  // router全局
  next(false) // 取消导航
  to.meta.login ? next('/login') : next()
})

// 进入导航后
router.afterEach((to, from, next) => {
  window.document.title = to.meta.title || 'miaov'
})
```
## 组件级钩子函数
```
export default {
  data () {
    return {
      test: '改变前'
    }
  },
  beforeRouteEnter (to, from, next) {
    // 进入导航, 比 beforeCreate 先执行
    next((vm) => {
      // vm : 当前组件实例
      vm.test = '改变了'
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 二级导航更新
  },
  beforeRouteLeave (to, from, next) {
    // 离开导航
  }
}
```
## 滚动动画
```
npm i tween.js --save
```
``` javascript
import TWEEN from 'tween.js'

export default {
  // 进入导航后自动到哈希位置
  beforeRouteEnter (to, from, next) {
    next(() => {
      vm.animate(to)
    })
  },
  // 路由更新后更新哈希位置
  beforeRouteUpdate (to, from, next) {
    this.animate(to)
    next()
  },
  methods: {
    animate (to) {
      function animateFunc () {
        requestAnimationFrame(animateFunc)
        TWEEN.update(time)
      }
      if (to.hash) {
        // 获取锚点元素
        let el = document.getElementById(to.hash.slice(1))
        // 获取容器元素
        let doc = document.getElementsByClassName('doc')[0]
        if (el) {
          animateFunc()
          new TWEEN.Tween({
            number: doc.scrollTop  // 起始位置
          })
          .to({
            number: el.offsetTop   // 目标位置
          }, 500)
          .onUpdate(function() {
            doc.scrollTop = this.number.toFixed(0)
          })
          .start()
        }
      }
    }
  }
}
```
## 利用 webpack 实现懒加载
把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件

- webpack代码分割功能
``` javascript
const Header = (resolve) => {
  // 代码分块（依赖, 回调, [chunk名字]）
  return require.ensure([], () => {
    // 载入组件
    resolve(require('@/components/Header'))
  }, 'user')
}

const Footer = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/Footer'))
  }, 'user') // webpack会将chunk名称相同打包到一个文件
}

const Aside = (resolve) => {
  // import 方式相对的只能打包一个文件
  return import('@/components/Aside')
}

export default {
  // vue 中 components 也可以传递函数
  components: {
    Header，
    Footer，
    Aside
  }
}
```

## 服务器配置
- `build/index.js`
```
module.exports = {
  build: {
    assetsPublicPath: '/dist/'
  }
}
```
- Nginx配置
```
location / {
  root /home/应用跟目录;
  try_files $uri $uri/ /index.html =404;
}
```
- Appache配置
apache → `httpd.conf`
```
LoadModule rewrite_module modules/mod_rewrite.so

<Directory>
  AllowOverride all
</Directory>

AllowOverride all
```
在 www 下新建 `.htaccess` 文件，内容如下：
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /dist/index.html [L]
</IfModule>
```
