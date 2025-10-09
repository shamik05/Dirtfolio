module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Chess color palette
        'chess-dark': '#1a1a1a',
        'chess-light': '#f8f8f8',  
        'chess-green': '#769656',
        'chess-brown': '#b58863',
      },
      animation: {
        'grow': 'grow 1s ease-out forwards',
      },
      keyframes: {
        grow: {
          '0%': { height: '0' },
          '100%': { height: '6rem' },
        }
      }
    },
  },
  plugins: [],
}