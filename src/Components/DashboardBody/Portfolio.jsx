import React from 'react'
import Button from '../Buttons/Button'
import { FaDownload } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";

const Portfolio = () => {
  return (
    <div className=' rounded-lg  shadow-md bg-white container'>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between p-6 gap-2">
      
        <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
          <h2 className='font-medium text-customGray text-[14px] font-ubuntu'>Total Portfolio Value</h2>
          <p className='font-medium font-ubuntu text-[24px]'>$65765</p>
        </div>

       
        <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
          <h2 className='font-medium text-customGray text-[14px] font-ubuntu'>Wallet Balance</h2>
          <p className='font-medium font-ubuntu text-[24px]'>$21345 <span className='bg-bgColor px-[6px] py-1 text-customGray text-[12px] font-medium font-ubuntu rounded-full'>BTC</span></p>
        </div>

   
        <div className='flex flex-col justify-end items-end'>
          <p className='font-medium font-ubuntu text-[24px]'>$657625 <span className='bg-bgColor px-[6px] py-1 text-customGray text-[12px] font-medium font-ubuntu rounded-full'>INR</span></p>
        </div>

 
        <div className='flex flex-row justify-center items-center gap-3'>
          <Button text='Deposit' icon={<FaDownload />} />
          <Button text='Withdraw' icon={<BiMoneyWithdraw />} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
