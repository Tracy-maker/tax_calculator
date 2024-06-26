<template>
  <div>
    <header />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/calculator">Tax Calculator</router-link>
    </nav>
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
