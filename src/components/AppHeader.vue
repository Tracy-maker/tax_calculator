<template>
  <header class="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-700 p-6 shadow-lg z-50">
    <nav class="container mx-auto flex items-center justify-between">
      <!-- Logo / Brand Name -->
      <div class="text-2xl font-bold text-white">
        <router-link to="/" class="hover:text-gray-200 transition-colors">
          Tax Calculator
        </router-link>
      </div>

      <!-- Navigation Links -->
      <div class="space-x-6">
        <router-link to="/" class="text-white text-lg font-medium hover:text-gray-200 transition-colors">
          Home
        </router-link>
        <router-link to="/calculator" class="text-white text-lg font-medium hover:text-gray-200 transition-colors">
          Tax Calculator
        </router-link>
        <router-link to="/result" class="text-white text-lg font-medium hover:text-gray-200 transition-colors">
          Result
        </router-link>
        <router-link to="/contact" class="text-white text-lg font-medium hover:text-gray-200 transition-colors">
          Help
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  background: linear-gradient(to right, #4299e1, #2b6cb0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
