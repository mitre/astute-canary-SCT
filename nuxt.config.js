let development = process.env.NODE_ENV !== 'production'
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
      src: '~/plugins/vuex-persist',
      mode: 'client'
    },
    {
      src: '~/plugins/calendar',
      mode: 'client'
    },
    {
      src: '~/plugins/survey-vue',
      mode: 'client'
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    standalone: true
  },
  // icons
  fontawesome: {
    icons: {
      solid: ['faHome', 'faCalendar', 'faPlusCircle', 'faChartLine', 'faUserCog', 'faBell', 'faCog', 'faUser', 'faSignOutAlt', 'faLock', 'faQuestionCircle']
    }
  },

  // Storybook
  storybook: {
    stories: [],
    webpackFinal (config) {
      return config
    }
  },

  vendor: [
    'vuex-persist',
    'survey-vue'
  ],

  // This is required for a static site - may need to change if you change to non static
  target: 'static',
  generate: {
    dir: 'public'
  },
  // router: {
  //   base: '/astute-canary/'
  // }

}
