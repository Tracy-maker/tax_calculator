<template>
  <div id="app" class="flex flex-col min-h-screen">
    <AppHeader />

    <main class="flex-grow container mx-auto py-8">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>
/* Make sure the entire screen is filled, and ensure spacing between components */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1; /* Ensures the main content takes up the remaining space */
}
</style>
