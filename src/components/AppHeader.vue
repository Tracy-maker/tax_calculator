<template>
  <header class="bg-gradient-to-r from-blue-500 to-blue-700 p-6 shadow-lg">
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
        <router-link to="/rank" class="text-white text-lg font-medium hover:text-gray-200 transition-colors">
          Rank
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
/* 提升导航栏的视觉效果 */
header {
  background: linear-gradient(to right, #4299e1, #2b6cb0); /* 渐变背景 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}

nav a {
  transition: color 0.3s ease-in-out; /* 颜色渐变的过渡效果 */
}

nav a:hover {
  color: #e2e8f0; /* Hover 状态时的颜色 */
}
</style>
