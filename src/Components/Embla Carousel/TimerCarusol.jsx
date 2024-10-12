import React from 'react'
import { useState } from 'react'
export default function TimerCarusol() {
    const [days, setdays] = useState("")
    const [hours, sethours] = useState("")
    const [mins, setmins] = useState("")
    const [second, setsecound] = useState("")
    setInterval(() => {
        let countDown= new Date("Jul 1 , 2025 23:59:59 ").getTime();
        let difDays = countDown - new Date();
        let days = Math.floor( difDays / 1000 / 60 / 60 / 24 ) 
        setdays(days)
        let hours = Math.floor(  difDays %  (1000 * 60 * 60 * 24 )/ 1000/60 /60)  ;
        sethours(hours)
        let mins = Math.floor (difDays %  (1000 * 60 * 60 ) / 1000/60 ) ;
        setmins(mins)
        let seconds = Math.floor ( difDays %  (1000 * 60 ) / 1000 );
        setsecound(seconds)
       },1000);
       


  return (
    <>
    <div className="flex  justify-between mx-5 mt-2">
  <div className="flex flex-col ite md:text-xl text-[10px]  ">
    <span className=" font-mono md:text-xl text-sm fontColor    font-semibold">
      <span >{days}</span>
    </span>
    days
  </div> 
  <div className="flex flex-col ite md:text-xl text-[10px] ">
    <span className=" font-mono md:text-xl text-sm font-semibold">
      <span >{hours}</span>
    </span>
    hours
  </div> 
  <div className="flex flex-col ite md:text-xl text-[10px] ">
    <span className=" font-mono md:text-xl text-sm font-semibold">
      <span >{mins}</span>
    </span>
    min
  </div> 
  <div className="flex flex-col ite md:text-xl text-[10px] ">
    <span className=" font-mono md:text-xl text-sm  font-semibold">
      <span >{second}</span>
    </span>
    sec
  </div>
  
            </div>
    </>
  )
}
