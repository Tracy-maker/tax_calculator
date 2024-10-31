<template>
  <div class="container mx-auto p-4 max-w-2xl space-y-4 bg-white rounded-lg shadow-lg">
    <!-- Header Section -->
    <header class="text-center space-y-2">
      <h2 class="text-3xl font-bold text-blue-600">Australian Income Tax Calculator</h2>
      <p class="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
        Quickly estimate your personal income tax by entering your income details below.
      </p>
    </header>

    <!-- Financial Year Selector -->
    <div class="space-y-2">
      <label class="text-sm font-semibold text-gray-700">Financial Year</label>
      <select
        v-model="selectedYear"
        class="w-full px-4 py-2 bg-blue-400 text-white rounded-lg shadow focus:ring-2 focus:ring-indigo-500"
      >
        <option disabled value="">Select Year</option>
        <option v-for="year in Object.keys(taxRates)" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>

    <!-- Income and Employment Details Section -->
    <section class="space-y-4">
      <!-- Income Input -->
      <div class="space-y-2">
        <label class="text-sm font-semibold text-gray-700">Annual Income (AUD)</label>
        <div class="relative flex items-center border border-gray-300 rounded-lg p-3 shadow-sm">
          <span class="text-blue-400 font-bold">AUD</span>
          <input
            type="number"
            v-model.number="income"
            placeholder="e.g., 75000"
            class="ml-2 w-full text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <!-- Pay Cycle and Custom Value -->
      <div class="flex gap-4">
        <div class="w-1/2">
          <label class="text-sm font-semibold text-gray-700">Pay Cycle</label>
          <select
            v-model="payCycle"
            class="w-full px-4 py-2 bg-blue-400 text-white rounded-lg shadow focus:ring-2 focus:ring-indigo-500"
          >
            <option disabled value="">Choose a Cycle</option>
            <option value="Yearly">Yearly</option>
            <option value="Fortnightly">Fortnightly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
            <option value="Hourly">Hourly</option>
          </select>
        </div>
        <div class="w-1/2">
          <label class="text-sm font-semibold text-gray-700">Custom Value</label>
          <input
            type="number"
            v-model.number="customValue"
            :disabled="payCycle === 'Yearly'"
            placeholder="Custom Value"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <!-- Employment Type Selection -->
      <div class="space-y-2">
        <label class="text-sm font-semibold text-gray-700">Employment Type</label>
        <div class="flex gap-4">
          <button
            v-for="type in employmentTypes"
            :key="type"
            @click="employmentType = type"
            :class="
              employmentType === type ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
            "
            class="w-1/4 px-4 py-2 rounded-lg shadow-sm font-semibold transition-colors text-center"
          >
            {{ type }}
          </button>
        </div>
      </div>
    </section>

    <!-- Action Button to View Results -->
    <footer class="text-center">
      <router-link
        v-if="isFormValid"
        :to="{
          name: 'ResultPage',
          params: {
            taxableIncome: Number(this.taxableIncome),
            taxAmount: Number(this.taxAmount),
            incomeAfterTax: Number(this.incomeAfterTax)
          }
        }"
        class="inline-block w-full md:w-2/3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-teal-600 shadow-lg transition-transform transform hover:scale-105"
      >
        View Detailed Results
      </router-link>
    </footer>
  </div>
</template>

<script>
import { taxRates } from '../data/taxRates'

export default {
  name: 'TaxCalculator',
  data() {
    return {
      income: 0,
      payCycle: '',
      customValue: null,
      employmentType: '',
      employmentTypes: ['Full-time', 'Part-time', 'Casual', 'Contractor'],
      taxableIncome: 0,
      taxAmount: 0,
      incomeAfterTax: 0,
      selectedYear: '',
      taxRates
    }
  },
  computed: {
    isFormValid() {
      return this.income > 0 && this.selectedYear !== ''
    }
  },
  watch: {
    income: 'calculateTax',
    payCycle: 'calculateTax',
    customValue: 'calculateTax',
    employmentType: 'calculateTax',
    selectedYear: 'calculateTax'
  },
  methods: {
    calculateTax() {
      if (!this.selectedYear || !this.income) return

      // Convert income based on pay cycle
      const annualIncome = this.calculateAnnualIncome()

      const taxBrackets = this.taxRates[this.selectedYear]
      let tax = 0

      // Calculate tax based on tax brackets
      for (const bracket of taxBrackets) {
        if (annualIncome > bracket.incomeMax) {
          tax += (bracket.incomeMax - bracket.incomeMin) * bracket.rate
        } else {
          tax += (annualIncome - bracket.incomeMin) * bracket.rate
          break
        }
      }

      this.taxableIncome = annualIncome
      this.taxAmount = tax
      this.incomeAfterTax = annualIncome - tax
    },
    calculateAnnualIncome() {
      switch (this.payCycle) {
        case 'Fortnightly':
          return Number(this.income) * 26
        case 'Weekly':
          return Number(this.income) * 52
        case 'Daily':
          return Number(this.income) * 260
        case 'Hourly':
          return Number(this.income) * 2080
        default:
          return Number(this.income)
      }
    }
  }
}
</script>
