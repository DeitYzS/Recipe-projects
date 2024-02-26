import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>

      {getLayout(<Component {...pageProps} />)}

    </>
  )
}