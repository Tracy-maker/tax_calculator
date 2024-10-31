<template>
    <transition name="fade">
      <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
          <h3 class="text-lg font-bold mb-2">🎉 Success</h3>
          <p class="text-gray-700">Your message was sent successfully!</p>
          <button @click="close" class="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            OK
          </button>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  