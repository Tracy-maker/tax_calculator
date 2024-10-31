<template>
    <div class="bg-gray-50 p-4 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold text-blue-700 mb-2">Contact Support</h2>
      <p class="text-sm text-gray-600 mb-2">
        Still have questions? Fill out the form below, and we'll get back to you as soon as possible.
      </p>
  
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="text-xs block text-gray-700">Name</label>
          <input
            v-model="formData.from_name"
            type="text"
            class="w-full p-2 border rounded-md"
            placeholder="Your name"
            required
          />
        </div>
  
        <div>
          <label class="text-xs block text-gray-700">Email</label>
          <input
            v-model="formData.reply_to"
            type="email"
            class="w-full p-2 border rounded-md"
            placeholder="Your email"
            required
          />
        </div>
  
        <div>
          <label class="text-xs block text-gray-700">Message</label>
          <textarea
            v-model="formData.message"
            class="w-full p-2 border rounded-md"
            rows="8"
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
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          from_name: '',
          reply_to: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$emit('submit', this.formData)
        this.formData = { from_name: '', reply_to: '', message: '' } 
      }
    }
  }
  </script>
  