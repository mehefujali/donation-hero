import { FaLocationDot } from "react-icons/fa6";
import { GoTab } from "react-icons/go";
import { Link } from "react-router-dom";
const DonationCard = ({ alldonation }) => {
    const { image, title, description, division } = alldonation;
    return (
        <div className="card  bg-white border-2 ">
            <figure className="px-5 pt-5">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl h-52 w-full object-cover" />
            </figure>
            <div className="card-body space-y-2">
             <h2 className="text-primary font-bold text-xl">{title}</h2>
             <p className="text-secondary font-semibold text-base">{description}</p>
             <p className="flex items-center gap-3 text-secondary font-semibold"><FaLocationDot className="text-bgbton" />  {division}</p>
            <div className="justify-start card-actions">
            <Link to={`/alldonation/${alldonation.id}`} className="px-5 py-2 bg-bgbton text-white font-semibold btn rounded-full flex items-center gap-3 ">Donate Now  <GoTab className="text-lg text-white" /> </Link>
            </div>
            </div>
        </div>
    );
};

export default DonationCard;