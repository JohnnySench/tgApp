<template>
	<nuxt-layout>
		<nuxt-page />
	</nuxt-layout>
	<closing-confirmation />
</template>

<script setup lang="ts">
import { ClosingConfirmation } from 'vue-tg';

const { init } = useTgWebAppStore();
const { colorScheme } = storeToRefs(useTgWebThemeStore());
await init();

provide('colorScheme', colorScheme);
</script>
