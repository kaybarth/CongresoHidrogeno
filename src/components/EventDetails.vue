<script setup lang="ts">
const eventDetails = {
  name: 'THE INNOVATION SUMMIT',
  dates: 'SEPTEMBER 16-19, 2025',
  location: 'TEC OF MORELIA, MORELIA, MICHOACÁN',
  note: 'The detailed program with specific dates and times will be published soon.'
}
</script>

<template>
  <div class="bg-blue-700 text-white p-8 rounded-lg text-center my-8">
    <h2 class="text-3xl font-bold mb-4">{{ eventDetails.name }}</h2>
    <p class="text-xl mb-2">{{ eventDetails.dates }}</p>
    <p class="text-xl mb-4">{{ eventDetails.location }}</p>
    <p class="text-lg italic">{{ eventDetails.note }}</p>
  </div>
</template>