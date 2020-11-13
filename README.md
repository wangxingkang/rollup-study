<h1 align="center">
  rollup2.0 学习过程记录
</h1>

## 前言

本库主要记录 Rollup JavaScript API 以及 Rollup的插件 的使用，包含各种使用场景的示例。

本文主要对当下流行的 `ESModule`、`CommonJS`、`Umd` 三种打包格式进行，如您有其他格式的需求，可以提 [issues](https://github.com/wangxingkang/rollup-study/issues)

## Rollup 插件说明

|包名|作用|
|---|----|
|[@rollup/plugin-buble](https://github.com/rollup/plugins/tree/master/packages/buble)|rollup的ES6编译插件|
|[@rollup/plugin-babel](https://github.com/rollup/plugins/tree/master/packages/babel)|babel编译插件|
|[@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs)|支持CommonJS的模块引用的rollup插件|
|[@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/commonjs)|支持npm模块引用的rollup插件|
|[@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json)|json 引用解析插件|
|[@rollup/plugin-alias](https://github.com/rollup/plugins/tree/master/packages/alias)|定义别名|
|[@rollup/plugin-replace](https://github.com/rollup/plugins/tree/master/packages/replace)|替换插件|
|[@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript)|typescript编译插件|
|[rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2)|社区实现的typescript编译插件|
|[rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)|css编译插件|
|[rollup-plugin-vue](https://www.npmjs.com/package/rollup-plugin-vue)|vue编译插件|
|[rollup-plugin-uglify](https://github.com/TrySound/rollup-plugin-uglify)|代码混淆插件|