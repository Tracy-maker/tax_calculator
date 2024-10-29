<template>
  <div class="container mx-auto p-8 spa=-p【‘- bg-gray-50">
    <!-- Header Section -->
    <section class="text-center">
      <h1 class="text-4xl font-extrabold text-blue-700 mb-4">Australian Income Tax Calculator</h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed pb-2">
        Effortlessly estimate your personal income tax with just a few steps. Gain insights into
        your tax obligations and see where your income stands among other Australians.
      </p>
    </section>

    <!-- Features Section -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
        <h2 class="text-xl font-semibold text-blue-600 mb-2">Accurate Tax Estimation</h2>
        <p class="text-gray-700">
          Enter your income details, select deductions, and receive a precise tax estimation based
          on the latest Australian tax brackets.
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
        <h2 class="text-xl font-semibold text-blue-600 mb-2">Income Ranking Comparison</h2>
        <p class="text-gray-700">
          See where your income ranks among others, offering context and insights into your
          financial standing.
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
        <h2 class="text-xl font-semibold text-blue-600 mb-2">Convenient Sharing Options</h2>
        <p class="text-gray-700">
          Share results on platforms like Twitter, Facebook, or Red, or save a snapshot for future
          reference.
        </p>
      </div>
    </section>

    <!-- Call to Action and Additional Info -->
    <section class="text-center space-y-5">
      <p class="text-gray-600 max-w-3xl mx-auto leading-relaxed pt-2">
        Simplify tax calculations with a tool that’s accurate, intuitive, and designed for all
        employment types. Start exploring your tax profile today.
      </p>
      <router-link
        to="/calculator"
        class="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold shadow-lg transition-all duration-300"
      >
        Start Your Calculation
      </router-link>

      <p class="text-gray-700 max-w-lg mx-auto mt-2">
        Need assistance? Visit our
        <router-link to="/contact" class="text-blue-600 underline">Help Page</router-link>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
