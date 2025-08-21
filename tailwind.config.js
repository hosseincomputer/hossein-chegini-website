/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefcf7',
          100: '#fdf8ed',
          200: '#faf0d3',
          300: '#f5e4b5',
          400: '#eed48c',
          500: '#e6c063',
          600: '#d4a73a',
          700: '#b18a2e',
          800: '#8e6d28',
          900: '#745a26',
          950: '#3f2f12',
        },
        dark: {
          50: '#fefcf7',
          100: '#fdf8ed',
          200: '#faf0d3',
          300: '#f5e4b5',
          400: '#eed48c',
          500: '#e6c063',
          600: '#d4a73a',
          700: '#b18a2e',
          800: '#8e6d28',
          900: '#745a26',
          950: '#3f2f12',
        },
        cream: {
          50: '#fefcf7',
          100: '#fdf8ed',
          200: '#faf0d3',
          300: '#f5e4b5',
          400: '#eed48c',
          500: '#e6c063',
          600: '#d4a73a',
          700: '#b18a2e',
          800: '#8e6d28',
          900: '#745a26',
          950: '#3f2f12',
        },
        brick: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        texture: {
          crack: '#8b7355',
          stone: '#d2b48c',
          earth: '#a0522d',
          sand: '#f4d03f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
