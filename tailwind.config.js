const jestConfig = require('./jest.config')

module.exports = {
  purge: [],
  mode: jestConfig,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: 'Silka',
    zIndex: {
      100: '100 !important',
      10: '10',
      20: '20',
      30: '30'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FAFAFA',
      black: '#123',
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
