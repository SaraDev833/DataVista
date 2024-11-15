import React from 'react'
import { Formik } from 'formik';
import { FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen bg-bgColor'>
            <div className='w-full max-w-[456px] p-4 shadow-lg bg-white flex flex-col'>
                <h2 className='font-ubuntu font-medium text-[32px] mb-2 text-center'>Welcome to Crypto App</h2>
                <p className='font-ubuntu font-normal text-[14px] text-customGray mb-2 text-center'>
                    Create a free account by filling data below.
                </p>

                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        email: '',
                        password: '',
                        RepeatPassword: ''
                    }}
                    onSubmit={values => console.log(values)}

                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'name is required';
                        }
                        if (!values.surname) {
                            errors.surname = 'surname is required';
                        }
                        if (!values.email) {
                            errors.email = 'email is required';
                        }
                        else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'password is required';
                        }
                        if (!values.RepeatPassword) {
                            errors.RepeatPassword = 'repeat password is required';
                        }
                        if (values.password !== values.RepeatPassword) {
                            errors.RepeatPassword = 'passwords do not match';
                        }
                      return errors
                    }}
                >
                    {({ handleSubmit, values, handleChange, errors  , touched}) => (
                        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                            <div className="mb-3 flex flex-col lg:flex-row gap-2">
                                <div className='flex flex-col gap-1 flex-1'>

                                    <label htmlFor="name" className='font-medium text-[12px] font-ubuntu' >Name</label>
                                    <input
                                        type="text"
                                        name='name'
                                        onChange={handleChange}
                                        className='w-full py-[8px] px-[10px] border border-customGray rounded-md placeholder:text-customGray outline-none focus:ring-1 ring-purple'
                                        placeholder='Your name' value={values.name}
                                    />
                                    {errors.name && touched.name && <p className='text-red-500 text-[12px]'>{errors.name}</p>}
                                </div>
                                <div className='flex flex-col gap-1 flex-1'>
                                    <label htmlFor="surname" className='font-medium text-[12px] font-ubuntu'>Surname</label>
                                    <input
                                        type="text"
                                        name='surname'
                                        value={values.surname}
                                        onChange={handleChange}
                                        className='w-full py-[8px] px-[10px] border border-customGray rounded-md placeholder:text-customGray outline-none focus:ring-1 ring-purple'
                                        placeholder='Your surname'
                                    />
                                    {errors.surname && touched.surname && <p className='text-red-500 text-[12px]'>{errors.surname}</p>}
                                </div>
                            </div>

                            <div className="mb-3 flex flex-col gap-1">
                                <label htmlFor="email" className='font-medium text-[12px] font-ubuntu'>Email</label>
                                <input
                                    type="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    name='email'
                                    className='py-[8px] px-[10px] border border-customGray outline-none focus:ring-1 ring-purple placeholder:text-customGray rounded-md'
                                    placeholder='Your email'
                                />
                                {errors.email && touched.email && <p className='text-red-500 text-[12px]'>{errors.email}</p>}
                            </div>

                            <div className="mb-3 flex flex-col gap-1">
                                <label htmlFor="password" className='font-medium text-[12px] font-ubuntu'>Password</label>
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
                                <label htmlFor="RepeatPassword" className='font-medium text-[12px] font-ubuntu'>Repeat Password</label>
                                <input
                                    type="password"
                                    name='RepeatPassword'
                                    onChange={handleChange}
                                    value={values.RepeatPassword}
                                    className='py-[8px] px-[10px] border border-customGray outline-none focus:ring-1 ring-purple placeholder:text-customGray rounded-md'
                                    placeholder='Repeat your password'
                                />
                                {errors.RepeatPassword && touched.RepeatPassword && <p className='text-red-500 text-[12px]'>{errors.RepeatPassword}</p>}
                            </div>

                            <div className="mb-3 flex gap-2 items-center">
                                <FormGroup check inline>
                                    <Input type="checkbox" />
                                    <Label check className='flex'>
                                        <p className='text-[14px] font-medium font-ubuntu'>
                                            I agree with <span className='text-[12px] font-ubuntu font-medium text-purple'>Terms and Conditions</span>
                                        </p>
                                    </Label>
                                </FormGroup>
                            </div>

                            <div className="mb-2 flex items-center justify-center">
                                <button className='py-[10px] px-[40px] lg:px-[120px] bg-gray-200 hover:bg-[#D8DDE2] hover:text-customGray text-[14px] font-ubuntu font-medium rounded-md w-full lg:w-auto whitespace-nowrap'>
                                    Create your account
                                </button>
                            </div>

                            <div className="mb-3 flex items-center justify-center">
                                <p className='font-ubuntu text-[12px] font-medium text-customGray mr-1'>
                                    Already have an account?
                                </p>
                                <Link to='/sign-in' className='font-ubuntu text-[12px] font-medium text-purple ml-1'>
                                    Log in
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Signup;
