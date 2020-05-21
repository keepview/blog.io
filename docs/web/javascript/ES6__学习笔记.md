---
title: ES6 学习总结
date: 2018-04-12 09:23:12
publish: true
categories:
  - 前端开发
tags:
  - ES6
description: ECMAScript 是标准化组织 ECMA 发布的脚本语言规范
---

# 变量声明

## 常量 const

- ES5
``` javascript
Object.defineProperty(window, 'PI', {
	value: 3.1415926,
	writable: false
})
console.log(PI);        // => 3.1415926
console.log(window.PI); // => 3.1415926
```
- ES6 :
``` javascript
const PI = 3.1415926;
console.log(PI); // => 3.1415926
```

## 变量 let
- 不允许重复声明
- 不存在声明提前（无变量提升）
- 具有块级作用域，包含在`{}`中
- ES5 :
``` javascript
(function() {
	var a; // 通过闭包模拟
})()
```
- ES6 :
``` javascript
{
	let a;
}
```

# 数组扩展

## Array.from() 转化数组
- `Array.from()`用于将两类对象转为真正的数组：
	-- 类数组（伪数组）对象
	-- 可枚举（可遍历）对象（包括 ES6 新增的数据结构 Set 和Map ）。
``` javascript
// 类数组对象
let arrList = {  
	'0': 'a',
	'1': 'b',
	'2': 'c',
	length: 3
};

// ES5
console.log([].slice.call(arrList)); // => ["a", "b", "c"]
// ES6
console.log(Array.from(arrList));    // => ["a", "b", "c"]

// arguments对象
function fun() {
	var args = Array.from(arguments);
	console.log(args); // => ["xm", 18, "book"]
}
fun('xm', 18, 'book');

// 节点对象
let elemList = document.getElementsByTagName('li');
Array.from(elemList) // => 输出如下
```

- `Array.from` 接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组。
``` javascript
var oldArr = [1, 2, 3]

var newArr = Array.from(oldArr, function(n){
	return n * 2
});

console.log(newArr) // => [2, 4, 6]
  
//  花式写法  
Array.from(oldArr, n => n * 2); 
Array.from(oldArr, (n) => n * 2)  
Array.from(oldArr).map(n => n * 2);  
```
## Array.of() 非稀疏数组
- 用于将一组值转换为数组
- 避免了使用 `new Array()` 单个参数会构建一个长度为3的稀疏数组问题
``` javascript
let arr1 = new Array(3);
let arr2 = Array.of(3);
let arr3 = Array.of(1, 3, 5);

console.log(arr1, arr2, arr3)
```

## copyWithin() 内部拷贝
- 将数组的一部分元素复制到其他位置 ,会改动原数组
- 语法：`arrObj.copyWithin(replaceIndex, startIndex, endIndex)`
- `不包含结束元素`，左闭右开 ，负值代表倒数
``` javascript
let arr = [1, 2, 3, 4, 5];

arr.copyWithin(1, 3, 5);
console.log(arr); // => [1, 4, 5, 4, 5]
```
## find()、findIndex() 查找
- 以回调函数作为参数
- 回调函数的参数依次为元素、索引、数组引用，与ES5数组方法相同
``` javascript
var arr = [1,2,3,4,5,6];

// 返回第一个满足条件的元素 
console.log(arr.find(function(item) {  
	return item > 3;  
})) // => 4 

// 返回第一个满足条件的索引，若无则返回 -1
console.log(arr.findIndex(function(item) {  
	return item > 3;  
})) // => 3

```
## fill() 填充
- 用于填充数组 ,会修改调用它的数组
- 语法：`arrObj.fill(fillElement, startIndex, endIndex)`
``` javascript
var arr1 = [1,'a',undefined];
var arr2 = [...arr1];

console.log(arr1.fill('c'));       // => ["c", "c", "c"]
console.log(arr2.fill('d', 1, 3)); // => [ 1 , "d", "d"]
```
## include() 包含
- 用于检测数组是否包含指定元素，可以检测到 `NaN`
- 语法：`arrObj.include(element)`
``` javascript
console.log([1,2,NaN].includes(1)); // => true
```
## entries()、keys()、values() 迭代
- 用于迭代数组，返回一个迭代器对象 ，配合for-of循环可以迭代数组
- `arrObj.entries()` 默认  遍历键值对
``` javascript
for(let index of arr.entries()) {
	console.log(index[0]); // key
	console.log(index[1]); // value
}
```
- `arrObj.keys()` 遍历索引
``` javascript
for(let key of arr.keys()) {
	console.log(key);
}
```
- `arrObj.values()` 遍历值
``` javascript
for(let val of arr.values()) {
	console.log(val);
}
```

# Map( ) 对象
- 只能通过构造创建 `map` 对象
``` javascript
var map = new Map();
map.set('like','tomato');  // 设置属性
map.get('like');           // 获取属性
map.delete('like');        // 删除属性

for(let index of map.entries()) {
	console.log(index[0]); // key
	console.log(index[1]); // value
}
```

# 箭头函数 ( ) => { }
- 不存在 `arguments` 属性
- `this` 是在定义函数的时候绑定，且无法使用 `call()`、`apply()`，一般指向 `window`
- 形参与返回值唯一的情况下可简写
``` javascript
(a, b) => {
	let sum = (a + b) / (a * b);
	return sum;
}

// 单条语句可省略{}和return
v => v++;
(a, b) => a + b;

// 当返回对象要用括号（）括起来
v => ({
	name: "hannah"
})

// 多条语句不能省略 {} 和 return
v => {
	if(v > 0) return true;
	return false;
}
```

# 对象类 class
## 继承 extends
- ES5 :
``` javascript
function Person(name,age) {
	this.name = name;
	this.age = age;
}
Person.prototype.get = function(key) {
	return this[key];
}
Person.prototype.set = function(key, value) {
	this[key] = value;
}

// 继承
function Student(name, age) {
	Person.apply(this, arguments);
}
Student.prototype = new Person();

// 创建实例对象
var xm = new Student('小明', 10);
xm.set('age', 18);
console.log(xm.get('name')); // => 小明
console.log(xm.get('age'));  // => 18
```
- ES6 :
``` javascript
class Person {
	// 构造函数
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	get(key) {
		return this[key];
	}
	set(key,value) {
		this[key] = value;
	}
}
// 继承
class Student extends Person {
	review() {
		console.log('复习功课')
	}
}

// 创建实例对象
let xm = new Student('小明', 16);
console.log(xm.get('name')) // => 小明
xm.review()                 // => 复习功课

// hasOwnProperty() 检测对象是否含有某属性
console.log(xm.hasOwnProperty('name'))  // => true
console.log(xm.hasOwnProperty('sleep')) // => false
```
## 代理 proxy
- 目标对象不能直接从外部访问，只能通过代理对象访问目标对象
- 语法 `var proxy = new Proxy(target, handler)`，target：目标对象、handler：代理方法
``` javascript

// 目标对象 target
var cat = {
	name: "tom",
	like: "sleep"
}

// 代理、添加方法
var proxyCat = new Proxy(cat, {
	get: function(key){
		return this.key;
	},
	set: function(key, value) {
		this.key = value;
	},
	play: function() {
		console.log('逗猫球')
	}
})

proxyCat.set('like', 'jack');
proxyCat.play();                   // => 逗猫球
console.log(proxyCat.get('like')); // => jack
console.log(proxyCat.get('name')); // => tom

```
# 解构赋值
- 键值对应
``` javascript
var [a,b,c] = [1,2,3];

var [a,{b,c},[d,e]] = [1,{b:2,c:3},[4,5]]

console.log(a,b,c,d,e) // => 12345
```
# 模板字符串（template string）
- 增强版的字符串，用(Esc键下) 的反引号 `` ` 标识，调用变量 `${name}`
``` javascript
var a = '皆';
var str = `万物${a}虚，万事${a}允`;
console.log(str); // => 万物皆虚，万事皆允
```
# 异步处理 Promise()
- 主要用于获取异步数据
- 语法 ` new Promise((resolve, reject) => { })`
`resolve` 异步成功后的回调函数
`reject` 异步失败后的回调函数
- `Promise.prototype.then()` 方法
Promise实例状态（`fullfiled`、`rejected`）改变时的执行回调
- `Promise.prototype.catch()` 方法
是.then(null,rejeaction)的别名，用于指定发生错误时的回调函数。
``` javascript
const promise = new Promise(function(resolve, reject) {

	resolve(data); // 异步成功后执行

	reject(error); // 失败后执行

});

promise
.then(function(data){
	console.log('请求成功，数据：' + data)
},function(error){
	console.warn('请求失败，错误信息：' + error)
})
.catch(function(error){
	// 处理当前与前一个回调函数运行时发生的错误
	console.log(error);
})
```
# 数字扩展
##指数(求幂)运算符 `**`
运算符左操作是基数，右操作数是指数
``` javascript
const power1 = 3 ** 2;
const power2 = power1 **= 2;

console.log(power) // => 9
console.log(power) // => 81
```
## 进制标识
二进制 `0b` / `0B`，八进制 `0o` / `0O`
``` javascript
console.log(0b110 === 6) // => true
console.log(0o20 === 10) // => true

// 转十进制
console.log(Number(0b110)) // => 6
console.log(Number(0o20))  // => 10
```
## Number 方法
- `parseInt()`、移植到Number对象上面，行为不变
- `parseFloat()`，移植到Number对象上面，行为不变

- `Number.isFinite()`  检查一个数值是否为有限的（finite）
无隐式的Number()类型转换，非数值一律返回false
- `Number.isNaN()` 用来检查一个值是否为NaN
无转换，NaN一律返回false
- `Number.isInteger()` 用来判断一个值是否为整数
- Number常量
	- `Number.EPSILON` 为浮点数计算，设置一个可接受误差范围
	- `Number.MAX_SAFE_INTEGER` 范围上限
	- `Number.MIN_SAFE_INTEGER` 范围下限
	- `Number.isSafeInteger()` 判断一个整数是否落在这个范围之内
## Math对象新增方法
- `Math.trunc()` 去除一个数的小数部分，返回整数部分
- `Math.sign()` 判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值
- `Math.cbrt()` 用于计算一个数的立方根
- `Math.clz32()` 返回一个数的32位无符号整数形式有多少个前导0，JS的整数使用32位二进制形式表示
- `Math.imul()` 返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数
- `Math.fround()` 返回一个数的单精度浮点数形式
- `Math.hypot()` 返回所有参数的平方和的平方根
- `Math.expm1(x)` 返回ex - 1，即Math.exp(x) - 1
- `Math.log1p(x)` 返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN
- `Math.log10(x)` 返回以10为底的x的对数。如果x小于0，则返回NaN
- `Math.log2(x)` 返回以2为底的x的对数。如果x小于0，则返回NaN
- `Math.sinh(x)` 返回x的双曲正弦（hyperbolic sine）
- `Math.cosh(x)` 返回x的双曲余弦（hyperbolic cosine）
- `Math.tanh(x)` 返回x的双曲正切（hyperbolic tangent）
- `Math.asinh(x)` 返回x的反双曲正弦（inverse hyperbolic sine）
- `Math.acosh(x)` 返回x的反双曲余弦（inverse hyperbolic cosine）
- `Math.atanh(x)` 返回x的反双曲正切（inverse hyperbolic tangent）
# 函数扩展
## 默认值 
- 参数默认值的位置
``` javascript
function fun(x, y = 'hannah') {
	console.log(x, y);
}
fun('hi'); // => hi hannah
```
- 与解构赋值组合使用
只有形参与实参对应时，才会使用解构赋值
``` javascript
function fun({x, y = 'hannah'}) {
	console.log(x, y);
}

fun({});                   // => undefined jack
fun({x: 'hi'});            // => hi hannah
fun({x: 'hi', y: 'jack'}); // => hi jack
fun();                     // TypeError
```
## name 属性
``` javascript
var fn1 = function add() {}
var fn2 = function() {};      // 匿名
var fn3 = new Function();     // 构造
var fn4 = function(){}.bind() // bing 绑定

console.log(fn1.name) // => add
console.log(fn2.name) // => fn2
console.log(fn3.name) // => anonymous
console.log(fn4.name) // => bound
```
## rest 参数 （…variableName）
- 用于获取函数的多余参数，替代 `arguments`
- rest 参数之后不能再有其他参数（作为最后一个形参）
``` javascript
function add(...args) {
	let sum
	for (var val of args) {
		sum += val;
	}
	return sum;
}

add(1, 3, 5) // => 9
```
## 扩展运算符 `...`
- 将一个数组转为用逗号分隔的参数序列，主要用于函数调用
- 任何Iterator 接口的对象，都可以用 `...` 转为真正的数组
``` javascript
let map = new Map([  
	[1, 'one'],  
	[2, 'two'],  
	[3, 'three']
]);  
console.log([...map.keys()]); // => [1, 2, 3]  
```
- 替代数组的 apply 方法
``` javascript
var arr = ['A', 'B', 'C'];

// ES5
function fun1(){
	console.log(arguments[0]); // => A
	console.log(arguments[1]); // => B
	console.log(arguments[2]); // => C
}
fun1.apply(null, arr)

// ES6
function fun2(...args){
	console.log(args[0]); // => A
	console.log(args[1]); // => B
	console.log(args[2]); // => C
}
fun2(...arr);
```
- 应用示例
``` javascript
// 计算最大值
let max = Math.max(...[1, 3, 5]);
console.log(max) // => 5

// 合并数组
let arr1 = ['A', 'B', 'C'];
let arr2 = [1, 3, 5];
console.log([...arr1, ...arr2]); // => ["A", "B", "C", 1, 3, 5]

// 拆分字符串
// JavaScript 会将 32 位 Unicode 字符，识别为 2 个字符(length = 2)，采用扩展运算符就没有这个问题
console.log([...'sky']); // => ["s", "k", "y"]
```
## 尾调用（Tail Call）、尾递归
- 指某个函数的最后一步是调用另一个函数
- 尾调用优化（Tail call optimization），调用栈只有一层
- 只有不再用到外部变量，才能进行 尾调用优化！
``` javascript
// 递归计算阶乘
function fact(n){
    if(n === 1) return 1;
    return n * fact(n - 1);
}
// ES6 尾递归优化，相对节省内存
function fact(n,total){
    if(n === 1) return total;
    return fact(n - 1, n * total);
}
```
>引用资料
>[es6 扩展运算符 三个点（...）](https://blog.csdn.net/qq_30100043/article/details/53391308)
>[ES6 类(Class)基本用法和静态属性+方法详解](https://blog.csdn.net/pcaxb/article/details/53759637)
>[JS - Promise使用详解2（ES6中的Promise）](http://www.hangge.com/blog/cache/detail_1638.html)
>[ES6数字扩展](https://www.cnblogs.com/xiaohuochai/p/7266540.html)
>[ES6--函数扩展](https://blog.csdn.net/tiem_erhu/article/details/51035344)
>[学习笔记：ES6之数组扩展（重要）](https://blog.csdn.net/qq_38658877/article/details/78063666)
