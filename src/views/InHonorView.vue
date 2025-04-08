<script setup lang="ts">
import { computed } from 'vue';

const imageUrl = computed(() => import.meta.env.BASE_URL + 'in-honor.jpg');
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8">Honoree Biography</h1>
      
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-center mb-6">Dra. Rosa de Guadalupe González Huerta</h2>
          
          <div class="flex flex-col items-center mb-8">
            <div class="w-full max-w-2xl mb-8">
              <img 
                :src="imageUrl"
                alt="Dra. Rosa de Guadalupe González Huerta" 
                class="rounded-lg shadow-md w-full h-auto"
                width="700"
                height="600"
                style="aspect-ratio: 4/3; object-fit: cover;"
              />
            </div>
            
            <div class="w-full">
              <div class="prose max-w-none">
                <p class="mb-4">
                  Industrial Chemical Engineer from ESIQIE-IPN (1992).
                  Ph.D. in Chemical Sciences. Currently a Full Professor (Titular C) at ESIQIE-IPN (2007–present). 
                  Winner of the IPN Research Award (2021) for technological development. 
                  Recipient of the 2022 "Hilario Ariza Ávila" Award as a distinguished ESIQIE graduate and the 
                  2022 L'Oréal-AMC-UNESCO Award as a consolidated researcher. 
                  Member of the Mexican National System of Researchers (SNII) Level 3. 
                  Member of the Doctoral Board in Energy and Nano & Micro Technology at IPN. 
                  Coordinator of the IPN Energy Network (2022–2024). 
                  Technical Director of the CONAHCYT National Laboratory for Hydrogen Technologies (LANH2), 2024–2026.
                </p>
                
                <p class="mb-4">
                  Member of the Mexican Academy of Sciences since 2024.
                  Former President of the Mexican Hydrogen Society (SMH) (2010–2012). 
                  Founder and Coordinator of the CONACYT Thematic Hydrogen Network (2014). 
                  Founder and President of CEMIE-Océano A.C. (2020–2022). 
                  She has supervised 43 undergraduate theses, 30 master's theses, and 14 doctoral dissertations. 
                  She has published 66 JCR-indexed articles (1,704 citations on Google Scholar), 
                  presented 200 papers at national and international conferences, 
                  holds 2 patents and 1 registered industrial design, and owns 2 registered trademarks. 
                  She has edited 4 books on hydrogen technology and coordinated 20 projects focused on hydrogen technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any specific styles for this page here */
</style>
