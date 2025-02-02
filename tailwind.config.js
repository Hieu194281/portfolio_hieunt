/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'zoom-in-out': 'zoomInOut 1s ease-in-out infinite',
      },
      keyframes: {
        zoomInOut: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)', // You can adjust the zoom level here
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        '.scrollbar-vertical': {
          scrollbarWidth: 'thin', // Firefox: thanh cuộn nhỏ
        },
        '.scrollbar-vertical::-webkit-scrollbar': {
          width: '2px', // Độ rộng của thanh cuộn dọc (Chrome, Safari, Edge)
        },
        '.scrollbar-vertical::-webkit-scrollbar-thumb': {
          backgroundColor: '#a0aec0', // Màu thumb
          borderRadius: '10px', // Bo góc cho thumb
        },
        '.scrollbar-vertical::-webkit-scrollbar-track': {
          backgroundColor: '#edf2f7', // Màu nền track
          borderRadius: '10px', // Bo góc cho track
        },
      });
    }),
  ],
}