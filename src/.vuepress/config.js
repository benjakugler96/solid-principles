const { description } = require('../../package');

module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: 'Cliente Servidor - Grupo 1',
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		[
			'meta',
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
		],
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		repo: '',
		editLinks: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: false,
		nav: [
			{
				text: 'Guide',
				link: '/introduccion/intro',
			},
			{
				text: 'Github',
				link: 'https://v1.vuepress.vuejs.org',
			},
		],
		sidebar: {
			'/introduccion/': [
				{
					title: 'Principios SOLID',
					collapsable: false,
					children: [
						'intro',
						'resp-unica',
						'abierto-cerrado',
						'liskov',
						'seg-interfaz',
						'inv-dependencia',
						'conclusion',
					],
				},
			],
		},
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
