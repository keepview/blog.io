---
title: Vue 常见问题解决方案
date: 2018-10-04 21:51:02
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

## 数组和对象不能直接赋值情况

Vue 检测不到数组变化：
```javascript
// 使用索引设置元素值时
this.arr[1] = 'text';
// 设置数组的长度时
this.arr.length = 1;

// 使用`set`方式
this.$set(this.arr, index, newVal);
```

Vue 无法添加或删除对象属性：
```javascript
// 单个属性
this.$set(this.client, 'name', 'hannah');

// 多个属性
Object.assign({}, this.client, { name:'wee', age:12 });
```

## 父组件绑定子组件 v-model 值

父组件
```html
<template>
  <demo-input v-model="formModel"></demo-input>
</template>

<script>
import DemoInput from '@/components/DemoInput';

export default {
  data() {
    return {
      formModel: '',
    };
  },
};
</script>
```

子组件
```html
<template>
  <el-input v-model="itemModel"></el-input>
</template>

<script>
export default {
  name: 'DemoInput',
  // 设置参数与事件
  model: {
    prop: 'parentModel',
    event: 'setModel',
  },
  // 接受传递的参数
  props: {
    parentModel: String,
  }
  data() {
    return {
      itemModel: '',
    };
  },
  watch: {
    itemModel() {
      // 触发事件改变父组件绑定的 v-model 值
      this.$emit('setModel', this.itemModel)
    },
  },
};
</script>
```
