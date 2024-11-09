import type { IPizza } from '~/types';

export const usePizzaStore = defineStore('pizza', () => {
	const pizza = ref<IPizza | null>(null);
	const isLoading = shallowRef(true);

	const getPizza = async () => {
		try {
			pizza.value = await $fetch('https://dummyjson.com/recipes');
		}
		catch (e) {
			console.error(e);
		}
		finally {
			isLoading.value = false;
		}
	};

	onMounted(async () => {
		await getPizza();
	});

	return {
		pizza,
	};
});
