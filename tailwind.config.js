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
      backgroundImage: theme => ({
        'home-pattern': "url('~/assets/images/home-background-image.svg')",
        'page-pattern': "url('~/assets/images/background-image.svg')",
      }),
      colors: {
        // makes the wavey page background color
        'wave-primary': '#1D314A',
        'wave-secondary': '#34455C',
        'wave-tertiary': '#4A596D',
        // backgound used for cards and information backgrounds.
        // this is expecting a light color in which dark text is placed over it
        'light-background': '#F9F9F9',
        // The main color used for calendar background etc
        primary: '#081E3A',
        // used for links 
        secondary: '#AC97CE',
        // a tertiary color used for button alternatives
        tertiary: '#F2ECFB',
        // the color used to represent feeling "poor"
        danger: '#FF6262',
        // the color used to represent feeling "fair"
        warning: '#FFF186',
        // the color used to represent feeling "good"
        success: '#1CDA94',
        // used for callout buttons
        accent: '#E67E1A',
        // used to represent items in the "symptoms" category
        symptom: '#785EAC',
        // used to represent items in the "vaccination" category
        vaccination: '#E97720',
        // used to represent items in the "testing" category
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
