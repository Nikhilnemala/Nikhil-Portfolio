/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./App.jsx",
      ],
      theme: {
        extend: {
          fontFamily: {
            'inter': ['Inter', 'sans-serif'],
            'roboto-mono': ['Roboto Mono', 'monospace'],
          },
        },
      },
      plugins: [],
    }