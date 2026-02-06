/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app.js", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'fusion-orange': '#F27521', // Laranja oficial da Fusion [cite: 2, 6, 43]
        'fusion-black': '#1A1A1A',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
