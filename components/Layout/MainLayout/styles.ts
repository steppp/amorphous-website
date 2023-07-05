import { styled } from '@/theme/stitches.config'

export const StyledMainLayout = styled('main', {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100svb',
  width: '100svi',
})

export const StyledMainLayoutContent = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '$sectionMarginY',
  marginRight: '$sectionMarginX',
  marginLeft: '$sectionMarginX',
})
