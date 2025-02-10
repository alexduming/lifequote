/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f5',
          100: '#ffe4ed',
          200: '#fccedd',
          300: '#f9a4bf',
          400: '#f76d97',
          500: '#E31563',
          600: '#cc0e54',
          700: '#aa0c46',
          800: '#8c0a3a',
          900: '#740831',
        },
        secondary: {
          50: '#fffaf5',
          100: '#fff4e5',
          200: '#ffe9cc',
          300: '#ffd599',
          400: '#ffbc66',
          500: '#FFA533',
          600: '#e68a24',
          700: '#cc711c',
          800: '#a65c18',
          900: '#8c4d15',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'oswald': ['Oswald', 'sans-serif'],
        'noto-sans': ['var(--font-noto-sans)'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'scale': 'scale 0.2s ease-in-out',
        blob: "blob 7s infinite",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/noise.png')",
      },
    },
  },
  plugins: [],
} 