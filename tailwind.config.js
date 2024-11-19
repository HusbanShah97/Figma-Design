/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*{js,jsx,ts,tsx}',
    './src/app/**/*{js,jsx,ts,tsx}',
    './src/components/**/*{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
  
      width: {
        custom: '1440px',
        custom2: '1322px',
        heading1: '187px',
        '815px' : '815px'
      },

      height: {
        custom: '1132px',
        custom2: '91px',
        heading1: '58px',
        18 :'58px',
      },

      padding: {
        top: '-590px',
        left : '-720px'
      },

      margin: {
        top: '17px',
        left: '136px',
        13 : '16px',
        33 : '364px',
        
      }

    },
  },
  plugins: [],
}

