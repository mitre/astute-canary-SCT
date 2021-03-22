module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-background': '#F9F9F9',
        primary: '#242348',
        secondary: '#AC97CE',
        tertiary: '#F2ECFB',
        danger: '#FF6262',
        warning: '#FFF186',
        success: '#1CDA94',
        accent: '#E67E1A',
        symptom: '#785EAC',
        vaccination: '#E97720',
        testing: '#0ECCFB',
        'light-text': '#ffffff',
        'dark-text': '#0A049D'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
