import { keyframes, styled } from '@/theme/stitches.config'

const fontVariationSettingsDefault = `"opsz" 14, "slnt" 0, "wdth" 100, "GRAD" 0, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712`
const fontVariationSettingsArray = [
  `"GRAD" 62.45958, "XTRA" 590.20313, "YOPQ" 59.12134, "YTAS" 761.15122, "YTDE" -151.18153, "YTFI" 719.48092, "YTLC" 540.96308, "YTUC" 624.50371, "opsz" 101.15363, "slnt" -0.64336, "wdth" 36.59873`,
  `"GRAD" 45.70584, "XTRA" 434.3087, "YOPQ" 82.66131, "YTAS" 662.18583, "YTDE" -208.57064, "YTFI" 608.59927, "YTLC" 515.82163, "YTUC" 543.156, "opsz" 61.88547, "slnt" -2.20837, "wdth" 111.58611`,
  `"GRAD" 74.26304, "XTRA" 564.95911, "YOPQ" 133.52329, "YTAS" 775.74711, "YTDE" -118.8789, "YTFI" 666.80879, "YTLC" 543.68767, "YTUC" 602.59863, "opsz" 121.04596, "slnt" -7.65366, "wdth" 34.50056`,
  `"GRAD" -196.41693, "XTRA" 415.6272, "YOPQ" 68.00837, "YTAS" 842.9755, "YTDE" -216.16827, "YTFI" 693.18383, "YTLC" 449.8751, "YTUC" 699.87935, "opsz" 75.47248, "slnt" -9.22845, "wdth" 31.80836`,
  `"GRAD" -111.07181, "XTRA" 399.7633, "YOPQ" 51.34624, "YTAS" 708.18953, "YTDE" -122.44083, "YTFI" 713.23947, "YTLC" 485.09508, "YTUC" 731.4655, "opsz" 48.98033, "slnt" -1.51801, "wdth" 139.88091`,
  `"GRAD" -18.15353, "XTRA" 452.8766, "YOPQ" 75.18032, "YTAS" 743.04919, "YTDE" -108.08449, "YTFI" 679.19353, "YTLC" 449.23482, "YTUC" 530.14271, "opsz" 106.85423, "slnt" -2.80788, "wdth" 63.1848`,
  `"GRAD" -31.85692, "XTRA" 491.77441, "YOPQ" 97.72253, "YTAS" 723.54635, "YTDE" -211.65598, "YTFI" 751.67241, "YTLC" 433.27942, "YTUC" 566.06197, "opsz" 54.41402, "slnt" -3.10962, "wdth" 103.52536`,
  `"GRAD" -7.9479, "XTRA" 360.14357, "YOPQ" 59.65474, "YTAS" 784.70669, "YTDE" -165.4787, "YTFI" 764.81247, "YTLC" 488.19314, "YTUC" 607.10463, "opsz" 121.67621, "slnt" -4.06304, "wdth" 108.35471`,
  `"GRAD" -174.08722, "XTRA" 548.07092, "YOPQ" 95.01275, "YTAS" 696.38205, "YTDE" -172.09992, "YTFI" 618.02858, "YTLC" 484.52356, "YTUC" 675.08629, "opsz" 35.85814, "slnt" -0.24233, "wdth" 106.07327`,
]

const letterKeyframe1 = keyframes({
  '0%': {
    fontVariationSettings: fontVariationSettingsDefault,
  },
  '10%': {
    fontVariationSettings: fontVariationSettingsArray[0],
  },
  '20%': {
    fontVariationSettings: fontVariationSettingsArray[1],
  },
  '30%': {
    fontVariationSettings: fontVariationSettingsArray[2],
  },
  '40%': {
    fontVariationSettings: fontVariationSettingsArray[3],
  },
  '50%': {
    fontVariationSettings: fontVariationSettingsArray[4],
  },
  '60%': {
    fontVariationSettings: fontVariationSettingsArray[5],
  },
  '70%': {
    fontVariationSettings: fontVariationSettingsArray[6],
  },
  '80%': {
    fontVariationSettings: fontVariationSettingsArray[7],
  },
  '90%': {
    fontVariationSettings: fontVariationSettingsArray[8],
  },
})
const letterKeyframe2 = keyframes({
  '0%': {
    fontVariationSettings: fontVariationSettingsDefault,
  },
  '10%': {
    fontVariationSettings: fontVariationSettingsArray[3],
  },
  '20%': {
    fontVariationSettings: fontVariationSettingsArray[7],
  },
  '30%': {
    fontVariationSettings: fontVariationSettingsArray[1],
  },
  '40%': {
    fontVariationSettings: fontVariationSettingsArray[9],
  },
  '50%': {
    fontVariationSettings: fontVariationSettingsArray[4],
  },
  '60%': {
    fontVariationSettings: fontVariationSettingsArray[0],
  },
  '70%': {
    fontVariationSettings: fontVariationSettingsArray[2],
  },
  '80%': {
    fontVariationSettings: fontVariationSettingsArray[8],
  },
  '90%': {
    fontVariationSettings: fontVariationSettingsArray[6],
  },
})
const letterKeyframe3 = keyframes({
  '0%': {
    fontVariationSettings: fontVariationSettingsDefault,
  },
  '10%': {
    fontVariationSettings: fontVariationSettingsArray[1],
  },
  '20%': {
    fontVariationSettings: fontVariationSettingsArray[3],
  },
  '30%': {
    fontVariationSettings: fontVariationSettingsArray[7],
  },
  '40%': {
    fontVariationSettings: fontVariationSettingsArray[2],
  },
  '50%': {
    fontVariationSettings: fontVariationSettingsArray[5],
  },
  '60%': {
    fontVariationSettings: fontVariationSettingsArray[0],
  },
  '70%': {
    fontVariationSettings: fontVariationSettingsArray[4],
  },
  '80%': {
    fontVariationSettings: fontVariationSettingsArray[6],
  },
  '90%': {
    fontVariationSettings: fontVariationSettingsArray[9],
  },
})
const letterKeyframe4 = keyframes({
  '0%': {
    fontVariationSettings: fontVariationSettingsDefault,
  },
  '10%': {
    fontVariationSettings: fontVariationSettingsArray[9],
  },
  '20%': {
    fontVariationSettings: fontVariationSettingsArray[0],
  },
  '30%': {
    fontVariationSettings: fontVariationSettingsArray[6],
  },
  '40%': {
    fontVariationSettings: fontVariationSettingsArray[4],
  },
  '50%': {
    fontVariationSettings: fontVariationSettingsArray[7],
  },
  '60%': {
    fontVariationSettings: fontVariationSettingsArray[2],
  },
  '70%': {
    fontVariationSettings: fontVariationSettingsArray[1],
  },
  '80%': {
    fontVariationSettings: fontVariationSettingsArray[3],
  },
  '90%': {
    fontVariationSettings: fontVariationSettingsArray[5],
  },
})
const letterKeyframe5 = keyframes({
  '0%': {
    fontVariationSettings: fontVariationSettingsDefault,
  },
  '10%': {
    fontVariationSettings: fontVariationSettingsArray[2],
  },
  '20%': {
    fontVariationSettings: fontVariationSettingsArray[3],
  },
  '30%': {
    fontVariationSettings: fontVariationSettingsArray[0],
  },
  '40%': {
    fontVariationSettings: fontVariationSettingsArray[6],
  },
  '50%': {
    fontVariationSettings: fontVariationSettingsArray[8],
  },
  '60%': {
    fontVariationSettings: fontVariationSettingsArray[9],
  },
  '70%': {
    fontVariationSettings: fontVariationSettingsArray[1],
  },
  '80%': {
    fontVariationSettings: fontVariationSettingsArray[4],
  },
  '90%': {
    fontVariationSettings: fontVariationSettingsArray[7],
  },
})
const letterKeyframe6 = keyframes({
  '0%': {
    fontVariationSettings: fontVariationSettingsDefault,
  },
  '10%': {
    fontVariationSettings: fontVariationSettingsArray[5],
  },
  '20%': {
    fontVariationSettings: fontVariationSettingsArray[6],
  },
  '30%': {
    fontVariationSettings: fontVariationSettingsArray[4],
  },
  '40%': {
    fontVariationSettings: fontVariationSettingsArray[2],
  },
  '50%': {
    fontVariationSettings: fontVariationSettingsArray[8],
  },
  '60%': {
    fontVariationSettings: fontVariationSettingsArray[9],
  },
  '70%': {
    fontVariationSettings: fontVariationSettingsArray[1],
  },
  '80%': {
    fontVariationSettings: fontVariationSettingsArray[0],
  },
  '90%': {
    fontVariationSettings: fontVariationSettingsArray[6],
  },
})
const letterKeyframe7 = keyframes({
  '0%': {
    fontVariationSettings: fontVariationSettingsDefault,
  },
  '10%': {
    fontVariationSettings: fontVariationSettingsArray[6],
  },
  '20%': {
    fontVariationSettings: fontVariationSettingsArray[0],
  },
  '30%': {
    fontVariationSettings: fontVariationSettingsArray[8],
  },
  '40%': {
    fontVariationSettings: fontVariationSettingsArray[4],
  },
  '50%': {
    fontVariationSettings: fontVariationSettingsArray[1],
  },
  '60%': {
    fontVariationSettings: fontVariationSettingsArray[2],
  },
  '70%': {
    fontVariationSettings: fontVariationSettingsArray[3],
  },
  '80%': {
    fontVariationSettings: fontVariationSettingsArray[5],
  },
  '90%': {
    fontVariationSettings: fontVariationSettingsArray[7],
  },
})
const letterKeyframe8 = keyframes({
  '0%': {
    fontVariationSettings: fontVariationSettingsDefault,
  },
  '10%': {
    fontVariationSettings: fontVariationSettingsArray[8],
  },
  '20%': {
    fontVariationSettings: fontVariationSettingsArray[2],
  },
  '30%': {
    fontVariationSettings: fontVariationSettingsArray[3],
  },
  '40%': {
    fontVariationSettings: fontVariationSettingsArray[9],
  },
  '50%': {
    fontVariationSettings: fontVariationSettingsArray[7],
  },
  '60%': {
    fontVariationSettings: fontVariationSettingsArray[4],
  },
  '70%': {
    fontVariationSettings: fontVariationSettingsArray[1],
  },
  '80%': {
    fontVariationSettings: fontVariationSettingsArray[0],
  },
  '90%': {
    fontVariationSettings: fontVariationSettingsArray[5],
  },
})
const letterKeyframe9 = keyframes({
  '0%': {
    fontVariationSettings: fontVariationSettingsDefault,
  },
  '10%': {
    fontVariationSettings: fontVariationSettingsArray[4],
  },
  '20%': {
    fontVariationSettings: fontVariationSettingsArray[6],
  },
  '30%': {
    fontVariationSettings: fontVariationSettingsArray[3],
  },
  '40%': {
    fontVariationSettings: fontVariationSettingsArray[0],
  },
  '50%': {
    fontVariationSettings: fontVariationSettingsArray[9],
  },
  '60%': {
    fontVariationSettings: fontVariationSettingsArray[2],
  },
  '70%': {
    fontVariationSettings: fontVariationSettingsArray[7],
  },
  '80%': {
    fontVariationSettings: fontVariationSettingsArray[1],
  },
  '90%': {
    fontVariationSettings: fontVariationSettingsArray[8],
  },
})

export const StyledTitle = styled('h1', {
  fontFamily: '$robotoFlex',
  textAlign: 'center',
  fontSize: '8rem',
})

export const StyledTitleLetter = styled('span', {
  fontStyle: 'normal',
  fontWeight: 400,
  fontStretch: '100%',
  fontOpticalSizing: 'auto',
  lineHeight: 'initial',
  fontVariationSettings: `"opsz" 14, "slnt" 0, "wdth" 100, "GRAD" 0, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712`,
  animationDuration: '15s',
  animationDirection: 'alternate-reverse',
  animationIterationCount: 'infinite',
})

export const StyledTitleWord = styled('div', {
  display: 'inline',
  [`& ${StyledTitleLetter}`]: {
    '&:nth-child(1)': {
      animationName: `${letterKeyframe1}`,
    },
    '&:nth-child(2)': {
      animationName: `${letterKeyframe2}`,
    },
    '&:nth-child(3)': {
      animationName: `${letterKeyframe3}`,
    },
    '&:nth-child(4)': {
      animationName: `${letterKeyframe4}`,
    },
    '&:nth-child(5)': {
      animationName: `${letterKeyframe5}`,
    },
    '&:nth-child(6)': {
      animationName: `${letterKeyframe6}`,
    },
    '&:nth-child(7)': {
      animationName: `${letterKeyframe7}`,
    },
    '&:nth-child(8)': {
      animationName: `${letterKeyframe8}`,
    },
    '&:nth-child(9)': {
      animationName: `${letterKeyframe9}`,
    },
  },
})
