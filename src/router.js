import { createRouter, createWebHistory } from 'vue-router'

import TaxCalculator from './pages/TaxCalculator.vue'
import ContactPage from './pages/ContactPage.vue'
import HomePage from './pages/HomePage.vue'
import ResultPage from './pages/ResultPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/calculator', component: TaxCalculator },
  { path: '/result', component: ResultPage },
  { path: '/help', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
