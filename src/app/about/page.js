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
        <h1>This is about page</h1>
        {
            data.map(item => {
               return <div>
                    <h1>{item['title']}</h1>
                    <p>{item['price']}</p>
                </div>
            })
        }
    </div>
  )
}

export default page