/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#242348',
        secondary: '#5A55AA',
        tertiary: '#F2ECFB',
        warning: '#F42222',
        good: '#09C458',
        accent: '#E67E1A',
        'light-text': '#ffffff',
        'dark-text': '#0A049D'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
