import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import TimerCarusol from './TimerCarusol';
import { useState } from 'react';

export default function ProductCrousel(images) {


 
const [image, setimage] = useState([]) 
const [emblaRef] = useEmblaCarousel({ loop: false }, 
        [Autoplay(
            { delay: 5000 },
            {stopOnFocusIn: true}
        )]
        )   


useEffect(()=>{
    setimage(images?.img)
})
// console.log(images.imageCover)

  return (
    <>
<div className="embla " ref={emblaRef}>
      <div className="embla__container">

      { image? "" :
        <div className='flex justify-center w-full'>
            <div className={'  mySpinner md:text-6xl  text-center relative w-[50% ]   my-44'} >
            </div>
        </div>
            }
              <div className='embla__slide' > 
             <img src={images?.imageCover} alt="" className='w-full' />
            
             </div>

        {
            image?.map((imageUrl)=>{
             return   <div key={imageUrl+250+"Id"} className='embla__slide' > 
                    <img src={imageUrl} alt="" className='w-full' />
                </div>
            })
        }

      </div>
    </div>

    </>
  )
}
