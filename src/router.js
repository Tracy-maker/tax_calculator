import { createRouter, createWebHistory } from 'vue-router'

import TaxCalculator from './pages/TaxCalculator.vue'
import RankPage from './pages/RankPage.vue'
import ContactPage from './pages/ContactPage.vue'
import HomePage from './pages/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/calculator', component: TaxCalculator },
  { path: '/rank', component: RankPage },
  { path: '/contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
