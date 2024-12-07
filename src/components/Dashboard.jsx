import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import PrivateRoute from "../Private/PrivateRoute";
import Footer from "./Footer";


const Dashboard = () => {
      const { user } = useContext(AuthContext)
      return (
            <PrivateRoute>
                  <div>
                        <div>
                              <Navbar></Navbar>
                        </div>
                        <div className=" container mx-auto mt-14">
                              <h1 className=" text-xl font-bold md:text-4xl  text-center">Welcome back {user?.displayName}</h1>

                              <div className=" max-w-md mx-auto  mt-11  border border-bgbton rounded-xl overflow-hidden">
                                    <div className=" h-36 bg-bgbton w-full relative mb-14">
                                          <img className=" h-24 w-24  rounded-full border-2 object-cover border-white absolute top-24 left-1/2 -translate-x-1/2" src={user?.photoURL} alt="" />
                                    </div>
                                    <div className=" p-7 rounded-b-xl">
                                          <p className=" mt-12 text-xl">{user?.email}</p>
                                          <p className=" text-xl mt-2">{user?.displayName}</p>
                                          <div className=" flex flex-col justify-center mt-7">
                                                <Link className=" btn " to={'/updateprofile'}>Update <MdModeEdit className=" text-xl"></MdModeEdit></Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <footer className='bg-black text-white mt-24'>
                              <Footer></Footer>
                        </footer>
                  </div>
            </PrivateRoute>
      );
};

export default Dashboard;