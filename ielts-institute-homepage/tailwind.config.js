/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0F0F0F',
        'secondary-dark': '#232D3F',
        'primary-green': '#005B41',
        'secondary-green': '#008170',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0F0F0F 0%, #005B41 100%)',
        'gradient-green': 'linear-gradient(135deg, #005B41 0%, #008170 100%)',
      }
    },
  },
  plugins: [],
}