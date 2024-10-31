<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-80">
      <h3 class="text-lg font-bold mb-4">Share Your Results</h3>
      <button @click="share('twitter')" class="w-full mb-2 p-2 bg-blue-500 text-white rounded">
        Twitter
      </button>
      <button @click="share('facebook')" class="w-full mb-2 p-2 bg-blue-700 text-white rounded">
        Facebook
      </button>
      <button @click="share('linkedin')" class="w-full p-2 bg-blue-800 text-white rounded">
        LinkedIn
      </button>
      <button @click="$emit('close')" class="mt-4 p-2 w-full bg-gray-300 rounded">close</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    share(platform) {
      const shareUrl = encodeURIComponent(window.location.href)
      const text = encodeURIComponent('Check out my tax calculation results!')

      let url = ''

      switch (platform) {
        case 'twitter':
          url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${text}`
          break
        case 'facebook':
          url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
          break
        case 'linkedin':
          url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
          break
        default:
          return
      }

      window.open(url, '_blank', 'width=600,height=400')
    }
  }
}
</script>
