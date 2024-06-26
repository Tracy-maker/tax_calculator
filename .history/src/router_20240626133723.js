import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import TaxCalculator from './components/TaxCalculator.vue'
import ResultPage from './components/ResultPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/calculator', name: 'Calculator', component: TaxCalculator },
  { path: '/results', name: 'Results', component: ResultPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
