import React from 'react'
import Layout from '../components/layout/DefaultLayout'


const image = [""]
export default function Page() {
  return (
     <>
      <div className='w-full h-96 bg-green-400 shadow-md '>
        <div className='flex justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold'>Welcome to 481</h1>
            <p className='text-lg'>The best place to find your next job</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'>Get Started</button>
          </div>
        </div>
      </div>
    </> 
  )
}
 
Page.getLayout = function getLayout(page:any) {
  return (
    <Layout>
      <div className='w-full h-full'>{page}</div>
    </Layout>
  )
}