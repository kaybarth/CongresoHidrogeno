<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app-container">
    <Navbar class="navbar-fixed" />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
}

.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.main-content {
  padding-top: 60px; /* Ajusta este valor según la altura de tu Navbar */
}

.container {
  max-width: 1200px;
}

body {
  color: rgba(2, 60, 102, 0.7); /* #023C66 with 70% opacity */
}
</style>