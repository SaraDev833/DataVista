import React from 'react'

const Transactions = ({money , date , text, optional , icon}) => {
  return (
    <div className='flex flex-col gap-4 pt-4'>
        <div className='flex justify-between items-center '>
              <div className='flex gap-3 items-center justify-center'>
                {icon}
                <div className='flex flex-col '>
                <h2 className='font-[400] font-ubuntu text-[16px] '>{text}</h2>
                <span className='text-[12px] font-[400] font-ubuntu text-customGray'>{date}</span>
                </div>
              </div>
          <div className='flex flex-col justify-center items-center'>
          <h2 className='text-[16px] font-medium font-ubuntu '>{money}</h2>
          <span className='text-[12px] font-[400] font-ubuntu text-customGray'>{optional}</span>
          </div>
        </div>
    </div>
  )
}

export default Transactions
