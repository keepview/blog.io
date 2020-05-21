---
title: Handsontable-在线Excel表格
date: 2019-12-09 10:30:00
publish: true
categories:
  - 前端开发
tags:
  - Excel
---

:::tip
[handsontable官网](https://handsontable.com/docs/)
:::

<!-- more -->

## 安装使用

### 1. 依赖安装
``` node.js
yarn add handsontable @handsontable/vue
```

### 2. 在 Vue 中使用
- 添加 `settings` 配置表格
- 添加 `licenseKey` 去除底部提示信息
- 添加 `data` 或者 `settings.data` 接收数据
``` html
<template>
  <hot-table 
    ref="hotTable"
    licenseKey="non-commercial-and-evaluation"
    :settings='settings' 
    :data="itemList"
  />
</template>

<script>
import 'handsontable/dist/handsontable.full.min.css';
import { HotTable } from '@handsontable/vue';

export default {
  components: {
    HotTable,
  },
  data() {
	return {
	  itemList: [],
	};
  },
};
</script>
```

## settings

### .columns 列控件
``` javascript
{
	// 指定输入控件类型 
	// checkbox 勾选框&多选
	// text		本输入
	// numeric	数值输入
	// date		日期选择
	// time		时间选择
	// select	选择器
	// dropdown		下拉选择
	// autocomplet下拉选择（自动填充）
	type: 'text', 
	data: 'data',
}
```

### 基础配置
``` javascript
{
  // 声明语言包
  language: 'zh-CN',

  // 表格宽度
  width: '100%',

  // 表格高度，指定高度后显示滚动条
  // 刚好10行高度
  width: 415,

  // 列标题
  colHeaders: [],

  // 列宽
  colWidths: [],

  // 显示行标题（序号列）
  // 自定义第一列: index => `${index} NB`,
  rowHeaders: true,

  // 行高
  rowHeights: 36,

  // 单元格边框
  customBorders: true,

  // 指定行数上限
  maxRows: 10,

  // 指定列数上限
  maxCols: 300,

  // 不允许为空
  allowEmpty: false,

  // 指定每一列的数据类型、默认值、表单验证配置
  // type: 类型, data: 对应列的数据字段
  // 见 [columns 配置]
  columns: [],

  // 表格自定义类名
  tableClassName: '',

  // 当前行自定义类名
  currentRowClassName: '',

  // 当前列className
  currentColClassName: '',

  // 合并单元格
  mergeCells: true,

  // 固定行，顶部多少行
  fixedRowsTop: 1,

  // 固定列，左侧多少列
  fixedColumnsLeft: 1,

  // 固定列（手动）
  manualColumnFreeze: true,

  // 列延申
  // last：延伸最后一列，all：延伸所有列，none默认不延伸。
  stretchH: 'all',

  // 拖动行
  manualRowMove: true,

  // 拖动列
  manualColumnMove: true,

  // 手动调整行距
  manualRowResize: true,

  // 手动调整列距
  manualColumnResize: true,

  // 启用批注
  comments: true,

  // 允许观察数据源变化，单向数据绑定更改应用到数据
  observeChanges: true,

  // 不允许插入列
  allowInsertColumn: false,

  // 不允许移除列
  allowRemoveColumn: false,

  // 验证失败单元格样式
  invalidCellClassName: '',
}
```

### 事件
``` javascript
{
  /**
   * @description 单元格点击事件, 左键弹起后触发
   * @param {Event} event 事件对象
   * @param {CellCoords} coords 单元格索引坐标
   * @param {HTMLTableCellElement} TD 标签元素
   */
  afterOnCellMouseUp(event, { row, col }, TD) {},

  /**
   * @description 激活单元格编辑时触发
   * @param {Numbar} row 行索引
   * @param {Numbar} column 列索引
   */
  afterBeginEditing(row, column) {},

  /**
   * @description 单元格悬浮钩子
   * @param {Event} event 事件对象
   * @param {CellCoords} coords 单元格索引坐标
   * @param {HTMLTableCellElement} TD 标签元素
   */
  afterOnCellMouseOver(event, { row, col }, TD) {},

  /**
   * @description 单元格值改变钩子
   * @param {Array} changes 事件对象
   */
  afterChange(changes) {},
}
```
