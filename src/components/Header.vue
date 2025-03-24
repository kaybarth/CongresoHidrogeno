<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>()
</script>

<template>
  <header class="text-center mb-12">
    <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
    <p class="text-xl">{{ subtitle }}</p>
  </header>
</template>