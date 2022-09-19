# npm包开发

## 使用 yalc 进行本地调试

### 安装

``` sh
npm install yalc -g
```

### 使用

安装本地包（例如包名为 basic-layout），在 `npm` 包目录下执行：

``` sh
npm run build && yalc publish
```

在项目目录下添加包

``` sh
yalc add basic-layout
```

这样会将**本次构建**的 basic-layout 安装到项目中，修改代码后需要重新 `publish`，然后在项目目录下更新包：

``` sh
yalc update
```

开发完成后将项目内的 yalc 包进行清理

``` sh
yalc remove --all
```

