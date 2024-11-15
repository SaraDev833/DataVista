import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import Button from '../Buttons/Button';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import Tabs from './Tabs';
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import Transactions from './Transactions';
const Analytics = () => {
  return (
    <div className='flex flex-col md:flex-row gap-6 lg:gap-6 mt-10 md:justify-between container' >
      <div className='bg-white w-[468px]  rounded-md p-6'>
        <div className="flex flex-row  justify-between">
          <div className="flex flex-col md:gap-1 ">
            <h2 className='font-ubuntu font-medium text-[14px] text-customGray '>Current Price</h2>
            <p className='font-ubuntu text-[24px] flex  gap-1 font-medium '>$12448 <span className='text-[14px]  text-[#059669] font-ubuntu font-medium flex justify-end items-center'><FaArrowTrendUp /> 0.04%</span></p>
          </div>
          <div className='flex gap-3'>
            <Button text="Buy" icon={<FaCirclePlus />} />
            <Button text="Sell" icon={<FaCircleMinus />} />
          </div>

        </div>
        <div>
          <Tabs />
        </div>
      </div>
      <div className='w-[468px] bg-white rounded-md p-6'>
        <h2 className='font-ubuntu font-medium text-[14px] text-customGray '>Recent Transactions</h2>
        <Transactions text='INR Deposite' date='2022-8-12 7:25am' icon={<HiMiniCurrencyDollar />} money='+ $1096437' />
        <Transactions text='BTC Sell' date='2022-8-12 7:25am' icon={<HiMiniCurrencyDollar />} money='+ $1096437' optional='$984733' />
        <Transactions text='INR Deposite' date='2022-8-12 7:25am' icon={<HiMiniCurrencyDollar />} money='+ $1096437' />

      </div>

    </div>
  )
}

export default Analytics
