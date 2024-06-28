<template>
  <div class="calculator">
    <h1>Australian Income Tax Calculator</h1>
    <div class="form-and-results">
      <form @submit.prevent class="form">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>

        <div class="form-group">
          <label for="employmentIncome"
            >Employment Income (after salary sacrifice, before tax):</label
          >
          <input type="number" v-model="employmentIncome" id="employmentIncome" required />
        </div>
        <div class="form-group">
          <label for="employmentFrequency">Employment Income Frequency:</label>
          <select v-model="employmentFrequency" id="employmentFrequency">
            <option value="annually">Annually</option>
            <option value="monthly">Monthly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div class="form-group">
          <label for="otherIncome">Other Taxable Income:</label>
          <input type="number" v-model="otherIncome" id="otherIncome" required />
        </div>
        <div class="form-group">
          <label for="otherFrequency">Other Taxable Income Frequency:</label>
          <select v-model="otherFrequency" id="otherFrequency">
            <option value="annually">Annually</option>
            <option value="monthly">Monthly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div class="form-group">
          <label for="deductions">Deductions:</label>
          <input type="number" v-model="deductions" id="deductions" />
        </div>
        <div class="form-group">
          <label for="credits">Tax Credits:</label>
          <input type="number" v-model="credits" id="credits" />
        </div>
      </form>
      <div v-if="taxAmount !== null" class="results">
        <h2>Calculation Results</h2>
        <p>{{ name }}, your tax amount is: {{ taxAmount }}</p>
        <p>Your income rank among all users is: {{ incomeRank }}%</p>
      </div>
    </div>
  </div>
</template>
