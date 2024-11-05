// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        }
      ],


      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    },
  },

  ssr: false,
  css: ['~/assets/style/main.css'],
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2024-11-05',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    host: '192.168.0.13',
  }
})