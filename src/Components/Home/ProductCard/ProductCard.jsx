import React from 'react'
export default function ProductCard(props) {



  return (
    <>
  
                 <p href="#" className=" inline-block my-2 mx-2  px-5 py-1  mainColor rounded-xl  text-[14px] font-medium text-center text-white  border-0  btn-primary">
               {props.product.name} 
                </p>

    </>
  )
}
