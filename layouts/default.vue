<script setup lang="ts">

</script>

<template>
	<div class="container overflow-hidden">
		<header>
			<widget-header />
		</header>
		<div class="h-[85vh] overflow-auto">
			<slot />
		</div>

		<nav>
			<widget-navigation />
		</nav>
	</div>
</template>

<style scoped>

</style>
