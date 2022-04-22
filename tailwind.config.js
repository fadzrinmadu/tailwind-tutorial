module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        refc: '#bada55',
        coffee: '#c0ffee',
      },
    },
  },
  plugins: [],
}
