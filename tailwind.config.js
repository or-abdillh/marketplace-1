module.exports = {
  purge: [
	'./src/**/*.html',
	'./src/**/*.vue',
	'./src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xxs': '.6rem',
        'xxxs': '.45rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
