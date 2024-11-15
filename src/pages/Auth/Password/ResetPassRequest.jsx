import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";


const ResetPassRequest = () => {
    return(

        <div className='h-screen w-full flex justify-center items-center bg-bgColor'>
        <div className="w-full max-w-[456px] p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
            <span className="text-[40px] text-purple">
                <IoCheckmarkDoneCircleSharp />
            </span>
            <h2 className="text-[22px] font-ubuntu font-medium text-center ">Successfully Sent</h2>
            <p className="text-[14px] text-customGray font-normal font-ubuntu text-center">
                we have sent instructions on how to reset your password to <span className="text-[14px] font-medium font-ubuntu text-black">jenny.wilson@gmail.com</span>  please follow the instructions in the email to reset your password.
            </p>

        </div>
    </div>

    )

}

export default ResetPassRequest
