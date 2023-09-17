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
        "darker-grey": "var(--darker-grey)",
        "lighter-grey": "var(--lighter-grey)"
      },
      backgroundImage: {
        'feature-image-1': "url('https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        'feature-image-2': "url('https://images.unsplash.com/photo-1682687220945-922198770e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        'feature-image-3': "url('https://images.unsplash.com/photo-1694248607966-7e6ac34c6e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        'feature-image-4': "url('https://images.unsplash.com/photo-1576603233026-571280f1c3ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
        'feature-image-5': "url('https://images.unsplash.com/photo-1552863045-991883e6f59b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')",
      }
    },
  },
  plugins: [],
}