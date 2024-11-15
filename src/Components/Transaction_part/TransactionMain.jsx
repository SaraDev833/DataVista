import React from 'react'
import TransactionTab from './TransactionTab'
import Button from '../Buttons/Button'
import { FaDownload } from "react-icons/fa6";
const TransactionMain = () => {
  return (
    <>
    <div className='flex justify-end w-full items-end container mb-3'>
    <Button icon={<FaDownload />} text='Export CSV'/>
    </div>
      <TransactionTab/>
    </>
  )
}

export default TransactionMain
