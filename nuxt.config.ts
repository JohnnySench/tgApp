// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@pinia/nuxt', '@nuxt/icon', '@nuxt/eslint'],
	ssr: false,
	components: [
		{
			path: 'shared',
			extensions: ['.vue'],
			prefix: 'shared',
		},
		{
			path: 'features',
			extensions: ['.vue'],
			prefix: 'feature',
		},
		{
			path: 'widgets',
			extensions: ['.vue'],
			prefix: 'widget',
		},
		{
			path: 'components',
			extensions: ['.vue'],
			prefix: 'components',
		},
		{
			path: 'layouts',
			extensions: ['.vue'],
			prefix: 'layout',
		},
	],
	devtools: { enabled: false },
	app: {
		head: {
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
				},
			],

			script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
		},
	},
	css: ['~/assets/style/main.pcss'],
	devServer: {
		host: '192.168.0.13',
	},
	compatibilityDate: '2024-11-05',
	postcss: {
		plugins: {
			'postcss-nested': {},
			'tailwindcss': {},
			'autoprefixer': {},
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
});
