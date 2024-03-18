import Head from 'next/head'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/navbar.css'
import { NextPageWithLayout } from '@/utils/types';
import {BreakpointProvider, Breakpoint} from 'react-socks'
import { useEffect, useState } from 'react';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  },[]);

  if (!showChild) {
    return null
  }
  
  const getLayout = Component.getLayout ?? ((page) => page)
    
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>Recipe</title>
      </Head>

      <BreakpointProvider>
        {getLayout(<Component {...pageProps} />)}
      </BreakpointProvider>
      
    </>
  )
}