/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#FFD700",   // bright gold
          DEFAULT: "#DAA520", // goldenrod (main brand gold)
          dark: "#B8860B",    // deeper antique gold
        },
      },
    },
  },
  plugins: [],
}
