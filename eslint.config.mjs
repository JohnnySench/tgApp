// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	{
		rules: {
			'max-len': ['warn', { code: 120 }],
		},
	},
	// Your custom configs here
);
