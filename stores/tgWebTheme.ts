import { useWebAppTheme } from 'vue-tg';

export const useTgWebThemeStore = defineStore('tgWebAppThemeStore', () => {
	const colorScheme = shallowRef< 'light' | 'dark' >('light');

	const { colorScheme: scheme, onThemeChanged } = useWebAppTheme();

	const getColorMode = () => {
		colorScheme.value = scheme.value === 'light' ? 'light' : 'dark';
	};

	onThemeChanged(() => {
		if (colorScheme.value === 'light') {
			colorScheme.value = 'dark';
		}
		else {
			colorScheme.value = 'light';
		}
	});

	onMounted(() => {
		getColorMode();
	});
	return {
		colorScheme,
	};
});
