import React from 'react'
import Portfolio from './Portfolio'
import Analytics from './Analytics'
import Loans from './Loans'

const MainContent = () => {
  return (
    <div className=' flex flex-col items-center justify-center  mt-[120px] mb-10 max-w-full z-50 lg:ml-[256px]    ' style={{ width: '-webkit-fill-available' }}>
      <div className="container px-4 flex items-center justify-center flex-col w-auto">
        <Portfolio />
        <Analytics />
        <div className='flex flex-col md:flex-row  mt-10 md:justify-between gap-6 container '>
          <Loans bgImage='/visualLight.png'
            text='Learn more about Loans – Keep your Bitcoin, access it’s value without selling it'
            btn='Loans'
            bgColor='bg-white'
            textColor='text-black'
            btnText='text-white'
            bgBtn='bg-purple'
          />
          <Loans bgImage='/Visual.png'
            text='Learn more about Loans – Keep your Bitcoin, access it’s value without selling it'
            btn='Contacts'
            bgColor='bg-purple'
            textColor='text-white'
            btnText='text-black'
            bgBtn='bg-white'
          />
        </div>
      </div>


    </div>
  )
}

export default MainContent
