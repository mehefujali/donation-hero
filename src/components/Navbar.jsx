import { Link, NavLink } from "react-router-dom";

import logo from '../assets/images/winter logo.png'
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import { FaGear, FaUser } from "react-icons/fa6";
const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
  
    
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donationCamp'>Donation Campaigns</NavLink></li>
        <li><NavLink to='/help'>How to Help</NavLink></li>
        {user&&<li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
    </>

    return (
        <div className="navbar  w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 z-[9999] ">
                        {links}
                    </ul>
                </div>
                <div className=" flex gap-2 items-center">
                    <img src={logo} className="w-14 h-14 object-contain" alt="" />
                    <h1 className=" hidden md:flex text-bgbton text-2xl font-bold">Donetion hero</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">


                <div>
                    {
                        user ? <div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt={user?.displayName}
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <Link to='/dashboard' >
                                           <FaUser></FaUser> Profile
                                           
                                        </Link>
                                    </li>
                                    <li><Link to={'/updateprofile'}> <FaGear></FaGear> Settings</Link></li>
                                    <li onClick={logOut}><a><FaSignOutAlt></FaSignOutAlt> Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        : <Link to='/auth/login' className="px-4 btn  bg-bgbton text-white font-semibold rounded-md">Login</Link>
                    }

            </div>
        </div >
        </div >
    );
};

export default Navbar;