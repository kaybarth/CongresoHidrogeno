<script setup lang="ts">
import MemberCard from './MemberCard.vue'

// Función auxiliar para construir la ruta completa
const getImagePath = (path: string) => import.meta.env.BASE_URL + path;

const members = [
  { 
    name: 'Dr. José Ysmael Verde Gómez', 
    image: getImagePath('/members/team-img2.png'),
    role: 'President'
  },
  { 
    name: 'Dra. Beatríz Escobar Morales', 
    image: getImagePath('/members/team-img1.png'),
    role: 'Vice President'
  },
  { 
    name: 'Dra. Tatiana Romero Castañón', 
    image: getImagePath('/members/team-img3.png'),
    role: 'Treasurer'
  },
  { 
    name: 'Dr. José Alonso Díaz Guillén', 
    image: getImagePath('/members/team-img4.png'),
    role: 'Secretary'
  }
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
        :role="member.role"
        class="w-full max-w-xs"
      />
    </div>
  </section>
</template>