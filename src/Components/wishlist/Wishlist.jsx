import wish from '../../Assets/Online wishes list-amico.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { useContext, useEffect, useState } from 'react'
import { conText } from '../Context/Context'
import WishlistCard from './WhislistCard/WishlistCard'

export default function Wishlist() {
let {wishNum  , wishLists } = useContext(conText)

const [WishlistData, setWishlistData] = useState(null)


useEffect(()=>{
  (async ()=>{
      let userCart =await wishLists()
      setWishlistData(userCart?.data)
  })()

},[wishNum])










  if (wishNum == 0 ) return (
    
    <>
<section className=' pt-32 pb-24 xl:pt-20  xl:pb-10 xl:h-[auto]  flex justify-center items-center flex-col'>
    <h2 className=' fontColor  mt-3   text-center  text-6xl font-bold uppercase'>Your Wishlist is empty </h2>  
            <img src={wish} alt="" className='w-[50%] md:w-[30%]  xl:w-[25%]   '/>
        <p className=' bg-[#fcaf18]  text-white hover:bg-white hover:border-[#fcaf18] hover:border-2 hover:text-[#323232] rounded-3xl my- btn btn-ghost border-0  px-3 py-0'> 
        <Link to="/home">
        Back to Home page 
        </Link> 
        </p>



        </section>
    </>
  )
  if (wishNum > 0 ) 
  return <>
  <div className='pt-20'>

 
                <h2 className='md:text-6xl text-xl fontColor text-center font-bold my-10 uppercase'>Your Wishlist</h2>

    <div className='lg:mx-20 mx-4 grid grid-cols-12 gap-y-8 gap-x-8 mb-10'>
{
  WishlistData?.data.map((dataSend) => <WishlistCard data={dataSend} key={dataSend.id}/> )
}
          </div>
            </div>
  </>
}
