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
					items: [
						{ text: '数组', link: '/blog/javascript/数组' },
						{ text: '数组内置方法', link: '/blog/javascript/数组内置方法' },
						{ text: '对象', link: '/blog/javascript/对象' },
						{ text: '对象内置方法', link: '/blog/javascript/对象内置方法' },
						{ text: '属性标志和属性描述符', link: '/blog/javascript/属性标志和属性描述符' },
						{ text: 'Map和Set', link: '/blog/javascript/Map和Set' },
						{ text: '函数', link: '/blog/javascript/函数' },
						{ text: '期约与异步函数', link: '/blog/javascript/期约与异步函数' },
					]
				},
				{
					text: 'npm',
					collapsible: true,
					collapsed: true,
					items: [
						{ text: '基础知识', link: '/blog/npm/基础' }
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
					text: '博客管理系统',
					collapsible: true,
					items: [
						{ text: '项目搭建', link: '/demo/博客后台管理/项目搭建' },
					]
				}
			]
		}
	}
})
