import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import RegistrationFees from '../pages/RegistrationFees.vue'
import CallForAbstract from '../views/CallForAbstract.vue'

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
  },
  {
    path: '/call-for-abstract',
    name: 'CallForAbstract',
    component: CallForAbstract
  },
  {
    path: '/important-dates',
    name: 'ImportantDates',
    component: () => import('../views/ImportantDatesView.vue')
  },
  {
    path: '/submit-abstract',
    name: 'SubmitAbstract',
    component: () => import('../views/SubmitAbstract.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
