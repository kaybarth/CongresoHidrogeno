<script setup lang="ts">
import Header from '../components/Header.vue'

const registrationFees = [
  {
    category: 'Before June 23, 2025',
    fees: [
      {
        type: 'Active Members',
        prices: [
          { attendee: 'Students', price: '$2,800' },
          { attendee: 'Professionals', price: '$5,400' },
          { attendee: 'Industries', price: '$7,200' }
        ]
      },
      {
        type: 'Non-Members',
        prices: [
          { attendee: 'Students', price: '$3,000' },
          { attendee: 'Professionals', price: '$6,000' },
          { attendee: 'Industries', price: '$8,000' }
        ]
      }
    ]
  },
  {
    category: 'After June 23, 2025',
    fees: [
      {
        type: 'Active Members',
        prices: [
          { attendee: 'Students', price: '$3,300' },
          { attendee: 'Professionals', price: '$6,300' },
          { attendee: 'Industries', price: '$8,300' }
        ]
      },
      {
        type: 'Non-Members',
        prices: [
          { attendee: 'Students', price: '$3,500' },
          { attendee: 'Professionals', price: '$7,000' },
          { attendee: 'Industries', price: '$9,200' }
        ]
      }
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
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(category, index) in registrationFees" :key="index" 
            class="p-6 rounded-lg shadow-md" 
            :class="{'bg-blue-50': index === 0, 'bg-white': index !== 0}">
          <h3 class="text-2xl font-bold mb-4">{{ category.category }}</h3>
          
          <div v-for="(feeType, typeIndex) in category.fees" :key="typeIndex" class="mb-6">
            <h4 class="text-xl font-semibold mb-2">{{ feeType.type }}</h4>
            <table class="w-full">
              <thead>
                <tr class="border-b">
                  <th class="text-left pb-2">Attendee Type</th>
                  <th class="text-right pb-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(price, priceIndex) in feeType.prices" :key="priceIndex" class="border-b">
                  <td class="py-2">{{ price.attendee }}</td>
                  <td class="py-2 text-right font-bold">{{ price.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p class="text-sm mt-4 italic">* Prices in Mexican pesos</p>
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
      <div class="mt-6">
        <h3 class="text-xl font-bold mb-2">Register Now</h3>
        <p class="mb-2">Write to us at the following emails:</p>
        <p>
          <a href="mailto:contacto@smhidrogeno.net" class="text-blue-600 hover:underline">contacto@smhidrogeno.net</a> or 
          <a href="mailto:xxv.smhcongress@morelia.tecnm.mx" class="text-blue-600 hover:underline">xxv.smhcongress@morelia.tecnm.mx</a>
        </p>
      </div>
    </div>
  </div>
</template>
