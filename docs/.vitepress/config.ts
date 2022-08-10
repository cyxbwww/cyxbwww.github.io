import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Luooo的博客',
	head: [
			[ 'link', { rel: 'icon', href: '/logo.png' } ]
	],
	themeConfig: {
		logo: "/logo.png",
		nav: [
			{ text: '博客', link: '/blog/' },
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
