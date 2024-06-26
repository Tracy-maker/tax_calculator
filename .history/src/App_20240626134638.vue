<template>
  <div class="home">
    <h1>Welcome to the Australian Income Tax Calculator</h1>
    <router-link to="/calculator">Start Calculation</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>
