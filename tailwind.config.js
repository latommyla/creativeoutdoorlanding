module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'wagon': "url('src/components/imgs/sportwagon.png')",
      'landing': "url('/src/components/imgs/landingimage.png')",
    },
    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif'],
      'bebas': ['"Bebas Neue"', 'cursive'],
      'raleway': ['"Raleway"', 'sans-serif'],
    }
  },
  plugins: [],
}