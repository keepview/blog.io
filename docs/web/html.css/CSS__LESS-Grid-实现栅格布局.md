---
title: LESS Grid 实现栅格布局
date: 2018-04-22 09:23:48
publish: true
categories:
  - 前端开发
tags:
 - LESS
---

## Guid
```less
//- 设备尺寸
@xs: 480px;
@sm: 768px;
@md: 992px;
@lg: 1200px;

// 栅格数
@grid-count: 12;
// 容器名
@container: ~"container";
// 行名
@row: ~"row";
// 列名
@col-name: ~"col";
// 列边距
@col-padding: 15px;

//- 栅格布局 Start
.@{container},
.@{container}-fluid {

  .margin(x, auto);
  .padding(x, @col-padding);
  .box-sizing();
  .transition(width 0.9s cubic-bezier(1,-0.02, 0, 1.04));

  min-width: 960px; /* 兼容不支持媒体选择的浏览器 */

}

.@{container}-fluid {

  width: 100%;
  min-width: 0;

}

.@{row} {

  .margin(x, -@col-padding);

  min-height: 1px;
  clear: both;

  &:before, &:after {
    content: "";
    display: table;
    clear: both;
  }

}

// 列基础css
.col-base-css() {

  .padding(x, @col-padding);
  .box-sizing();

  position: relative;
  min-height: 1px;

}

// 循环列，设置基础css
.make-grid-col(@grid-count);

.make-grid-col(@len: @grid-count) {

  .col(@i) {
    @classList: ~".@{col-name}-xs-@{i},.@{col-name}-sm-@{i},.@{col-name}-md-@{i},.@{col-name}-lg-@{i}";
    .col(@i + 1, ~"@{classList}");
  }
  .col(@i, @list) when (@i =< @len){
    @classList: ~".@{col-name}-xs-@{i},.@{col-name}-sm-@{i},.@{col-name}-md-@{i},.@{col-name}-lg-@{i}";
    .col(@i + 1, ~"@{classList},@{list}");
  }
  .col(@i, @list) when (@i > @len) {
    @{list} {
      .col-base-css();
    }
  }
  .col(1)

}


// 循环生成列
.make-col-loop(xs, @grid-count);

.make-col-loop(@type, @n, @i: 1) when (@i <= @n){

  @col-class-name: ~"@{col-name}-@{type}";
  .@{col-class-name}-@{i}{
    width: @i/@n*100%;
    float: left;
  }
  // 偏移
  .@{col-class-name}-offset-@{i}{
    margin-left: @i/@n*100%;
  }
  // 推
  .@{col-class-name}-push-@{i}{
    left: @i/@n*100%;
  }
  // 拉
  .@{col-class-name}-pull-@{i}{
    right: @i/@n*100%;
  }
  .make-col-loop(@type, @n, (@i + 1));
}

// 媒体查询
.@{container}{
  @media (max-width: @sm) {
    min-width: 0;
  }
  @media (min-width: @sm) {
    width: (@sm)-18px;
    min-width: 0;
  }
  @media (min-width: @md) {
    width: (@md)-22px;
    min-width: 0;
  }
  @media (min-width: @lg) {
    width: (@lg)-30px;
    min-width: 0;
  }
}

// 媒体查询设置对应列类型css
@media (min-width: @sm) {
  .make-col-loop(sm, @grid-count);
}
@media (min-width: @md) {
  .make-col-loop(md, @grid-count);
}
@media (min-width: @lg) {
  .make-col-loop(lg, @grid-count);
}
```
