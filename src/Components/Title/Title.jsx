
const Title = ({ title, hightlight }) => {
    return (
        <>
            <h1 className="text-center text-5xl font-nunito font-extrabold text-[#12265A] mb-4">{title}<span className="hightlight">{hightlight}</span></h1>
        </>
    )
}

export default Title