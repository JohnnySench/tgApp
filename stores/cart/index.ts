import { useWebAppCloudStorage } from 'vue-tg';
import type { TPizza } from '~/types';

export const useCartStore = defineStore('cart', () => {
	const cart = ref<Array<number>>([]);

	const addToCart = async (pizza: TPizza) => {
		cart.value.push(pizza.id);
		const ids = cart.value.map(id => id);
		const oldOrders = await useWebAppCloudStorage().getStorageItem('ids');
		if (oldOrders && JSON.parse(oldOrders)?.length) {
			const parseOldOrders = JSON.parse(oldOrders);
			parseOldOrders.push(pizza.id);
			await useWebAppCloudStorage().setStorageItem('ids', JSON.stringify(parseOldOrders));
		}
		else {
			await useWebAppCloudStorage().setStorageItem('ids', JSON.stringify(ids));
		}
	};

	const removeFromCart = async (pizza: TPizza) => {
		const orders: Array<number> = JSON.parse(await useWebAppCloudStorage().getStorageItem('ids') as string);
		if (orders?.length) {
			const newOrders = orders.filter(id => id !== pizza.id);
			await useWebAppCloudStorage().setStorageItem('ids', JSON.stringify(newOrders));
		}
		const index = cart.value.findIndex(el => el.id === pizza.id);
		cart.value.splice(index, 1);
	};

	const clearCart = async () => {
		await useWebAppCloudStorage().setStorageItem('ids', '');
		cart.value = [];
	};

	const initCart = async () => {
		const oldOrders = await useWebAppCloudStorage().getStorageItem('ids');
		if (oldOrders && JSON.parse(oldOrders)?.length) {
			cart.value = JSON.parse(oldOrders);
		}
	};

	onMounted(async () => {
		await initCart();
	});

	return {
		cart,
		addToCart,
		removeFromCart,
		clearCart,
	};
});
