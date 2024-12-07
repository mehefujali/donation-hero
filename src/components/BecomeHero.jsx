import { FaHandsHelping } from "react-icons/fa";


const BecomeHero = () => {
      return (
            <div className=" container mx-auto">
                  <div>

                        <div className=" flex gap-12 flex-col lg:flex-row ">
                              <img className=" w-full lg:w-80 rounded-lg" src="https://i.ibb.co/N9RSYFD/image.png" alt="" />
                              <div className=" flex flex-col justify-between">
                                    <h1 className=" text-xl md:text-3xl font-bold ">Become a Winter Hero</h1>
                                    <p className=" text-gray-500 w-full  mt-5 text-justify">This winter, you have the chance to transform lives and bring smiles to those in need. By becoming a volunteer, you’ll step into a meaningful role, helping to collect and distribute warm clothing to vulnerable individuals who struggle to stay warm during the colder months.

                                          Imagine the impact you’ll create by ensuring that every jacket, sweater, or blanket finds its way to someone who needs it the most. As a volunteer, you’ll not only assist in logistics and coordination but also become a beacon of hope for countless people across rural and low-income communities in Bangladesh.

                                          Your contributions go beyond just delivering clothes—they bring comfort, restore dignity, and inspire hope. This opportunity allows you to give back to society, connect with like-minded people, and gain a sense of fulfillment that only comes from making a difference.

                                          Together, we can create a ripple effect of kindness that warms hearts and souls. Take the first step toward becoming a hero this winter—join us today!</p>
                                    <div className=" flex  mt-8">
                                          <button className=" btn w-full sm:w-fit  bg-bgbton text-white">Join as a Volunteer <FaHandsHelping className=" text-2xl"></FaHandsHelping></button>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default BecomeHero;