<template>
  <div class="home">
    <h1>Welcome to the Australian Income Tax Calculator</h1>
    <router-link to="/calculator">Start Calculation</router-link>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
export default {
  components: {
    HomePage
  }
}
</script>
