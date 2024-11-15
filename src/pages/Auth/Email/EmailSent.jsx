import { IoMdMail } from "react-icons/io";

const EmailSent = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-bgColor'>
         <div className="w-full max-w-[456px] p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
          <span className="text-[40px] text-purple">
          <IoMdMail />
          </span>
          <p className="text-[14px] text-customGray font-normal font-ubuntu text-center">
          We have sent you an email verification to  <span className="text-[14px] font-medium font-ubuntu text-black">jenny.wilson@gmail.com</span>  If you didn’t receive it, click the button below.
          </p>
          <div className="w-full flex items-center justify-center">
            <button className="w-full bg-bgColor text-black hover:bg-[#D8DDE2] transition-transform ease-linear duration-75 font-medium font-ubuntu text-[14px] py-2 px-4 rounded-lg ">Resent Email</button>
          </div>
         </div>
    </div>
  )
}

export default EmailSent
