'use client'

import { useState, useEffect } from "react"

const page = () => {
    const [demo, setDemo] = useState([]);

    useEffect(() => {
        (async () =>{
            let res = await fetch('https://dummyjson.com/products')
            let json = await res.json()
            setDemo(json['products'])
        })()
    }, [])
    

  return (
    <div>
        <h1>This is contact page</h1>
        <a href="#">Hello</a>
        {
            demo.map(item => {
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