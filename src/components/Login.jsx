import React, { useContext, useState } from 'react';

import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';


const Login = () => {
    const [sowPass, setSowPass] = useState(false)
    const { state } = useLocation()
    const [femail,setEmail] = useState('')

    const { googleLogin, setUser, user, emailLogin } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                setUser(res.user)


            })
            .catch(err => console.error(err))
    }
    const handleEmailLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        emailLogin(email, password)
            .then(res => {
                setUser(res.user)
                toast.success("login success")
            })
            .catch(err => {
                toast.error(err.message)
            })

    }
    if (user) {
        return <Navigate to={state || '/'}></Navigate>
    }
    return (
        <div>

            {/* main login page */}
            <div className="hero py-10">
                <div className='flex bg-white rounded-md items-start'>
                    {/* img */}
                    <div>
                        <img className='w-[334px] md:block hidden rounded-md' src="https://i.ibb.co/wWxHw2y/realistic-scene-with-clothes-neighborhood-yard-sale.jpg" alt="" />
                    </div>
                    {/* login */}
                    <div className='p-5 md:p-0'>
                        <div className='shadow-lg'>
                            <div className='shadow-2xl rounded-md text-center p-6 md:w-[430px]'>
                                <h1 className='text-black font-bold  text-2xl'>Login into account</h1>
                                <p className='my-5 text-black opacity-60 mr-3 text-base font-semibold'>Use your credentials to access your account.</p>
                                <form onSubmit={handleEmailLogin} className='space-y-5'>
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
                                        <input onChange={(e)=>{
                                            setEmail(e.target.value)
                                        }} type="email" name='email' className="grow text-primary" placeholder="Email" />
                                    </label>

                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 text-primary opacity-60">
                                            <path
                                                fillRule="evenodd"
                                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                                clipRule="evenodd" />
                                        </svg>
                                        <input type={sowPass?'text':'password'} name='password' className="text-primary" placeholder='Password' />
                                        <div className=' relative -right-24 cursor-pointer text-xl' onClick={()=> setSowPass(!sowPass)}>
                                            {sowPass? <FaEyeSlash></FaEyeSlash>:<FaEye ></FaEye>}
                                        </div>
                                    </label>

                                    <div className='flex justify-between items-center'>

                                        <Link state={femail}
                                            to='/auth/forgetpassword'

                                            className="text-base hover:underline text-bgbton cursor-pointer">
                                            Forgot password?
                                        </Link>


                                    </div>

                                    <div className='w-full'>
                                        <button className='btn btn-block bg-bgbton hover:text-black text-white text-xl font-bold'

                                        >Login</button>
                                    </div>
                                </form>
                                <div className="divider">OR</div>
                                <div className='flex justify-center items-center gap-5'>

                                    <button className=' w-full btn' onClick={handleGoogleLogin}>
                                        <img className='w-8 cursor-pointer' src="https://i.ibb.co/TcB5YZK/icons8-google-48.png" alt="" /> Login with google
                                    </button>

                                </div>
                                <div>
                                    <p className='text-center text-base mt-3 md:text-lg ml-8'><span className='text-black opacity-60'>Don't have an account?</span> <Link to='/auth/register' className='text-bgbton hover:underline'>Register here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Login;

