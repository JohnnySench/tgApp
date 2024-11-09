<script setup lang="ts">
const currentId = shallowRef(1);

const links = computed(() => {
	return [
		{
			text: 'Каталог',
			iconName: 'ic:sharp-menu',
			action: async (selectId: number) => {
				currentId.value = selectId;
				await navigateTo({
					name: 'index',
				});
			},
			id: 1,
		},
		{
			text: 'Избранное',
			iconName: 'ic:baseline-favorite-border',
			action: async (selectId: number) => {
				currentId.value = selectId;
				await navigateTo({
					name: 'favorite',
				});
			},
			id: 2,
		},
		{
			text: 'Профиль',
			iconName: 'pajamas:profile',
			action: async (selectId: number) => {
				currentId.value = selectId;
				await navigateTo({
					name: 'profile',
				});
			},
			id: 3,
		},
		{
			text: 'Корзина',
			iconName: 'material-symbols-light:shopping-basket-outline',
			action: async (selectId: number) => {
				currentId.value = selectId;
				await navigateTo({
					name: 'cart',
				});
			},
			id: 4,
			class: true,
		},
	];
});
</script>

<template>
	<div class="header">
		<div class="grid grid-cols-4 items-center">
			<div
				v-for="({ text, iconName, action, id, class: className }, index) in links"
				:key="index"
				class="relative p-1 flex flex-col justify-center items-center gap-1"
				@click="action(id)"
			>
				<icon
					:name="iconName"
					:style="{ color: id === currentId ? '#d946ef' : '#9ca3af' }"
				/>
				<div
					v-if="className"
					class="flex items-center justify-center text-center overflow-hidden size-[15px]
					rounded-full bg-red-500 absolute right-1/3 top-0"
				>
					<span>a</span>
				</div>
				<span
					class="text-xs text-gray-400"
					:class="[{ 'text-pink-400': id === currentId }]"
				>{{ text }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped lang="postcss">
.count-cart {
  @apply text-black
}
</style>
