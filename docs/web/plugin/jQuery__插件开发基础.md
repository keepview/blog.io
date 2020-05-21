---
title: jQuery-插件开发基础
date: 2018-06-11 15:30:53
publish: true
categories:
  - 前端开发
tags: jQuery
---

## 闭包
用自执行匿名函数包裹代码，外部无法直接访问，形成闭包

- 避免合并 js 出现无法正常解析进而报错，在自执行匿名函数前加上 `;`
- 以 `jQuery` 对象为实参、`$` 符号为形参

兼容操作符 `$` 和 `jQuery`，避免全局依赖和第三方破坏
```javascript
;(function ($) {
  // code...
})(jQuery)
```
## 对象级别组件开发
即挂在 jQuery 原型下的方法，这样通过选择器获取的 jQuery 对象实例也能共享该方法，也称为动态方法

- `$.fn === $.prototype === jQuery.prototype`，即 jQuery对象的原型
- 方法内部 `this` 指向选择器返回的元素或元素集
- 使用 `return` 维持 jQuery 的链式调用
- `each()` 方法内的 `this` 是普通DOM，需转化成 `$(this)`

```javascript
;(function ($) {

  $.fn.PageSlide = function() {
    // 这里 this 指向 jQuery 选择器返回的集合
    return this.each(function() {
      // 使用 each 遍历集合中的每个元素
      $(this)
    }); 
  }
  
})(jQuery)
```

## 单例模式
如果实例存在则不再重新创建实例

- 利用 `data()` 来存放插件对象的实例
```javascript
$.fn.PageSlide = function() {

  return this.each(function() {
    
    var me = $(this),
      instance = me.data("PageSlide"); // 获取实例对象

    // 若实例不存在则创建，并使用 data 方法存放实例
    if (!instance) {
      me.data("PageSlide", (instance = new PageSlide()));
    }

  })
  
}
```

## 定义构造函数

- 将插件所有方法包装到对象上，在构造函数原型上挂载该对象
- 构造函数推荐为自执行函数表达式，并返回自身维持链式调用
```javascript
;(function ($) {
  
  // 定义构造函数
  var PageSlide = (function() {
    // 初始执行代码
    this.init()

    return PageSlide;
  })();

  // 在构造函数原型上定义对象方法
  PageSlide.prototype = {
  
    init: function() {
    },
    
    pagesCount: function() {
    }
    
  };
  
  // 在 jQuery 对象原型上 挂载插件
  $.fn.PageSlide = function() {
    return this;
  }
  
})(jQuery)
```

## 配置默认参数
使用 `jQuery` 提供的 `$.extend()` 方法来合并默认配置和用户配置

## 将插件的所有方法包装到一个对象上
- 不影响外部命名空间

## 示例：基于 jQuery 的轮播图插件

HTML
```html
<div data-PageSlide>
  <div class="items">
    <div class="item item1"></div>
    <div class="item item2"></div>
    <div class="item item3"></div>
    <div class="item item4"></div>
  </div>
  <div class="pages"></div>
</div>

<script>
  (function ($) {
    // 实例化插件
    $('[data-PageSlide]').PageSlide({
      index: 0，
      look: true,
      pages: true
    });
  })(jQuery);
</script>
```

JS
```javascript
;(function ($) {
  "use strict"; // 严格模式

  // 构造函数
  var PageSlide = (function () {

    function PageSlide (element, options) {
      this.element = element;  // this 指向选择器返回的 DOM 元素集
      this.settings = $.extend({}, $.fn.PageSlide.defaults, options || {}); // 合并配置参数
      this.init(); // 执行初始化方法
    }

    // 将原型上挂载对象，将常用方法包装到对象上
    PageSlide.prototype = {

      // todo: 初始化页面布局及事件绑定
      init: function () {
        var me = this,               // this 多次调用，缓存起来
          userAgent = navigator.userAgent;

        // 获取 DOM 元素
        me.selector = me.settings.selector;
        me.items = me.element.find(me.selector.items);  // 容器
        me.item = me.items.find(me.selector.item);      // 子项
        me.pages = me.element.find(me.selector.pages);  // 分页

        // 获取索引
        me.index = (me.settings.index >= 0 && me.settings.index < me.pageCount()) ? me.settings.index : 0;
        
        // 获取浏览器信息
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
          me.isIE8 = navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1] == "8.0" ? true : false;
        }

        me._initLayout(); // 页面布局
        me._initEvent();  // 事件绑定
        me._autoPlay();
      },

      // todo: 获取页面总数
      pageCount: function () {
        return this.item.length;
      },

      // todo: 上一页
      prev: function () {
        var me = this;
        me.index--;
        me._switchPage();
      },

      // todo: 下一页
      next: function () {
        var me = this;
        me.index++;
        me._switchPage();

      },

      // todo: 页面布局
      _initLayout: function () {
        var me = this;

        // 分页布局
        if (me.settings.pages) {

          // 生成分页控制点
          var spans = "";
          for (var i = 0; i < me.pageCount(); i++) spans += "<span></span>";
          me.pages.append(spans);

          me.pages.children("span").eq(me.index).addClass("on"); // 高亮当前索引控制点

          // 生成左右切换按钮
          if (me.settings.pagesArrows) {
            me.element.append('<div class = "btn L">&lt;</div><div class = "btn R">&gt;</div>');
          }
        }

        // 子页横向布局
        me.items.css("width", (me.pageCount() + 1) * 100 + "%");
        me.item.push(me.item.eq(0).clone().appendTo(me.items)); // 追加首元素至末尾, 用以css无缝切换
        me.item.each(function () {
          $(this).css("width", 100 / (me.pageCount()) + "%");
        });
      },

      // todo: 事件绑定
      _initEvent: function () {
        var me = this,
        btn = me.element.children(".btn");

        // 控制点移入切换
        if (me.settings.pagesDot) {
          me.pages.find("span").on("mouseover", function () {
            me.index = me._oddIndex($(this).index());
            me._switchPage();
          });
        }

        // 左右切换箭头按钮
        if (me.settings.pagesArrows) {
          btn.eq(0).on("click", function () {
            me.prev();
          });
          btn.eq(1).on("click", function () {
            me.next();
          });
        }

        // 绑定键盘事件
        if (me.settings.keyboard) {
          $(window).keydown(function (e) {
            var keyCode = e.keyCode;
            if (keyCode == 37 || keyCode == 38) {
              me.prev();
            } else if (keyCode == 39 || keyCode == 40) {
              me.next();
            }
          });
        }

        // 绑定鼠标滚轮事件
        if (me.settings.mouseRoll) {
          me.element.on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

            if (delta > 0 && (me.index && !me.settings.loop || me.settings.loop)) {
              me.prev();
            } else if (delta < 0 && (me.index < (me.pageCount() - 1) && !me.settings.loop || me.settings.loop)) {
              me.next();
            }
          });
        }
      },

      // todo: 自动播放
      _autoPlay: function () {
        var me = this;

        if (me.settings.loop) {
          // 设置定时器
          var timer = setInterval(function() {
            me.index++;
            me._switchPage();
          }, me.settings.interval);

          // 移入清除定时器
          me.element.hover(function() {
            clearInterval(timer);
          },function() {
            timer = setInterval(function() {
              me.index++;
              me._switchPage();
            }, me.settings.interval);
          });
        }
      },

      // todo: 切换页面
      _switchPage: function () {
        var me = this;

        // 末页切首页
        if (me.index == me.pageCount()) {
          me.items.css("left", "0");
          me.index = 0;
        }

        // 首页切末页
        if (me.index == -1) {
          me.items.css("left", -(me.pageCount() - 2) * 100 + "%");
          me.index = me.pageCount() - 2;
        }

        // 控制点高亮切换
        if (me.index >= me.pageCount() - 1) {
          me.pages.children("span").eq(0).addClass("on").siblings().removeClass("on")
        } else {
          me.pages.children("span").eq(me.index).addClass("on").siblings().removeClass("on");
        }

        // 过渡动画
        me.items.stop().animate({
          left: -(me.index * 100) + "%"
        }, me.settings.speed);
      },

      // todo: IE8控制点索引受PIE生成的元素影响, 这里做一个索引转换
      _oddIndex: function (index) {
        var me = this;
        if (!me.isIE8) return index;

        var arr = [1];
        for (var i = 1; i <= me.pageCount(); i++) arr.push(arr[arr.length - 1] + 2);

        // 让IE8兼容indexOf方法
        if (!Array.prototype.indexOf) {
          Array.prototype.indexOf = function(val){
            var me = this;
            for(var i =0; i < me.length; i++){
              if(me[i] == val) return i;
            }
            return -1;
          };
        }
        
        return arr.indexOf(index);
      }

    };
    return PageSlide;
  })();

  // 注册 jQuery 组件
  $.fn.PageSlide = function (options) {

    // 实现单例模式
    return this.each(function () {
      var me = $(this),
      instance = me.data("PageSlide"); // 获取实例对象

      // 若实例不存在，则创建实例对象
      if (!instance) {
        me.data("PageSlide", (instance = new PageSlide(me, options)));
      }

      // 若实例已存在，直接返回该实例
      if ($.type(options) === "string") return instance[options]();
    });
  };

  // 默认配置参数
  $.fn.PageSlide.defaults = {
    selector: {
      items: ".items", // 容器
      item: ".item",   // 子项
      pages: ".pages"  // 分页
    },

    index: 0,          // 索引

    loop: true,        // 启用循环切换
    interval: 1500,    // 切换间隔
    speed: 800,        // 过渡时间

    pages: true,       // 启用分页
    pagesArrows: true, // 分页箭头控制
    pagesDot: true,    // 分页点控制
    keyboard: false,   // 启用键盘控制
    mouseRoll: false   // 启用鼠标滚轮控制
  }

})(jQuery);
```
>参考
>https://www.cnblogs.com/Wayou/p/jquery_plugin_tutorial.html
