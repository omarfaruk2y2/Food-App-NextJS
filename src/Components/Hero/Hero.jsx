
const Hero = () => {
    const styling = {
        backgroundImage: "url('/Bg-Illustrration.png')",
        width: "100%",
    }
    return (
        <div className='bg-[#D7F0EB] bg-no-repeat bg-bottom pt-16' style={styling}>
            <div className="max-w-6xl mx-auto flex items-center">
                <div className="flex flex-col justify-center mr-32">
                    <h1 className="text-7xl text-[#2C3154] font-extrabold font-nunito">Welcome to Droit Kids <span className="hightlight _hero">Campus</span></h1>
                    <p className="text-[#2C3154] font-normal font-nunito text-xl mt-7 mb-12">Kidzo mission is to provide affordable, high-quality early education and childcare services for working families.</p>
                    <div className="flex">
                        <input className="p-4 w-80 rounded-full outline-none" type="text" placeholder="Enter Email Address" />
                        <button className="font-nunito font-bold bg-[#fe4b7b] text-white hover:bg-[#000] hover:text-[#fe4b7b] py-2 px-10 ml-3 rounded-full">Get Started</button>
                    </div>
                </div>
                <div className="-mr-28">
                    <img className="-mr-28 w-auto max-w-fit" src="/Img.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero