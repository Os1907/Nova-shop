

import React, { useContext, useState } from 'react'
import cash from '../../../../Assets/creditCard.png'
import { IoIosSend } from "react-icons/io";
import {  useNavigate, useParams } from 'react-router-dom';
import { GetProduct } from '../../../Context/GetProduct';
import { useFormik } from 'formik';
import * as Yup from "yup"


export default function CreditCheck() {
  let {id} =  useParams()
 const [valuesOrder, setvaluesOrder] = useState("")
const navigate= useNavigate()

let {setCounter  , deleteAllCart , checkOut}=useContext(GetProduct)

// console.log(id)

function validationSchema(){
    let schema =new Yup.object({
        details: Yup.string().min(2).max(10).required(),
        phone: Yup.string().matches(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/).required(),
        city : Yup.string().matches(/^[a-zA-Z,'.\-\s]*$/).required()

   
    });
    return schema
}

let address =useFormik({
    initialValues: {
        details :" ",
        phone : " ",
        city : " "
    },
    validationSchema
    ,
    onSubmit:(values)=>{
      setvaluesOrder(values)
      checkOutOrder(values)
      console.log(values);
    }
})
async function checkOutOrder(values){
  let orederCheck = await checkOut(id ,values )
  console.log(orederCheck.data.status)
    if(orederCheck.data.status === "success"){ 
      window.location.href = orederCheck.data.session.url
    }
} 



// console.log(checkOut(id ,"osama" ))

  return (
    <>

<div className=' py-24  md:mx-36 flex justify-center flex-col items-center'>
        <img src={cash} alt=""  className='w-[15%]'/>
        <h2 className='grayColor font-bold text-5xl text-center my-3 '>Shipping address</h2>
        <div className='flex flex-col w-full '>
            <form onSubmit={address.handleSubmit}  className='flex flex-col'>

                <input  onChange={address.handleChange} type="text" name='details' placeholder="Details" className="input input-bordered md:w-[50%] w-[80%] mx-auto  my-2 rounded-2xl font-medium grayColor" />
                {address.errors.details ? <div role="alert" className="alert alert-warning mainColor text-white mt-2 rounded-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>{address.errors.details}</span>
          </div> :""}
        <input onChange={address.handleChange} type="text" name='phone' placeholder="Phone Number" className="input input-bordered md:w-[50%] w-[80%] mx-auto  my-2 rounded-2xl font-medium grayColor" />
        {address.errors.phone ? <div role="alert" className="alert alert-warning mainColor text-white mt-2 rounded-2xl">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>False number please enter your egyption phone number</span>
          </div> :""}
        <input onChange={address.handleChange} type="text" name='city' placeholder="City" className="input input-bordered md:w-[50%] w-[80%] mx-auto  my-2 rounded-2xl font-medium grayColor" />
        {address.errors.city ? <div role="alert" className="alert alert-warning mainColor text-white mt-2 rounded-2xl">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>Please enter your City</span>
          </div> :""}
        <div  className='  w-[100%] flex justify-center pb-3  ' >
                            <button
                             type="submit"
                            onClick={()=>{
                                if (address.isValid) {
                                    // deleteUserCart()
                                // navigate('/orderSend');
                                // setCounter(0)
                                }
                                

                            }}
                            className={address.dirty && address.isValid ? 'mainColor py-3 px-5 rounded-xl ' : "hidden"} 
                            >
                                <p className='font-semibold text-white '> Send <IoIosSend className='inline text-xl mb-1' /></p>
                            </button>
                </div>
            </form>
        </div>
    </div>
    
    </>
  )
}
