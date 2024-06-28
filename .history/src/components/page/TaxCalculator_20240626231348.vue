<template>
  <div class="calculator">
    <h1>Tax Calculator</h1>
    <form @submit.prevent>
      <EmploymentTypeSelect
        :employmentType="employmentType"
        @update:employmentType="employmentType = $event"
      />
      <IncomeTypeSelect :incomeType="incomeType" @update:incomeType="incomeType = $event" />
      <IncomeInput :income="income" @update:income="income = $event" />
      <DeductionsInput :deductions="deductions" @update:deductions="deductions = $event" />
      <CreditsInput :credits="credits" @update:credits="credits = $event" />
    </form>
    <div v-if="taxAmount !== null" class="results">
      <h2>Calculation Results</h2>
      <p>Your tax amount is: {{ taxAmount }}</p>
      <p>Your income rank among all users is: {{ incomeRank }}%</p>
    </div>
  </div>
</template>
