import{_ as s,c as n,o as a,d as l}from"./app.0e930cd8.js";const m=JSON.parse('{"title":"\u76EE\u5F55\u8BF4\u660E","description":"","frontmatter":{},"headers":[],"relativePath":"demo/\u535A\u5BA2\u7BA1\u7406\u7CFB\u7EDF\u524D\u7AEF\u9879\u76EE\uFF08Vue.js\uFF09/\u76EE\u5F55\u8BF4\u660E.md","lastUpdated":1668009524000}'),p={name:"demo/\u535A\u5BA2\u7BA1\u7406\u7CFB\u7EDF\u524D\u7AEF\u9879\u76EE\uFF08Vue.js\uFF09/\u76EE\u5F55\u8BF4\u660E.md"},e=l(`<h1 id="\u76EE\u5F55\u8BF4\u660E" tabindex="-1">\u76EE\u5F55\u8BF4\u660E <a class="header-anchor" href="#\u76EE\u5F55\u8BF4\u660E" aria-hidden="true">#</a></h1><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">cyxbwww-admin</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .husky                     // git commit\u63D0\u4EA4\u94A9\u5B50\uFF0C\u63D0\u4EA4\u524D\u68C0\u67E5\u4EE3\u7801\u683C\u5F0F\u548C\u63D0\u4EA4commit\u5185\u5BB9\u7684\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 build                      // vite\u6784\u5EFA\u76F8\u5173\u914D\u7F6E\u548C\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 config                 // \u6784\u5EFA\u6253\u5305\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 proxy.ts           // \u7F51\u7EDC\u8BF7\u6C42\u4EE3\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 plugins                // \u6784\u5EFA\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 unocss.ts          // \u539F\u5B50css\u6846\u67B6unocss\u63D2\u4EF6\u3001\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 unplugin.ts        // \u81EA\u52A8\u5BFC\u5165\u7EC4\u4EF6\u3001\u81EA\u52A8\u89E3\u6790iconify\u56FE\u6807\u3001\u81EA\u52A8\u89E3\u6790\u672C\u5730svg\u4F5C\u4E3A\u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 visualizer.ts      // \u6784\u5EFA\u7684\u4F9D\u8D56\u5927\u5C0F\u5360\u6BD4\u5206\u6790\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 vue.ts             // vue\u76F8\u5173vite\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 utils                  // \u6784\u5EFA\u76F8\u5173\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 public                     // \u516C\u5171\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 favicon.ico            // \u7F51\u7AD9\u6807\u7B7E\u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 assets                 // \u9759\u6001\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 img                // \u56FE\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 svg-icon           // \u672C\u5730svg\u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 components             // \u5168\u5C40\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 common             // \u516C\u5171\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 custom             // \u81EA\u5B9A\u4E49\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 composables            // \u7EC4\u5408\u5F0F\u51FD\u6570(\u4ECE\u5916\u90E8\u5F15\u5165\u72B6\u6001+\u5185\u90E8\u72B6\u6001)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 events.ts          // \u4E8B\u4EF6\u76F8\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 icon.ts            // \u56FE\u6807\u76F8\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 layout.ts          // \u5E03\u5C40\u76F8\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 router.ts          // \u8DEF\u7531\u76F8\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 system.ts          // \u7CFB\u7EDF\u76F8\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 config                 // \u5168\u5C40\u5E38\u91CF\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 regexp.ts          // \u5E38\u7528\u6B63\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 service.ts         // \u8BF7\u6C42\u76F8\u5173\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 enum                   // TS\u679A\u4E3E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 business.ts        // \u4E1A\u52A1\u76F8\u5173\u679A\u4E3E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 common.ts          // \u901A\u7528\u679A\u4E3E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 system.ts          // \u7CFB\u7EDF\u76F8\u5173\u679A\u4E3E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 hooks                  // \u7EC4\u5408\u5F0F\u7684\u51FD\u6570hooks(\u72B6\u6001\u4ECE\u51FD\u6570\u91CC\u9762\u4EA7\u751F)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 common             // \u901A\u7528hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u2514\u2500\u2500 useBoolean     // boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 layouts                // \u5E03\u5C40\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 BasicLayout        // \u57FA\u672C\u5E03\u5C40(\u5305\u542B\u5168\u5C40\u5934\u90E8\u3001\u591A\u9875\u7B7E\u3001\u4FA7\u8FB9\u680F\u3001\u5E95\u90E8\u7B49\u516C\u5171\u90E8\u5206)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 BlankLayout        // \u7A7A\u767D\u5E03\u5C40\u7EC4\u4EF6(\u5355\u4E2A\u9875\u9762)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 common             // \u5168\u5C40\u5934\u90E8\u3001\u591A\u9875\u7B7E\u3001\u4FA7\u8FB9\u680F\u3001\u5E95\u90E8\u7B49\u516C\u5171\u90E8\u5206\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 GlobalBackTop  // \u5168\u5C40\u56DE\u5230\u9876\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 GlobalContent  // \u5168\u5C40\u4E3B\u4F53\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 GlobalFooter   // \u5168\u5C40\u5E95\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 GlobalHeader   // \u5168\u5C40\u5934\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 GlobalLogo     // \u5168\u5C40Logo</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 GlobalSearch   // \u5168\u5C40\u641C\u7D22</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 GlobalSider    // \u5168\u5C40\u4FA7\u8FB9\u680F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 GlobalTab      // \u5168\u5C40\u6807\u7B7E\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u2514\u2500\u2500 SettingDrawer  // \u9879\u76EE\u914D\u7F6E\u62BD\u5C49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 plugins                // \u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 assets.ts          // \u5404\u79CD\u4F9D\u8D56\u7684\u9759\u6001\u8D44\u6E90\u5BFC\u5165(css\u3001scss\u7B49)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 router                 // vue\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 guard              // \u8DEF\u7531\u5B88\u536B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 modules            // \u9759\u6001(static)\u6A21\u5F0F\u7684\u8DEF\u7531\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 routes             // \u58F0\u660E\u7684\u56FA\u5B9A\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 service                // \u7F51\u7EDC\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 api                // \u63A5\u53E3api</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 request            // \u5C01\u88C5\u7684\u8BF7\u6C42\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 settings               // \u9879\u76EE\u521D\u59CB\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 color.ts           // \u4F20\u7EDF\u989C\u8272\u76F8\u5173\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 theme.ts           // \u9879\u76EE\u4E3B\u9898\u521D\u59CB\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 store                  // pinia\u72B6\u6001\u7BA1\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 modules            // \u72B6\u6001\u7BA1\u7406\u5212\u5206\u7684\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 app            // app\u72B6\u6001(\u9875\u9762\u91CD\u8F7D\u3001\u83DC\u5355\u6298\u53E0\u3001\u9879\u76EE\u914D\u7F6E\u7684\u62BD\u5C49)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 auth           // auth\u72B6\u6001(\u7528\u6237\u4FE1\u606F)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 route          // route\u72B6\u6001(\u52A8\u6001\u8DEF\u7531\u3001\u83DC\u5355\u3001\u8DEF\u7531\u7F13\u5B58)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 tab            // tab\u72B6\u6001(\u591A\u9875\u7B7E\u3001\u7F13\u5B58\u9875\u9762\u7684\u6EDA\u52A8\u4F4D\u7F6E)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2502   \u2514\u2500\u2500 theme          // theme\u72B6\u6001(\u9879\u76EE\u4E3B\u9898\u914D\u7F6E)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 subscribe          // \u8BA2\u9605\u72B6\u6001(\u72B6\u6001\u53D8\u66F4\u540E\u6267\u884C\u4E00\u4E9B\u64CD\u4F5C)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 app.ts         // \u8BA2\u9605app\u7684\u72B6\u6001(\u914D\u7F6E\u5F39\u7A97\u6253\u5F00\u65F6\u7981\u7528body\u7684\u6EDA\u52A8)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u2514\u2500\u2500 theme.ts       // \u8BA2\u9605theme\u7684\u72B6\u6001(\u4E3B\u9898\u989C\u8272\u53D8\u66F4\u3001\u6697\u9ED1\u6A21\u5F0F\u53D8\u66F4\u3001\u9875\u9762\u6A2A\u5411\u6EDA\u52A8)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 styles                 // \u5168\u5C40\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 css                // css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 scss               // scss</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 typings                // TS\u7C7B\u578B\u58F0\u660E\u6587\u4EF6(*.d.ts)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 api.d.ts           // \u8BF7\u6C42\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 auto-imports.d.ts  // \u81EA\u52A8\u5BFC\u5165\u7684\u63D2\u4EF6\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 axios.d.ts         // axios\u6269\u5C55\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 business.d.ts      // \u4E1A\u52A1\u76F8\u5173\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 components.d.ts    // \u81EA\u52A8\u5BFC\u5165\u7684\u7EC4\u4EF6\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 env.d.ts           // vue\u8DEF\u7531\u63CF\u8FF0\u548C\u8BF7\u6C42\u73AF\u5883\u76F8\u5173\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 expose.d.ts        // defineExpose\u66B4\u9732\u51FA\u53D8\u91CF\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 global.d.ts        // \u5168\u5C40\u901A\u7528\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 route.d.ts         // \u8DEF\u7531\u7CFB\u7EDF\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 router.d.ts        // vue\u7684\u8DEF\u7531\u63CF\u8FF0\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 system.d.ts        // \u7CFB\u7EDF\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 utils                  // \u5168\u5C40\u5DE5\u5177\u51FD\u6570(\u7EAF\u51FD\u6570\uFF0C\u4E0D\u542B\u72B6\u6001)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 auth               // \u7528\u6237\u9274\u6743\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 common             // \u901A\u7528\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 crypto             // \u6570\u636E\u52A0\u5BC6\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 form               // \u8868\u5355\u76F8\u5173\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 router             // \u8DEF\u7531\u76F8\u5173\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 service            // \u8BF7\u6C42\u76F8\u5173\u7684\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 storage            // \u5B58\u50A8\u76F8\u5173\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 views                  // \u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 common             // \u7CFB\u7EDF\u5185\u7F6E\u9875\u9762\uFF1A\u767B\u5F55\u3001\u5F02\u5E38\u9875\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 dashboard          // \u4EEA\u8868\u76D8</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 exception          // \u5F02\u5E38</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 management         // \u7CFB\u7EDF\u7BA1\u7406\u529F\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 App.vue                // vue\u6587\u4EF6\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 main.ts                // \u9879\u76EE\u5165\u53E3ts\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .cz-config.js              // git cz\u63D0\u4EA4\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .env                       // \u73AF\u5883\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .env-config.ts             // \u8BF7\u6C42\u73AF\u5883\u7684\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .eslintignore              // \u5FFD\u7565eslint\u68C0\u67E5\u7684\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .eslintrc.js               // eslint\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .gitignore                 // \u5FFD\u7565git\u63D0\u4EA4\u7684\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .prettierrc.js             // prettier\u4EE3\u7801\u683C\u5F0F\u63D2\u4EF6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 commitlint.config.js       // commitlint\u63D0\u4EA4\u89C4\u8303\u63D2\u4EF6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json               // npm\u4F9D\u8D56\u63CF\u8FF0\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 pnpm-lock.yaml             // npm\u5305\u7BA1\u7406\u5668npm\u4F9D\u8D56\u9501\u5B9A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 README.md                  // \u9879\u76EE\u4ECB\u7ECD\u6587\u6863</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 tsconfig.json              // TS\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 vite.config.ts             // vite\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[e];function c(t,A,C,i,r,y){return a(),n("div",null,o)}var u=s(p,[["render",c]]);export{m as __pageData,u as default};
