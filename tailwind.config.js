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
        primary: '#8A2BE2', // Violet/Purple
        secondary: '#1E90FF', // Dodger Blue
        dark: {
          background: '#121212', // Very dark gray
          surface: '#1E1E1E', // Dark gray (for cards, etc.)
          text: '#FFFFFF',
          'text-secondary': '#B3B3B3',
          border: '#333333',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}