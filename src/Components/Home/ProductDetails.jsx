import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'
import { GetProduct } from '../Context/GetProduct'
import ProductCrousel from '../Embla Carousel/ProductCrousel'
import { conText } from '../Context/Context'
export default function ProductDetails() {
    let params =  useParams()
    let {getDataApi , PostToCart ,Counter, setCounter } = useContext(GetProduct)

    let { AddToWishList , setwishNum}=  useContext(conText)

const [data, setdata] = useState(null)


async function addToWishlist(productId){
    let data =  await AddToWishList(productId)
    console.log(data?.data.data.length)
         setwishNum(data?.data.data.length)
 }
 

async function addToUserCart(productId){
  let Message =  await PostToCart(productId)
  setCounter(Message?.data.numOfCartItems)

}


    useEffect((id)=>{
        (async ()=>{
            let recived = await getDataApi(params.id)
            setdata(recived.data.data)
        }) ()
 },[])


return (

    <>
    <section className='pt-20'>
        <div className="grid lg:grid-cols-12 gap-y-5 md:gap-0 w-[80%] my-14 mx-auto bg-white rounded-3xl" >

    <div className="col-span-6  lg:flex lg:items-center  rounded-3xl  ">
       <div className='w-[80%] mx-auto '>
        <ProductCrousel  img={data?.images} imageCover={data?.imageCover} />
       </div>
    </div>



    <div className="col-span-6 flex justify-center items-center relative   rounded-3xl ">
    <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition "
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 fontColor pointer xl:h-10 xl:w-10"
                onClick={()=>{
                    addToWishlist(params.id)
                   }}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>
        <div className='flex justify-center items-center flex-col'>

            <h2 className='xl:text-xl   mt-12 font-bold text-center '>{data?.title} </h2>
            <p className='text-sm  text-center'>{data?.description}</p>
        <div className=' mainColor  py-1 px-3 rounded-3xl mt-1 '>
        <p className='text-white font-medium text-sm '>{data?.category.name}</p>
        </div>
            <p className='fontColor text-sm font-semibold'>{data?.brand.name}</p>

        <div className='flex w-full justify-between mt-5'>
            <p className='text-xl font-semibold'>{data?.price} EGP</p>
            <div className='flex items-center'>
                <p className='font-semibold' >{data?.ratingsAverage}</p>
                <FaStar className='mb-1 fontColor ml-1' /> 
            </div>
        </div>
        <button
        onClick={()=>{
            addToUserCart(params.id)
        }}
                    className="block w-full rounded-xl mainColor p-4 my-5 text-sm font-semibold text-white transition hover:scale-105"
        >
                Add to Cart
        </button>


        </div>

    </div>










        </div>


    
    </section>








    </>
)
}
