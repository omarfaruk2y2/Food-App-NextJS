import Header from '@/Components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <div className=''>
        <Header/>
        <div className='bg-orange-50 h-screen flex justify-center items-center'>
          <h1 className='text-6xl uppercase'>This is my home page {25+35}</h1>
        </div>
    </div>
  )
}

export default page