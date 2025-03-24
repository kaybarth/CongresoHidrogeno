<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="member-card flex flex-col items-center p-4">
    <!-- Image is already in a circular container with overflow hidden -->
    <div class="image-container rounded-full overflow-hidden w-64 h-64 mb-4">
      <img :src="image" :alt="name" class="w-full h-full object-cover">
    </div>
    <!-- Name is already below the image -->
    <h3 class="text-xl font-medium text-center">{{ name }}</h3>
  </div>
</template>

<style scoped>
.image-container {
  border: 2px solid #ccc;
}
</style>