import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Luooo的博客',
	themeConfig: {
		nav: [
			{ text: 'GitHub', link: 'https://github.com/cyxbwww/vitepress-blog' },
			{ text: '掘金', link: 'https://juejin.cn/user/2058727243123982/posts' }
		],
		sidebar: [
			{
				text: 'Javascript',
				collapsible: true,
				items: [
					{ text: '数组', link: '/javascript/数组' }
				]
			}
		]
	}
})
