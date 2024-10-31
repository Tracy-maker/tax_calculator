<template>
    <div class="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Tailored Financial Recommendations</h3>
      
      <p v-if="taxAmount > 75000" class="text-gray-700 leading-relaxed mb-4">
        With a substantial tax liability, advanced tax planning is recommended. Explore strategic options such as optimizing capital gains, charitable deductions, and maximizing superannuation contributions.
        Consulting with a tax advisor or wealth manager could reveal significant savings opportunities, especially through investments that offer tax-deferred or tax-free growth.
      </p>
      
      <p v-else-if="taxAmount > 50000 && taxAmount <= 75000" class="text-gray-700 leading-relaxed mb-4">
        Your tax contributions are considerable, indicating that tax-efficient strategies may help. Consider reviewing tax deductions and exploring additional retirement fund contributions to benefit from tax deferrals.
        Diversifying investments into tax-favored assets may also reduce taxable income over time.
      </p>
      
      <p v-else-if="incomeAfterTax < 30000" class="text-gray-700 leading-relaxed mb-4">
        With a lower disposable income, you might benefit from a conservative savings approach. Building an emergency fund, automating savings, and exploring supplemental income streams could enhance financial stability and provide greater flexibility for future investments.
      </p>
      
      <p v-else-if="incomeAfterTax >= 30000 && incomeAfterTax < 70000" class="text-gray-700 leading-relaxed mb-4">
        Your after-tax income offers moderate flexibility. To capitalize on this, consider tax-advantaged investments or increasing retirement fund contributions. Maintaining a disciplined budgeting strategy will help to optimize savings while keeping future tax liabilities in check.
      </p>
      
      <p v-else class="text-gray-700 leading-relaxed">
        Your tax situation appears balanced. To sustain this financial health, continue monitoring expenses, seek high-yield, tax-efficient savings, and revisit financial goals regularly. Structuring an adaptable financial plan could enable you to respond dynamically to changes in income and tax regulations.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      taxAmount: {
        type: Number,
        required: true
      },
      incomeAfterTax: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .mt-8 {
    margin-top: 2rem;
  }
  .p-6 {
    padding: 1.5rem;
  }
  .bg-gray-100 {
    background: #f9fafb;
  }
  .text-gray-700 {
    color: #374151;
  }
  .shadow-lg {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }
  </style>
  