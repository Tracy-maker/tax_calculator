import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import TaxCalculator from './components/TaxCalculator.vue'
import ResultPage from './components/ResultPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/calculator', component: TaxCalculator },
  { path: '/results', component: ResultPage }
]
