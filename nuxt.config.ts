// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title: 'Nuxt exemplo',
      meta: [
        { name: 'description', content:'Everything about nuxt 3'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  }
})