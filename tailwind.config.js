const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    // screens: {
    //   'cus-lg': '1150px'
    // },
    fontFamily: {
      boldOff: ['OffBit-Bold', ...defaultTheme.fontFamily.sans],
      regularOff: ['OffBit-Regular', ...defaultTheme.fontFamily.serif],
      Josefin: ['Josefin_Sans', ...defaultTheme.fontFamily.serif],
      Aclonica: ['Aclonica', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      fontFamily: {
        odibee: ["Odibee Sans", "cursive"],
        Urbansit: ['Urbansit', 'sans-serif']
      },
      boxShadow: {
        'card': '0px 0px 10px 1px rgba(173, 26, 175, 0.25)',
        'start-btn': '0px 20px 40px #0779FF',
        'hover-start-btn': '0px 10px 40px #0779FF',
        'smooth': 'inset 0px 0px 30px 30px #101A2D',
        'subscribe': '0px 20px 40px 0px #1A31FD80',
        'auth-box': '0px 0px 20px 4px #11111D',
        'chat-box': '-6px 6px 8px -2px #6C6B6Baa',
        'card-upload': '0px 0px 8px 2px #a6a1a3',
        'card-upload-black': '0px 0px 8px 2px #000000'
      },

      backgroundImage: {
        "card": "url('/Card.png')"
      },
      cursor: {
        'global': 'url(/Cursor.png), pointer',
      },
    },
    colors: {
      "dark": "#050B1D",
      "dark-text": "#1E1E1E",
      "blue-thick": "#000AFF",
      "green-main": "#1ED760",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ]
}