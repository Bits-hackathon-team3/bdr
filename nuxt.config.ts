// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://bits-hackathon.hasura.app/v1/graphql',
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': 'w70qqEaxeDrGBPMPMMofKoIkBfX7pumuZsSwxgVVevd0C8AP5aMWc6CnePhXp8HX',
      },
  },
      }
    },
  }
})
