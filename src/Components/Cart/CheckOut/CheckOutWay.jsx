import React, { useEffect } from 'react'
import check from "../../../Assets/chexkout.png"
import cash from "../../../Assets/cash.png"
import credit from "../../../Assets/creditCard.png"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GetProduct } from '../../Context/GetProduct'
import { useState } from 'react'
export default function CheckOutWay() {
const navigate= useNavigate()

let {getUserCart}=useContext(GetProduct)

const [Id, setId] = useState(null)
useEffect(()=>{

    (async ()=>{
        let UserCart = await getUserCart()
        setId(UserCart?.data.data._id)
    })()

},[])
  return (

    <>
    
    
    <div className=' py-24  md:mx-36 flex justify-center flex-col items-center'>
        <img src={check} alt=""  className='xl:w-[20%] w-[40%]'/>
        <h2 className='grayColor font-bold md:text-4xl text-2xl text-center my-3 '>Choose How You Would Like to Check out</h2>
        <div className=' grid md:grid-cols-12 gap-y-5  '>
            {
                Id? <div onClick={
                    ()=>{
                        navigate (`/creditcheck/`+Id)
                        
        
                    }
                } className='bg-white col-span-6 flex justify-center mx-5 items-center flex-col   py-2 rounded-2xl hover:scale-105 transition-all pointer' >
                <img src={credit} alt=""  className='w-[15%]'/>
                <p className='font-bold grayColor'>Credit Card</p>
        
                </div> : ""
            }
            {
                Id? <div onClick={
                    ()=>{
                        navigate (`/cashcheck/`+Id)
                    }
                }
                 className='bg-white col-span-6 flex justify-center mx-5 items-center flex-col  py-2 rounded-2xl hover:scale-105 transition-all pointer' >
                <img src={cash} alt=""  className='w-[15%]'/>
                <p className='font-bold grayColor'>Cash on Delivery</p>
        
        
                </div> : ""

            }
        


        


        </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
