<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// Get current route for active state detection
const route = useRoute();

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
const isAnimating = ref(false);

// Toggle mobile dropdown - Modified to close current item first, then open the new one
const toggleMobileDropdown = (index: number) => {
  if (isAnimating.value) return; // Prevent multiple clicks during animation
  
  if (expandedItems.value.has(index)) {
    // If clicking on already open item, just close it
    isAnimating.value = true;
    expandedItems.value.delete(index);
    setTimeout(() => {
      isAnimating.value = false;
    }, 350); // Match this with animation duration
  } else {
    // If opening a new item while another is open
    if (expandedItems.value.size > 0) {
      isAnimating.value = true;
      // Store the index to open after closing
      const newIndex = index;
      // Clear current items
      expandedItems.value.clear();
      
      // Wait for close animation to finish before opening the new one
      setTimeout(() => {
        expandedItems.value.add(newIndex);
        setTimeout(() => {
          isAnimating.value = false;
        }, 350);
      }, 350); // Match this with animation duration
    } else {
      // If no items are open, just open the new one
      expandedItems.value.add(index);
    }
  }
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // Clear expanded items when closing mobile menu
  if (!mobileMenuOpen.value) {
    expandedItems.value.clear();
  }
};

// Close mobile menu (to be used when navigating to a new page)
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  expandedItems.value.clear();
};

// Check if dropdown has active child
const hasActiveChild = (item: any): boolean => {
  if (!item.children) return false;
  return item.children.some((child: any) => child.path === route.path);
};
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center rounded px-4 py-2">
          <div class="text-orange-500 text-xl font-bold mr-3">XXV</div>
          <div class="text-sm font-medium">
            International Congress of the <br> Mexican Hydrogen Society
          </div>
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
              <button 
                class="text-gray-700 hover:text-blue-600 transition-colors group-hover:text-blue-600 py-2 px-3 dropdown-toggle"
                :class="{ 'has-active-child': hasActiveChild(item) }"
              >
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
        <button @click="toggleMobileMenu" class="md:hidden p-2 hamburger-menu" :class="{ 'is-active': mobileMenuOpen }">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <transition name="slide-fade">
        <div v-if="mobileMenuOpen" class="md:hidden mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <template v-for="(item, index) in menuItems" :key="`mobile-${index}`">
              <!-- Single link items -->
              <router-link 
                v-if="!item.children" 
                :to="item.path" 
                class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </router-link>
              
              <!-- Dropdown items -->
              <div v-else>
                <button 
                  @click="toggleMobileDropdown(index)" 
                  class="flex justify-between items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md dropdown-toggle"
                  :class="{ 'has-active-child': hasActiveChild(item) }"
                >
                  {{ item.name }}
                  <span class="dropdown-arrow" :class="{ 'is-active': expandedItems.has(index) }">▼</span>
                </button>
                <transition name="expand">
                  <div v-if="expandedItems.has(index)" class="pl-4 submenu-container">
                    <router-link 
                      v-for="(child, childIndex) in item.children" 
                      :key="`mobile-child-${childIndex}`" 
                      :to="child.path"
                      class="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md mobile-submenu-item"
                      @click="closeMobileMenu"
                    >
                      {{ child.name }}
                    </router-link>
                  </div>
                </transition>
              </div>
            </template>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
/* Import navbar styles */
@import "../assets/styles/navbar.css";

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

/* Additional styling for active buttons */
.has-active-child {
  color: #3498db !important;
  background-color: rgba(52, 152, 219, 0.1) !important;
  border-bottom: 2px solid #3498db !important;
}

@media (max-width: 768px) {
  .has-active-child {
    background-color: rgba(52, 152, 219, 0.15) !important;
    border-left: 3px solid #3498db !important;
    border-bottom: none !important;
  }
}

/* Transition styles for mobile menu */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Improved transition styles for dropdown menu items */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.35s ease;
  max-height: 300px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.expand-enter-active {
  animation: slideDownFade 0.35s ease forwards;
}

.expand-leave-active {
  animation: slideUpFade 0.35s ease forwards;
}

@keyframes slideDownFade {
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 300px;
    opacity: 1;
  }
}

@keyframes slideUpFade {
  0% {
    max-height: 300px;
    opacity: 1;
  }
  100% {
    max-height: 0;
    opacity: 0;
  }
}

/* Rotating dropdown arrow animation */
.dropdown-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.dropdown-arrow.is-active {
  transform: rotate(-180deg);
}

/* Mobile menu styling */
.mobile-menu {
  border-top: 1px solid rgba(209, 213, 219, 0.5);
}

/* Submenu container styling */
.submenu-container {
  overflow: hidden;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Improved staggered animation for submenu items */
.mobile-submenu-item {
  opacity: 0;
  animation: fadeInItem 0.3s ease forwards;
}

@keyframes fadeInItem {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Staggered animation delay for submenu items */
.mobile-submenu-item:nth-child(1) { animation-delay: 0.05s; }
.mobile-submenu-item:nth-child(2) { animation-delay: 0.1s; }
.mobile-submenu-item:nth-child(3) { animation-delay: 0.15s; }
.mobile-submenu-item:nth-child(4) { animation-delay: 0.2s; }
.mobile-submenu-item:nth-child(5) { animation-delay: 0.25s; }

/* Hamburger menu button animation */
.hamburger-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  transition: all 0.3s ease;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #4b5563;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* Hamburger animation when active */
.hamburger-menu.is-active .hamburger-line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-menu.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.is-active .hamburger-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
</style>