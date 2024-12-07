import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css'
const Banner = () => {
    return (
        <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/G3kdrJH/winter1.jpg"
              alt="winter"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-base md:text-2xl lg:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s">Warm Clothes for All</h2>
                <p className="mt-2 max-w-3xl text-xm md:text-base lg:text-lg text-gray-300  font-medium animate__animated animate__fadeInUp animate__delay-2s">Help us distribute warm clothes to those in need this winter.</p>
                <button className="mt-4 px-6 btn  bg-bgbton text-white font-semibold rounded-full text-sm border-none animate__animated animate__fadeInUp animate__delay-3s">
                Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/XjhVhnW/winter2.jpg"
              alt="winter"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-base md:text-2xl lg:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s">Keep the Cold Away
                </h2>
                <p className="mt-2 max-w-3xl text-gray-300  text-xm md:text-base lg:text-lg font-medium animate__animated animate__fadeInUp animate__delay-2s">Join our mission to deliver warm clothing to families in need. Your support can help them face the winter with hope and resilience</p>
                <button className="mt-4 border-none px-6 py-2 btn bg-bgbton text-white rounded-full font-semibold   animate__animated animate__fadeInUp animate__delay-3s">
                Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/vkT0hms/winter3.jpg"
              alt="winter 3"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-base md:text-2xl  lg:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s">Wrap Someone in Warmth</h2>
                <p className="mt-2 max-w-3xl text-xm md:text-base lg:text-lg text-gray-300 animate__animated animate__fadeInUp animate__delay-2s">Give the gift of warmth this winter. Your contribution can help us provide essential winter wear to those struggling in the cold.</p>
                <button className="mt-4  btn px-6 border-none bg-bgbton text-white rounded-full font-semibold    animate__animated animate__fadeInUp animate__delay-3s">
                  Join the Expedition
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
    );
};

export default Banner;