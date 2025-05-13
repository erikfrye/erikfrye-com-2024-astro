/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0F0F1A',
        surface: '#1A1A2E',
        primary: {
          DEFAULT: '#00FFE7',
          light: '#66FFF1',
          dark: '#00CCB9'
        },
        secondary: {
          DEFAULT: '#FF00D4',
          light: '#FF66E5',
          dark: '#CC00AA'
        },
        accent: {
          DEFAULT: '#8C52FF',
          light: '#B08FFF',
          dark: '#6E41CC'
        },
        info: '#38BDF8',
        warning: '#FBBF24',
        success: '#00FF85',
        danger: '#FF4C4C',
        muted: '#8890A5',
        white: '#F9FAFB'
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}