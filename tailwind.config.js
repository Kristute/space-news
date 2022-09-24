/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    './nuxt.config.js',
  ],
  theme: {
    extend: {
      inset: {
        '-4': '-1rem',
      }
    }
  },
  plugins: [],
}
