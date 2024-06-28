import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './page/HomePage.vue'
import TaxCalculator from './page/TaxCalculator.vue'
import RankPage from './page/RankPage.vue'
import ContactHelp from './page/ContactHelp.vue'

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