---
title: DB-MongoDB 学习笔记
date: 2018-05-12 13:18:46
publish: true
categories:
  - 后端开发
tags:
 - MongoDB
---

:::tip
非关系型数据库
:::

<!-- more -->

## 安装配置
下载 [mongoDB 2.0.43](https://www.mongodb.org/dl/win32/x86_64-2008plus-ssl?_ga=2.33286462.1829829008.1526102215-89839735.1523783267), 
安装位置与数据保存位置并无关系
```cmd
npm install mongodb --save
```
安装可视化工具 robomongo 0.9.0

配置环境变量


## 启动数据库服务
保持cmd窗口开启状态，若关闭则会关闭数据库
```cmd
mongod --dbpath [path]
```
`--dbpath`: 数据存储的文件夹路径

## 连接数据库
在新的cmd窗口下
```cmd
mongo
```

## 导入 JSON 文件
在非数据库操作状态下执行

```cmd
mongoimport --db [dbName] --collection [collectionName] --file [filePath] --drop
```
`--db` 数据库名  
`--collection` 集合名  
`--file` json 文件路径  
`--drop` 可选，清空当前集合里的内容

## 操作数据库
> 结构：mongo -> 数据库(db) -> 集合(collection) -> json对象

```cmd
# 列出所有数据库
show dbs

# 选择数据库，如果不存在则创建 
use [dbName]

# 查看当前数据库 
db

# 列出所有集合
show collections
```

```javascript
// 插入数据，collectionsName(集合名)，若不存在则创建
// 在 student集合 中插入字段
db.student.insert({'name': 'hannah', 'age': 18})

// 删除当前所在数据库，直接执行(无提示)
db.dropDatabase()

// 删除集合
db.[collectionsName].drop

// 删除指定字段（文档），返回删除数量
db.[collectionsName].remove(jsonData)
// 删除 student集合中 age 为 18 的所有字段
db.student.remove({'age': 18})
```

## 条件查询
`db.[collectionsName].find()`
```javascript
// 列出 student集合 中的所有字段
db.student.find()

// 精确匹配
db.student.find({'name': 'hannah'})

// 多个条件
db.student.find({'name': 'hannah', 'age': 18})

// 大于条件
db.student.find({'age': {$gt: 18}})

// 小于条件
db.student.find({'age': {$lt: 18}})

// 或条件
db.student.find({$or:[{'age': 10}, {'age': 18}]})

// 排序 - 正序
db.student.find().sort("age": 1)

// 排序 - 反序
db.student.find().sort("age": -1)

// name按正序，age按反序
db.student.find().sort("name": 1, "age": -1)
```

## Node.js 连接 MongoDB
```javascript
const express = require("express");
const app = express();

// 连接数据库必须的对象
let mongoClient = require('mongodb').MongoClient;

app.get("/",function(req,res){

  // 数据库地址，如果数据库名称不存在，则会创建
  let url = "mongodb://127.0.0.1:27017/dbName";
  
  mongoClient.connect(url, (err, db) => {
    if (err) return console.log('连接数据库失败');
    console.log('连接成功')

    // 往 student集合 中插入数据
    db.collection('student').insertOne({
      "name" : "jack",
      "age" : parseInt(Math.random() * 100 + 20)
    },function(err, result){
      if (err) return console.log('插入数据失败');

      res.send(result);

      // 关闭连接
      db.close;
    })
  })
})

app.listen(3000)
```
## mongoose 连接模型
```
npm install mongoose --save
```
