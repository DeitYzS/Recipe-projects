
import Layout from '../components/layout/DefaultLayout'

 
export default function Page() {
  return (
    <>
     <div className='w-full h-full'>
        sdfsd
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