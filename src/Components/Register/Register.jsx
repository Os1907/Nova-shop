import React from 'react'
import logo from '../../Assets/Untitled-1.png'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'

export default function Register() {
const navigate= useNavigate()

  let [erroMessage, seterroMessage] = useState("")

 function sendUserInfo(values){
   axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
   .then((data)=>{
    console.log(data);
    if (data.data.message === "success") {
      navigate('/signinUser');

      }
   }).catch((err)=>{
    console.log(err.response.data.message);
    seterroMessage(err.response.data.message)
   })
  }

  function validationSchema(){
    let schema = new Yup.object({
      name: Yup.string().min(2).max(10).required(),
      email: Yup.string().email().required(),
      password: Yup.string().matches(/^[A-Z][a-zA-Z0-9]{6,}$/).required("Must incloud number , capital letter , small letter and shoud be more than 6 digits") ,
      rePassword: Yup.string().oneOf([Yup.ref("password")]).required("Repassword not match password"),
  });
  
  return schema
}
  let register=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
    },
    validationSchema  
    ,
    onSubmit:(values)=>{
      // sendUserInfo(JSON.stringify(values))
      sendUserInfo(values)
    }
  })

  return (
    <>
<div className="hero pt-20 ">
  <div className="hero-content flex-col w-[80%] ">
    <img src={logo} alt="" className='w-40' />
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-[#4c4b4d]">Register now <span className='fontColor'>:</span></h1>
    </div>
    <div className="card  md:w-[50%]   shadow-2xl bg-white">
      <form className="card-body     rounded-2xl " onSubmit={register.handleSubmit}>
      <div className="form-control">
          <label className="label  ">
            <span className="label-text ">Name</span>
          </label>
          <input onBlur={register.handleBlur} onChange={register.handleChange}  name="name" type="text" placeholder="name" className="input input-bordered rounded-2xl bg-white grayColor"  />
          {register.errors.name  && register.touched.name ? <div role="alert" className="alert alert-warning mainColor text-white mt-2 rounded-2xl">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>{register.errors.name}</span>
          </div> : ""}
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text ">Email</span>
          </label>
          <input onBlur={register.handleBlur} onChange={register.handleChange}  name="email" type="email" placeholder="email" className="input input-bordered rounded-2xl bg-white grayColor"  />
          {register.errors.email  && register.touched.email ? <div role="alert" className="alert alert-warning mainColor text-white mt-2 rounded-2xl">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>{register.errors.email}</span>
          </div> :""}
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text">Password</span>
          </label>
          <input onBlur={register.handleBlur} onChange={register.handleChange}  name="password" type="password" placeholder="password" className="input input-bordered rounded-2xl bg-white grayColor"  />
          
          { register.errors.password  && register.touched.password ?  <div role="alert" className="alert alert-warning mainColor text-white mt-2 rounded-2xl">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>{register.errors.password}</span>
          </div> : ""
         }
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text">Repassword</span>
          </label>
          <input onBlur={register.handleBlur} onChange={register.handleChange}  name="rePassword" type="password" placeholder="rePassword" className="input input-bordered rounded-2xl bg-white grayColor"  />

         { register.errors.rePassword  && register.touched.rePassword ?  <div role="alert" className="alert alert-warning mainColor text-white mt-2 rounded-2xl">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>{register.errors.rePassword}</span>
          </div> : ""
         }
        
        </div>
        <div className="form-control mt-4">
          <button disabled={!(register.isValid && register.dirty)} type="submit" className="btn btn-ghost mainColor text-white rounded-2xl">Register</button>
         {erroMessage?  <div role="alert" className="alert alert-error bg-red-500 mt-2 rounded-full w-72 py-2  mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 md:ml-7 text-white " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className='text-white text-sm ml-[-10px]'>{erroMessage}</span>
          </div> : ""}
        </div>
      </form>
      <p className='text-center mb-5'>alreay have account <Link to="/signinUser"> <span className='underline pointer fontColor font-semibold'>Signin</span> </Link>  </p>
    </div>
  </div>
</div>

    </>
  )
}
