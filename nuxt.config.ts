export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxt/postcss8',
  ],
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
