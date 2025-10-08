module.exports = {
  theme: {
    extend: {
      colors: {
        // Chess color palette
        'chess-dark': '#1a1a1a',      // Dark squares
        'chess-light': '#f8f8f8',     // Light squares  
        'chess-green': '#769656',     // Highlight green
        'chess-brown': '#b58863',     // Accent brown
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
    }
  }
}