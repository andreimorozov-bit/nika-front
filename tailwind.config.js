module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nikablue: {
          50: '#f2f7fb',
          100: '#eef9ff',
          200: '#e5eff8',
          700: '#107dc0',
        },
        nikayellow: {
          500: '#ffae38',
        },
      },
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
