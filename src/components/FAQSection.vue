<template>
    <div class="space-y-4">
      <h2 class="text-lg font-semibold text-blue-700">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <details class="bg-white p-4 rounded-lg shadow-md" v-for="(faq, index) in faqs" :key="index">
          <summary class="font-semibold text-gray-800 cursor-pointer">{{ faq.question }}</summary>
          <p class="mt-2 text-gray-700">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: 'How does the calculator estimate my tax based on different pay cycles?',
            answer: 'When you select a pay cycle (e.g., Fortnightly, Weekly), the calculator automatically converts your income to an annual estimate.'
          },
          {
            question: "What is the purpose of the 'Custom Value' field?",
            answer: "The 'Custom Value' field allows you to enter a specific income amount based on your selected pay cycle if your income isn’t annual."
          },
          {
            question: 'What financial years does this calculator cover?',
            answer: 'You can select various financial years in the calculator, each based on the tax brackets relevant to that year.'
          },
          {
            question: 'How is my employment type (e.g., Full-time, Part-time) considered in the calculation?',
            answer: 'Your employment type helps the calculator provide more tailored tax estimations.'
          },
          {
            question: 'Can I view and save my tax results?',
            answer: 'Yes, once your tax is calculated, you can view a detailed breakdown and choose to save your results.'
          },
          {
            question: 'Is my information stored or shared?',
            answer: 'No, all calculations are done in real-time, and we do not store or share any personal information entered into the calculator.'
          }
        ]
      }
    }
  }
  </script>
  