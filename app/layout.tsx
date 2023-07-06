import MainLayout from '@/components/Layout/MainLayout'
import { globalStyles } from '@/theme/global'
import { getCssText } from '@/theme/stitches.config'

export const metadata = {
  title: 'Amorphous Volley Team',
  description: "We have no shape so you can't get us",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
        {globalStyles()}
      </body>
    </html>
  )
}
