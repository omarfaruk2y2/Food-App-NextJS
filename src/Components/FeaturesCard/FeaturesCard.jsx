import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";


const FeaturesCard = ({ featurIcon, featureTitle, featureLink }) => {
    return (
        <div className="group border border-[#EBEBEB] rounded-xl pt-8 px-5 pb-6 hover:shadow-[0px_12px_34px_0px_rgba(15,_20,_61,_0.10)] transition duration-300 ease-in-out">
            <img src={featurIcon} alt="" />
            <h1 className="text-[#12265A] text-xl font-nunito font-bold mt-6 mb-3 group-hover:text-[#fe4b7b] transition duration-300 ease-in-out">{featureTitle}</h1>
            <Link className="flex items-center text-[#626472] hover:text-[#fe4b7b] text-base font-nunito font-normal transition duration-300 ease-in-out" href={featureLink}>Learn More <FaArrowRight className="ml-1" /></Link>
        </div>
    )
}

export default FeaturesCard