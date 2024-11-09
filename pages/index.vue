<script setup lang="ts">
import { useCart } from '~/stores/cart';

const pizza = ref(null);
onMounted(async () => {
	pizza.value = await $fetch('https://dummyjson.com/recipes');
});

const colorScheme = inject('colorScheme');

const { addToCart, removeFromCart } = useCart();

const handleAddToCart = (item) => {
	console.log(1);
	addToCart(item);
};

const handleRemoveFromCart = (item) => {
	removeFromCart(item);
};
</script>

<template>
	<div class="container">
		<div class="grid grid-cols-1 gap-y-4 p-1">
			<div
				v-for="(item, index) in pizza?.recipes"
				:key="index"
			>
				<div class="grid grid-cols-2 gap-x-4">
					<div class="overflow-hidden rounded">
						<img
							:src="item?.image"
							alt=""
							class="object-cover"
						>
					</div>

					<div class="">
						<p :class="['font-bold', colorScheme]">
							{{ item?.name }}
						</p>
						<p class="text-xs">
							Страна произодства: {{ item?.cuisine }}
						</p>
						<p class="text-xs">
							Сложность: {{ item?.difficulty }}
						</p>
						<p :class="['font-aggressive', colorScheme]">
							Рейтинг: {{ item?.rating }}
						</p>
						<p>Цена: {{ item?.userId }}</p>
						<p @click="handleAddToCart(item)">
							Добавить в корзину
						</p>
						<p @click="handleRemoveFromCart(item)">
							Удалить из корзины
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="postcss">

</style>
