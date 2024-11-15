import { Formik } from 'formik';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center bg-bgColor'>
            <div className='w-full max-w-[488px] p-6 bg-white rounded-lg shadow-lg flex flex-col gap-3'>
                <Link to='/sign-in' className='t font-medium text-black text-[40px]'>
                    <FaArrowLeft  />
                </Link>
                <h2 className='text-[28px] font-medium font-ubuntu'>Forgot Password</h2>
                <p className='text-[14px] font-normal font-ubuntu text-customGray'>Enter your email address for which account you want to reset your password. </p>
                <Formik
                    initialValues={
                        {
                            email: ''
                        }
                    }
                    onSubmit={values => console.log(values)}
                >
                    {() =>
                    (
                        <form action="">
                            <div className="mt-2 flex flex-col gap-2">
                                <label htmlFor="">Email</label>
                                <input type="email" name='email' className='w-auto py-[8px] px-[10px] border border-customGray rounded-[4px] mt-1 placeholder:customGray' placeholder='Enter your email address' />
                            </div>
                            <div className="mt-3 flex items-center justify-center">
                                <Link to='/reset-password-request' className='py-[10px] px-[40px] lg:px-[120px] bg-gray-200 hover:bg-[#D8DDE2] hover:text-customGray text-[14px] font-ubuntu font-medium rounded-md w-full  whitespace-nowrap text-black text-center'>
                                    Reset Password
                                </Link>

                            </div>
                        </form>
                    )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default ForgotPassword
