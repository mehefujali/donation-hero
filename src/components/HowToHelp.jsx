import Footer from "./Footer";
import HowItWork from "./HowItWork";
import Navbar from "./Navbar";


const HowToHelp = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <HowItWork></HowItWork>
                  <footer className='bg-black text-white'>
                        <Footer></Footer>
                  </footer>
            </div>
      );
};

export default HowToHelp;