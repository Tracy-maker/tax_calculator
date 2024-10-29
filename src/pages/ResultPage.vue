<template>
  <div class="container mx-auto p-6 max-w-4xl bg-white rounded-lg shadow-md">
    <h2 class="text-4xl font-bold text-center text-indigo-600 mb-6">
      Your Tax Calculation Results
    </h2>
    <!-- ResultDisplay Component to show results dynamically -->
    <ResultDisplay
      :taxableIncome="taxableIncome"
      :taxAmount="taxAmount"
      :incomeAfterTax="incomeAfterTax"
    />
  </div>
</template>

<script>
import ResultDisplay from '@/components/ResultDisplay.vue'

export default {
  props: {
    taxableIncome: {
      type: Number,
      required: true
    },
    taxAmount: {
      type: Number,
      required: true
    },
    incomeAfterTax: {
      type: Number,
      required: true
    }
  },
  // Use computed properties if needed to retrieve the data from `this.$route.params`
  computed: {
    computedTaxableIncome() {
      return this.$route.params.taxableIncome || 0
    },
    computedTaxAmount() {
      return this.$route.params.taxAmount || 0
    },
    computedIncomeAfterTax() {
      return this.$route.params.incomeAfterTax || 0
    }
  },
  components: {
    ResultDisplay
  }
}
</script>

<style scoped>
.container {
  max-width: 1080px; 
  padding: 2rem;
}
</style>
