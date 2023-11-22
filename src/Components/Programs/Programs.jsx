'use client'
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";

const Programs = ({ item }) => {
  const { title, description, age, link, bg_color, image } = item;

  const card = {
    backgroundColor: `${bg_color}`,
  };

  return (
    <div className="group/item relative overflow-hidden pl-8 py-10 rounded-xl hover:shadow-[0px_12px_34px_0px_rgba(15,_20,_61,_0.20)] transition duration-300 ease-in-out" style={card}>
      <img className="absolute right-0 bottom-0 mx-auto group-hover:scale-110 transition duration-500" src={image} alt="" />
      <div className="w-4/6">
        <h1 className="text-[#12265a] text-[34px] font-nunito font-bold">{title}</h1>
        <h2 className="mt-2 mb-4 text-[#546389] text-lg font-nunito font-medium">{age}</h2>
        <p className="mb-7 text-[#626472] font-nunito font-medium text-lg">{description}</p>
        <Link className="group/edit flex items-center text-[#fe4b7b] text-base font-nunito font-bold" href={link}>Enroll Now <FaArrowRight className="ml-1 group-hover/edit:translate-x-1 transition duration-500" /></Link>
      </div>
    </div>
  )
}

export default Programs