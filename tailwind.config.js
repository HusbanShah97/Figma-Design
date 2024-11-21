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
        1440: '1440px',
        1322: '1322px',
        187: '187px',
        152 : '152',
      },

      height: {
        1132 : '1132px',
        91 : '91px',
        58 : '58px',
        32 : '32px'
      },
  
      margin: {
        136: '136px',
        17: '17px',
        
      },
      
      padding: {
        59 : '59px',
        590: '-590px',
        720 : '-720px',
        
      }
    },
  },
  plugins: [],
}

