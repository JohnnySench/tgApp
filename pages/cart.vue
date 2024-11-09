<script setup lang="ts">
import { useCart } from '~/stores/cart';

const { cart } = storeToRefs(useCart());
</script>

<template>
	<div>
		<h1>card</h1>
		<div>{{ cart }}</div>
	</div>
</template>

<style scoped>

</style>
