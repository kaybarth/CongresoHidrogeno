import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import RegistrationFees from '../pages/RegistrationFees.vue'
import CallForAbstract from '../views/CallForAbstract.vue'
import ImportantDatesView from '../views/ImportantDatesView.vue'
import SubmitAbstract from '../views/SubmitAbstract.vue'
import GrandCantalagua from '../views/GrandCantalagua.vue'
import InHonorView from '../views/InHonorView.vue'
import UnderConstruction from '../views/UnderConstruction.vue'

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
    component: ImportantDatesView
  },
  {
    path: '/submit-abstract',
    name: 'SubmitAbstract',
    component: SubmitAbstract
  },
  {
    path: '/grand-cantalagua',
    name: 'grandCantalagua',
    component: GrandCantalagua
  },
  {
    path: '/in-honor',
    name: 'InHonor',
    component: InHonorView
  },
  {
    path: '/register',
    name: 'Register',
    component: UnderConstruction
  },
  {
    path: '/plenary-speakers',
    name: 'PlenarySpeakers',
    component: UnderConstruction
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'navbar-active',
  linkExactActiveClass: 'navbar-exact-active'
})

export default router
