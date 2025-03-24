<script setup lang="ts">
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Call for abstract', path: '/call-for-abstract' },
  { name: 'Papers', path: '/papers' },
  { name: 'Guide for authors', path: '/guide' },
  { name: 'EasyChair', path: '/easychair' }
]
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
            <img src="/logo1.png" alt="Logo" class="h-8 w-auto max-h-full mr-2" />
          <span class="text-xl font-semibold">XXV</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.path"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {{ item.name }}
          </router-link>
        </div>
        <button class="md:hidden p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>