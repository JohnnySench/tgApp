<script setup lang="ts">
const pizza = ref(null);
onMounted(async () => {
	pizza.value = await $fetch('https://dummyjson.com/recipes');
});
</script>

<template>
	<div class="container">
		<div class="grid grid-cols-1 gap-y-2">
			<div
				v-for="(item, index) in pizza?.recipes"
				:key="index"
			>
				<div class="grid grid-cols-2">
					<div class="overflow-hidden rounded">
						<img
							:src="item?.image"
							alt=""
							class="object-cover"
						>
					</div>

					<div>
						<span>{{ item?.name }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
