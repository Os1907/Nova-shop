import React from 'react'
import trueImage from '../../../../../Assets/true.png'
import { useNavigate } from 'react-router-dom';

export default function Order() {
const navigate= useNavigate()

  return (
    <>
  <div className=' py-24  h-[90vh] md:mx-36 flex justify-center flex-col items-center'>
        <img src={trueImage} alt=""  className='xl:w-[15%] w-[45%] sm:w-[35%] mt-2 md:w-[20%]'/>
        <h2 className='grayColor font-bold xl:text-5xl text-3xl text-center my-3 '>Your order has been successfully</h2>
        <div className='  w-[100%] flex justify-center pb-3 ' >
                        <button
                        onClick={()=>{
                            navigate('/home');

                        }}
                         className='mainColor py-3 px-5 rounded-xl '>
                            <p className='font-semibold text-white '> Home Page</p>
                        </button>
            </div>
    </div>
    
    
    </>
  )
}
