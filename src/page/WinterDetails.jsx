import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaCross, FaLocationDot } from 'react-icons/fa6';
import { IoMdPhotos } from 'react-icons/io';
import Footer from '../components/Footer';
import PrivateRoute from '../Private/PrivateRoute';
import swal from 'sweetalert';
const WinterDetails = () => {


    const { id } = useParams();
    const winterId = parseInt(id);
    const data = useLoaderData();

    const winter = data.find(winter => winter.id === winterId);

    const { title, image, description, division, status, contactInfo } = winter;
    const handleFormSubmit = (e) => {
        e.preventDefault()
        swal({
            title: " Thank you !",
            text: `We will reach your destination soon`,
            icon: "success",
            
        });
        e.target.reset()
    }

    return (
        <PrivateRoute>
            <div className='bg-gray-200'>
                <nav className='bg-white shadow-lg'>
                    <Navbar></Navbar>
                </nav>
                <div className='py-10 w-11/12 mx-auto flex flex-col md:flex-row gap-5'>

                    <div className='shadow-lg bg-white  card max-w-md'>
                        <figure className="px-5 pt-5">
                            <img
                                src={image}
                                alt={title}
                                className="rounded-xl h-52 w-full" />
                        </figure>
                        <div className='p-5 space-y-3'>
                            <h2 className="text-primary font-bold text-xl">{title}</h2>
                            <p className="text-secondary font-semibold text-base">{description}</p>
                            <p className="flex items-center gap-2 text-secondary font-semibold"> <span className='text-primary font-semibold text-lg'>Status:</span> {status}</p>
                            <p className="flex items-center gap-2 text-secondary font-semibold"> <span className='text-primary font-semibold text-lg'>Division:</span> {division}</p>
                            <p className="flex items-center gap-2 text-secondary font-semibold"> <span className='text-primary font-semibold text-lg'>Contact:</span> {contactInfo}</p>

                        </div>
                    </div>

                    <form onSubmit={handleFormSubmit} className='w-full rounded-xl bg-white shadow-lg p-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-lg">Quantity of items</span>
                            </label>
                            <input type="number" placeholder="Enter quantity (e.g., 2 jackets, 3 blankets)" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-lg">Item type</span>
                            </label>
                            <select className="select select-bordered w-full">
                                <option selected>Select an item Type</option>
                                <option>blanket</option>
                                <option>jacket</option>
                                <option>sweater</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-lg">Pickup location</span>
                            </label>
                            <input type="text" placeholder="House 12, Road 5, Dhanmondi, Dhaka" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-lg">Additional notes (optional)</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full" />
                        </div>

                        <div className='w-full mt-5'>
                            <button  className='btn btn-block bg-bgbton  text-white  text-lg'>Submit</button>
                        </div>

                    </form>

                </div>

                {/* footer */}
                <footer className='bg-black text-white'>
                    <Footer></Footer>
                </footer>
            </div>
        </PrivateRoute>
    );
};

export default WinterDetails;


