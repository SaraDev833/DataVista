import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Registration = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center bg-bgColor'>
             <div className="w-full max-w-[456px] p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
              <span className="text-[40px] text-purple">
              <IoCheckmarkDoneCircleSharp  />
              </span>
            <h2 className="text-[22px] font-ubuntu font-medium text-center ">Successfully Registration</h2>
            <p className="text-center text-[14px] font-normal text-customGray font-ubuntu">Hurray! You have successfully created your account. Enter the app to explore all it’s features.</p>
              <div className="w-full flex items-center justify-center">
                <button className="w-full bg-purple text-white hover:bg-violet-950 transition-transform ease-linear duration-75 font-medium font-ubuntu text-[14px] py-2 px-4 rounded-lg ">Enter the App</button>
              </div>
             </div>
        </div>
      )
}

export default Registration
