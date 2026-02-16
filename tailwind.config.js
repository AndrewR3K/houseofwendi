/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f3e5ea',
        rose: '#c97c92',
        'rose-dark': '#a45a71',
        cocoa: '#6b4b45',
        ink: '#3b2b28',
        cream: '#fbf6f7',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(78, 53, 49, 0.15)',
      },
      fontFamily: {
        serif: ['"Palatino Linotype"', '"Book Antiqua"', 'Palatino', 'serif'],
        sans: ['"Gill Sans"', '"Trebuchet MS"', 'sans-serif'],
      },
      keyframes: {
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cardIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        riseIn: 'riseIn 900ms ease both',
        cardIn: 'cardIn 700ms ease both',
      },
    },
  },
  plugins: [],
}
