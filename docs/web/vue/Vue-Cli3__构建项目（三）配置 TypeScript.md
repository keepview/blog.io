---
title: Vue-cli 3.0 构建项目（三）配置 TypeScript
date: 2018-07-25 11:12:06
publish: true
categories:
  - 前端开发
tags:
  - Vue-Cli
---

`tsconfig.json`:

```javascript
{
  // 编译选项
  "compilerOptions": {
	// 指定ECMAScript目标版本, 默认"ES3", 最新"esnext"
    "target": "esnext",
    // 指定生成哪个模块系统代码
    "module": "esnext",
    // 启用所有严格类型检查选项
    "strict": true,
    // 在 .tsx文件里支持JSX： "React"或 "Preserve"
    "jsx": "preserve",
    // 从 tslib 导入辅助工具函数
    "importHelpers": true,
    // 决定如何处理模块, 默认"Classic", "Node"对于Node.js/io.js
    "moduleResolution": "node",
    // 启用实验性的ES装饰器
    "experimentalDecorators": true,
    // 设置默认模块导出
    "esModuleInterop": true,
    // 允许从没有设置默认导出的模块中默认导入
    "allowSyntheticDefaultImports": true,
    // 生成相应的 .map文件
    "sourceMap": true,
    // 解析非相对模块名的基准目录
    "baseUrl": ".",
    // 要包含的类型声明文件名列表
    "types": [
      "node"
    ],
    // 模块名到基于 baseUrl的路径映射的列表
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    // 编译过程中需要引入的库文件的列表
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  // 包含文件
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  // 排除文件
  "exclude": [
    "node_modules"
  ]
}
```
