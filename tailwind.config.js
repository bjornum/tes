/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        projecttheme: {
          primary: '#2888AA',
          secondary: '#CCDEF1',
          accent: '#1E657E',
          neutral: '#2F2F2F',
          'base-100': '#F2F3F5', // Main Background Theme Color
          info: '#D6D5D5',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#E99A8B',
        },
      },
      'light',
    ],
  },

  plugins: [require('daisyui')],
};
