import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa6'
import { ImBin } from "react-icons/im";
import { conText } from '../../Context/Context';
import { GetProduct } from '../../Context/GetProduct';
import { Link } from 'react-router-dom';
export default function WishlistCard(received) {
   
let {  Removefromwish , setwishNum} =useContext(conText)

let {setCounter , PostToCart }=  useContext(GetProduct)


async function addToUserCart(productId){
    let Message =  await PostToCart(productId)
    setCounter(Message?.data.numOfCartItems)
  }

  async function Removewish(productId){
    let data =  await Removefromwish(productId)
    setwishNum(data?.data.data.length)
  }

  return (
    <>
<div className=" relative block  overflow-hidden xl:col-span-3 md:col-span-4 col-span-6    hover:border-[#fcaf18] hover:border-b-2 hover:border-t-2 bg-white  shadow-sm duration-75 rounded-xl">
            
    <button
                className="absolute end-4 top-4 z-10 mainColor rounded-full p-1.5 text-gray-900 transition "
                onClick={ ()=>{
                    Removewish(received.data.id)
                    console.log(received.data.id)
                }
                }
            >
                
                <span className="sr-only">Wishlist</span>
                <ImBin className="h-5 w-5  text-white pointer" />
                
            </button>
               <Link to={"/ProductDetails/" +received.data.id }>
               
            <img
                src={received.data.imageCover}
                alt=""
                className=" lg:w-44 lg:h-52 w-36 h-44  mx-auto mt-2 rounded-2xl  "
            />
            </Link>
            <div className="relative  p-6">
               <Link to={"/ProductDetails/" +received.data.id }>

                <p className="  px-3 py-1.5 text-xs font-medium rounded-full fontColor text-center">{received.data.brand.name}  </p>
                <p className='text-center py-1  grayColor rounded-xl w-full  font-medium text-sm'>
                {received.data.category.name}    
                </p>
                <h3 className="mt-4 text-base font-medium grayColor text-center">
               {received.data.title.split(' ').slice(0,2)}
                </h3>
                
                <div className='flex justify-between'>
               
                <p className="mt-1.5 text-sm grayColor font-semibold"> {received.data.price} EGP</p>
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
                    addToUserCart(received.data.id)
                }}
                className="block w-full rounded-xl  lg:p-4 p-2 lg:text-sm font-semibold text-white mainColor transition hover:border-white  hover:border-2 text-[12px]"

                >
                    Add to Cart
                </button>
               
                </form>
            </div>
            </div>
    </>
  )
}
