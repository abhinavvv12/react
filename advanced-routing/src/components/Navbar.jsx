import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 bg-pink-400 h-fit w-full p-2 text-white'>
        <div className='flex justify-end items-center gap-6 w-full h-fit font-bold'>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/product' >Prouct</Link>
        </div>
      
    </div>
  )
}

export default Navbar
