import { globalStyles } from '@/theme/global'
import { css } from '@/theme/stitches.config'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}
