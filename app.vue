<template>
 <nuxt-layout>
   <nuxt-page />
 </nuxt-layout>

</template>
<script setup lang="ts">

const {init} = useTgWebAppStore()
init()
</script>