<script setup lang="ts">
import Header from '../components/Header.vue'
import EventDetails from '../components/EventDetails.vue'
import ProminentMembers from '../components/ProminentMembers.vue'
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <Header 
      title="We invite you to the XXV Hydrogen Congress!"
      subtitle="Join us in Morelia, Michoacán in 2025 to be part of the energy revolution that is shaping the future. Explore, learn, and connect with global leaders in the field of hydrogen energy."
    />
    <EventDetails />
    <ProminentMembers />
  </div>
</template>
