import React from 'react'
import error from "../../Assets/404 Error with a broken robot-amico.png"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function NotFound() {
  return (
    <>

<div className='h-[90vh] flex justify-center items-center flex-col  pt-20'>
    <img src={error} alt="" className='md:w-[30%] w-[50%] mt-[-80px] '/>
<p className='mainColor  text-white rounded-3xl btn btn-ghost border-0  px-5 py-0'> 
<Link to="home">
 Back to Home page 
 </Link> 
 </p>
</div>
    </>
  )
}


