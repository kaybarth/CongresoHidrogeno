<script setup lang="ts">
import { ref } from 'vue';

// Example images for the slider - replace with actual hotel images later
const images = ref([
  { src: '/Hotel1.jpg', alt: 'Grand Cantalagua Hotel 1' },
  { src: '/Hotel2.jpg', alt: 'Grand Cantalagua Hotel 2' },
  { src: '/Hotel3.jpg', alt: 'Grand Cantalagua Hotel 3' },
]);

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length;
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8">Grand Cantalagua Hotel</h1>
    
    <!-- Image Slider -->
    <div class="relative mb-8 rounded-lg overflow-hidden shadow-lg">
      <div class="relative h-96">
        <transition-group name="fade">
          <img 
            v-for="(image, index) in images" 
            :key="image.src"
            :src="image.src" 
            :alt="image.alt"
            class="absolute inset-0 w-full h-full object-cover"
            v-show="index === currentImageIndex"
          />
        </transition-group>
      </div>
      
      <button @click="prevImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button @click="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        <button 
          v-for="(image, index) in images" 
          :key="`dot-${image.src}`"
          @click="currentImageIndex = index"
          class="w-3 h-3 rounded-full"
          :class="index === currentImageIndex ? 'bg-white' : 'bg-white/50'"
        ></button>
      </div>
    </div>

    <div class="prose max-w-none">
      <p class="mb-4">
        The XXV International Congress of the Mexican Hydrogen Society (SMH) will take place from September 16-19, 2023, 
        at the Tecnológico Nacional de México — Instituto Tecnológico de Morelia.
      </p>
      
      <p class="mb-4">
        The Grand Cantalagua Hotel Morelia, a prestigious venue located in the heart of Morelia, Michoacán, 
        will be the ideal place to stay.
      </p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-4">Accommodation</h2>
      <p>Comfortable and spacious rooms with modern amenities.</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Standard room (single or double): $1,390 MXN (1-2 people)</li>
        <li>Standard room (double): $1,685 MXN (3 people)</li>
        <li>Standard room (double): $1,980 MXN (4 people)</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-4">Dining Options</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>
          American Breakfast: $260 MXN (includes VAT and service) with options like eggs or chilaquiles or aztec cake.
        </li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-4">How to Get There</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Address: Av. Ventura Puente Esq. Av Carmelinas Col. Felix Ireta, Morelia, 58070, México</li>
        <li>
          <a 
            href="https://grand-cantalagua-hotel-morelia.h-rez.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-800"
          >
            Google Maps Link
          </a>
        </li>
        <li>Transportation: The hotel is easily accessible from Morelia International Airport and major highways.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
