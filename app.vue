<template>
	<nuxt-layout>
		<div :class="colorScheme">
			{{ colorScheme }} - color
		</div>
		<nuxt-page />
	</nuxt-layout>
</template>

<script setup lang="ts">
const { init } = useTgWebAppStore();
const { colorScheme } = storeToRefs(useTgWebThemeStore());
await init();
</script>
