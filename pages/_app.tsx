"use client";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/navbar.css'
import { NextPageWithLayout } from '@/utils/types';
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  
  const getLayout = Component.getLayout ?? ((page) => page)
    
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>Recipe</title>
      </Head>
    
      {getLayout(<Component {...pageProps} />)}
      
    </>
  )
}