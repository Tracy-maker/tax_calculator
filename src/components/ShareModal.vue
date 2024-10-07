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
      <button @click="share('weibo')" class="w-full p-2 bg-red-500 text-white rounded">RED</button>
      <button @click="$emit('close')" class="mt-4 p-2 w-full bg-gray-300 rounded">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    share(platform) {
      alert(`Sharing ${platform}`)
    }
  }
}
</script>
