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
