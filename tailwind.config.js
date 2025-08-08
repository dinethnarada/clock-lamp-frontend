/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Clock Lamp Design Palette - Nalanda Gedige Inspired
        primary: {
          DEFAULT: '#4E3629', // Deep Stone Brown
          light: '#6B4A3A',
          dark: '#3A2A1F',
        },
        secondary: {
          DEFAULT: '#C6A57B', // Warm Sandstone
          light: '#D4B894',
          dark: '#B8945A',
        },
        accent: {
          DEFAULT: '#D4AF37', // Heritage Gold
          light: '#E4C25A',
          dark: '#C19B2A',
        },
        background: {
          light: '#FDF8F2', // Ivory / Off-white
          DEFAULT: '#FDF8F2',
        },
        text: {
          dark: '#2C2C2C', // Charcoal Black
          light: '#9A9A9A', // Warm Grey
          DEFAULT: '#2C2C2C',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
        accent: ['Great Vibes', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
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
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'heritage': '0 4px 20px rgba(78, 54, 41, 0.15)',
        'heritage-lg': '0 8px 30px rgba(78, 54, 41, 0.2)',
      },
    },
  },
  plugins: [],
} 