import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard/ProductCard';
import { GoDotFill } from "react-icons/go";
import { EmblaCarousel } from '../Embla Carousel/Embla Carousel';
import HomeCards from './ProductCard/ProductCardD/HomeCards';
import { conText } from '../Context/Context';
import NewArrival from './ProductCard/ProductCardD/OneCard/NewArrival';


export default function Home() {



let {  getCategoriesNames ,settokenUser } =useContext(conText)

if(localStorage.getItem('token')){
  settokenUser(true)
}



let section = "Categories"
const [catoData, setcatoData] = useState(null)
useEffect(()=>{
    (async()=>{
     let data = await getCategoriesNames(section)
     setcatoData(data?.data)
    })()
},[])



  return (
    <>
  <section className="  relative pt-20  ">
    <div >
  <div className=" md:w-[80%] w-[100%] mx-auto ">
    <div className="  sandbox__carousel  px-2 mx-0 py-5 ">

    <EmblaCarousel />

    </div>   
  </div>
  </div>

</section>
<main className='bg-inherit py-10 relative'>
        <div className="myContainer   ">
        <h2 className='text-[#323232] text-3xl text-center font-bold  ml-5 my-2 '> <GoDotFill className='inline fontColor' /> Categories Avilabe In Our Store </h2>
        <div className='w-full flex justify-center'>
        <div className={catoData ?  '' :' mySpinner md:left-[45%]  my-20 ' } ></div>

            </div>
        <div className=" text-center ">
           {catoData?.data.map((product)=><ProductCard product={product} key={product._id} /> )}

        </div>
        </div>
    </main>
    <div className=" w-[80%] mx-auto">
      <h2 className='text-[#323232]  text-3xl font-bold text-center  ml-5' > <GoDotFill className='inline fontColor' />Most search</h2>
    </div>
<HomeCards/>  
<div className=" w-[80%] mx-auto">
      <h2 className='text-[#323232] text-3xl font-bold text-center  ml-5' > <GoDotFill className='inline fontColor' />New Arrival</h2>
    </div>
    <NewArrival/>
    </>
  )
}
