<script setup lang="ts">
import type { TPizza } from '~/types';
import { useCartStore } from '~/stores/cart';

const props = defineProps<{ pizza: TPizza }>();
const colorScheme = inject('colorScheme');
const { addToCart, clearCart } = useCartStore();

const handleAddToCart = async () => {
	await addToCart(props.pizza);
};

const handleClearCart = async () => {
	await clearCart();
};
</script>

<template>
	<div class="shadow-md rounded">
		<div class="grid grid-cols-2 gap-x-4">
			<div class="overflow-hidden rounded">
				<img
					:src="pizza?.image"
					alt=""
					class="object-cover"
				>
			</div>

			<div class="flex flex-col gap-y-1">
				<p :class="['font-bold', 'truncate']">
					{{ pizza?.name }}
				</p>
				<div class="flex flex-row gap-x-2 items-center">
					<icon
						class="text-green-600"
						name="arcticons:geoguessr"
						height="24"
						width="24"
					/>
					<p :class="['text-xs', 'whitespace-nowrap', colorScheme]">
						{{ pizza?.cuisine }}
					</p>
				</div>
				<div class="flex flex-row gap-x-2 items-center">
					<icon
						class="text-red-600"
						name="mdi-light:power"
						height="24"
						width="24"
					/>
					<p :class="['text-xs', colorScheme]">
						{{ pizza?.difficulty }}
					</p>
				</div>
				<div class="flex flex-row gap-x-2 items-center">
					<icon
						name="material-symbols:planner-review-rounded"
						width="24"
						height="24"
					/>
					<p class="text-sm">
						{{ pizza?.rating }}/10
					</p>
				</div>
				<div class="flex flex-row gap-x-2 items-center">
					<Icon
						name="ic:baseline-price-check"
						width="24"
						height="24"
					/>
					<p :class="['text-sm', colorScheme]">
						{{ pizza?.userId }} $
					</p>
				</div>

				<button @click="handleAddToCart">
					Добавить
				</button>
				<button @click="handleClearCart">
					Очистить
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
