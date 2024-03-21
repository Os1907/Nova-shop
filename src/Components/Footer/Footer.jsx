import React from 'react'
import whiteLogo from '../../Assets/Untitled-1.png'
export default function Footer() {
  return (
    <>
<footer className="footer items-center justify-center p-4 bg-[#f8fafb] my-border-top grayColor">
  <aside className="items-center grid-flow-col  ">
  <img src={whiteLogo} alt="" width={85} height={85} />
<div className='title flex flex-col '>
     <p className="font-semibold text-center block">
      NOVA . Providing reliable store since 1907
    </p> 
    <p className='text-center' >Copyright © 2024 - All right reserved</p>
</div>
 
  </aside> 
 
</footer>

    </>
  )
}
