<template>
  <div class="form">
    <form @submit.prevent>
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
          <option value="2024-2025">2024-2025</option>
          <option value="2023-2024">2023-2024</option>
          <option value="2022-2023">2022-2023</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2020-2021">2020-2021 pre budget</option>
          <option value="2019-2020">2019-2020</option>
        </select>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}
</style>
TaxResult.vue
html
Copy code
<template>
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
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TaxResult',
  props: {
    employmentIncome: Number,
    otherIncome: Number,
    taxAmount: Number,
    medicareLevy: Number,
    incomeAfterTax: Number,
    marginalTaxRate: Number,
    taxBrackets: Array
  },
  setup(props) {
    const totalIncome = computed(() => {
      return props.employmentIncome + props.otherIncome
    })

    return {
      totalIncome
    }
  }
})
</script>

<style scoped>
.results {
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
TaxCalculator.vue
html
Copy code
<template>
  <div class="calculator">
    <h1>Australian Income Tax Calculator</h1>
    <div class="form-and-results">
      <UserInput
        :employmentIncome="employmentIncome"
        :employmentFrequency="employmentFrequency"
        :otherIncome="otherIncome"
        :otherFrequency="otherFrequency"
        :financialYear="financialYear"
        @update:employmentIncome="employmentIncome = $event"
        @update:employmentFrequency="employmentFrequency = $event"
        @update:otherIncome="otherIncome = $event"
        @update:otherFrequency="otherFrequency = $event"
        @update:financialYear="financialYear = $event"
      />
      <TaxResult
        :employmentIncome="employmentIncome"
        :otherIncome="otherIncome"
        :taxAmount="taxAmount"
        :medicareLevy="medicareLevy"
        :incomeAfterTax="incomeAfterTax"
        :marginalTaxRate="marginalTaxRate"
        :taxBrackets="taxBrackets"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import UserInput from './UserInput.vue'
import TaxResult from './TaxResult.vue'

export default defineComponent({
  name: 'TaxCalculator',
  components: {
    UserInput,
    TaxResult
  },
  setup() {
    const employmentIncome = ref<number>(0)
    const employmentFrequency = ref<string>('annually')
    const otherIncome = ref<number>(0)
    const otherFrequency = ref<string>('annually')
    const financialYear = ref<string>('2024-2025')
    const taxAmount = ref<number | null>(null)
    const medicareLevy = ref<number>(0)
    const incomeAfterTax = ref<number>(0)
    const marginalTaxRate = ref<number








Continue generating