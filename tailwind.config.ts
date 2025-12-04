import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00d4aa',
          50: '#e6fff9',
          100: '#b3ffe9',
          200: '#80ffd9',
          300: '#4dffc9',
          400: '#1affb9',
          500: '#00d4aa',
          600: '#00a88a',
          700: '#007c66',
          800: '#005043',
          900: '#002421',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          50: '#f5f5f6',
          100: '#e5e5e7',
          200: '#cdcdd1',
          300: '#a9a9b1',
          400: '#7c7c89',
          500: '#61616e',
          600: '#52525d',
          700: '#46464f',
          800: '#3d3d44',
          900: '#12121a',
          950: '#0a0a0f',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'shadowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shadowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 212, 170, 0.1), 0 0 40px rgba(0, 212, 170, 0.05)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0, 212, 170, 0.2), 0 0 60px rgba(0, 212, 170, 0.1)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 60px rgba(0, 212, 170, 0.15)',
        'glow-strong': '0 0 80px rgba(0, 212, 170, 0.25)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config

