<script setup lang="ts">
defineProps<{
  name: string;
  image?: string;
}>()
</script>

<template>
  <div class="text-center p-4">
    <div class="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4"></div>
    <h3 class="text-lg font-semibold">{{ name }}</h3>
  </div>
</template>