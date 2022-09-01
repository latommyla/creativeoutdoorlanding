module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'homepage': "url('src/components/imgs/background/landingimage.png')",
    },
    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif'],
      'bebas': ['"Bebas Neue"', 'cursive'],
      'raleway': ['"Raleway"', 'sans-serif'],
    }
  },
  plugins: [],
}