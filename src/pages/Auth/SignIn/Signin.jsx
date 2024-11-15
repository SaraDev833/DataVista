import React from 'react'
import { Formik } from 'formik';
import { FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-bgColor'>
      <div className='w-full max-w-[456px] p-4 shadow-lg bg-white flex flex-col'>
        <h2 className='font-ubuntu font-medium text-[32px] mb-2 text-center'>Welcome to Crypto App</h2>
        <p className='font-ubuntu font-normal text-[14px] text-customGray mb-2 text-center'>
        Enter your credentials to access the account
        </p>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => console.log(values)}

          validate={values => {
            const errors = {};

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

            return errors
          }}
        >
          {({ handleSubmit, values, handleChange, errors, touched }) => (
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>


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



              <div className="mb-3 flex  items-center justify-between">
                <FormGroup check inline>
                  <Input type="checkbox" />
                  <Label check className='flex'>
                    <p className='text-[14px] font-medium font-ubuntu'>
                      Remember me
                    </p>
                  </Label>
                </FormGroup>
                <Link to='/forgot-password' className='text-[12px] text-purple font-medium font-ubuntu'>Forgot password?</Link>
              </div>

              <div className="mb-3 flex items-center justify-center flex-col gap-2">
                <button className='py-[10px] px-[40px] lg:px-[120px] text-customGray  bg-[#D8DDE2] hover:bg-gray-400 hover:text-customGray text-[14px] font-ubuntu font-medium rounded-md w-full  whitespace-nowrap'>
                  Sign in to your account
                </button>
                <Link to='/sign-up' className='py-[10px] px-[40px] lg:px-[120px] bg-gray-200 hover:bg-[#D8DDE2]  text-[14px] font-ubuntu font-medium rounded-md w-full  whitespace-nowrap hover:text-customGray' style={{color: 'black' }}>
                  Create New Account
                </Link>
              </div>

            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signin
