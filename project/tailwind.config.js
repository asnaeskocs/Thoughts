/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#d9e2f5',
          200: '#b3c6eb',
          300: '#8eaadf',
          400: '#688fd4',
          500: '#4273c8',
          600: '#345da0',
          700: '#274678',
          800: '#1a3050',
          900: '#0d1828',
        },
        accent: {
          50: '#fdf2f2',
          100: '#fde0e0',
          200: '#fbc5c5',
          300: '#f8a3a3',
          400: '#f47f7f',
          500: '#e57373',
          600: '#c04747',
          700: '#a83a3a',
          800: '#8c2e2e',
          900: '#6f2323',
        },
        success: {
          500: '#4ade80',
          600: '#22c55e',
        },
        warning: {
          500: '#facc15',
          600: '#eab308',
        },
        error: {
          500: '#f87171',
          600: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
};