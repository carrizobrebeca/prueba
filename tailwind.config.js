/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'border-pulse': 'pulse-border 1.5s ease-in-out infinite', // Agrega la animación pulse-border
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'pulse-border': { // Define el keyframe para la animación pulse-border
          '0%, 100%': { transform: 'scale(1)', borderWidth: '2px' },
          '50%': { transform: 'scale(1.05)', borderWidth: '4px' },
        },
      },
    },
  },
  plugins: [],
}
