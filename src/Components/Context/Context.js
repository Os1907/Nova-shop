import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";



export let conText = createContext(0)

let basicApi="https://ecommerce.routemisr.com/api/v1/"


  function Removefromwish (productId){
    return axios.delete(basicApi+"wishlist" + "/"+ productId ,{
        headers:{
          token:localStorage.getItem('token'),
        }
    })
     .then((data) => {
        return data;
    }).catch((err) => {
        console.log (err.message);
    });
}

// function getCategoriesNames(){
//   return axios.get(basicApi+"Categories")
// }


function getCategoriesNames(section){
  return axios.get(basicApi+ section).then((data) => {
    return data
  })
.catch((err) => {
    console.log(err);
    console.log ("Error From Backend");
});

}



function AddToWishList (productId){
  return axios.post(basicApi +"wishlist" , {productId} , {
      headers: {
          token : localStorage.getItem('token')
      }
  } ).then((data) => {
      toast.success("Product added successfully to your wishlist")
      return data

  }).catch((err) => {
      console.log(err);
  });
}



 function wishLists(){
  return  axios.get(basicApi+"wishlist",{
      headers:{
        token:localStorage.getItem('token'),
      }
  }).then((data) => {
    return data

}).catch((err) => {
    console.log(err);
});
}








export default function ConTextProvider({children}){

const [basicApi , setbasicApi]=useState("https://ecommerce.routemisr.com/api/v1/")
const  [wishNum, setwishNum] = useState(null)



const [tokenUser, settokenUser] = useState()


return <conText.Provider value={{
  wishLists , 
  wishNum,
   setwishNum 
  , basicApi ,
   setbasicApi ,
   Removefromwish 
 , AddToWishList ,
 basicApi,
 getCategoriesNames, 
 tokenUser,
settokenUser
 }}>
            {children}
        </conText.Provider>

}