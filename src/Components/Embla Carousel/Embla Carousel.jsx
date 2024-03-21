import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import TimerCarusol from './TimerCarusol';
import { Link } from 'react-router-dom';


export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, 
        [Autoplay(
            { delay: 3000 },
            {stopOnFocusIn: true}
        )]
        )


  return (
    <div className="embla  " ref={emblaRef}>
      <div className="embla__container ">


        <div className="embla__slide relative grid md:grid-cols-12  rounded-3xl bg-white      mx-auto      "> 
        <div className=' lg:p-10 col-span-6  flex justify-center md:items-end  items-center flex-col row-start-2 md:row-start-1  '>
            <div className=' text-center p-5 rounded-xl  mx-auto    '>
               <Link to={"/ProductDetails/" + "6408de536406cd15828e8f10" }> 

               <h1 className='lg:text-6xl m-0 text-4xl md:text-[40px]  font-extrabold uppercase text-[#fcaf18]  '>
               Electronics
            </h1>
            <p  className='xl:text-sm text-[12px]  font-medium text-[#4c4b4d]  '>
            WH-CH510 Wireless On-Ear Bluetooth Headphones Black
            </p> 
            <div className='w-[100%]'>
                 <div href="#" className="inline-flex  pointer justify-between my-2 items-center text-sm text-[#4c4b4d]   bg-gray-100 rounded-full " role="alert">
            <span className="md:text-xs text-[10px] bg-primary-600 rounded-full text-[#fcaf18] px-4 py-1.5 md:mr-3 font-bold">New</span> <span className="xl:text-sm font-semibold text-[10px]">Came to you! See what's new</span> 
            <MdOutlineKeyboardDoubleArrowRight className="ml-2 w-5 h-5 text-gray-700 me-2"/>
        </div>
            </div>
            </Link>
            </div>
            
            
        </div>

        <div className='col-span-6  flex xl:justify-start justify-center relative row-start-1 md:row-start-1 '>
        <img className='  md:w-[70%] w-[55%] relative rounded-3xl md:ml-10 p-5  ' src="https://ecommerce.routemisr.com/Route-Academy-products/1678302803089-cover.jpeg" alt="" />
        <div className='absolute top-12 right-44 md:right-48 blink-1'>
            <p className='py-3 px-2 mainColor rounded-full text-white font-semibold text-[12px] '>NEW</p>
        </div>
        </div>

        </div>


        <div className="embla__slide relative grid md:grid-cols-12  rounded-3xl bg-white     mx-auto     "> 
        <div className='  lg:p-10 col-span-6  flex justify-center md:items-end  items-center flex-col row-start-2 md:row-start-1  '>
            <div className=' text-center p-5 rounded-xl  mx-auto  '>
               <Link to={"/ProductDetails/" + "6408d8bc6406cd15828e8f00" }> 

               <h1 className='lg:text-6xl m-0  md:text-[40px] text-4xl  font-extrabold uppercase text-[#fcaf18]  '>
               New Offer 
            </h1>
            <p  className='xl:text-3xl md:text-2xl text-sm font-medium text-[#4c4b4d]  '>
                limited time 
            </p> 
            <div className='w-[100%]'>
                 <div href="#" className="inline-flex  pointer justify-between my-2 items-center text-sm text-[#4c4b4d] bg-gray-100 rounded-full " role="alert">
            <span className="md:text-xs text-[10px] bg-primary-600 rounded-full text-red-600 px-4 py-1.5 md:mr-3 font-bold">Sale</span> <span className="xl:text-sm font-semibold text-[10px]">Take a chance ! now</span> 
            <MdOutlineKeyboardDoubleArrowRight className="ml-2 w-5 h-5 text-gray-700 me-2"/>
        </div>
            </div>
           
           
        <TimerCarusol/>
        </Link>
            </div>
            
            
        </div>
        <div className='col-span-6  flex xl:justify-start justify-center relative  row-start-1 md:row-start-1'>

        <img className='md:w-[70%] w-[55%] relative rounded-3xl md:ml-10 p-5 ' src="https://ecommerce.routemisr.com/Route-Academy-products/1678301723274-cover.jpeg" alt="" />
        <div className='absolute top-5 md:top-10 right-44 md:right-52 blink-1 mt-5 '>
            <p className='py-3 px-2 bg-red-600 rounded-full text-white font-semibold text-[12px] '>Sale</p>
        </div>

        </div>
        </div>




    
      </div>
    </div>
  )
}
