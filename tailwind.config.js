/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#5F00D9',
        'customGray': '#535D66',
        'bgColor': '#F3F3F7',

      },
      fontFamily: {
        'ubuntu': "'Ubuntu', sans-serif",
      }

    },
  },
  plugins: [],
}

