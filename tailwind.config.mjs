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
        light: {
          background: '#F3F4F6',
          surface: '#F9FAFB',
          primary: '#4F46E5',
          secondary: '#EC4899',
          accent: '#6366F1',
          info: '#38BDF8',
          warning: '#FBBF24',
          success: '#10B981',
          danger: '#EF4444',
          muted: '#6B7280',
          text: '#111827',
          white: '#ffffff',
        },
        dark: {
          background: '#0F0F1A',
          surface: '#1A1A2E',
          primary: '#00FFE7',
          secondary: '#FF00D4',
          accent: '#8C52FF',
          info: '#38BDF8',
          warning: '#FBBF24',
          success: '#00FF85',
          danger: '#FF4C4C',
          muted: '#8890A5',
          text: '#F9FAFB',
          white: '#F9FAFB',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}