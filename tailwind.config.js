/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-grey": "var(--primary-grey)",
        "darker-grey": "var(--darker-grey)"
      }
    },
  },
  plugins: [],
}