/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'tealBackground': 'url(https://images.pexels.com/photos/7233116/pexels-photo-7233116.jpeg)'
      }
    },
  },
  plugins: [],
}