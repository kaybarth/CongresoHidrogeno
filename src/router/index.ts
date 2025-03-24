import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import RegistrationFees from '../pages/RegistrationFees.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration-fees',
    name: 'RegistrationFees',
    component: RegistrationFees
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
