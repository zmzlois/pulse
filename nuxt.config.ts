// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  app: {
    pageTransition: {
      name: "v",
      mode: "out-in",
    },
    head: {
      bodyAttrs: {
        class: "bg-background",
      },
    },
  },
  tailwindcss: {
    cssPath: "./assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    editorSupport: true,
    viewer: true,
  },
});
