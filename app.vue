<template>
	<nuxt-layout>
		<nuxt-page />
	</nuxt-layout>
</template>

<script setup lang="ts">
const { init } = useTgWebAppStore();
const { colorScheme } = storeToRefs(useTgWebThemeStore());
await init();

provide('colorScheme', colorScheme);
</script>
