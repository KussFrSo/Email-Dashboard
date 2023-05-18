// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    typescript: { shim: false},
    css:["~/assets/css/main.css"],
    modules:["@davestewart/nuxt-scrollbar", "nuxt-icon", "@nuxtjs/device"],
    app: {
        head:{
            title: "Nuxt 3 - Email - User Panel",
            link: [
                { rel: "stylesheet", href: "https://rsms.me/inter/inter.css"},
                { rel: "preconnect", href: "https://rsms.me"},
            ]
        }
    }
})
