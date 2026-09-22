import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  let navigate = useNavigate()

  const btnClicked = ()=>{
    navigate('/')
  }
  return (
    <div className='bg-black h-screen w-full text-white '>
      <button className='top-1/4 left-1/4 relative bg-white text-black cursor-pointer' onClick={btnClicked}>Return to Home Page</button>
      <h1 className='text-2xl text-bold fixed top-1/2 left-1/2'>About Page</h1>
    </div>
  )
}

export default About
