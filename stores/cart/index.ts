export const useCart = defineStore('cart', () => {
	const cart = ref<Array<object>>([]);

	const addToCart = (pizza: object) => {
		cart.value.push(pizza);
		console.log(cart.value, ' -cart');
	};

	const removeFromCart = (pizza: object) => {
		const index = cart.value.findIndex(el => el.id === pizza.id);
		cart.value.splice(index, 1);
		console.log(cart.value, ' - remove');
	};

	return {
		cart,
		addToCart,
		removeFromCart,
	};
});
