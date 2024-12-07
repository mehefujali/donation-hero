import React from 'react';

const About = () => {
    return (
    <div>
        <div>
            <h1 className='text-center  text-primary font-extrabold text-xl md:text-3xl '>About Us</h1>
        </div>
        <div className='flex container mx-auto  mt-5 flex-col-reverse rounded-xl lg:flex-row justify-between  p-8 bg-bgbton bg-opacity-10 items-start gap-5 '>
            <div className=' w-full lg:w-1/2 space-y-4'>
                <h1 className='text-primary font-semibold text-center text-2xl md:text-3xl'>Winter Closing Donation Camp</h1>
                <div className=' divider'></div>
                <p className='text-secondary text-base font-light'>Welcome to Winter Closing Donation Camp, a heartfelt initiative dedicated to helping underprivileged communities stay warm during the chilly winter season. Our mission is to ensure that no one faces the harshness of winter without adequate clothing and warmth.</p>
                <p className='text-secondary text-base font-light'>We invite compassionate individuals like you to join us in spreading kindness and making a tangible difference. Here's how you can contribute:</p>
                <p className='text-secondary text-base font-light'><span className='text-primary font-bold'>Donate Winter Clothing:</span> Share gently used or new winter wear, such as sweaters, jackets, scarves, and blankets.</p>
                <p className='text-secondary text-base font-light'><span className='text-primary font-bold'>Monetary Contributions:</span> Support our efforts through financial donations that help us purchase and distribute essential winter supplies.</p>
                <p className='text-secondary text-base font-light'><span className='text-primary font-bold'>Volunteer with Us:</span> Participate in our donation drives and help us reach more people in need.</p>
            </div>
            <div className='mx-auto w-fit'>
                <img className='lg:w-[400px] w-full rounded-lg mx-auto' src="https://i.ibb.co/hMGZnxv/winter4.webp" alt="" />
            </div>
        </div>
    </div>
    );
};

export default About;