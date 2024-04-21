/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fitforge-black': '#1F2324',
        'fitforge-blue': '#1A8FE3',
        'fitforge-red':'#EE6352'
      },
    },
  },
  plugins: [],
}