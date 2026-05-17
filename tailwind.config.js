/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f3e8d0',
        sepia: '#8a6846',
        ink: '#2f2419',
        bronze: '#b08b5a',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#2f2419' },
        },
        pageFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-8deg)' },
        },
        grainMove: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-2%, 2%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.9s ease-out both',
        typewriter: 'typewriter 4s steps(40, end) 1s both, blink 1s step-end infinite',
        pageFlip: 'pageFlip 0.9s ease-in-out forwards',
        grain: 'grainMove 7s steps(6) infinite',
      },
    },
  },
  plugins: [],
};
