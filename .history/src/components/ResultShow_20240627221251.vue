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
