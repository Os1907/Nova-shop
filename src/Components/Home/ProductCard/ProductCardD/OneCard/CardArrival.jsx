
import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import { conText } from '../../../../Context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { GetProduct } from '../../../../Context/GetProduct';

export default function CardArrival(received) {
    let {PostToCart , setCounter}=  useContext(GetProduct)


    let { setwishNum , AddToWishList } = useContext(conText)



    async function addToWishlist(productId){
        let data =  await AddToWishList(productId)
             setwishNum(data?.data.data.length)
     }
     





    async function addToUserCart(productId){
        let Message =  await PostToCart(productId)
        setCounter(Message?.data.numOfCartItems)
      
      }



  return (
    <>
    
    <div className=" relative block overflow-hidden xl:col-span-3 col-span-6 md:col-span-4   hover:border-[#fcaf18] hover:border-b-2 hover:border-t-2 bg-white  shadow-sm duration-75 rounded-xl">
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
                className="h-6 w-6 fontColor pointer"
                onClick={()=>{
                    addToWishlist(received.send.id);
                }}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>
                <Link to={"/ProductDetails/" + received.send.id}>
            <img
                src={received.send.imageCover}
                alt=""
                className=" lg:w-44 lg:h-52 w-36 h-44  mx-auto mt-2 rounded-2xl  "
            />
                </Link>
            
            <div className="relative  p-6">
            <Link to={"/ProductDetails/" + received.send.id}>

                <p className="  px-3 py-1.5 text-xs font-medium rounded-full fontColor text-center"> {received.send.brand.name} </p>

                <h3 className="mt-4 lg:text-lg text-base font-medium grayColor">
               {received.send.category.name}
                </h3>
                <div className='flex justify-between'>
                <p className="mt-1.5 text-sm grayColor font-semibold"> {received.send.price} EGP</p>
                    <div className='flex items-center '>
                    <p className='font-semibold grayColor'>4.8</p> 
                    <FaStar className='mb-1 fontColor ml-1' />
                    </div>
                </div>
                </Link>

                <form className="mt-4">
                <button
                type='button'
                onClick={()=>{
                    addToUserCart(received.send.id)
                }}
                className="block w-full rounded-xl  lg:p-4 p-2 text-sm font-semibold text-white mainColor transition hover:border-white  hover:border-2"
                >
                    Add to Cart
                </button>
               
                </form>
                
            </div>
            </div>



    
    
    </>
  )
}
