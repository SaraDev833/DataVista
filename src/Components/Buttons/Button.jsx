import React from 'react'

const Button = ({text , icon}) => {
  return (
    <div >
       <button type='submit' className='py-[10px] px-[16px] rounded-lg bg-purple text-white flex items-center justify-center gap-2'>
       {icon}
       <span className='text-[14px] font-medium font-ubuntu text-white'>{text}</span>
       </button>
    </div>
  )
}

export default Button
