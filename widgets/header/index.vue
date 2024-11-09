<script setup lang="ts">
const { contactData } = storeToRefs(useTgWebAppStore());
</script>

<template>
	<div>Привет, {{ contactData?.first_name }} !</div>
</template>

<style scoped>

</style>
