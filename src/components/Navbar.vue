<script setup lang="ts">
import { ref } from 'vue';

// Restructured menu with dropdowns
const menuItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Registration', 
    children: [
      { name: 'Registration Fees', path: '/registration-fees' },
      { name: 'Register Now', path: '/register' }
    ] 
  },
  { 
    name: 'Abstracts', 
    children: [
      { name: 'Call for Abstract', path: '/call-for-abstract' },
      { name: 'Important Dates', path: '/important-dates' },
      { name: 'Submit Abstract', path: '/submit-abstract' }
    ] 
  },
  { 
    name: 'Venue', 
    children: [
      { name: 'Grand Cantalagua', path: '/grand-cantalagua' }
    ] 
  },
  { 
    name: 'Program', 
    children: [
      { name: 'Plenary Speakers', path: '/plenary-speakers' },
      { name: 'In Honor', path: '/in-honor' }
    ] 
  }
];

// For mobile menu
const mobileMenuOpen = ref(false);
const expandedItems = ref<Set<number>>(new Set());

// Toggle mobile dropdown
const toggleMobileDropdown = (index: number) => {
  if (expandedItems.value.has(index)) {
    expandedItems.value.delete(index);
  } else {
    expandedItems.value.add(index);
  }
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <img src="/logo1.png" alt="Logo" class="h-8 w-auto max-h-full mr-2" />
          <span class="text-xl font-semibold">XXV</span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-10">
          <template v-for="(item, index) in menuItems" :key="`menu-${index}`">
            <!-- Single link items - Fixed alignment with py-2 class -->
            <router-link 
              v-if="!item.children" 
              :to="item.path" 
              class="text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 block"
            >
              {{ item.name }}
            </router-link>
            
            <!-- Dropdown items -->
            <div v-else class="relative group dropdown-container">
              <button class="text-gray-700 hover:text-blue-600 transition-colors group-hover:text-blue-600 py-2 px-3">
                {{ item.name }}
              </button>
              <!-- Updated dropdown menu positioning -->
              <div class="absolute mt-0 bg-white rounded-md shadow-lg py-1 z-50 hidden dropdown-menu">
                <div class="pt-3"></div> <!-- Buffer space to ensure easy hover transition -->
                <router-link 
                  v-for="(child, childIndex) in item.children" 
                  :key="`child-${childIndex}`" 
                  :to="child.path"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  {{ child.name }}
                </router-link>
              </div>
            </div>
          </template>
        </div>
        
        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="md:hidden p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <template v-for="(item, index) in menuItems" :key="`mobile-${index}`">
            <!-- Single link items -->
            <router-link 
              v-if="!item.children" 
              :to="item.path" 
              class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              {{ item.name }}
            </router-link>
            
            <!-- Dropdown items -->
            <div v-else>
              <button 
                @click="toggleMobileDropdown(index)" 
                class="flex justify-between items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {{ item.name }}
                <span>{{ expandedItems.has(index) ? '▲' : '▼' }}</span>
              </button>
              <div v-if="expandedItems.has(index)" class="pl-4">
                <router-link 
                  v-for="(child, childIndex) in item.children" 
                  :key="`mobile-child-${childIndex}`" 
                  :to="child.path"
                  class="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {{ child.name }}
                </router-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Ensure dropdown displays on hover for desktop */
.group:hover .group-hover\:block {
  display: block;
}

/* Improved dropdown behavior */
.dropdown-container {
  position: relative;
}

.dropdown-container:hover .dropdown-menu {
  display: block;
  animation: fadeIn 0.2s ease-in-out;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  /* Center the dropdown relative to parent button */
  left: 50%;
  transform: translateX(-50%);
  display: none;
  transition: all 0.3s ease;
  /* Ensure the dropdown doesn't exceed screen width */
  max-width: min(200px, calc(100vw - 2rem));
  width: auto;
  /* Ensure text alignment */
  text-align: left;
  /* Prevent dropdowns from getting cut off at screen edges */
  min-width: 150px;
}

/* Create an invisible extension to prevent dropdown from closing too quickly */
.dropdown-container::after {
  content: '';
  position: absolute;
  height: 20px;
  width: 100%;
  left: 0;
  top: 100%;
  z-index: 1;
}

/* Animation for smooth appearance */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px) translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
}

/* Create a longer hover target area */
.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  height: 20px;
}

/* Additional styling for desktop menu buttons */
.hidden.md\:flex a, 
.hidden.md\:flex button {
  font-weight: 500;
  padding-left: 12px;
  padding-right: 12px;
  min-width: 90px;
  text-align: center;
}

/* Ensure dropdown repositioning at screen edges */
@media (max-width: 768px) {
  .dropdown-menu {
    left: 0;
    transform: translateX(0);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>