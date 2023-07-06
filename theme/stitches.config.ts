import { createStitches } from '@stitches/react'
import { Roboto_Flex } from 'next/font/google'

const robotoFlex = Roboto_Flex({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable', //	400	100	1000	1
  axes: [
    // axes default min max step
    'opsz', //	14	8	144	0.1
    'slnt', //	0	-10	0	1
    'wdth', //	100	25	151	0.1
    'GRAD', //	0	-200	150	1
    'XTRA', //	468	323	603	1
    'YOPQ', //	79	25	135	1
    'YTAS', //	750	649	854	1
    'YTDE', //	-203	-305	-98	1
    'YTFI', //	738	560	788	1
    'YTLC', //	514	416	570	1
    'YTUC', //	712	528	760	1
  ],
})

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    space: {
      sectionMarginX: '10%',
      sectionMarginY: '10%',
    },
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
    fonts: {
      robotoFlex: `${robotoFlex.style.fontFamily}, sans-serif`,
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 720px)',
  },
})

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
}
