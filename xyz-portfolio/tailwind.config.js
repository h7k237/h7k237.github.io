/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yass-queen': '#ff1d58',
        'sister-sister': '#f75990',
        'crown-yellow': '#fff685',
        'blue-light': '#00DDFF',
        'brutal-blue': '#0049B7',

        // V2 colors
        'paper-white': "#FAF8F3",
        'paper-black': "#3A4A3C",
        'my-amber': "#E07A3F",
        'forest-green': "#7A8F7C",
        'tree-bark': "#9C7A5B"
      },
    },
  },
  plugins: [],
}

