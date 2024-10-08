<template>
  <div class="container mx-auto p-6 max-w-4xl">
    <h2 class="text-4xl font-bold text-center text-indigo-600 mb-6">
      Your Tax Calculation Results
    </h2>
    <ResultDisplay :taxableIncome="taxableIncome" :taxAmount="taxAmount" :incomeAfterTax="incomeAfterTax" />
  </div>
</template>

<script>
import ResultDisplay from '@/components/ResultDisplay.vue';

export default {
  data() {
    return {
      taxableIncome: 50000, 
      taxAmount: 10000,
      incomeAfterTax: 40000,
    };
  },
  components: {
    ResultDisplay,
  },
};
</script>

<style scoped>
.container {
  max-width: 1080px;
}
</style>
