<template>
  <div class="bg-gray-100 p-6 rounded shadow-md">
    <h2 class="text-xl font-bold">Results</h2>
    <p>Employment Income: {{ employmentIncome }}</p>
    <p>Tax Amount: {{ taxAmount }}</p>
    <p>Income After Tax: {{ incomeAfterTax }}</p>
    <p>Marginal Tax Rate: {{ marginalTaxRate }}</p>
  </div>
</template>

<script>
export default {
  name: 'ResultDisplay',
  props: {
    employmentIncome: Number,
    taxAmount: Number,
    incomeAfterTax: Number,
    marginalTaxRate: Number
  }
}
</script>
