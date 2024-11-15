import React from 'react'

const SupportCard = ({icon , title , text}) => {
  return (
    <div className='flex flex-col gap-2 p-6 '>
        <div className='text-xl text-purple '>
            {icon}
        </div>
        <h2 className='text-[32px] font-medium font-ubuntu '>{title}</h2>
        <span className='text-[14px] text-customGray font-medium font-ubuntu'>{text}</span>
      
    </div>
  )
}

export default SupportCard
