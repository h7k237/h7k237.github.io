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
      fontFamily: {
        'display': ["'Cormorant Garamond'", 'serif'],
        'body': ["'Crimson Text'", 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        'h2': {
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '3.75rem', // text-6xl
          fontWeight: '700',   // font-bold
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          color: theme('colors.forest-green'), // uses your custom color
        },
        'h3': {
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.875rem', // text-3xl
          fontWeight: '600',     // font-semibold
          letterSpacing: '-0.01em',
          color: theme('colors.paper-black'),
        },
        'p': {
          fontFamily: "'Crimson Text', serif",
          fontSize: '1.25rem',  // text-xl
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          color: theme('colors.paper-black'),
          maxWidth: '36rem', // max-w-xl
        },
      })
    }
  ],
}
