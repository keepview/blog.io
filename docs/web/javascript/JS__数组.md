---
title: JavaScript 数组
date: 2018-04-20 22:18:50
publish: true
sticky: 1
categories:
  - 前端开发
---

:::tip
数组API、ES6新增数组API、自定义扩展方法
:::

<!-- more -->

## 扩展方法

### has()
```javascript
/**
 * @description 是否含有元素
 */
Array.prototype.has= function(elem){
  for (var i = 0; i < this.length; i++) {
    if (this[i] == elem) return true;
  }
  return false;
}
arrObj.has(elem)

// ES6
arrObj.includes(elem)
```

### uniq()

```javascript
/**
 * @description 数组去重
 */
Array.prototype.uniq = function(){
  var arr = [], me = this, len = me.length;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (me[i] === me[j]) j = ++i;
    }
    arr.push(me[i]);
  }
  return arr;
  }
arrObj.uniq()

// ES6
new Set(arrObj)
```

### unique()
```javascript
/**
 * @description 数组去重
 * @param {Array} arr 目标数组
 * @param {String} filed 若为数组对象，则需要提供去重字段
 */
export const unique = (arr, filed) => {
  if (!arr.length) return arr;
  if (!filed) return Array.from(new Set(arr));
  const obj = {};
  const newArr = arr.reduce((val, newVal) => {
    // eslint-disable-next-line no-unused-expressions
    obj[newVal[filed]] ? '' : obj[newVal[filed]] = true && val.push(newVal);
    return val;
  }, []);
  return newArr;
};
```

## ES6 新增API

### find()
传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索

``` javascript
const arr = [1, "2", 3, 3, "2"];

console.log(arr.find(n => typeof n === "number")); // => 1

// value：每一次迭代查找的数组元素;
// index：每一次迭代查找的数组元素索引;
// arr：被查找的数组。
arr.find(value, index, arr) => typeof n === "number");
```

### findIndex()
传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它的下标，终止搜索

``` javascript
const arr = [1, "2", 3, 3, "2"];

console.log(arr.findIndex(n => typeof n === "number")); // => 0
```

### fill()
用新元素替换掉数组内的元素，可以指定替换下标范围

``` javascript
arr.fill(value, start, end);
```

### copyWithin()
选择数组的某个下标，从该位置开始复制数组元素，默认从0开始复制。也可以指定要复制的元素范围

``` javascript
arr.copyWithin(target, start, end)

const arr = [1, 2, 3, 4, 5];
// [1,2,3,1,2] 从下标为3的元素开始，复制数组，所以4, 5被替换成1, 2
console.log(arr.copyWithin(3));

const arr1 = [1, 2, 3, 4, 5];
// [1,2,3,2,3] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，所以4, 5被替换成2, 3
console.log(arr1.copyWithin(3, 1));

const arr2 = [1, 2, 3, 4, 5];
// [1,2,3,2,5] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，结束位置为2，所以4被替换成2
console.log(arr2.copyWithin(3, 1, 2));
```

### from()
将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组

``` javascript
const bar = ["a", "b", "c"];

Array.from(bar);    // => ["a", "b", "c"]
Array.from('foo');  // => ["f", "o", "o"]
```

### of()
用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数 Array() 的不足。因为参数个数的不同，会导致 Array() 的行为有差异

``` javascript
Array();            // => []
Array(3);           // => [, , ,]
Array(3, 11, 8);    // => [3, 11, 8]
Array.of(7);        // => [7]
Array.of(1, 2, 3);  // => [1, 2, 3]
Array(7);           // => [ , , , , , , ]
Array(1, 2, 3);     // => [1, 2, 3]
```

### entries()
返回迭代器：返回键值对

``` javascript
// 数组
const arr = ['a', 'b', 'c'];
for(let v of arr.entries()) { console.log(v) }  // => [0, 'a'] [1, 'b'] [2, 'c']

// Set
const arr = new Set(['a', 'b', 'c']);
for(let v of arr.entries()) { console.log(v) }  // => ['a', 'a'] ['b', 'b'] ['c', 'c']

// Map
const arr = new Map();
arr.set('a', 'a');
arr.set('b', 'b');
for(let v of arr.entries()) { console.log(v) }  // => ['a', 'a'] ['b', 'b']
```

### values()
返回迭代器：返回键值对的value

``` javascript
// 数组
const arr = ['a', 'b', 'c'];
for(let v of arr.values()) { console.log(v) }  // => 'a' 'b' 'c'

// Set
const arr = new Set(['a', 'b', 'c']);
for(let v of arr.values()) { console.log(v) }  // => 'a' 'b' 'c'

// Map
const arr = new Map();
arr.set('a', 'a');
arr.set('b', 'b');
for(let v of arr.values()) { console.log(v) }  // => 'a' 'b'
```

### keys()
返回迭代器：返回键值对的key

``` javascript
// 数组
const arr = ['a', 'b', 'c'];
for(let v of arr.keys()) { console.log(v) }  // => 0 1 2

// Set
const arr = new Set(['a', 'b', 'c']);
for(let v of arr.keys()) { console.log(v) }  // => 'a' 'b' 'c'

// Map
const arr = new Map();
arr.set('a', 'a');
arr.set('b', 'b');
for(let v of arr.keys()) { console.log(v) }  // => 'a' 'b'
```

### includes()
判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误

``` javascript
const arr = [1, 2, 3];

arr.includes(2);  // => true
arr.includes(4);  // => false
```

## ES5 数组API

### 创建
```javascript
// 构造方式，可指定长度
var arrObj = new Array([length])

// 字面量方式创建并赋值
var arrObj = ['A', 'B', 1, 2]
```

### unshift() & push()
```javascript
// 从开始位置插入新元素，返回新长度值
arrObj.unshift([item1[, item2[, ...[, itemN]]]])

// 从末尾位置插入新元素
arrObj.push([item1[, item2[, ...[, itemN]]]])
```

### shift() & pop()
```javascript
// 移除首位元素并返回该元素
arrObj.shift()

// 移除末尾元素并返回该元素
arrObj.pop()

// 移除元素，并插入新元素，返回操作的元素 start：移除位置、deleteCount移除个数
arrObj.splice(start, deleteCount[, item1[, item2[, ...[, itemN]]]])
```

### slice()
```javascript
// 返回数组截取的部分，若end省略则复制start之后的所有元素
arrObj.slice(start[, end])
```

### concat()
```javascript
// 返回一个或多个数组或元素合并后的心数组
arrObj.concat([item1[, ...[, itemN]]])
```

### slice() & concat()
```javascript
// 返回一个新数组，非同一指向
arrObj.slice(0)
// 或者
arrObj.concat()
```

### reverse()
```javascript
// 最前排最后，最后排最前，会改变原数组
arrObj.reverse()
```

### sort()
```javascript
// 默认按ASCII排序，会改变原数组
arrObj.sort([softFunction])
```

### join()
```javascript
// 返回以 separator (默认为逗号)分隔元素的字符串
arrObj.join([separator])
```

### entries()
```javascript
// 按索引/键遍历
for (let key in arr){
  console.log(arr[key]);
}
// 按值遍历
for (let value of arr){
  console.log(value);
}
// ES6 按键值对进行遍历
for (let [key, value] of arr.entries()) {
  console.log(key,value);
}
```
### map()
```javascript
var arr = [1, 2, 3, 4, 5];

// 将每个数值元素 x 2
var arr2x = arr.map(function(val) {
  return val * 2;
})

console.log(arr2x) // => [2, 4, 6, 8, 10]
```
### reduce()
语法：`reduce(callback[, initVal])`
- `callback(oldVal, newVal, index, args){}`：回调
  - `oldVal`：旧值、累加值
  - `newVal`：新值
  - `index`：新值索引
  - `args`：数组
- `initVal`：初始值
```javascript
// 数组前5个元素求和
var arr = [1, 2, 3, 4, 5];

var sum = arr.reduce(function(val, newVal) {
  return val + newVal;
}, 0);

console.log(sum); // => 15
```
### filter() 
```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 过滤出小于 6 的元素
var newArr = arr.filter(function(val){
  return val < 6;
});

console.log(newArr); // => [1, 2, 3, 4, 5]
```

### every()
```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 判断数组元素是否都小于10
console.log(arr.every(function(item){
  return item < 10
})); // => true
```
