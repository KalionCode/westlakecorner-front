module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderRadius: ['first','last'],
      borderWidth: ["hover"],
      fontWeight:["hover", "group-hover"]
    },
  },
  plugins: [],
}
