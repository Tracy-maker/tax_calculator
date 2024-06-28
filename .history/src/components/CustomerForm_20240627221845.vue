<template>
  <div class="form">
    <form @submit.prevent>
      <div class="form-group">
        <label for="userName">Your Name:</label>
        <input type="text" v-model="userName" id="userName" required />
      </div>

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
