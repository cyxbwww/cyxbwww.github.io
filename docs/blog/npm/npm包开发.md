# `npm` 包开发

## 初始化

``` sh
$ mkdir basic-tab
$ cd basic-tab
 
# 可以先为 npm init 设置默认值
$ npm set init-author-name 'cyxbwww'
$ npm set init-author-email '18219326208@163.com'
$ npm set init-author-url 'https://cyxbwww.github.io/'
$ npm set init-license 'MIT'
 
# 初始化 package.json
$ npm init -y
 
# 安装所需模块...
$ npm install -S vue-demi
```

### 配置 `package.json`

``` json
{
  "name": "@cyxbwww/basic-tab",
  // 允许发布到 npm
  private: false,
  // 配置项目入口
  "main": "./dist/index.umd.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  // 发布到 npm 的文件
  "files": [
    "dist"
  ]
}
```

## 使用 `yalc` 进行本地调试

### 安装

``` sh
$ npm install yalc -g
```

### 使用

安装本地包（例如包名为 @cyxbwww/basic-tab），在 `npm` 包目录下执行。

``` sh
$ npm run build
$ yalc publish
```

在项目目录下添加包。

``` sh
$ yalc add @cyxbwww/basic-tab
```

这样会将 **本次构建** 的 basic-tab 安装到项目中，修改代码后需要重新 `publish`，然后在项目目录下更新包。

``` sh
$ yalc update
```

开发完成后将项目内的 yalc 包进行清理。

``` sh
$ yalc remove --all
```

