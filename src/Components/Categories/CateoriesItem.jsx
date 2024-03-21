import React, { useContext, useEffect, useState } from 'react'
import { conText } from '../Context/Context'

export default function CateoriesItem() {

  let {  getCategoriesNames} =useContext(conText)
let section = "Categories"
const [catoData, setcatoData] = useState(null)
useEffect(()=>{
    (async()=>{
     let data = await getCategoriesNames(section)
     setcatoData(data)
    })()
},[])

  // console.log(catoData.data)


  return (
    
    <>
    <div className={catoData? 'hidden' : ' col-span-12 flex justify-center flex-col items-center '}>
    <div className={' mySpinner  md:text-6xl  text-center relative    my-44'} >
      </div> 
    </div>

    {
        catoData?.data.data.map((item)=>{
            return <div key={item._id} className="col-span-3 bg-white  relative max-w-full   rounded-xl my-5 flex items-center  justify-center flex-col mx-20 md:mx-0 ">
                <img src={item.image} alt="Categore_Image" className=' md:w-28 md:h-28 h-24 w-24 rounded-full my-5' />
                <h2 className='text-base fontColor font-bold mb-4  text-center'>{item.name} </h2>
            </div>
        })
    }
                
    </>
  )
}
