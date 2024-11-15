import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

const Form = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='font-medium text-[14px] mb-3 text-black font-ubuntu '>You will receive response within 24 hours of time of submit. </h2>
      <form action="">
        <div className="mb-3 flex gap-2">
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='font-ubuntu text-[12px] font-medium '>Name</label>
            <input type="text" name='name' className='w-[239px] border-1 border-gray-400 placeholder:customGray py-[10px] px-3 rounded-lg' placeholder='you name please' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='font-ubuntu text-[12px] font-medium '>Surname</label>
            <input type="text" name='name' className='w-[239px] border-1 border-gray-400 placeholder:customGray py-[10px] px-3 rounded-lg' placeholder='you surname please' />
          </div>

        </div>
        <div className="mb-3 w-full flex flex-col gap-2">
          <label htmlFor="" className='font-ubuntu text-[12px] font-medium '>Email</label>
          <input type="text" name='name' className='w-[502px] border-1 border-gray-400 placeholder:customGray py-[10px] px-3 rounded-lg' placeholder='you email please' />

        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="" className='font-ubuntu text-[12px] font-medium '>Message</label>
          <textarea name="messafe" id="message" aria-rowspan={4} className='w-[502px] border-1 border-gray-400 placeholder:customGray py-[10px] px-3 rounded-lg' placeholder='your message please'></textarea>
        </div>
    <div className="mb-3 flex gap-2">
    <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check className='items-center flex justify-center'>
    <p className='text-[12px] font-medium font-ubuntu'>I agree with <span className='text-[12px] font-ubuntu font-medium text-purple'>Terms and Conditions</span></p>
    </Label>
  </FormGroup>

    </div>
    <div className="mb-3 flex flex-col gap-2">
      <button className='rounded-lg py-[10px] bg-[#D8DDE2] text-customGray font-ubuntu text-[14px] px-[200px]'>Send a Message</button>
      <button className='rounded-lg py-[10px] bg-[#EEEEF4] text-black font-ubuntu text-[14px] px-[200px]'>Send a Message</button>
    </div>
      </form>
    </div>
  )
}

export default Form
