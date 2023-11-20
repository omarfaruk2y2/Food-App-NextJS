import Link from "next/link"

const Header = () => {
    return (
        <div className="flex gap-5 items-center justify-center bg-black py-3 text-white">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
        </div>
    )
}

export default Header