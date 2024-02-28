import { useDefaultLayout } from '@/hooks/useDefaultLayout'
import { NextPageWithLayout } from '@/utils/types'
import React from 'react'

function onsubmit(e:any) {
  e.preventDefault()
  console.log('submitted')
}

const signin:NextPageWithLayout = () =>{
  return (
   <form onSubmit={onsubmit}>
    

   </form>
  )
}

signin.getLayout = useDefaultLayout

export default signin