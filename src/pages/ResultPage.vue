<template>
  <div class="container mx-auto p-6 max-w-4xl bg-white rounded-lg shadow-md">
    <h2 class="text-4xl font-bold text-center text-indigo-600 mb-6">
      Your Tax Calculation Results
    </h2>
    <ResultDisplay
      ref="resultsContent"
      :taxableIncome="computedTaxableIncome"
      :taxAmount="computedTaxAmount"
      :incomeAfterTax="computedIncomeAfterTax"
    />

    <!-- Export to PDF Button -->
    <button
      @click="generatePDF"
      class="mt-6 w-full md:w-1/3 bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 shadow-lg"
    >
      Download as PDF
    </button>

    <!-- Share Results Button -->
    <button
      @click="showShareModal = true"
      class="mt-4 w-full md:w-1/3 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 shadow-lg"
    >
      Share Results
    </button>

    <!-- ShareModal Component -->
    <ShareModal v-if="showShareModal" @close="showShareModal = false" />

    <!-- TaxRecommendation Component for dynamic suggestions -->
    <TaxRecommendation :taxAmount="computedTaxAmount" :incomeAfterTax="computedIncomeAfterTax" />
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import ResultDisplay from '@/components/ResultDisplay.vue'
import TaxRecommendation from '@/components/TaxRecommendation.vue'
import ShareModal from '@/components/ShareModal.vue'

export default {
  components: {
    ResultDisplay,
    TaxRecommendation,
    ShareModal
  },
  props: {
    taxableIncome: {
      type: Number,
      required: true
    },
    taxAmount: {
      type: Number,
      required: true
    },
    incomeAfterTax: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showShareModal: false
    }
  },
  computed: {
    computedTaxableIncome() {
      return Number(this.$route.params.taxableIncome) || 0
    },
    computedTaxAmount() {
      return Number(this.$route.params.taxAmount) || 0
    },
    computedIncomeAfterTax() {
      return Number(this.$route.params.incomeAfterTax) || 0
    }
  },

  methods: {
    generatePDF() {
      const element = this.$refs.resultsContent?.$el || this.$refs.resultsContent

      if (!element) return

      const options = {
        filename: 'Tax_Calculation_Results.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1.5 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
      }

      html2pdf().set(options).from(element).save()
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1080px;
  padding: 2rem;
}
</style>
