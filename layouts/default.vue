<script setup lang="ts">

</script>

<template>
	<div class="container overflow-hidden">
		<div class="h-[90vh] border border-gray-200 overflow-auto">
			<slot />
		</div>

		<nav>
			<widget-header />
		</nav>
	</div>
</template>

<style scoped>

</style>
