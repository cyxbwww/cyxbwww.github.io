import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Luooo的博客',
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
						{ text: '数组方法', link: '/blog/javascript/数组方法' },
						{ text: '对象', link: '/blog/javascript/对象' },
						{ text: 'Map and Set', link: '/blog/javascript/Map和Set' },
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
