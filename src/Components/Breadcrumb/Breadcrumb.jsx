import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ page_title }) => {
    const breadcrumbBg = {
        backgroundImage: "url('/img/breadcrumb_bg.png')",
        width: "100%",
    }
    return (
        <div className='text-center py-40 text-white' style={breadcrumbBg}>
            <h1 className='text-[45px] font-nunito font-extrabold'>{page_title}</h1>
            <h2 className='text-[#c9c9d1] text-base font-medium font-nunito'> <Link className='hover:text-[#fe4b7b]' href={"/"}>Home</Link> | {page_title}</h2>
        </div>
    )
}

export default Breadcrumb