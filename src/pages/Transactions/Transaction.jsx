import React from 'react'
import TransactionMain from '../../Components/Transaction_part/TransactionMain'
import DashboardHeader from './../../Components/Header/DashboardHeader';

const Transaction = () => {
  return (
    <div>
      <DashboardHeader/>
      <div className='  mt-[120px] mb-10 max-w-full z-50 lg:ml-[256px]   ml-0 ' style={{ width: '-webkit-fill-available' }}>
        <div className="container px-4 flex items-center justify-center flex-col w-auto">
        <TransactionMain/>
        </div>

      </div>
    
    </div>
  )
}

export default Transaction
