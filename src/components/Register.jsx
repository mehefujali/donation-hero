import React, { useContext, useState } from 'react';
import { IoMdPhotos } from 'react-icons/io';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Register = () => {
    const [sowPass, setSowPass] = useState(false)
    const [passErr, setPassErr] = useState('')
    const navigate = useNavigate()
    const { emailRegister, setUser, user, updateUserProfile, googleLogin } = useContext(AuthContext)
    const handleEmailSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photo = form.photo.value
        const uppercaseRegex = /[A-Z]/;
        const lowrcaseRegex = /[a-z]/;
        if (password.length < 6) {
            setPassErr(' Length must be atleast 6 character')
            return
        }
        if (!uppercaseRegex.test(password)) {
            setPassErr(' Must have an Uppercase letter in the password')
            return
        }
        if (!lowrcaseRegex.test(password)) {
            setPassErr(' Must have an Lowercase letter in the password')
            return
        }

        emailRegister(email, password)
            .then(res => {
                setUser(res.user)
                updateUserProfile({ displayName: name, photoURL: photo || 'https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon-thumbnail.png' })
                    .then(navigate('/'))
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                setUser(res.user)


            })
            .catch(err => console.error(err))
    }
    if (user) {
        return <Navigate to={'/'}></Navigate>
    }
    return (
        <div className='hero py-10'>
            <div className="flex bg-white rounded-md items-start">
                <div>
                    <img className='w-[404px]  md:block hidden rounded-md' src="https://i.ibb.co/wWxHw2y/realistic-scene-with-clothes-neighborhood-yard-sale.jpg" alt="" />
                </div>

                <div className='shadow-2xl rounded-lg text-center p-6 md:w-[430px]'>
                    <h1 className='text-black font-bold text-2xl'>Create an account</h1>
                    <p className='my-5 text-black opacity-60 text-base md:text-xl font-semibold'>Setup a new account in a minute.</p>
                    <div >
                        <form onSubmit={handleEmailSignUp} className='space-y-5'>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 text-primary opacity-60">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" name='name' required className="grow text-primary" placeholder="Username" />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <IoMdPhotos className='text-primary opacity-60' />
                                <input type="text" name='photo' className="grow text-primary" placeholder="Photo URL" />
                            </label>

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
                                <input type="email" name='email' required className="grow text-primary" placeholder="Email" />
                            </label>

                            <div>
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
                                    <input type={sowPass ? 'text' : 'password'} name='password' className="text-primary" placeholder='Password' />
                                    <div className=' relative -right-24 cursor-pointer text-xl' onClick={() => setSowPass(!sowPass)}>
                                        {sowPass ? <FaEyeSlash></FaEyeSlash> : <FaEye ></FaEye>}
                                    </div>
                                </label>
                                {
                                    passErr && <p className=' text-xs md:text-sm text-start mt-1 text-red-600 ml-2'>{passErr}</p>
                                }
                            </div>


                            <div className='w-full'>
                                <button className='btn btn-block bg-bgbton hover:bg-indigo-400   text-white text-xl font-bold'>Register</button>
                            </div>
                        </form>
                        <div className="divider text-secondary">OR</div>
                        <div className='flex justify-center items-center gap-5'>
                            <button className=' w-full btn' onClick={handleGoogleLogin}>
                                <img className='w-8 cursor-pointer' src="https://i.ibb.co/TcB5YZK/icons8-google-48.png" alt="" /> Login with google
                            </button>
                        </div>
                        <div>
                            <p className='text-center text-base pt-3 md:text-lg '><span className='text-black opacity-60 ml-8'>Already have an account?</span> <Link to='/auth/login' className='text-blue-500 hover:underline'>Login here</Link></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;