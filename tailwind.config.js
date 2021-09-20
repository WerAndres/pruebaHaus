const jestConfig = require('./jest.config')

module.exports = {
  purge: [],
  mode: jestConfig,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: 'Silka',
    zIndex: {
      100: '100 !important'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FAFAFA',
      'lh-jungle-green': '#012D26',
      'lh-md-blue': '#EBEDFF',
      'lh-sky-blue': '#3948FF',
      'lh-bg-gray': '#E5F0EE',
      'lh-caribbean-green': '#3ECFAF'
    },
    extend: {
      fontFamily: {
        headline: ['Silka'],
        sans: ['Silka']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
