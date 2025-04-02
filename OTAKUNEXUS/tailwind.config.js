module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // ...existing paths...
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...other plugins...
  ],
};
