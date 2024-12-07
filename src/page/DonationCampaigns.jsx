import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import DonationCard from '../components/DonationCard';
import Footer from '../components/Footer';

const DonationCampaigns = () => {

    const [donation, setDonation] = useState([]);

    useEffect(() => {
        fetch('/winter.json')
        .then(res => res.json())
        .then(data => setDonation(data))
    } ,[]);

    return (
        <div className=''>
            <nav className='bg-white '>
            <Navbar></Navbar>
            </nav>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8'>
                {
                    donation.map(alldonation => <DonationCard key={alldonation.id} alldonation={alldonation}></DonationCard>)
                }
            </div>
           <footer className='bg-black text-white'>
           <Footer></Footer>
           </footer>
        </div>
    );
};

export default DonationCampaigns;