const defaultTheme = require('./defaultTheme')

const screens = {
  'xs': '475px',
  ...defaultTheme.theme.screens,
}

module.exports = {
  content: ["index.html","./**/*.jsx"],
  theme: {
    screens: screens,
    extend: {
    },
  },
  plugins: [],
}
