'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
    const currentPathname = usePathname();
    return (
        <div className="max-w-6xl mx-auto flex gap-5 items-center justify-between py-3">
            <div>
                <Link href={"/"}><img src="/img/logo.png" alt="" /></Link>
            </div>
            <div className="flex gap-5 items-center justify-center text-black font-extrabold font-nunito text-base">
                <Link className={currentPathname === '/' ? 'active-link' : 'pending-link'} href={"/"}>Home</Link>
                <Link className={currentPathname === '/about' ? 'active-link' : 'pending-link'} href={"/about"}>About</Link>
                <Link className={currentPathname === '/contact' ? 'active-link' : 'pending-link'} href={"/contact"}>Contact</Link>
            </div>
            <div>
                <Link href={"#"}><button className="font-nunito font-medium text-lg border text-[#fe4b7b] border-[#fe4b7b] py-2 px-5 rounded-full hover:bg-[#fe4b7b] hover:text-white hover:border-[#fe4b7b]">Try for free</button></Link>
            </div>
        </div>
    )
}

export default Header