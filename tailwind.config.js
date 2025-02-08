/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
          DEFAULT: '#1a1b1e',
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
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        oswald: ['var(--font-oswald)'],
        'noto-sans': ['var(--font-noto-sans)'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'scale': 'scale 0.2s ease-in-out',
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/noise.png')",
      },
    },
  },
  plugins: [],
} 