<template>
  <div class="container mx-auto p-4 space-y-12">
    <!-- Header Section -->
    <section class="text-center mb-8">
      <h1 class="text-4xl font-extrabold text-blue-700 mb-4">Help & Support</h1>
      <p class="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Find answers to common questions, or reach out to our support team for further assistance.
        We’re here to help!
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- FAQ Section -->
      <div class="space-y-6">
        <h2 class="text-lg font-semibold text-blue-700">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <details class="bg-white p-4 rounded-lg shadow-md">
            <summary class="font-semibold text-gray-800 cursor-pointer">
              How do I calculate my income tax?
            </summary>
            <p class="mt-2 text-gray-700">
              Enter your income details and select deductions in the calculator. The tool will
              estimate your tax based on the latest Australian tax brackets.
            </p>
          </details>

          <details class="bg-white p-4 rounded-lg shadow-md">
            <summary class="font-semibold text-gray-800 cursor-pointer">
              What employment types does the calculator support?
            </summary>
            <p class="mt-2 text-gray-700">
              Our calculator accommodates full-time, part-time, freelance, and self-employed users
              to provide accurate tax estimations.
            </p>
          </details>

          <details class="bg-white p-4 rounded-lg shadow-md">
            <summary class="font-semibold text-gray-800 cursor-pointer">
              Can I save or share my results?
            </summary>
            <p class="mt-2 text-gray-700">
              Yes! You can share your results directly to social media or save a snapshot for future
              reference.
            </p>
          </details>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="bg-gray-50 p-4 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold text-blue-700 mb-2">Contact Support</h2>
        <p class="text-sm text-gray-600 mb-2">
          Still have questions? Fill out the form below, and we’ll get back to you as soon as
          possible.
        </p>

        <form class="space-y-4">
          <div>
            <label class="text-xs block text-gray-700">Name</label>
            <input
              type="text"
              class="w-full p-2 border rounded-md"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label class="text-xs block text-gray-700">Email</label>
            <input
              type="email"
              class="w-full p-2 border rounded-md"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label class="text-xs block text-gray-700">Message</label>
            <textarea
              class="w-full p-2 border rounded-md"
              rows="3"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
