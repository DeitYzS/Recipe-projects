import React from 'react'
import { NextPageWithLayout } from '@/utils/types'
import { useDefaultLayout } from '@/hooks/useDefaultLayout'

const Home : NextPageWithLayout = () => {
  return (
    <div>Home</div>
  )
}

Home.getLayout = useDefaultLayout

export default Home