<script setup lang="ts">
import MemberCard from './MemberCard.vue'

const members = [
  { name: 'Dr. José Alonso Díaz Guillén', image: 'https://placehold.co/150x150' },
  { name: 'Dr. José Ysmael Verde Gómez', image: 'https://placehold.co/150x150' },
  { name: 'Dr. José Ysmael Verde Gómez', image: 'https://placehold.co/150x150' },
  { name: 'Dr. José Ysmael Verde Gómez', image: 'https://placehold.co/150x150' }
]
</script>

<template>
  <section class="my-12">
    <h2 class="text-3xl font-bold text-center mb-8">Prominent members</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      <MemberCard 
        v-for="member in members" 
        :key="member.name"
        :name="member.name"
        :image="member.image"
        class="w-full max-w-xs"
      />
    </div>
  </section>
</template>