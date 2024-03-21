import React, { useContext, useEffect, useState } from 'react'
import logo from '../../Assets/Untitled-1.png'
import { Link, NavLink, useParams } from 'react-router-dom'
import { GiShoppingCart } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io"; 
import { conText } from '../Context/Context';
import { GetProduct } from '../Context/GetProduct';

export default function Navbar() {
  let token=localStorage.getItem('token')
 let wishlist= useContext(conText)

let {getUserCart , Counter, setCounter}=useContext(GetProduct)
let {  wishLists ,  wishNum,setwishNum , tokenUser, settokenUser } = useContext(conText)




useEffect(()=>{
    (async()=>{
      let userCart= await getUserCart()
      let wishlist = await wishLists()
      setCounter(userCart?.data.numOfCartItems)
      setwishNum(wishlist?.data.count)
    })()
},[tokenUser])


  return (
    <>
<nav className="navbar flex justify-center  w-full mx-auto fixed z-40 bg-white my-border-bottom ">
  <div className="justify-between  md:w-[40%]  w-[30%]  lg:w-[10%] lg:ml-0 relative  ">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  hover:bg-white ">
        <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-8 sm:w-8 h-5 w-5 text-[#fcaf18]  fontColor" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0}  className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96 text-center">
     <NavLink  to="home"> <li className='my-2 hover:bg-[#fcaf18] rounded-lg p-2 hover:text-white font-semibold'> Home</li></NavLink>
     <NavLink to="products"> <li className='my-2 hover:bg-[#fcaf18] rounded-lg p-2 hover:text-white font-semibold' > Products</li></NavLink>
    <NavLink to="categories">  <li className='my-2 hover:bg-[#fcaf18] rounded-lg p-2 hover:text-white font-semibold'> Categories</li></NavLink>
    <NavLink to="brands">  <li className='my-2 hover:bg-[#fcaf18] rounded-lg p-2 hover:text-white font-semibold'> Brands</li></NavLink>
     <NavLink to="cart"> <li className='my-2 hover:bg-[#fcaf18] rounded-lg p-2 hover:text-white font-semibold'> Cart</li></NavLink>
     <NavLink to="wishlist"> <li className='my-2 hover:bg-[#fcaf18] rounded-lg p-2 hover:text-white font-semibold'> Wishlist</li></NavLink>
     <NavLink to="register"> <li className='my-2 hover:bg-[#fcaf18] rounded-lg p-2 hover:text-white font-semibold'> Sign Out </li></NavLink>
      </ul>
    </div>  
  </div>
    <img src={logo} alt="" className='lg:w-[5%] w-[25%] md:w-[15%]  right-[15%] md:right-28  ml-24  md:mr-0 md:ml-0 ' />
  <div className="navbar-center  w-[70%]   hidden lg:flex  justify-center">
    <ul className="flex justify-between w-[50%] px-1 grayColor font-semibold text-[16px]  ">
      <li className=' p-3 rounded-xl '><NavLink to="home">Home</NavLink></li>
      <li className=' p-3 rounded-xl '> <NavLink to="products">Products</NavLink></li>
      <li className=' p-3 rounded-xl '> <NavLink to="categories">Categories</NavLink></li>
      <li className=' p-3 rounded-xl '> <NavLink to="brands">Brands</NavLink></li>
      <li className=' p-3 rounded-xl '> <NavLink to="cart">Cart</NavLink></li>
      <li className=' p-3 rounded-xl '> <NavLink to="wishlist">Wishlist</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end sm:w-[40%] xl:w-[20%]   ">
<p className={ tokenUser? 'hidden': 'btn hidden lg:visible px-3 rounded-xl bg-inherit border-0 shadow-none py-0 text-[#4c4b4d]  lg:inline-flex  ' }> <NavLink to="register">Sign in </NavLink></p>

<p 
  onClick={()=>{
  localStorage.removeItem('token');
  settokenUser(false)
}}  
className={tokenUser? 'btn  px-3 rounded-xl bg-inherit border-0 shadow-none py-0 text-[#4c4b4d] ml-2 hidden lg:inline-flex  ' : 'hidden'}> <NavLink to="register"> Sign out</NavLink></p>
    <Link to="wishlist" className='btn btn-ghost p-0 mx-5  rounded-full'>
    <div className="indicator">
  <span className="indicator-item badge badge-secondary mainColor border-0">{wishlist.wishNum}</span> 
  <IoMdHeartEmpty className="sm:h-8 sm:w-8 h-5 w-5  text-[#4c4b4d]  " />
  </div>
    </Link>



    <Link to="cart" className='btn btn-ghost p-0 mx-5  rounded-full'>
    <div className="indicator">
  <span className="indicator-item badge badge-secondary mainColor border-0">{Counter}</span> 
  <GiShoppingCart className="sm:h-8 sm:w-8 h-5 w-5  text-[#4c4b4d] " />

  </div>
    </Link>











    <button className='btn btn-ghost p-0 mx-2 rounded-full '>

    </button>
  </div>
</nav>

    </>
  )
}
