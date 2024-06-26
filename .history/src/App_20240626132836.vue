<template>
  <div>
    <header />
    <nav>
      <router-link to="/"></router-link>
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
