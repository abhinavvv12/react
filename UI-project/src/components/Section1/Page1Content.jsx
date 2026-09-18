import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-8 px-16 bg-white h-screen w-full flex items-center gap-12' >
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content
