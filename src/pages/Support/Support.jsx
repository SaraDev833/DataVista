import React from 'react'
import SupportMain from '../../Components/Support/SupportMain'
import DashboardHeader from '../../Components/Header/DashboardHeader'
const Support = () => {
  return (
    <div>
      <DashboardHeader/>
      <div className=' flex flex-col items-center justify-center  mt-[120px] mb-10 max-w-full z-50 lg:ml-[256px]    ' style={{ width: '-webkit-fill-available' }}>
      <div className="container px-4 flex items-center justify-center flex-col w-auto">
        <SupportMain/>
        </div>

      </div>
    
    </div>
  )
}

export default Support
