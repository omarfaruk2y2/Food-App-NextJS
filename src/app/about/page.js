import Header from "@/Components/Header/Header"

async function getData(){
    let res = await fetch('https://dummyjson.com/products')
    let json = await res.json()
    return json['products']
}

const page = async() => {
    let data = await getData()
  return (
    <div>
        <Header/>
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-9 py-32">
            {
                data.map(item => {
                return <div className="border border-fuchsia-800 p-3 rounded-md">
                        <img className="h-64 w-full" src={item['thumbnail']} />
                        <h1 className="text-2xl font-serif font-semibold mt-5">{item['title']}</h1>
                        <p className="text-xl text-white font-bold bg-black inline-flex py-1 px-3 rounded-md mt-3">${item['price']}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default page