'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


class Navbar extends React.Component {
  render() {
    const style = {
      width: "auto",
      height: "100px",
      background: "#f8f8f8",
      display: "flex",
      alignItems: "center",
      padding: "0 30px",
      zIndex: "100",
      top: "0", 
      justifyContent: "space-between",
    };

    return (
      <nav style={style} className='sticky '>
          <div className='text-blue-500 font-bold gap-12 flex text-xl'>
            <Link 
              href="/"
            >
              <img src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png" alt="recipe-logo"
                style={{width: "45px", height: "45px"}}
                className='cursor-pointer' 
              />
            </Link>
    
            <Link
              href="/"
              className='mt-2'
            >
              Home
            </Link>
    
            <Link
              href="/recipe"
              className='mt-2'
            >
              Recipe
            </Link>
    
            <Link
              href="/category"
              className='mt-2'
            >
              Categories
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