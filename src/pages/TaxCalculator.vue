<template>
    <div class="container mx-auto p-8">
      <CalculatorForm @calculate="handleCalculate" />
      <ResultDisplay
        v-if="showResults"
        :employmentIncome="employmentIncome"
        :taxAmount="taxAmount"
        :incomeAfterTax="incomeAfterTax"
        :marginalTaxRate="marginalTaxRate"
      />
    </div>
  </template>
  
  <script>
  import CalculatorForm from '../components/CalculatorForm.vue'
  import ResultDisplay from '../components/ResultDisplay.vue'
  
  export default {
    name: 'TaxCalculator',
    components: {
      CalculatorForm,
      ResultDisplay
    },
    data() {
      return {
        employmentIncome: 0,
        taxAmount: 0,
        incomeAfterTax: 0,
        marginalTaxRate: 0,
        showResults: false
      }
    },
    methods: {
      handleCalculate(data) {
     
        this.employmentIncome = data.income
        this.taxAmount = this.calculateTax(this.employmentIncome, data.frequency)
        this.incomeAfterTax = this.employmentIncome - this.taxAmount
        this.marginalTaxRate = this.getMarginalTaxRate(this.employmentIncome)
        this.showResults = true
      },
      calculateTax(income) {
      
        return income * 0.2 
      },
      getMarginalTaxRate(income) {
        return income > 100000 ? '37%' : '32.5%'
      }
    }
  }
  </script>
  