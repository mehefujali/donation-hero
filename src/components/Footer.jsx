import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer mx-auto w-11/12  p-10">
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <p>Winter Donation Organization</p>
                    <p>Email: help@winterdonationbd.com</p>
                    <p>Phone: +880-1234-567890</p>
                    <p>Address: House 12, Road 5, Dhanmondi, Dhaka</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Campaigns</h6>
                    <a className="link link-hover"> Current Campaigns</a>
                    <a className="link link-hover">Past Campaigns</a>
                    <a className="link link-hover">  Volunteer With Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Qiuck Link</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">How to Help</a>
                    <a className="link link-hover">Dashboard</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://facebook.com" target="_blank" ><img className='w-10' src="https://i.ibb.co/Rb7H2bD/facebook.png" alt="" /></a>
                        <a href="https://instagram.com" target="_blank"><img className='w-10' src="https://i.ibb.co/Nnvgq3M/instagram.png" alt="" /></a>
                        <a href="https://twitter.com" target="_blank"><img className='w-10' src="https://i.ibb.co/23Fxr25/twitter.png" alt="" /></a>
                        <a href="https://linkedin.com" target="_blank"><img className='w-10' src="https://i.ibb.co/BN0wwGC/icons8-linkedin-48.png" alt="" /></a>
                    </div>
                </nav>
            </footer>
            <hr className='w-11/12 mx-auto' />
            <footer className="footer footer-center  p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} Winter Donation. All Rights Reserved.</p>
                </aside>
            </footer>
        </div>

    );
};

export default Footer;