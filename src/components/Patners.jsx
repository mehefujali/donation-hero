import { useEffect, useState } from "react";
import PatnersCard from "./PatnersCard";
import Marquee from "react-fast-marquee";

const Patners = () => {
      const [partners, setPartners] = useState([])
      useEffect(() => {
            fetch('/partners.json')
                  .then(res => res.json())
                  .then(data => setPartners(data))
      }, [])
      return (
            <div className=" my-14">
                  <div>
                        <h1 className=" text-xl md:text-3xl font-bold text-center divider">Our Trusted Partners</h1>
                        <div className=" mt-14">
                              <Marquee className=" h-64">
                                    {
                                          partners.map(partner => <PatnersCard key={partner.id} partner={partner}></PatnersCard>)
                                    }
                              </Marquee>
                        </div>
                  </div>
            </div>
      );
};

export default Patners;