/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#101E2E', // Deepest Navy
          800: '#242F49', // Dark Navy
          700: '#384358', // Medium Navy
          600: '#4B586E',
          100: '#E6E9EF',
        },
        brand: {
          red: '#B51A2B',    // Vibrant Red
          burgundy: '#541A2B', // Deep Burgundy
          dark: '#3d121f',
        },
        accent: {
          peach: '#FFA586',
          light: '#FFD4C4',
        },
        gold: {
          400: '#FFD700',
          500: '#D4AF37',
          600: '#AA8C2C',
        },
        bg: {
          oled: '#000000',
          paper: '#FFFFFF',
          glass: 'rgba(255, 255, 255, 0.05)',
          'glass-dark': 'rgba(0, 0, 0, 0.4)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
