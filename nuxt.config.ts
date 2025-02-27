// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxtjs/apollo",
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
    },
  },
  apollo: {
    clients: {
      default: {
        tokenName: "github-token",
        httpEndpoint: "https://api.github.com/graphql",
      },
    },
  },
})
