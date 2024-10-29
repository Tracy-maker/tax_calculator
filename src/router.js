import { createRouter, createWebHistory } from 'vue-router';

import TaxCalculator from './pages/TaxCalculator.vue';
import ContactPage from './pages/ContactPage.vue';
import HomePage from './pages/HomePage.vue';
import ResultPage from './pages/ResultPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/calculator', name: 'TaxCalculator', component: TaxCalculator },
  { 
    path: '/result/:taxableIncome?/:taxAmount?/:incomeAfterTax?', 
    name: 'ResultPage', 
    component: ResultPage, 
    props: route => ({
      taxableIncome: Number(route.params.taxableIncome) || 0,
      taxAmount: Number(route.params.taxAmount) || 0,
      incomeAfterTax: Number(route.params.incomeAfterTax) || 0,
    })
  },
  { path: '/help', name: 'ContactPage', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
