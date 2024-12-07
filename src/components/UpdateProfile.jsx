import { useContext } from "react";
import PrivateRoute from "../Private/PrivateRoute";
import Navbar from "./Navbar";
import { AuthContext } from "../Context/AuthProvider";
import { MdModeEdit } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const UpdateProfile = () => {
      const navigate = useNavigate()
      const { user, updateUserProfile } = useContext(AuthContext)
      const handleUpdateProfile = (e) => {
            e.preventDefault()
            const form = e.target
           
            const name = form.name.value||user.displayName
            const photo = form.photo.value||user.photoURL
            updateUserProfile({ displayName: name , photoURL: photo})
            .then(res => {
                  toast.success("Profile update success")
                  navigate('/dashboard')
            })
            .catch(err => {
                  toast.error('Profile update faild !')
            })
      }
      return (
            <PrivateRoute>
                  <div>
                        <div>
                              <Navbar></Navbar>
                        </div>
                        <div className=" container mx-auto mt-14">
                              <h1 className=" text-xl font-bold md:text-4xl  text-center">Update Your Profile</h1>

                              <div className=" max-w-md mx-auto  mt-11  border border-bgbton rounded-xl overflow-hidden">
                                    <div className=" h-36 bg-bgbton w-full relative mb-14">
                                          <img className=" h-24 w-24 object-cover rounded-full border-2 border-white absolute top-24 left-1/2 -translate-x-1/2" src={user?.photoURL} alt="" />
                                    </div>
                                    <div className=" p-7 rounded-b-xl">

                                          <form  onSubmit={handleUpdateProfile} action="" className="space-y-3">
                                                <label className="input input-bordered  flex items-center gap-2">
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

                                               
                                                <div className=" flex flex-col justify-center mt-7">
                                                      <button className=" btn " >Update <MdModeEdit className=" text-xl"></MdModeEdit></button>
                                                </div>
                                          </form>
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

export default UpdateProfile;