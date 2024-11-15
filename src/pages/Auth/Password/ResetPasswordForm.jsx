import React from 'react'
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
const ResetPasswordForm = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen bg-bgColor'>
            <div className='w-full max-w-[456px] p-4 shadow-lg bg-white flex flex-col gap-2'>
                <h2 className='font-ubuntu font-medium text-[28px] mb-2 text-left'>Reset Password</h2>
                <p className='font-ubuntu font-normal text-[14px] text-customGray mb-2 text-left'>
                    Enter your new password.
                </p>

                <Formik
                    initialValues={{
                        password: '',
                        newPassword: '',
                    }}
                    onSubmit={values => console.log(values)}

                    validate={values => {
                        const errors = {};
                        if (!values.password) {
                            errors.password = 'password is required';
                        }
                        else if (values.password.length < 8) {
                            errors.password = 'password must be at least 8 characters';
                        }
                        if (!values.newPassword) {
                            errors.newPassword = 'password is required';
                        }
                        else if (values.password !== values.newPassword) {
                            errors.newPassword = 'passwords do not match'
                        }

                        return errors
                    }}
                >
                    {({ handleSubmit, values, handleChange, errors, touched }) => (
                        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>

                            <div className="mb-2 flex flex-col gap-1">
                                <label htmlFor="password" className='font-medium text-[12px] font-ubuntu'>New Password</label>
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    name='password'
                                    value={values.password}
                                    className='py-[8px] px-[10px] border border-customGray outline-none focus:ring-1 ring-purple placeholder:text-customGray rounded-md'
                                    placeholder='Your password'
                                />
                                {errors.password && touched.password && <p className='text-red-500 text-[12px]'>{errors.password}</p>}
                            </div>

                            <div className="mb-3 flex flex-col gap-1">
                                <label htmlFor="password" className='font-medium text-[12px] font-ubuntu'>Repeat Password</label>
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    name='newPassword'
                                    value={values.password}
                                    className='py-[8px] px-[10px] border border-customGray outline-none focus:ring-1 ring-purple placeholder:text-customGray rounded-md'
                                    placeholder='Retype your password'
                                />
                                {errors.newPassword && touched.newPassword && <p className='text-red-500 text-[12px]'>{errors.newPassword}</p>}
                            </div>

                            <div className="mb-3 flex items-center justify-center flex-col gap-2">

                                <Link to='reset-password-request' className='py-[10px] px-[40px] lg:px-[120px] bg-gray-200 hover:bg-[#D8DDE2]  text-[14px] font-ubuntu font-medium rounded-md w-full  whitespace-nowrap hover:text-customGray' style={{ color: 'black' }}>
                                    Reset Password
                                </Link>
                            </div>

                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ResetPasswordForm
