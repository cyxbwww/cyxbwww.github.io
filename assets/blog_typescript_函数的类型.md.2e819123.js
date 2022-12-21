import{_ as s,c as n,o as a,d as p}from"./app.189fcc18.js";const i=JSON.parse('{"title":"\u51FD\u6570\u7684\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51FD\u6570\u58F0\u660E","slug":"\u51FD\u6570\u58F0\u660E"},{"level":2,"title":"\u51FD\u6570\u8868\u8FBE\u5F0F","slug":"\u51FD\u6570\u8868\u8FBE\u5F0F"}],"relativePath":"blog/typescript/\u51FD\u6570\u7684\u7C7B\u578B.md","lastUpdated":1671633051000}'),l={name:"blog/typescript/\u51FD\u6570\u7684\u7C7B\u578B.md"},o=p(`<h1 id="\u51FD\u6570\u7684\u7C7B\u578B" tabindex="-1">\u51FD\u6570\u7684\u7C7B\u578B <a class="header-anchor" href="#\u51FD\u6570\u7684\u7C7B\u578B" aria-hidden="true">#</a></h1><h2 id="\u51FD\u6570\u58F0\u660E" tabindex="-1">\u51FD\u6570\u58F0\u660E <a class="header-anchor" href="#\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a></h2><p>\u5728 JavaScript \u4E2D\uFF0C\u6709\u4E24\u79CD\u5E38\u89C1\u7684\u5B9A\u4E49\u51FD\u6570\u7684\u65B9\u5F0F\u2014\u2014\u51FD\u6570\u58F0\u660E\uFF08Function Declaration\uFF09\u548C\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08Function Expression\uFF09\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u51FD\u6570\u58F0\u660E</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u51FD\u6570\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> mySum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E00\u4E2A\u51FD\u6570\u6709\u8F93\u5165\u548C\u8F93\u51FA\uFF0C\u8981\u5728 TypeScript \u4E2D\u5BF9\u5176\u8FDB\u884C\u7EA6\u675F\uFF0C\u9700\u8981\u628A\u8F93\u5165\u548C\u8F93\u51FA\u90FD\u8003\u8651\u5230\uFF0C\u5176\u4E2D\u51FD\u6570\u58F0\u660E\u7684\u5B9A\u4E49\u8F83\u7B80\u5355\uFF1A</p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u8F93\u5165\u591A\u4F59\u7684\uFF08\u6216\u5C11\u4E8E\u8981\u6C42\u7684\uFF09\u53C2\u6570\uFF0C\u662F\u4E0D\u88AB\u5141\u8BB8\u7684\uFF1A</strong></p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Expected 2 arguments, but got 3.</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Expected 2 arguments, but got 1.</span></span>
<span class="line"></span></code></pre></div><h2 id="\u51FD\u6570\u8868\u8FBE\u5F0F" tabindex="-1">\u51FD\u6570\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u51FD\u6570\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><p>\u5982\u679C\u8981\u6211\u4EEC\u73B0\u5728\u5199\u4E00\u4E2A\u5BF9\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u5B9A\u4E49\uFF0C\u53EF\u80FD\u4F1A\u5199\u6210\u8FD9\u6837\uFF1A</p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> mySum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u662F\u53EF\u4EE5\u901A\u8FC7\u7F16\u8BD1\u7684\uFF0C\u4E0D\u8FC7\u4E8B\u5B9E\u4E0A\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u53EA\u5BF9\u7B49\u53F7\u53F3\u4FA7\u7684\u533F\u540D\u51FD\u6570\u8FDB\u884C\u4E86\u7C7B\u578B\u5B9A\u4E49\uFF0C\u800C\u7B49\u53F7\u5DE6\u8FB9\u7684 <code>mySum</code>\uFF0C\u662F\u901A\u8FC7\u8D4B\u503C\u64CD\u4F5C\u8FDB\u884C\u7C7B\u578B\u63A8\u8BBA\u800C\u63A8\u65AD\u51FA\u6765\u7684\u3002\u5982\u679C\u9700\u8981\u6211\u4EEC\u624B\u52A8\u7ED9 <code>mySum</code> \u6DFB\u52A0\u7C7B\u578B\uFF0C\u5219\u5E94\u8BE5\u662F\u8FD9\u6837\uFF1A</p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> mySum</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\u4E0D\u8981\u6DF7\u6DC6\u4E86 TypeScript \u4E2D\u7684 <code>=&gt;</code> \u548C ES6 \u4E2D\u7684 <code>=&gt;</code>\u3002</p><p>\u5728 TypeScript \u7684\u7C7B\u578B\u5B9A\u4E49\u4E2D\uFF0C<code>=&gt;</code> \u7528\u6765\u8868\u793A\u51FD\u6570\u7684\u5B9A\u4E49\uFF0C\u5DE6\u8FB9\u662F\u8F93\u5165\u7C7B\u578B\uFF0C\u9700\u8981\u7528\u62EC\u53F7\u62EC\u8D77\u6765\uFF0C\u53F3\u8FB9\u662F\u8F93\u51FA\u7C7B\u578B\u3002</p><p>\u5728 ES6 \u4E2D\uFF0C<code>=&gt;</code> \u53EB\u505A\u7BAD\u5934\u51FD\u6570\u3002</p>`,17),e=[o];function t(c,r,y,F,D,C){return a(),n("div",null,e)}var u=s(l,[["render",t]]);export{i as __pageData,u as default};
