import React from 'react'
import { Link } from 'react-router-dom'
import noAccess from '../../Assets/noAccess.png'

export default function ProtectedRoutes({children}) {
    let token = localStorage.getItem('token')
    if (token) return children
  return <>
  <section className=' md:pt-32 md:pb-26 xl:pt-20 h-screen  xl:pb-10 xl:h-[auto]  flex justify-center items-center flex-col'>
  <img src={noAccess} alt="" className='w-[50%] md:w-[30%]  xl:w-[25%]   '/>

    <h2 className=' fontColor  mt-3   text-center text-2xl  md:text-6xl font-bold uppercase'>You don't have access for this page please register first  </h2>  
        <p className=' bg-[#fcaf18]  text-white hover:bg-white hover:border-[#fcaf18] hover:border-2 hover:text-[#323232] rounded-xl my- btn btn-ghost border-0  px-3 py-0'> 
        <Link to="/register">
        Register Now
        </Link> 
        </p>
        </section>
</>
}
