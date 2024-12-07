import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Footer from '../components/Footer';
import HowItWork from '../components/HowItWork';
import BecomeHero from '../components/BecomeHero';
import Patners from '../components/Patners';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration (default is 400ms)
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <nav className='bg-white'>
        <Navbar></Navbar>
      </nav>
      <Banner></Banner>
      <main className='bg-gray-100 py-10 md:py-20'>
        <section className='w-11/12 mx-auto'>
          <div data-aos="fade-up " >
            <About></About>
          </div>
          <div data-aos="fade-up" >
            <HowItWork></HowItWork>
          </div>
          <div data-aos="fade-up">
          <BecomeHero></BecomeHero>
          </div>
        </section>
        <Patners></Patners>
      </main>
      <footer className='bg-black text-white'>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;