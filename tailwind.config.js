/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // EB: ['EB Garamond', 'sans-serif'],
        // Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        grayText: '#E1E1E1',
        lightSurface: '#383838',
        primaryLight: '#E99A8B',
      },
      backgroundImage: {
        // omoss1: 'url(src/assets/images/upcommingcard2.png)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        projecttheme: {
          primary: '#B93923',
          secondary: '#397E80',
          accent: '#EDD246',
          neutral: '#2F2F2F',
          'base-100': '#121212', // Main Background Theme Color
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#E99A8B',
        },
      },
    ],
  },

  plugins: [require('daisyui')],
};
