---
title: TypeScript 基础语法入门
date: 2020-02-02 19:00:00
publish: true
categories:
  - 前端开发
tags:
  - TypeScript
---

## 静态类型的理解

一个静态类型的变量，不仅仅意味着这个变量的类型不能修改，还意味着这个变量上的属性和方法也就确定了。

正因如此，在使用静态类型的时候编辑器可以提供非常友好的语法提示。

```typescript
// TypeScript 可以根据参数的值推断出参数类型
const oldYear = 2019;

// 当然也可以声明类型
let year: number = 2019;

// 声明类型之后只能赋所声明类型的值
year = 2020;    // 正确
year = '2020';  // 报错, 数值非 number 类型

// 可以定义一个类型来声明
interface Point {
  x: number,
  y: number
}

// 所定义的类型必须含有 x 与 y 属性，且值为数值类型
const point: Point = {
  x: 50,
  y: 100
};

// 当使用 point 这个变量时，编辑器可以根据类型推导出这个变量还有 x 与 y 属性
```

## 基础类型和对象类型

TypeScript 参数类型
- 基础类型：`symbol`、`void`、number、string、boolean、null、undefined
- 对象类型：{}、Class、function、[]

```typescript
// 基础类型
const name: string = 'hannah';
const age: number = 18;

// 如果把声明与赋值放在两行, TS 推断不出类型，
let count;  // 这里推断不出，需要类型注解
count = 123;

// 对象类型
const teacher: { name: string, age: number } = {
  name: 'hannah',
  age: 18
};

// 其他的 case
interface Person {
  name: string
}
const rawData = '{"name": "dell"}';
// JSON.parse 或者是一些内置函数返回的内容并不能帮助 TS 推断出类型, 所以这种情况需要注解
const newData: Person = JSON.parse(rawData);

// 变量可能有多种类型的值
let temp: number | string = 123;
temp = '456';b
```

不同对象类型的声明方式
```typescript
// 声明一个数组的元素类型，指定元素类型为 number
const numbers: number[] = [1, 2, 3]

// 声明一个对象类型也可以使用类
class Person {}
const hannah: Person = new Person();

// 声明一个函数，指定函数返回值为 string 类型
// : 冒号后面 () => string 部分是声明类型
// = 等号后面才是函数的具体实现
const getName: () => string = () => {
  return 'hannah';
}
```

## 类型注解和类型推断

type annotation 类型注解, 我们来告诉TS变量是什么类型

type inference 类型推断, TS 会自动的去尝试分析变量的类型
- 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
- 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

在 TypeScript 里面，我们应该尽量让变量都有类型。
``` typescript
// 像这样明显的声明类型，这就是 "类型注解"
let count: number;
count = 123

// 并没有声明类型，但是TS会自动的推断出值的类型为number，这就是类型推断
let countInference = 123;

const firstNumber = 1;
const secondNumber = 2;

// 可以推断出 total 的类型为 number
const total = firstNumber + secondNumber;

// 这种情况 TS 无法推断出具体的类型
function getTotal(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// 那我们就需要给出具体的类型
function getTotal(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}

// 给出具体类型后，TS可以推断出类型了
const total = getTotal(1, 2);

// 对于对象，TS 也会去推断出对象的每个属性的类型
const obj = {
  name: 'hannah',
  age: 18
};
```

箭头函数的两种注解写法

``` typescript
// 若函数可以推断出返回值类型，这种写法可以省略掉返回值类型声明 : number
const fn1 = (str: string): number => {
  return parseInt(str, 10);
}

// : 冒号后面跟的一般都是类型，= 等号后面跟的是函数的具体实现
const fn2: (str: string) => number = (str) => {
  return parseInt(str, 10);
}
```

## 函数相关类型

`void`: 声明函数没有返回值；
`never`: 声明函数内代码无法完全执行。

``` typescript
// 给函数的返回值指定类型
function add(first: number, second: number): number {
  return first + second;
}

// void: 声明函数不能有返回值
function sayHello(): void {
  console.log('hello');
}

// never: 这个函数永远不可能执行到最后, 即该函数不一定能执行完成
function errorEmitter(): never {
  throw new Error();
  console.log('不会执行到这里');
}
```
函数参数也会接收一些解构的内容
``` typescript
// 解构类型的类型注解方式
function add(
  { first, second } : { first: number, second: number }
  ): number {
  return first + second;
};

// 解构单个参数也要在 {} 后声明 : {}, 只要是解构都需如此
function getNumber({ first } : { first: number }) {
  return first;
};

const total = add({ first: 1, second: 2 });
const count = getNumber({ first: 1 });
```

## 数组和元组

### 数组

- 数组单一类型注解
``` typescript
// 每一个数组元素都是 number 类型
const arr1: number[] = [1, 2, 3];
// 每一个数组元素都是 string 类型
const arr2: string[] = ['a', 'b', 'c'];
// 每一个数组元素都是 undefined
const arr3: undefined[] = [undefined];
```
- 数组多类型注解
``` typescript
// 每一个数组元素都是 number 或者 string 类型
const arr: (number | string)[] = [1, '2', 3];
```
- 数组对象类型注解
``` typescript
// 每一个数组元素都是 number 或者 string 类型
const objArr: { name: string, age: number }[] = [
  { name: 'hannah', age: 18 }
];
```
- 数组对象使用 ***type alias 类型别名*** 方式进行类型注解
``` typescript
// type alias 类型别名
type User = { name: string, age: number };

// 每一个数组元素都是 number 或者 string 类型
const objArr: User[] = [
  { name: 'hannah', age: 18 }
];

// 也可以使用 class 来注解，TS 不会强制要求 new Class
class Teacher {
  name: string,
  age: number
}

const objectArr: Teacher[] = [
  new Teacher(),  // 不强制要求
  { 
    name: 'hannah',
    age: 18
  }
];
```

### 元组 tuple
> 元组类型，可以更准确的约束数组中的每一项内容
``` typescript
// 这种方式只能约束数组元素类型，无法精确约束每个元素
const teacher: (number | string) = ['david', 'male', 18];

// 当数组长度与类型都固定时, 将数组转为元组来进行管理
const teacherArr: [string, string, number] = ['david', 'male', 18];

// 当处理 csv 文件数据时有奇效
const teacherList: [string, string, number][] = [
  ['david', 'male', 18],
  ['anna', 'male', 20],
  ['hannah', 'male', 22],
];
```

## Interface 接口
### interface 与 type 的差异
- type 类型别名的注解可以是一个基础类型
- interface 接口的注解只能代表一个函数或对象

当 interface 无法满足要求，才使用 type
``` typescript
interface Person {
  name: string
}

type Person1 = {
  name: string
}

// Person2 可以代表 string， 而 Person 只能代表一个函数或对象
type Person2 = string;
```

### interface 定义
``` typescript
interface Person {
  // 只能读取，不能修改
  readonly id: string;
  // 必须有该属性
  name: string;
  // 该属性可有可无
  age?: number;
  // 其他属性定义，属性名为字符串类型，值为任意类型
  [propName: string]: any;
  // 方法定义, 返回值为 string 类型
  say(): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
}

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
}

const person = {
  name: 'hannah'
};

getPersonName(person);
setPersonName(person, 'anna');

// 注意：当以字面量形式直接传一个对象给变量时，TS会对该对象进行强校验
getPersonName({
  name: 'Virgil',
  sex: 'male',
  say() {
    return 'say hello',
  }
});

// 定义函数的接口声明
interface SayHi {
  (word: string): string
}

const say: SayHi = (word: string) => {
  return word;
}
```

### 接口继承 extends
一个接口可以继承另一个接口的所有属性

``` typescript
interface Person {
  name: string;
}

interface Teacher extends Person {
  teach(): string;
}
```

### 类使用接口进行约束 implements

``` typescript
interface Person {
  name: string;
}

class User implements Person {
  name = 'hannah';
  say() {
    return 'hello';
  }
}
```

## 类的定义与继承
``` typescript
// 定义父类
class Person {
  name = 'hannah';
  getName() {
    return this.name;
  }
}

// 定义子类，继承父类 Person 的属性与方法
class Teacher extends Person {
  getTeacherName() {
    return 'hannah';
  }
  // 与父类方法同名时，子类方法会覆盖父类方法
  getName() {
    // super 关键字指向父类 this
    // 当覆盖了父类的方法又想调用父类的方式时，使用 super 调用父类方法
    return super.getName() + 'anna';
  }
}

const teacher = new Teacher();

// teacher 既有父类 getName 方法，又有子类 getTeacherName 方法
console.log(teacher.getName());
console.log(teacher.getTeacherName());

```
## 类中的访问类型和构造器
### 类的访问类型
- `public` 允许在类的内部与外部被调用，也是属性或方法的默认访问类型
- `private` 允许在类内部被调用
- `protected` 允许在类内部及继承的子类中调用
- `construction` 构造方法定义

``` typescript
// 父类定义
class Person {
  public name: string;    // 允许在类的内部与外部被调用
  private sex: string;    // 允许在类内部被调用
  protected age: number;  // 允许在类内部及继承的子类中调用
  public sayHi() {
    // 类的内部调用
    console.log(this.sex);
  }
}

// 子类定义
class Teacher extends Person {
  public sayBye() {
    // 继承的子类中调用
    console.log(super.age);
  }
}

const teacher = new Teacher();
// 类的外部调用
console.log(teacher.name)
```

### 类的构造器
构造器方法，会在类实例化时自动调用

``` typescript
class Person {
  // 传统写法
  // private name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // 简化写法，等价于上面的写法
  constructor(public name: string) {}
}

const person = new Person('anna');
console.log(person.name);
```

当子类也要声明构造器时，不管父类有没定义构造器，子类需要调一下父类的构造器

``` typescript
class Person {
  constructor(public name: string) {}
}

class Teacher extends Person {
  constructor(public age: number) {
    // 相当于调了父类的构造方法
    super('hannah');
  }
}

const teacher = new Teacher(28);
console.log(teacher.name);
console.log(teacher.age);
```

## 静态属性，Setter 和 Getter
一般情况下我们看到私有属性的命名都加了个 `_` 前缀，这样命名方便与 静态属性 Setter 和 Getter 配合使用
``` typescript
class Person {
  constructor(private _name: string) {}
  // 外部不能调用内部 private 声明的属性，但可以通过静态属性间接调用
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  },
}

const person = new Person('hannah');

// 允许通过属性的方式调用
console.log(person.name); // get
person.name = 'anna';     // set
```

### 示例：单例模式实现

- static 声明将属性或方法挂载在类上，而不是类的实例上
- 将构造器私有化可防止外部 new 该对象

``` typescript
class Person {
  // 定义私有静态属性，用于存放唯一的一个实例
  private static instance: Demo;
  // 将构造器函数私有化，杜绝外部直接 new
  private constructor(public name: string) {}
  // 定义静态方法，用于在外部获取实例
  static getInstance() {
    // 当实例不存在时，new 一个实例返回
    if (!this.instance) {
      this.instance = new Demo('hannah');
    }
    return this.instance;
  }
}

// demo1 和 demo2 返回的是同一个实例
const demo1 = Person.getInstance();
const demo2 = Person.getInstance();
```

## 抽象类
readonly 限制属性只能读不能改
``` typescript
class Person {
  // readonly 限制属性只能读不能改
  private readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('hannah');
console.log(person.name);
```

多个类具有通用的部分，我们可以将通用的部分定义出来
``` typescript
// 定义抽象类 abstract
abstract class Geom {
  width: number;
  getType() {
    return 'Gemo';
  }
  // 定义抽象方法，因为时抽象的，只定义不实现
  abstract getArea(): number;
}

class Circle extends Geom {
  // 实现抽象方法
  getArea() {
    return 123;
  }
}

class Square {}

class Circle {}
```

也可以将接口通用的部分，单独拎出来
``` typescript
// 人类：通用部分
interface Person {
  name: string,
}

// 教师类
interface Teacher extends Person {
  teachingAge: number,
}

// 学生类
interface Student extends Person {
  grade: number,
}

const getName = (user: Person) {
  console.log(user.name);
}

getName({ name: 'hannah', teachingAge: 3 });
getName({ name: 'anna', grade: 18 });
```
