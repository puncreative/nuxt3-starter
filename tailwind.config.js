/** @type {import('tailwindcss').Config} */
export const darkMode = 'class'
export const content = [
  './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}'
]
export const safelist = [
  {
    pattern: /(bg|text|fill|text|border)-(primary|golden|danger|info|warning|blue-grey|grey)-(10|50|60)/,
    variants: ['group-hover', 'hover', 'focus']
  },
  'py-[4px]',
  'py-[8px]',
  'py-[16px]'
]
export const theme = {
  extend: {
    backgroundImage: {
      login: 'url(\'/img/bg.svg\')'
    },
    opacity: {
      85: '0.85'
    },
    colors: {
      'light-blue': '#49A8ED',
      'litepie-primary': '#87D084',
      'litepie-secondary': '#B3B9CE',
      primary: {
        1: '#e2f5e2',
        10: '#DCF5DB',
        20: '#87D084',
        30: '#47B843',
        40: '#2AA526',
        50: '#077104',
        60: '#20651E',
        70: '#1B6419',
        80: '#0F4E0D',
        90: '#024F00',
        100: '#023A00',
        110: '#789677',
        120: '#A4E1A2'
      },
      golden: {
        10: '#E5DFCB',
        20: '#DED2AF',
        30: '#DBC685',
        40: '#D9BA5C',
        50: '#C7A745',
        60: '#9E7A24',
        70: '#7C6024',
        80: '#60481B',
        90: '#463C1E',
        100: '#403123',
        110: '#B8B085'
      },
      danger: {
        10: '#FFFAFA',
        20: '#FFB8AE',
        30: '#FF8D7D',
        40: '#FF6A56',
        50: '#FF4A31',
        60: '#F82C10',
        70: '#E01B00',
        80: '#BF1700',
        90: '#991604',
        100: '#800F00',
        110: '#DD7A6D'
      },
      info: {
        10: '#EAF6FF',
        20: '#BCDEF6',
        30: '#9FD0F3',
        40: '#74BBEF',
        50: '#49A8ED',
        60: '#2B9BEC',
        70: '#278CD6',
        80: '#2076B5',
        90: '#145381',
        100: '#0D3959',
        110: '#69A0C9'
      },
      warning: {
        10: '#FFF3E4',
        20: '#FCD7AA',
        30: '#FFC279',
        40: '#FFAC48',
        50: '#F88F10',
        60: '#E98F25',
        70: '#D28427',
        80: '#B8721F',
        90: '#9E6116',
        100: '#845011',
        110: '#CF9C5E'
      },
      'blue-grey': {
        10: '#EDF0F5',
        20: '#E8EBF2',
        30: '#DCE1EF',
        40: '#CCD2E3',
        50: '#B3B9CE',
        60: '#9298AB',
        70: '#7A7F8E',
        80: '#616674',
        90: '#4D515E',
        100: '#353841',
        110: '#BCC0C9'
      },
      grey: {
        10: '#E7E7E7',
        20: '#D1D1D1',
        30: '#B5B5B5',
        40: '#979797',
        50: '#808080',
        60: '#696969',
        70: '#555555',
        80: '#434343',
        90: '#232323',
        100: '#000000',
        110: '#B3B3B3'
      },
      disable: '#EBEFF2'
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '22px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px']
    },
    fontWeight: {
      'font-thin': 100,
      'font-extralight': 200,
      'font-light': 300,
      'font-normal': 400,
      'font-medium': 500,
      'font-semibold': 600,
      'font-bold': 700,
      'font-extrabold': 800,
      'font-black': 900
    },
    lineClamp: {
      7: '7',
      8: '8',
      9: '9',
      10: '10'
    },
    boxShadow: {
      'c-t': '#077104 0 -1px 0',
      'c-b': '#077104 0 1px 0',
      'c-l': '#077104 1px 0 0',
      'c-r': '#077104 -1px 0 0',
      'c-0': 'none'
    }
  }
}
export const variants = {
  tableLayout: ['responsive', 'hover', 'focus'],
  lineClamp: ['responsive', 'hover'],
  extends: {
    display: ['group-hover'],
    cursor: ['disabled'],
    textOpacity: ['disabled'],
    textColor: ['disabled']
  }
}
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio')
]
