<template>
    <form @submit.prevent="calculateTax" class="space-y-4">
      <div>
        <label for="income" class="block">Employment Income</label>
        <input type="number" v-model="employmentIncome" id="income" class="border p-2 w-full" />
      </div>
      <div>
        <label for="frequency" class="block">Employment Frequency</label>
        <select v-model="employmentFrequency" id="frequency" class="border p-2 w-full">
          <option value="annual">Annual</option>
          <option value="monthly">Monthly</option>
          <option value="hourly">Hourly</option>
        </select>
      </div>
      <button type="submit" class="bg-blue-600 text-white p-2">Calculate Tax</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'CalculatorForm',
    data() {
      return {
        employmentIncome: 0,
        employmentFrequency: 'annual'
      }
    },
    methods: {
      calculateTax() {
        this.$emit('calculate', { income: this.employmentIncome, frequency: this.employmentFrequency })
      }
    }
  }
  </script>
  