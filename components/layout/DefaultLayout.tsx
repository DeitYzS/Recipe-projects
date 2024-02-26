import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />  
    </>
  )
}