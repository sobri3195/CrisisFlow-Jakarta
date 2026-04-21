/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        panel: '#0f172acc',
        border: '#33415566'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,.12), 0 8px 30px rgba(2,6,23,.4)'
      }
    }
  },
  plugins: []
}
