<template>
  <div class="container mx-auto p-4 space-y-8">
    <!-- Modals -->
    <SuccessModal :show="showSuccessModal" @close="showSuccessModal = false" />
    <ErrorModal :show="showErrorModal" @close="showErrorModal = false" />
    <!-- Header Section -->
    <section class="text-center mb-4">
      <h1 class="text-4xl font-extrabold text-blue-700 mb-4">Help & Support</h1>
      <p class="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Find answers to common questions, or reach out to our support team for further assistance.
        We're here to help!
      </p>
    </section>

    <!-- FAQ and Contact Form Sections -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <FAQSection />

      <!-- Contact Form Section -->
      <ContactForm @submit="sendEmail" />
    </section>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import SuccessModal from '../components/SuccessModal.vue'
import ErrorModal from '../components/ErrorModal.vue'
import FAQSection from '../components/FAQSection.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  components: {
    SuccessModal,
    ErrorModal,
    FAQSection,
    ContactForm
  },
  data() {
    return {
      showSuccessModal: false,
      showErrorModal: false
    }
  },
  methods: {
    sendEmail(formData) {
      const serviceID = import.meta.env.VITE_SERVICE_ID
      const templateID = import.meta.env.VITE_TEMPLATE_ID
      const userID = import.meta.env.VITE_USER_ID

      emailjs
        .send(serviceID, templateID, formData, userID)
        .then(() => {
          this.showSuccessModal = true
        })
        .catch((error) => {
          console.error('EmailJS error:', error)
          this.showErrorModal = true
        })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
