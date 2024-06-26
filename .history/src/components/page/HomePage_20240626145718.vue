<template>
  <div class="home">
    <h1>Welcome to the Australian Income Tax Calculator</h1>
    <p>
      This application helps you estimate your income tax and compare your income rank among all
      users.
    </p>
    <router-link to="/calculator">Start Calculation</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
