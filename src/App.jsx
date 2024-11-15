import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Transaction from './pages/Transactions/Transaction';
import Support from './pages/Support/Support';
import Signin from './pages/Auth/SignIn/Signin';
import Signup from './pages/Auth/Signup/Signup';
import ForgotPassword from './pages/Auth/Password/ForgotPassword';
import EmailSent from './pages/Auth/Email/EmailSent';
import Registration from './pages/Auth/Registration/Registration';
import ResetPassRequest from './pages/Auth/Password/ResetPassRequest';
import ResetPasswordForm from './pages/Auth/Password/ResetPasswordForm';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/support" element={<Support />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/email-sent' element={<EmailSent />} />
        <Route path='/registration-success' element={<Registration />} />
        <Route path='/reset-password-request' element={<ResetPassRequest />} />
        <Route path='/reset-password' element={<ResetPasswordForm />} />
      </Routes>

    </>
  )
}

export default App
