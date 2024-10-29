<template>
  <div>
    <!-- Results Summary Section -->
    <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Summary</h3>
      <p><strong>Taxable Income:</strong> AUD {{ taxableIncome }}</p>
      <p><strong>Tax Amount:</strong> AUD {{ taxAmount }}</p>
      <p><strong>After Tax Income:</strong> AUD {{ incomeAfterTax }}</p>
    </div>

    <!-- Bar Chart Section -->
    <div class="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
      <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Income Breakdown</h3>
  
      <BarChart :taxAmount="taxAmount" :incomeAfterTax="incomeAfterTax" />
    </div>

    <!-- Recommendations Section -->
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Recommendations</h3>
      <p class="text-gray-700 mb-2">
        Based on your income and tax calculations, here are some suggestions:
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Consider maximizing your deductible expenses to reduce taxable income.</li>
        <li>Explore contributions to retirement funds (like superannuation) to optimize tax benefits.</li>
        <li>Consult with a tax advisor for personalized strategies to reduce tax liability.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BarChart from './BarChart.vue';

export default {
  name: 'ResultDisplay',
  components: { BarChart },
  props: {
    taxableIncome: {
      type: Number,
      required: true,
    },
    taxAmount: {
      type: Number,
      required: true,
    },
    incomeAfterTax: {
      type: Number,
      required: true,
    },
  },
};
</script>
