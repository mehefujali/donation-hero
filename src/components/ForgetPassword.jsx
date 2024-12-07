import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
   const {state} = useLocation()
  const { forgetPassword } = useContext(AuthContext)
  const handleForgetPass = (e) => {
    e.preventDefault()
    const email = e.target.email.value 
    console.log(email);
    
    forgetPassword(email)
    .then(res => {
     window.location.href = "https://mail.google.com"
    })
    .catch( err => {
      console.log(err);
      
      toast.error('Email send failed')
    })
  }
  return (
    <div className='max-w-md my-20 mx-auto shadow-lg p-5 bg-white'>
      <h1 className='text-center mb-5 text-3xl text-primary font-bold'>Forgot Password</h1>
      <form onSubmit={handleForgetPass}>
        <div className='space-y-5'>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 text-primary opacity-60">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input value={state&&state} type="email" name='email' className="grow text-primary" placeholder="Email" />
          </label>



          <div className='w-full'>
            <button className='btn btn-block bg-bgbton hover:bg-indigo-500  text-white text-xl font-bold'>Reset Password
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;