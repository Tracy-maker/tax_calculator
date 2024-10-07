<template>
  <div class="container mx-auto p-1 max-w-4xl">
    <h2 class="text-4xl font-bold mb-4 text-center text-indigo-600">
      Australian Income Tax Calculator
    </h2>
    <p class="text-gray-600 text-center mb-8">
      Enter your income and employment details below to calculate your taxable income, tax, and after-tax earnings.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Left Column: Inputs (takes 2/3 of the width) -->
      <div class="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
        <!-- Income Input -->
        <div class="mb-6">
          <label class="sr-only" for="income">Income</label>
          <div class="flex items-center border-b-2 border-indigo-300 py-2">
            <span class="text-indigo-600 font-semibold">AUD</span>
            <input
              type="number"
              v-model.number="income"
              placeholder="Enter your Annual Income"
              class="w-full ml-3 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        <!-- Pay Cycle and Custom Value -->
        <div class="mb-6">
          <div class="flex flex-wrap gap-4">
            <select
              v-model="payCycle"
              class="bg-indigo-600 text-white font-semibold rounded-md px-6 py-3 shadow-md focus:ring-2 focus:ring-indigo-400 w-full md:w-48"
            >
              <option disabled value="">Select Pay Cycle</option>
              <option value="Yearly">Yearly</option>
              <option value="Fortnightly">Fortnightly</option>
              <option value="Weekly">Weekly</option>
              <option value="Daily">Daily</option>
              <option value="Hourly">Hourly</option>
            </select>
            <input
              type="number"
              v-model="customValue"
              :disabled="payCycle === 'Yearly'"
              placeholder="Enter Custom Value"
              class="border border-indigo-300 rounded-md px-4 py-3 w-full md:w-48 outline-none text-gray-700 shadow-md"
            />
          </div>
          <p class="text-xs text-gray-500 mt-2">
            Note: Select a <strong>Pay Cycle</strong> and input a corresponding <strong>Custom Value</strong> if it’s not “Yearly”. For example, if you are paid fortnightly, enter your <strong>fortnightly income</strong> in the custom value field.
          </p>
          <p class="text-xs text-gray-500 mt-1">
            * Custom value is only needed if your income is not annual. Otherwise, leave it blank or set it to “Yearly” to calculate based on your annual income.
          </p>
        </div>

        <!-- Employment Type Selection -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-indigo-600 mb-3">Employment Type</h3>
          <div class="grid grid-cols-2 gap-4">
            <label class="flex items-center space-x-2 cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-indigo-50 transition">
              <input
                type="radio"
                v-model="employmentType"
                value="Full-time"
                class="form-radio text-indigo-500"
              />
              <span>Full-time</span>
            </label>
            <label class="flex items-center space-x-2 cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-indigo-50 transition">
              <input
                type="radio"
                v-model="employmentType"
                value="Part-time"
                class="form-radio text-indigo-500"
              />
              <span>Part-time</span>
            </label>
            <label class="flex items-center space-x-2 cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-indigo-50 transition">
              <input
                type="radio"
                v-model="employmentType"
                value="Casual"
                class="form-radio text-indigo-500"
              />
              <span>Casual</span>
            </label>
            <label class="flex items-center space-x-2 cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-indigo-50 transition">
              <input
                type="radio"
                v-model="employmentType"
                value="Contractor"
                class="form-radio text-indigo-500"
              />
              <span>Contractor</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Right Column: Results Summary (takes 1/3 of the width) -->
      <div class="md:col-span-1 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 class="text-lg font-semibold mb-4 text-indigo-600">Calculation Summary</h3>
        <div class="mb-2">
          <p><strong>Taxable Income:</strong> AUD {{ taxableIncome }}</p>
        </div>
        <div class="mb-2">
          <p><strong>Tax Amount:</strong> AUD {{ taxAmount }}</p>
        </div>
        <div>
          <p><strong>After Tax Income:</strong> AUD {{ incomeAfterTax }}</p>
        </div>
        <!-- Result Button -->
        <router-link to="/result" class="mt-6 inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200">
          View Detailed Results
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      income: 0,
      payCycle: '',
      customValue: null,
      employmentType: '',
      taxableIncome: 0,
      taxAmount: 0,
      incomeAfterTax: 0
    }
  },
  watch: {
    income: 'calculateTax',
    payCycle: 'calculateTax',
    customValue: 'calculateTax',
    employmentType: 'calculateTax'
  },
  methods: {
    calculateTax() {
      // Basic calculation logic
      this.taxableIncome = this.income
      this.taxAmount = this.taxableIncome * 0.2 // Example 20% tax rate
      this.incomeAfterTax = this.taxableIncome - this.taxAmount
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1080px;
}
</style>
