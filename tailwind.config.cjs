/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        neutral: {
          650: '#363636',
          700: '#303030',
          750: '#2D2D2D',
          850: '#242424',
          900: '#232323',
        },
        plurple: '#8a4dd4',
        blurple: '#5865f2',
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'translateX(-25%)',
          },
          '40%': {
            width: '100%',
            transform: 'translateX(0%)',
          },
          '60%': {
            width: '100%',
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-25%)',
          },
        },

        'bg-pan': {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '-200% center' },
        },

        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        'slide-up': {
          '0%': { transform: 'translateY(20%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundSize: {
        double: '200%',
      },
      backgroundImage: {
        syncstation:
          'linear-gradient(to right, #4852c5, #9a35bb, #9a35bb, #4852c5)',
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        'mini-dark-button': '4px 4px 5px #222222a9, -2px -2px 3px #3d3d3d5c',
        'dark-button': '5px 5px 4px #202020a9, -4px -4px 6px #34343479',
        'blurple-button': '0 0 10px #5865f2, 0 0 15px #444ebd',
        'plurple-button': '0 0 10px #8a4dd4, 0 0 15px #7541b4',
      },
      borderRadius: {
        '2.5xl': '1.2rem',
        '4xl': '2rem',
      },
      width: {
        18: '4.5rem',
      },
      translate: {
        18: '4.5rem',
      },
      margin: {
        18: '4.5rem',
      },
      height: {
        '2/5': '40%',
      },
      inset: {
        '2/5': '40%',
      },
    },
  },
};
