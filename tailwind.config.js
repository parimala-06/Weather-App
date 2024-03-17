/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg3': "url('assets/weather-app-img/images/bg3.jpg')",
        'bg2': "url('my-project/src/assets/weather-app-img/images/bg2.jpg')",
      },
    },
  },
  plugins: [],
}

