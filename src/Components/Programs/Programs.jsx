'use client'
import Link from "next/link"

const Programs = ({item}) => {
    const {title, description, link, bg_color, image} = item;

    const card = {
        backgroundColor: `${bg_color}`,
    };

  return (
    <div className="" style={card}>
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <Link href={link}>Read More</Link>
    </div>
  )
}

export default Programs