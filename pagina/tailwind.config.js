const defaultTheme = require('./defaultTheme')

const screens = {
  'xs': '475px',
  ...defaultTheme.theme.screens,
  'xl':'1024px'
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: ["./pages/**/*.{js,ts,jsx,tsx}",'./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: screens,
    extend: {},
  },
  plugins: [],
}
