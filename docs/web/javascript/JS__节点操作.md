---
title: JavaScript 节点操作
date: 2018-04-23 22:14:02
publish: true
categories:
  - 前端开发
tags: 原生JS
---

## 创建节点
```javascript
// 创建元素节点
document.createElement('div');

// 创建文本节点
document.createTextNode();

// 创建注释节点 并木有用
document.createComment();

// 创建片段
document.createDocumentFragment();
```

## 复制节点
```javascript
// true标识会克隆原节点的所有子节点
nodeObj.cloneNode(boolean)
```

## 插入节点
```javascript
// 在目标节点追加尾部子节点
parentNode.appendChild(childNode);

// 在目标节点追加首位子节点
parentNode.insertBefore(newNode, targetNode);

/* 
  option: 'beforeBegin'  在node之前插入html
        'afterEnd'     在node之后插入...
      'afterBegin'   在子元素之前插入...
      'before'       在子元素之后插入...
*/
node.insertAdjacentHTML(option, html)
```

## 替换节点
```javascript
parentNode.replace(newNode, targetNode)
```

## 移除节点
```javascript
parentNode.removeChild(childNode) // 谋杀式
childNode.remove() // 自杀式
```

## 查找节点
```javascript
document.getElementById()
document.getElementsByTagName()
document.getElementByName()

// 返回子节点列表
node.childNodes

// 返回第一个子节点
node.firstChild

// 返回最后一个子节点
node.lastChild

// 返回父节点
node.parentNode

// 返回祖先节点
node.ownerDocument

// 返回同级前一个节点
node.previousSibling

// 返回同级后一个节点
node.nextSibling
```
