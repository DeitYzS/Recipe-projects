import React from 'react'
import Link from 'next/link'

class Navbar extends React.Component {
  render() {
    const style = {
      width: "auto",
      height: "100px",
      background: "#f8f8f8",
      display: "flex",
      alignItems: "center",
      padding: "0 24px",
      zIndex: "100",
      justifyContent: "space-between",
    };

    return (
      <nav style={style}>
          <div className='text-blue-500 font-bold gap-12 flex'>
            <Link 
              href="/logo"
            >
              <img src="#" alt="#" />
            </Link>
    
            <Link
              href="/home"
            >
              Home
            </Link>
    
            <Link
              href="/contactus"
            >
              ContacUs
            </Link>
    
            <Link
              href="/about"
            >
              Afdgfgfdg
            </Link>
          </div>
    
          <div className=' gap-4 flex  text-white font-bold'>
            <Link
              href="/signin"
              className='bg-blue-500 px-4 py-2 rounded-md'
            >
              SIGNIN
            </Link>
    
            <Link
              href="/signup"
              className='bg-blue-500 px-4 py-2 rounded-md'
            >
              SIGNUP
            </Link>
          </div>
        </nav>
    );
  }
}




export default Navbar