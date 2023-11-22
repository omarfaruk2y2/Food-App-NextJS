import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
    const footerBg = {
        backgroundImage: "url('/img/footer_bg.png')",
        width: "100%",
    }
    return (
        <div className="bg-[#e3f7fc] bg-no-repeat bg-bottom" style={footerBg}>
            <div className="max-w-6xl mx-auto pt-32 pb-10">
                <div className="grid grid-cols-4 gap-8 pb-72">
                    <div className="">
                        <Link href={"/"}><img src="/img/logo.png" alt="" /></Link>
                        <p className="text-[#32355d] text-[15px] font-nunito font-semibold mt-4">
                            Lorem ipsum dolor sit consectetur sicing elit, sed do eitempor idunt ut labor omagn aliqua sed do.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="text-[#32355d] text-2xl font-nunito font-black mb-3">Programs</h1>
                        <ul className="space-y-2">
                            <li className="text-[#32355d] hover:text-[#fe4b7b] text-sm font-nunito font-semibold"><Link href={"#"}>Pre School</Link></li>
                            <li className="text-[#32355d] hover:text-[#fe4b7b] text-sm font-nunito font-semibold"><Link href={"#"}>Junior Lambs</Link></li>
                            <li className="text-[#32355d] hover:text-[#fe4b7b] text-sm font-nunito font-semibold"><Link href={"#"}>Junior Lambs</Link></li>
                            <li className="text-[#32355d] hover:text-[#fe4b7b] text-sm font-nunito font-semibold"><Link href={"#"}>Master Mind</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="text-[#32355d] text-2xl font-nunito font-black mb-3">Useful Links</h1>
                        <ul className="space-y-2">
                            <li className="text-[#32355d] hover:text-[#fe4b7b] text-sm font-nunito font-semibold"><Link href={"#"}>Home</Link></li>
                            <li className="text-[#32355d] hover:text-[#fe4b7b] text-sm font-nunito font-semibold"><Link href={"#"}>About US</Link></li>
                            <li className="text-[#32355d] hover:text-[#fe4b7b] text-sm font-nunito font-semibold"><Link href={"#"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="text-[#32355d] text-2xl font-nunito font-black mb-3">Newsletter</h1>
                        <p className="text-[#32355d] text-[15px] font-nunito font-semibold">Subscribe to our newsletter. We will not disclose your email to anyone.</p>
                        <div className="flex items-center mt-7">
                            <input type="text" placeholder="Email" className="bg-white outline-none px-5 py-3 border border-[#f2f1ef] rounded-s-[4px]" />
                            <button className="bg-white py-4 px-4 rounded-e-[4px] border border-[#f2f1ef] border-s-0 text-[#56a4a1] hover:text-[#fe4b7b]"><FaArrowRight /></button>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-[#7a7a7a] font-nunito font-medium text-sm">
                        © 2023 <Link className="font-semibold text-[#32355d]" href={"#"}>DroitThemes</Link>. All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer