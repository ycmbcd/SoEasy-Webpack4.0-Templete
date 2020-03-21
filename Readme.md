# SoEasy-Webpack4.0-Templete

# 说明

一款开箱即用的基于 `Webpack 4.0` 搭建的 `WebApp` 模板。

> 目录说明

```bash
/src/ .......................开发目录
/src/assets/ ................资源目录
/dist/ ......................打包输出目录
/dist/static/css/ ...........打包后css目录
/dist/static/js/ ............打包后js目录
/dist/static/images/ ........打包后图片目录
/node_modules/ ..............包目录
```

# 特色

- 配置文件分离，生产 `prodection` 模式、开发 `development` 模式，适合大中型应用开发。
- 配置项目清晰明了，适合初学者上手。
- `/src` 文件夹自带 `Demo`，`yarn run dev` 后，会在浏览器打开一个 `Demo` 运行界面判断插件加载器是否正常运行。

# 配置

- webpack.coommon.js 公共配置文件
- webpack.dev.js 开发 `development` 模式配置文件
- webpack.prod.js 生产 `prodection` 模式配置文件

> 运行脚本配置： package.json

```json
"scripts": {
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack-dev-server --config webpack.dev.js"
},
```

# 功能

- ES6 编译 ES5。
- Js 文件压缩，sourse-map 分配。
- CSS 样式分离、压缩。
- CSS3 前缀自动补全。
- 图片小于 10kb 进行 `base64` 转码.
- 打包文件哈希值分配，便于部署更新。
- 支持热更新「HMR」，默认端口：8080。
- 默认支持 `favicon.ico` 打包。

# 使用

```bash
# 初始化
yarn

# 开发模式
yarn run dev

# 构建
yarn run build
```

# 许可
MIT License
