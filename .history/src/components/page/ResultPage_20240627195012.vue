<template>
  <div class="results">
    <h1>Calculation Results</h1>
    <p>Your tax amount is: {{ taxAmount }}</p>
    <p>Your income rank among all users is: {{ incomeRank }}%</p>
    <button @click="recalculate">Recalculate</button>
    <button @click="shareResults">Share Now</button>
    <ShareModal v-if="showShareModal" @close="showShareModal = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResultPage'
})
</script>
