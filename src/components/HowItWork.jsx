

const HowItWork = () => {
      return (
            <div className=" my-16">
                  <div>
                        <h1  className="divider container mx-auto   text-xl font-bold md:text-3xl text-center">{`How It Works ?`}</h1>

                        <div className=" flex flex-col lg:flex-row items-center container mx-auto justify-between mt-8 bg-bgbton bg-opacity-10 p-8 rounded-xl">
                              <div className=" w-fit">
                                    <img className=" rounded-lg w-full lg:w-96" src="https://i.ibb.co/HHD4fKc/image.png" alt="" />
                              </div>
                              <div className=" my-8 w-full  lg:w-1/2 mx-auto   flex flex-col gap-3">
                                    <label htmlFor="">
                                          <p className=" text-black"><span className=" font-bold">Step 1 : </span> Browse Donation Campaigns</p>
                                          <p className=" text-gray-500">View active campaigns across various divisions, with detailed information about the items needed and the communities being supported.</p>
                                    </label>
                                    <label htmlFor="">
                                          <p className=" text-black"><span className=" font-bold">Step 2 : </span> Select and Donate</p>
                                          <p className=" text-gray-500">Choose a campaign to support, fill out the donation form with item details, and specify the pickup location.</p>
                                    </label>
                                    <label htmlFor="">
                                          <p className=" text-black"><span className=" font-bold">Step 3 : </span> Make an Impact</p>
                                          <p className=" text-gray-500">Volunteers will collect your donated items and ensure they reach those in need, bringing warmth and comfort to vulnerable communities during winter.</p>
                                    </label>
                                    <label htmlFor="">
                                          <p className=" text-black"><span className=" font-bold">Supported Divisions :</span></p>
                                          <p className=" text-gray-500">We currently support campaigns in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Barisal, Rangpur, and Mymensingh.</p>
                                    </label>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default HowItWork;