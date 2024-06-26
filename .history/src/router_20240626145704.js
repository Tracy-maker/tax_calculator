import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/page/HomePage.vue'
import TaxCalculator from './components/page/TaxCalculator.vue'
import ResultPage from './components/page/ResultPage.vue'
import ContactHelp from './components/page/ContactHelp.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/calculator', name: 'Calculator', component: TaxCalculator },
  { path: '/results', name: 'Results', component: ResultPage },
  { path: '/contact', name: 'Contact', component: ContactHelp }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
