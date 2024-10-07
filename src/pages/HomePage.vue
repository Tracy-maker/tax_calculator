<template>
  <div class="container mx-auto p-8 text-center">
    <h1 class="text-4xl font-extrabold text-blue-700 mb-4">
      Welcome to the Australian Income Tax Calculator
    </h1>
    <p class="text-lg text-gray-700">
      This application is designed to help you calculate your personal income tax accurately and
      efficiently. With just a few simple steps, you can gain valuable insights into your tax
      obligations and see where your income stands among other Australians.
    </p>
    <p class="mt-4 text-lg text-gray-700">
      Whether you're a full-time employee, a part-time worker, a freelancer, or self-employed, our
      calculator is tailored to accommodate various income and employment types, making complex tax
      calculations straightforward and accessible.
    </p>
    <div class="mt-6 text-left max-w-xl mx-auto">
      <h2 class="text-2xl font-semibold text-blue-600 mb-2">Features of the Calculator:</h2>
      <ul class="list-disc list-inside text-gray-700">
        <li class="mt-2">
          <strong>Accurate Tax Estimation:</strong> Input your income details, select deductions,
          and receive a precise estimation of your tax obligations based on the latest Australian
          tax brackets.
        </li>
        <li class="mt-2">
          <strong>Income Ranking Comparison:</strong> Understand where your income ranks in
          comparison to others, providing context and insight into your financial standing.
        </li>
        <li class="mt-2">
          <strong>Convenient Sharing Options:</strong> Once you receive your results, share them
          directly to popular platforms like Twitter, Facebook, or Xiaohongshu, or save a snapshot
          for future reference.
        </li>
      </ul>
    </div>
    <p class="mt-6 text-gray-500">
      Our calculator is designed with simplicity and accuracy in mind, ensuring that you receive
      reliable results without the complexity of traditional tax tools. Begin exploring your tax
      profile today and make informed financial decisions with confidence.
    </p>
    <router-link
      to="/calculator"
      class="mt-8 inline-block bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 text-xl font-semibold"
    >
      Start Your Calculation
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
