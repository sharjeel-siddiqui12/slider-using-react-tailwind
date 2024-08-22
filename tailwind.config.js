/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-md': { 'max': '999px' }, 
        'max-sd': { 'max': '690px' }, 
      },
      keyframes: {
        animate: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)',
            filter: 'blur(33px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
        },
        runningTime: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
      },
      animation: {
        conTitle: 'animate 1s ease-in-out 0.3s 1 forwards;', 
        conName: 'animate 1s ease-in-out 0.6s 1 forwards', 
        conDes: 'animate 1s ease-in-out 0.9s 1 forwards', 
        conBtn: 'animate 1s ease-in-out 1.2s 1 forwards', 
        runningTime: 'runningTime 7s linear 1 forwards',
      },
      boxShadow: {
        'text-shadow': '3px 4px 4px rgba(255, 255, 255, 0.8)', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '3px 4px 4px rgba(255, 255, 255, 0.8)',
        },
       
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
