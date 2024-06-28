import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './page/components/HomePage.vue'
import TaxCalculator from './page/components/TaxCalculator.vue'
import RankPage from './page/components/RankPage.vue'
import ContactHelp from './page/components/ContactHelp.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/calculator', name: 'Calculator', component: TaxCalculator },
  { path: '/rank', name: 'Rank', component: RankPage },
  { path: '/contact', name: 'Contact', component: ContactHelp }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
