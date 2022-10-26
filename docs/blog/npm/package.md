# package.json
## 1. 介绍

从 `npm 5.x` 开始，执行 `npm install` 时会自动生成一个 `package-lock.json` 文件。

`npm` 为了让开发者**在安全的前提下使用最新的依赖包**，在 `package-lock.json` 中做了锁定大版本的操作，这样每次 `npm install` 的时候都会拉取依赖包大版本下的最新的版本。在依赖包有小版本更新时可能会出现协同开发者的依赖包不一致的问题。

`package-lock.json` 文件精确描述了 `node_modules` 目录下所有的包的树状依赖结构，每个包的版本号都是完全精确的。以 `vite` 在 `package-lock.json` 中为例：

``` json
"vite": {
  "version": "3.0.9",
  "resolved": "https://registry.npmjs.org/vite/-/vite-3.0.9.tgz",
  "integrity": "sha512-waYABTM+G6DBTCpYAxvevpG50UOlZuynR0ckTK5PawNVt7ebX6X7wNXHaGIO6wYYFXSM7/WcuFuO2QzhBB6aMw==",
  "dev": true,
  "requires": {
    "esbuild": "^0.14.47",
    "fsevents": "~2.3.2",
    "postcss": "^8.4.16",
    "resolve": "^1.22.1",
    "rollup": ">=2.75.6 <2.77.0 || ~2.77.0"
  },
  "dependencies": {
    "rollup": {
      "version": "2.77.3",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-2.77.3.tgz",
      "integrity": "sha512-/qxNTG7FbmefJWoeeYJFbHehJ2HNWnjkAFRKzWN/45eNBBF/r8lo992CwcJXEzyVxs5FmfId+vTSTQDb+bxA+g==",
      "dev": true,
      "requires": {
        "fsevents": "~2.3.2"
      }
    }
  }
},
```

`package-lock.json` 的详细描述主要由 `version`、`resolved`、`integrity`、`dev`、`requires`、`dependencies` 这几个字段构成：

- `version`：包唯一的版本号
- `resolved`：安装源
- `integrity`：表明包完整性的 `hash` 值，验证包是否已失效
- `dev`：如果为 `true`，则此依赖关系仅是顶级模块的开发依赖关系或者是一个传递依赖关系
- `requires`：依赖包所需要的所有依赖项，对应依赖包 `package.json` 里 `dependencies` 中的依赖项
- `dependencies`：依赖包 `node_modules` 中依赖的包，与顶层的 `dependencies` 一样的结构

## 依赖包

### 依赖包分类

在 `node` 中有五种依赖：

- dependencies - 业务依赖
- devDependencies - 开发依赖
- peerDependencies - 同伴依赖
- bundledDependencies / bundleDependencies - 打包依赖
- optionalDependencies - 可选依赖

作为 `npm` 的使用者，我们常用的依赖是 `dependencies` 和 `devDependencies`，剩下三种依赖是作为包的发布者才会使用到的字段。
