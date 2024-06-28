<template>
  <div class="calculator">
    <h1>Australian Income Tax Calculator</h1>
    <div class="form-and-results">
      <form @submit.prevent class="form">
        <div class="form-group">
          <label for="employmentIncome"
            >Employment income (after salary sacrifice, before tax):</label
          >
          <input type="number" v-model="employmentIncome" id="employmentIncome" required />
          <select v-model="employmentFrequency" id="employmentFrequency">
            <option value="annually">Annually</option>
            <option value="monthly">Monthly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div class="form-group">
          <label for="otherIncome">Other taxable income:</label>
          <input type="number" v-model="otherIncome" id="otherIncome" required />
          <select v-model="otherFrequency" id="otherFrequency">
            <option value="annually">Annually</option>
            <option value="monthly">Monthly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div class="form-group">
          <label for="financialYear">Financial year:</label>
          <select v-model="financialYear" id="financialYear">
            <option value="2020-2021">2020-2021 pre budget</option>
            <!-- Add more financial years as needed -->
          </select>
        </div>
      </form>

      <div v-if="taxAmount !== null" class="results">
        <h2>The estimated tax on your taxable income is</h2>
        <p class="tax-amount">{{ taxAmount }}</p>

        <div class="summary">
          <h3>Summary</h3>
          <p><strong>Your taxable income:</strong> {{ totalIncome }}</p>
          <p><strong>Income tax payable:</strong> {{ taxAmount }}</p>
          <p><strong>Medicare levy payable:</strong> {{ medicareLevy }}</p>
          <p><strong>Your income after tax & Medicare levy:</strong> {{ incomeAfterTax }}</p>
          <p><strong>Your marginal tax rate:</strong> {{ marginalTaxRate }}%</p>
          <h4>This means for an annual income of {{ totalIncome }} you pay:</h4>
          <ul>
            <li>No tax on income between $1 - $18,200: $0</li>
            <li>19c for every dollar between $18,201 - $37,000: ${{ taxBrackets[1] }}</li>
            <li>32.5c for every dollar between $37,001 - $90,000: ${{ taxBrackets[2] }}</li>
            <li>37c for every dollar between $90,001 - $180,000: ${{ taxBrackets[3] }}</li>
            <li>45c for every dollar over $180,000: ${{ taxBrackets[4] }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'

export default defineComponent({
  name: 'TaxCalculator',
  setup() {
    const employmentIncome = ref<number>(0)
    const employmentFrequency = ref<string>('annually')
    const otherIncome = ref<number>(0)
    const otherFrequency = ref<string>('annually')
    const financialYear = ref<string>('2020-2021')
    const taxAmount = ref<number | null>(null)
    const medicareLevy = ref<number>(0)
    const incomeAfterTax = ref<number>(0)
    const marginalTaxRate = ref<number>(0)
    const taxBrackets = ref<number[]>([0, 0, 0, 0, 0])

    const totalIncome = computed(() => {
      return employmentIncome.value + otherIncome.value
    })

    const calculateTax = () => {
      // Replace this with actual tax calculation logic
      // This is a placeholder for the logic to calculate tax based on income and frequencies
      const totalTaxableIncome = totalIncome.value // Placeholder logic
      taxAmount.value = totalTaxableIncome * 0.45 // Placeholder logic for tax amount
      medicareLevy.value = totalTaxableIncome * 0.02 // Placeholder logic for Medicare levy
      incomeAfterTax.value = totalTaxableIncome - taxAmount.value - medicareLevy.value // Placeholder logic
      marginalTaxRate.value = 45 // Placeholder logic for marginal tax rate
      taxBrackets.value = [
        0,
        totalTaxableIncome > 37000 ? 3572 : 0,
        totalTaxableIncome > 90000 ? 17225 : 0,
        totalTaxableIncome > 180000 ? 33900 : 0,
        totalTaxableIncome > 180000 ? (totalTaxableIncome - 180000) * 0.45 : 0
      ]
    }

    watch(
      [employmentIncome, employmentFrequency, otherIncome, otherFrequency, financialYear],
      () => {
        calculateTax()
      }
    )

    return {
      employmentIncome,
      employmentFrequency,
      otherIncome,
      otherFrequency,
      financialYear,
      taxAmount,
      medicareLevy,
      incomeAfterTax,
      marginalTaxRate,
      taxBrackets,
      totalIncome
    }
  }
})
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.form-and-results {
  display: flex;
  width: 100%;
  max-width: 1200px;
}

.form {
  flex: 1;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.results {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
}

.tax-amount {
  font-size: 2em;
  font-weight: bold;
  color: #333;
}

.summary {
  margin-top: 20px;
}

.summary h3,
.summary h4 {
  margin-bottom: 10px;
}

.summary ul {
  list-style-type: none;
  padding-left: 0;
}

.summary ul li {
  margin-bottom: 5px;
}
</style>
