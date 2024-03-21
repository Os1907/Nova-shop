import axios from 'axios';
import OneCard from './OneCard/OneCard';
import { useQuery } from 'react-query';

export default function HomeCards() {
  

    function products() {
      return  axios.get('https://ecommerce.routemisr.com/api/v1/products')
      .then((data) => {
        return data
      })
    .catch((err) => {
        console.log(err);
    });
    }
    let {data , isLoading} =useQuery("products" , products) 
  return (
<>
<section className='pb-14 pt-5 relative'>
 <div className={isLoading ? ' mySpinner  md:text-6xl  text-center relative left-[50%]   my-44' : ''} ></div>


    <div className='lg:mx-20 mx-4 grid grid-cols-12 gap-8 '>

    {
        data?.data.data.slice(1,17).map((product)=>{
            return <OneCard send={product} key={product._id + 20}  />
        })
    }
    </div>
</section>
</>

)
}
