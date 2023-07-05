import { StyledMainLayout, StyledMainLayoutContent } from './styles'

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <StyledMainLayout>
      <StyledMainLayoutContent>{children}</StyledMainLayoutContent>
    </StyledMainLayout>
  )
}
