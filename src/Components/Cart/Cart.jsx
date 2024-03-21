import React, { useContext, useEffect, useState } from 'react'
import cart from '../../Assets/shopping-cart_6493913.png'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosPricetag } from "react-icons/io";
import { GetProduct } from '../Context/GetProduct';
import { HiMinusCircle } from "react-icons/hi";
import { HiPlusCircle } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import { ImBin } from 'react-icons/im';
import { IoCheckmarkDone } from "react-icons/io5";
export default function Cart() {

let {getUserCart , deleteFromCart , setCounter , updateCart}=useContext(GetProduct)
const navigate= useNavigate()


const [Cart, setCart] = useState(null)


async function deleteUserCart(id){
    let data = await deleteFromCart(id)
    setCounter(data?.data.numOfCartItems)
} 




async function upQTYCart(id , count){
    let data = await updateCart(id , count)
} 


useEffect(()=>{
    (async ()=>{
        let userCart =await getUserCart()
        setCart(userCart?.data)
    })()

},[Cart])


if (Cart == undefined ) return (
    <>

    <section className=' pt-32 pb-24 xl:pt-20  xl:pb-10 xl:h-[auto]  flex justify-center items-center flex-col'>
    <h2 className=' fontColor  mt-3   text-center  text-6xl font-bold uppercase'>Your Cart is empty </h2>  
    <p className='font-bold grayColor'> add something now to your cart</p>
            <img src={cart} alt="" className='w-[50%] md:w-[30%]  xl:w-[25%]   '/>
        <p className=' bg-[#fcaf18]  fontColor hover:bg-white hover:border-[#fcaf18] hover:border-2 hover:text-[#323232] rounded-3xl my- btn btn-ghost border-0  px-3 py-0'> 
        <Link to="/home">
        Back to Home page 
        </Link> 
        </p>



        </section>


    </>
) 






if (Cart?.data.products.length == 0 ) return (
    <>

    <section className=' pt-32 pb-24 xl:pt-20  xl:pb-10 xl:h-[auto]  flex justify-center items-center flex-col'>
    <h2 className=' fontColor  mt-3   text-center  text-6xl font-bold uppercase'>Your Cart is empty </h2>  
    <p className='font-bold grayColor'> add something now to your cart</p>
            <img src={cart} alt="" className='w-[50%] md:w-[30%]  xl:w-[25%]   '/>
        <p className=' bg-[#fcaf18]  fontColor hover:bg-white hover:border-[#fcaf18] hover:border-2 hover:text-[#323232] rounded-3xl my- btn btn-ghost border-0  px-3 py-0'> 
        <Link to="/home">
        Back to Home page 
        </Link> 
        </p>



        </section>


    </>
) 

  return (
    <>
    {
        Cart? <section className='pt-20'>
        <div className="lg:mx-20   rounded-xl my-5">
            <h2 className='xl:text-6xl   fontColor text-center font-bold  py-4 '>Shop Cart : </h2>
            <p className='text-center my-2 font-bold grayColor  text-2xl '> <IoIosPricetag className='fontColor inline' /> Total Cart price : {Cart?.data.totalCartPrice} EGP</p>
            <div className='grid grid-cols-12'>

{
    Cart?.data.products.map((item)=>{

   return <div key={item._id} className="col-span-6 lg:col-span-12 my-4 mx-2 ">
                    <div className="grid grid-cols-12 my-border  rounded-xl lg:mx-5 py-2  shadow-md gap-y-3 ">
                        <div className="lg:col-span-3  col-span-12 l flex justify-center ">
                            <img src={item.product?.imageCover} alt=""  className='lg:w-[70%] lg:h-auto h-40 w-36 rounded-xl '/>
                        </div>
                        <div className="lg:col-span-9 col-span-12 mx-2 rounded-xl  flex justify-center items-center md:items-start  flex-col  ">
                            <p className=' text-center md:text-start font-semibold mainColor text-white rounded-md py-2 px-5  md:text-sm text-[10px]'> {item.product?.brand.name} </p>
                            <p className=' font-bold my-2 fontColor  lg:text-xl text-sm line-clamp-3'>{item.product?.title} </p>
                            <p className=' lg:text-lg text-sm font-semibold py-2 px-5  mainColor text-white rounded-lg my-2' >Price : <span className='font-semibold'>{item.price}EGP</span> </p>
                            <div className='flex justify-between w-full flex-wrap my-2 '>
                                
                            <div className='flex lg:me-10 lg:pl-3  '>
                               <button onClick={()=>{
                                upQTYCart(item.product._id ,item.count + 1 )
                               }}> <HiPlusCircle className='fontColor  text-xl mb-1' /> </button> 
                               <p className='text-xl font-bold ml-2  fontColor'>{item.count}</p> 
                               {
                                    item.count >1 ?   <button
                               onClick={()=>{
                                upQTYCart(item.product._id ,item.count - 1 )
                                if (item.count <= 1) {
                                    console.log("delete")
                                }
                               }}
                               > <HiMinusCircle className='fontColor ml-2 text-xl mb-1' />
                                </button>  : <button
                            onClick={()=>{
                                deleteUserCart(item.product._id)

                            }}
                             className=' px-3   rounded-xl'>
                            <p className='p-0 font-semibold'> <ImBin  className=' fontColor p-0 lg:mb-2 mb-1 lg:text-xl   fontColor inline font-bold'/></p>
                            </button>
                                }
                              
                            </div>
                            <button
                            onClick={()=>{
                                deleteUserCart(item.product._id)

                            }}
                             className='bg-white px-3 py-1 rounded-xl'>
                            <p className='p-0 font-semibold'> <ImBin  className='p-0 mb-1 lg:text-xl text-sm fontColor inline font-bold'/>  Remove</p>
                            </button>

                            </div>
                            
                        </div>
                        

                    </div>
                </div>


    })

}


            </div>
            <div className='  w-[100%] flex justify-center pb-5 ' >
                        <button
                        onClick={()=>{
                            navigate('/checkoutway');

                        }}
                         className='mainColor py-3 px-5 rounded-xl '>
                            <p className='font-semibold text-white '> Check Out <IoCheckmarkDone className='inline text-2xl' /></p>
                        </button>
            </div>
        </div>
    </section> : <section className='pt-20 h-screen items-center flex justify-center'>
    <div className='flex  justify-center'>
        <div className=" mySpinner    "></div>

            </div>
    </section>

    }
    
    </>
  )
}
