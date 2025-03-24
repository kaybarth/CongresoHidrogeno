<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<style>
.container {
  max-width: 1200px;
}

body {
  color: rgba(2, 60, 102, 0.7); /* #023C66 with 70% opacity */
}
</style>