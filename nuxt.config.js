export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'astute-canary',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vue-awesome',
      mode: 'client'
    },
    {
      src: '~/plugins/vuex-persist',
      mode: 'client'
    },
    {
      src: '~/plugins/survey',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['vue-awesome']
  },

  // Storybook
  storybook: {
    stories: [],
    webpackFinal (config) {
      return config
    }
  },

  // This is required for a static site - may need to change if you change to non static
  target: 'static'
}
