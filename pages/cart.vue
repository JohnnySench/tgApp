<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import { usePizzaStore } from '~/stores/pizza';

const { cart } = storeToRefs(useCartStore());
const { pizza } = storeToRefs(usePizzaStore());
const selectedPizza = computed(() => {
	if (pizza.value?.recipes?.length) {
		return pizza.value?.recipes?.filter(({ id }) => cart.value?.includes(id));
	}
	return null;
});
</script>

<template>
	<div>
		<h1>card</h1>
		<components-pizza-card
			v-for="(pizza, index) in selectedPizza"
			:key="pizza.id"
			:pizza="pizza"
		/>
	</div>
</template>

<style scoped>

</style>
