/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",  // Scan all HTML and JS files in all subdirectories
    "./testSoal.html",    // Scan this specific file in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
