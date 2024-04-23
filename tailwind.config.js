/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fitforge-black': '#1F2324',
        'fitforge-blue': '#1A8FE3',
        'fitforge-red': '#EE6352',
        'fitforge-green': '#05A442',
        'fitforge-gray': '#8C8C8C'
      },
      boxShadow: {
        'shadow-top': '0px -3px 10px -2px rgba(238,100,82,0.5)'
      }
    }
  },
  plugins: []
}
