<script setup lang="ts">
import MemberCard from './MemberCard.vue'

const members = [
  { name: 'Dr. José Alonso Díaz Guillén' },
  { name: 'Dr. José Ysmael Verde Gómez' },
  { name: 'Dr. José Ysmael Verde Gómez' },
  { name: 'Dr. José Ysmael Verde Gómez' }
]
</script>

<template>
  <section class="my-12">
    <h2 class="text-3xl font-bold text-center mb-8">Prominent members</h2>
    <div class="flex flex-wrap justify-center gap-8">
      <MemberCard 
        v-for="member in members" 
        :key="member.name"
        :name="member.name"
      />
    </div>
  </section>
</template>