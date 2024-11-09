<script setup lang="ts">
import { usePizzaStore } from '~/stores/pizza';

const { pizza } = storeToRefs(usePizzaStore());
</script>

<template>
	<div class="container">
		<div class="grid grid-cols-1 gap-y-4 p-1">
			<components-pizza-card
				v-for="(item, index) in pizza?.recipes"
				:key="index"
				:pizza="item"
			/>
		</div>
	</div>
</template>

<style scoped lang="postcss">

</style>
