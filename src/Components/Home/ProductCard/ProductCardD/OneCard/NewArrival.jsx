import axios from 'axios';
import { useQuery } from 'react-query';
import CardArrival from './CardArrival';
// CardArrival

export default function NewArrival() {
  

    function products() {
      return  axios.get('https://ecommerce.routemisr.com/api/v1/products?limit=12&page=3')
      .then((data) => {
        return data
      })
    .catch((err) => {
        console.log(err);
        console.log ("error ya Osama");
    });
    }
    let {data , isLoading} =useQuery("products" , products) 
  return (
<>
<section className='pb-14 pt-5 relative'>
 <div className={isLoading ? ' mySpinner  md:text-6xl  text-center relative left-[50%]   my-44' : ''} ></div>


 <div className='lg:mx-20 mx-4 grid grid-cols-12 lg:gap-8 gap-2'>


    {
        data?.data.data.slice(12,20).map((product)=>{
            return <CardArrival send={product} key={product._id + 20}  />
        })
    }
    </div>
</section>
</>

)
}
