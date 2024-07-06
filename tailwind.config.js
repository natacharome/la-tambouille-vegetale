/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primary': '#395246',
      },
      screens: {
        'lg': '1400px',
        'md': '900px',
      }
    },
    fontFamily: {
      'base': ['"Montserrat Alternates"', 'sans-serif'],
    }
  },
  plugins: [],
}

