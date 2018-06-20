---
style: candy
---
# react-pages-app  
## npm install  初始化项目
**config -> entry -> entry.js  配置多页入口文件**

```
module.exports = [
    {
        name: 'index',
        path: 'index/index.jsx',
        title: '首页',
        keywords: '首页,xxx',
        description: '这是我们的首页'
    },
    {
        name: 'shop',
        path: 'shop/index.jsx',
        title: '商城',
        keywords: '商城,xxx',
        description: '这是我们的商城'
    }
];
```
**config -> entry -> entryBuild.js  配置多页入口文件**

```
const fs = require("fs");
const path = require("path");
const entry = require('./entry');
const rimraf = require('rimraf');

//定义entryBuild
const entryBuildPath = path.resolve(__dirname, '../../entry');
//删除entryBuild
rimraf.sync(entryBuildPath);
//创建entryBuild
fs.mkdirSync(entryBuildPath);
const entryContent = data => `import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../app/component/${data.path}';
import Header from '../app/component/common/Header';
import Footer from '../app/component/common/Footer';
ReactDOM.render([<Header key="Header"/>,<Index key="Index"/>,<Footer key="Footer"/>],document.getElementById('app'));`;
/*生成webpack entry 入口文件*/
entry.map((data) => {
    fs.writeFile(entryBuildPath + '/' + data.name + '.js', entryContent(data), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
});
```
## npm run devNew 生成入口文件
## npm run dev 运行项目预览
## npm run build 打包