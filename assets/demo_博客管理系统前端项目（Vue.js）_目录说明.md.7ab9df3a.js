import{_ as s,c as n,o as a,d as l}from"./app.45bd50e7.js";const m=JSON.parse('{"title":"目录说明","description":"","frontmatter":{},"headers":[],"relativePath":"demo/博客管理系统前端项目（Vue.js）/目录说明.md","lastUpdated":1671807328000}'),p={name:"demo/博客管理系统前端项目（Vue.js）/目录说明.md"},e=l(`<h1 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-hidden="true">#</a></h1><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">cyxbwww-admin</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .husky                     // git commit提交钩子，提交前检查代码格式和提交commit内容的格式</span></span>
<span class="line"><span style="color:#A6ACCD;">├── build                      // vite构建相关配置和插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── config                 // 构建打包配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── proxy.ts           // 网络请求代理</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── plugins                // 构建插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── unocss.ts          // 原子css框架unocss插件、配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── unplugin.ts        // 自动导入组件、自动解析iconify图标、自动解析本地svg作为图标</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── visualizer.ts      // 构建的依赖大小占比分析插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── vue.ts             // vue相关vite插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── utils                  // 构建相关工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">├── public                     // 公共目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── favicon.ico            // 网站标签图标</span></span>
<span class="line"><span style="color:#A6ACCD;">├── src</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── assets                 // 静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── img                // 图片</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── svg-icon           // 本地svg图标</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── components             // 全局组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── common             // 公共组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── custom             // 自定义组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── composables            // 组合式函数(从外部引入状态+内部状态)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── events.ts          // 事件相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── icon.ts            // 图标相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── layout.ts          // 布局相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── router.ts          // 路由相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── system.ts          // 系统相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── config                 // 全局常量配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── regexp.ts          // 常用正则</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── service.ts         // 请求相关配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── enum                   // TS枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── business.ts        // 业务相关枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── common.ts          // 通用枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── system.ts          // 系统相关枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── hooks                  // 组合式的函数hooks(状态从函数里面产生)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── common             // 通用hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── useBoolean     // boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── layouts                // 布局组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── BasicLayout        // 基本布局(包含全局头部、多页签、侧边栏、底部等公共部分)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── BlankLayout        // 空白布局组件(单个页面)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── common             // 全局头部、多页签、侧边栏、底部等公共部分组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── GlobalBackTop  // 全局回到顶部</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── GlobalContent  // 全局主体内容</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── GlobalFooter   // 全局底部</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── GlobalHeader   // 全局头部</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── GlobalLogo     // 全局Logo</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── GlobalSearch   // 全局搜索</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── GlobalSider    // 全局侧边栏</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── GlobalTab      // 全局标签页</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── SettingDrawer  // 项目配置抽屉</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── plugins                // 插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── assets.ts          // 各种依赖的静态资源导入(css、scss等)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── router                 // vue路由</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── guard              // 路由守卫</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── modules            // 静态(static)模式的路由数据</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── routes             // 声明的固定路由</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── service                // 网络请求</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── api                // 接口api</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── request            // 封装的请求函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── settings               // 项目初始配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── color.ts           // 传统颜色相关信息</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── theme.ts           // 项目主题初始配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── store                  // pinia状态管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── modules            // 状态管理划分的模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── app            // app状态(页面重载、菜单折叠、项目配置的抽屉)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── auth           // auth状态(用户信息)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── route          // route状态(动态路由、菜单、路由缓存)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── tab            // tab状态(多页签、缓存页面的滚动位置)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── theme          // theme状态(项目主题配置)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── subscribe          // 订阅状态(状态变更后执行一些操作)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── app.ts         // 订阅app的状态(配置弹窗打开时禁用body的滚动)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── theme.ts       // 订阅theme的状态(主题颜色变更、暗黑模式变更、页面横向滚动)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── styles                 // 全局样式</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── css                // css</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── scss               // scss</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── typings                // TS类型声明文件(*.d.ts)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── api.d.ts           // 请求接口返回的数据的类型声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── auto-imports.d.ts  // 自动导入的插件的类型声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── axios.d.ts         // axios扩展的类型声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── business.d.ts      // 业务相关的类型声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── components.d.ts    // 自动导入的组件的类型声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── env.d.ts           // vue路由描述和请求环境相关的类型声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── expose.d.ts        // defineExpose暴露出变量的类型</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── global.d.ts        // 全局通用类型</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── route.d.ts         // 路由系统的类型声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── router.d.ts        // vue的路由描述的类型声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── system.d.ts        // 系统的类型声明</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── utils                  // 全局工具函数(纯函数，不含状态)</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── auth               // 用户鉴权工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── common             // 通用工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── crypto             // 数据加密工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── form               // 表单相关工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── router             // 路由相关工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── service            // 请求相关的工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── storage            // 存储相关工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── views                  // 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── common             // 系统内置页面：登录、异常页等</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── dashboard          // 仪表盘</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── exception          // 异常</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── management         // 系统管理功能</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── App.vue                // vue文件入口</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── main.ts                // 项目入口ts文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .cz-config.js              // git cz提交配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .env                       // 环境文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .env-config.ts             // 请求环境的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .eslintignore              // 忽略eslint检查的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .eslintrc.js               // eslint配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .gitignore                 // 忽略git提交的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .prettierrc.js             // prettier代码格式插件配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├── commitlint.config.js       // commitlint提交规范插件配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├── index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package.json               // npm依赖描述文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── pnpm-lock.yaml             // npm包管理器npm依赖锁定文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── README.md                  // 项目介绍文档</span></span>
<span class="line"><span style="color:#A6ACCD;">├── tsconfig.json              // TS配置</span></span>
<span class="line"><span style="color:#A6ACCD;">└── vite.config.ts             // vite配置</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[e];function c(t,A,C,i,r,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{m as __pageData,u as default};
