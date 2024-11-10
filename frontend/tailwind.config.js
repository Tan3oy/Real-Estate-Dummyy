/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    extend: {
      backgroundImage:{
        'home-hero-image': "url(https://demo.websolutionus.com/findestate/uploads/website-images/home-page-banner-2023-12-14-04-21-19-3202.jpg)"
      }
    },
  },
  plugins: [],
}