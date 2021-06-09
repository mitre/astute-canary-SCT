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
      // set the background pattern/image for your application
      backgroundImage: theme => ({
        'home-pattern': "url('~/assets/images/home-background-image.svg')",
        'page-pattern': "url('~/assets/images/background-image.svg')",
      }),
      colors: {
        // backgound used for cards and information backgrounds.
        // this is expecting a light color in which dark text is placed over it
        'light-background': '#FFFFFF',
        // The main color used for calendar background etc
        primary: '#081E3A',
        // used for links 
        secondary: '#3585EB',
        // color used to call attention to important things
        highlight: '#FFDF49',
        // a tertiary color used for button alternatives
        tertiary: '#6DA9EF',
        // the color used to represent feeling "poor"
        danger: '#EA1313',
        // the color used to represent feeling "fair"
        warning: '#F0CB31',
        // the color used to represent feeling "good"
        success: '#2FC74D',
        // used for survey answer selection buttons
        accent: '#8DBCF2',
        // used to represent items in the "symptoms" category
        symptom: '#785EAC',
        // used to represent items in the "vaccination" category
        vaccination: '#E97720',
        // used to represent items in the "testing" category
        testing: '#0ECCFB',
        'light-text': '#ffffff',
        'dark-text': '#415A79'
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
