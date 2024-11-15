import React from 'react'
import SupportCard from './SupportCard'
import { FaMessage } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import Form from './Form';
import Loans from '../DashboardBody/Loans';
const SupportMain = () => {
  return (
    <>
       <div className="flex flex-col lg:flex-row  justify-center gap-10 mt-10">
        <div className='w-[386px] '>
            <SupportCard icon={<FaMessage />} title="Contact us" text='Have a question or just want to know more? Feel free to reach out to us.'/>
        </div>
        <div className='w-[550px] bg-white p-6 rounded-md'>
             <Form/>
        </div>
       </div>
       <div className='flex flex-col lg:flex-row justify-center gap-10 mt-10'>
           <SupportCard icon={<AiFillMessage />} text='Don’t have time to wait for the answer? Chat with us now.' title='Live Chat'/>
           <Loans bgImage='/Visual.png'
            text='Chat with us now'
            btn='Chatbot'
            bgColor='bg-purple'
            textColor='text-white'
            btnText='text-black'
            bgBtn='bg-white'
          />
       </div>

    </>
  )
}

export default SupportMain
