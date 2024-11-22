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
        152: '152',
        815: '815px',
        189: 'fixed(189px)',
        214: '214px',
        275 : 'Hug(275px)',
        
      },

      height: {
        1132 : '1132px',
        91 : '91px',
        58 : '58px',
        32: '32px',
        58: '58px',
        53: 'Hug(52px)',
        54: '52px',
        25: 'Hug(24px)',
        
      },
  
      margin: {
        136: '136px',
        17: '17px',
        364: '364px',
        626 :'626px' 
        
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

