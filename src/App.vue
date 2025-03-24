<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Home from './pages/Home.vue'
</script>

<template>
  <div>
    <Navbar />
    <Home />
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