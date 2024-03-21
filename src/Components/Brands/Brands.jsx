import React from 'react'
import BrandsItem from './BrandsItem'


export default function Brands() {
    return (
        <>
        <section className='w-[80%] mx-auto pt-20 '>
            <h2 className='text-center fontColor  my-5 text-5xl md:text-6xl font-bold'>Brands section</h2>
            <div className="grid lg:grid-cols-12 md:grid-cols-6 mx-auto my-10 gap-5 ">
    
            <BrandsItem/>
    
              </div>
          </section>
        </>
      )
}
