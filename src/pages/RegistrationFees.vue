<script setup lang="ts">
import Header from '../components/Header.vue'

const registrationFees = [
  {
    category: 'Early Bird',
    dates: 'Until June 30, 2025',
    fees: [
      { type: 'Academic/Professional', price: '$350 USD' },
      { type: 'Student', price: '$200 USD' },
      { type: 'Virtual Attendance', price: '$150 USD' }
    ]
  },
  {
    category: 'Regular Registration',
    dates: 'July 1 - August 31, 2025',
    fees: [
      { type: 'Academic/Professional', price: '$450 USD' },
      { type: 'Student', price: '$250 USD' },
      { type: 'Virtual Attendance', price: '$200 USD' }
    ]
  },
  {
    category: 'Late Registration',
    dates: 'September 1 - September 15, 2025',
    fees: [
      { type: 'Academic/Professional', price: '$550 USD' },
      { type: 'Student', price: '$300 USD' },
      { type: 'Virtual Attendance', price: '$250 USD' }
    ]
  }
]

const includedBenefits = [
  'Access to all congress sessions',
  'Conference materials and bag',
  'Coffee breaks and lunches',
  'Welcome reception',
  'Certificate of attendance',
  'Publication opportunity in conference proceedings'
]

const paymentMethods = [
  {
    method: 'Bank Transfer',
    details: 'Details will be provided upon registration'
  },
  {
    method: 'Credit Card',
    details: 'Secure online payment available through our registration platform'
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <Header 
      title="Registration Fees"
      subtitle="Secure your place at the XXV Hydrogen Congress with our flexible registration options"
    />
    
    <div class="my-8">
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(category, index) in registrationFees" :key="index" 
            class="p-6 rounded-lg shadow-md" 
            :class="{'bg-blue-50': index === 0, 'bg-white': index !== 0}">
          <h3 class="text-2xl font-bold mb-2">{{ category.category }}</h3>
          <p class="text-lg mb-4 font-medium">{{ category.dates }}</p>
          <ul class="space-y-2">
            <li v-for="(fee, feeIndex) in category.fees" :key="feeIndex" class="flex justify-between">
              <span>{{ fee.type }}</span>
              <span class="font-bold">{{ fee.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="my-12">
      <h2 class="text-2xl font-bold mb-4">Registration Includes</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li v-for="(benefit, index) in includedBenefits" :key="index">
          {{ benefit }}
        </li>
      </ul>
    </div>
    
    <div class="my-12">
      <h2 class="text-2xl font-bold mb-4">Payment Methods</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(payment, index) in paymentMethods" :key="index" class="p-4 border rounded-lg">
          <h3 class="text-xl font-bold mb-2">{{ payment.method }}</h3>
          <p>{{ payment.details }}</p>
        </div>
      </div>
    </div>
    
    <div class="my-12 p-6 bg-yellow-50 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Registration Process</h2>
      <ol class="list-decimal pl-6 space-y-2">
        <li>Complete the online registration form (available soon)</li>
        <li>Receive confirmation email with payment instructions</li>
        <li>Complete payment within 7 days to secure your registration</li>
        <li>Receive official confirmation and receipt</li>
      </ol>
      <p class="mt-4 font-medium">For any questions regarding registration, please contact: <a href="mailto:registration@hydrogencongressxxv.org" class="text-blue-600 hover:underline">registration@hydrogencongressxxv.org</a></p>
    </div>
  </div>
</template>
