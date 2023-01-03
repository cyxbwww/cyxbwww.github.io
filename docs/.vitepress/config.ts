import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Luooo的博客',
	head: [
			[ 'link', { rel: 'icon', href: '/logo.png' } ]
	],
	lastUpdated: true,
	themeConfig: {
		logo: '/logo.png',
		outlineTitle: '目录',
		lastUpdatedText: '最近更新时间',
		docFooter: {
			prev: '上一页',
			next: '下一页'
		},
		nav: [
			{ text: '博客', link: '/blog/' },
			{ text: '书单', link: '/book/' },
			{ text: '个人项目', link: '/demo/' },
			{ text: 'GitHub', link: 'https://github.com/cyxbwww/vitepress-blog' },
			{ text: '掘金', link: 'https://juejin.cn/user/2058727243123982/posts' }
		],
		sidebar: {
			'/blog/': [
				{
					text: 'Javascript',
					collapsible: true,
					collapsed: true,
					items: [
						{ text: '数组', link: '/blog/javascript/数组' },
						{ text: '数组内置方法', link: '/blog/javascript/数组内置方法' },
						{ text: '对象', link: '/blog/javascript/对象' },
						{ text: '对象内置方法', link: '/blog/javascript/对象内置方法' },
						{ text: '属性标志和属性描述符', link: '/blog/javascript/属性标志和属性描述符' },
						{ text: 'Map和Set', link: '/blog/javascript/Map和Set' },
						{ text: '函数', link: '/blog/javascript/函数' },
						{ text: '期约（ Promise ）', link: '/blog/javascript/期约' },
						{ text: '异步函数（ async/await ）', link: '/blog/javascript/异步函数' },
						{ text: '迭代器', link: '/blog/javascript/迭代器' },
						{ text: '生成器', link: '/blog/javascript/生成器' },
						{ text: '代理与反射（ Proxy/Reflect ）', link: '/blog/javascript/代理与反射' },
						{ text: '代理捕获器与反射方法', link: '/blog/javascript/代理捕获器与反射方法' },
					]
				},
				{
					text: 'TypeScript',
					collapsible: true,
					collapsed: true,
					items: [
						{ text: '原始数据类型', link: '/blog/typescript/原始数据类型' },
						{ text: '任意值', link: '/blog/typescript/任意值' },
						{ text: '类型推论', link: '/blog/typescript/类型推论' },
						{ text: '联合类型', link: '/blog/typescript/联合类型' },
						{ text: '接口', link: '/blog/typescript/接口' },
						{ text: '数组的类型', link: '/blog/typescript/数组的类型' },
						{ text: '函数的类型', link: '/blog/typescript/函数的类型' },
						{ text: '类型断言', link: '/blog/typescript/类型断言' },
						{ text: '声明文件', link: '/blog/typescript/声明文件' },
						{ text: '内置对象', link: '/blog/typescript/内置对象' },
						{ text: '类型别名', link: '/blog/typescript/类型别名' },
						{ text: '字符串字面量类型', link: '/blog/typescript/字符串字面量类型' },
						{ text: '元组', link: '/blog/typescript/元组' },
						{ text: '枚举', link: '/blog/typescript/枚举' },
						{ text: '类', link: '/blog/typescript/类' },
						{ text: '类与接口', link: '/blog/typescript/类与接口' },
						{ text: '泛型', link: '/blog/typescript/泛型' },
						{ text: '声明合并', link: '/blog/typescript/声明合并' },
					]
				},
				{
					text: 'Vue',
					collapsible: true,
					collapsed: true,
					items: [
						{ text: '全局API', link: '/blog/vue/全局API' },
						{ text: '组合式API', link: '/blog/vue/组合式API' },
						{ text: '选项式API', link: '/blog/vue/选项式API' },
						{ text: '内置内容', link: '/blog/vue/内置内容' },
						{ text: '单文件组件', link: '/blog/vue/单文件组件' },
						{ text: '进阶API', link: '/blog/vue/进阶API' }
					]
				},
				// {
				// 	text: 'Egg.js',
				// 	collapsible: true,
				// 	collapsed: true,
				// 	items: [
				// 		{ text: '基础', link: '/blog/eggjs/基础' }
				// 	]
				// },
				// {
				// 	text: 'Nest.js',
				// 	collapsible: true,
				// 	collapsed: true,
				// 	items: [
				// 		{ text: '基础', link: '/blog/nestjs/基础' }
				// 	]
				// },
				{
					text: 'NPM',
					collapsible: true,
					collapsed: true,
					items: [
						{ text: '介绍', link: '/blog/npm/介绍' },
						{ text: 'package.json', link: '/blog/npm/package' },
						{ text: 'npm包开发', link: '/blog/npm/npm包开发' }
					]
				}
			],
			'/book/': [
				{
					'text': '你不知道的JavaScript',
					collapsible: true,
					items: [
						{ text: '作用域和闭包', link: '/book/你不知道的JavaScript/作用域和闭包' },
						{ text: 'this和对象原型', link: '/book/你不知道的JavaScript/this和对象原型' },
						{ text: '类型和语法', link: '/book/你不知道的JavaScript/类型和语法' },
						{ text: '异步和性能', link: '/book/你不知道的JavaScript/异步和性能' }
					]
				}, {
					'text': 'Vue.js设计与实现',
					collapsible: true,
					collapsed: true,
					items: [
						{ text: '框架设计概览', link: '/book/Vue.js设计与实现/框架设计概览' },
						{ text: '响应系统', link: '/book/Vue.js设计与实现/响应系统' },
						{ text: '渲染器', link: '/book/Vue.js设计与实现/渲染器' },
						{ text: '组件化', link: '/book/Vue.js设计与实现/组件化' },
						{ text: '编译器', link: '/book/Vue.js设计与实现/编译器' },
						{ text: '服务端渲染', link: '/book/Vue.js设计与实现/服务端渲染' },
					]
				}
			],
			'/demo/': [
				{
					text: '博客管理系统前端项目（Vue.js）',
					collapsible: true,
					items: [
						{ text: '项目搭建', link: '/demo/博客管理系统前端项目（Vue.js）/项目搭建' },
						{ text: '目录说明', link: '/demo/博客管理系统前端项目（Vue.js）/目录说明' }
					]
				},
				{
					text: '博客管理系统后端项目（Egg.js）',
					collapsible: true,
					items: [
						{ text: '项目搭建', link: '/demo/博客管理系统后端项目（Egg.js）/项目搭建' },
						{ text: '目录说明', link: '/demo/博客管理系统后端项目（Egg.js）/目录说明' }
					]
				},
				{
					text: '博客管理系统后端项目（Nest.js）',
					collapsible: true,
					items: [
						{ text: '项目搭建', link: '/demo/博客管理系统后端项目（Nest.js）/项目搭建' },
						{ text: '目录说明', link: '/demo/博客管理系统后端项目（Nest.js）/目录说明' }
					]
				}
			]
		}
	}
})
