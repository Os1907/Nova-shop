import axios from "axios";
import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export const GetProduct=createContext()







function getDataApi(productId){
    return axios.get("https://ecommerce.routemisr.com/api/v1/products/"+productId)
    .then((data) => {
      return data
    })
  .catch((err) => {
      // console.log ("Error From Backend");
  });
}


function getUserCart(){
  return axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
    headers: {
      token : localStorage.getItem('token')
  }
} ).then((data) => {
  counterTwo= data?.data.numOfCartItems
return data
}).catch((err) => {
  console.log("ERROR WITH CART INFORMATION")
  console.log(err);
});
}

let counterTwo = ""

async function PostToCart(productId){
  return axios.post("https://ecommerce.routemisr.com/api/v1/cart", {productId} , {
      headers: {
          token : localStorage.getItem('token')
      }
  } ).then((data) => {
      toast.success("Product added successfully to your Cart")
      return data
  }).catch((err) => {
      console.log("ERROR WITH ADD TO CART");
      console.log(err);
  });
}



async function deleteFromCart(productId){
  return axios.delete("https://ecommerce.routemisr.com/api/v1/cart/"+productId , {
      headers: {
          token : localStorage.getItem('token')
      }
  } ).then((data) => {
      toast.success("Product Deleted successfully from your Cart")
      return data
  }).catch((err) => {
      console.log("ERROR WITH ADD TO CART");
      console.log(err);
  });
}


async function deleteAllCart(){
  return axios.delete("https://ecommerce.routemisr.com/api/v1/cart/" , {
      headers: {
          token : localStorage.getItem('token')
      }
  } ).then((data) => {
      // toast.success("Your order has been successfully")
      return data
  }).catch((err) => {
      console.log("ERROR WITH ADD TO CART");
      console.log(err);
  });
}





async function updateCart(productId , count){
  return axios.put("https://ecommerce.routemisr.com/api/v1/cart/"+productId ,{count}, {
      headers: {
          token : localStorage.getItem('token')
      }
  } ).then((data) => {
      toast.success("Product Updated successfully")
      return data
  }).catch((err) => {
      console.log("ERROR WITH ADD TO CART");
      console.log(err);
  });
}



async function checkOut(id , value){
  return axios.post("https://ecommerce.routemisr.com/api/v1/orders/checkout-session/"+id+"?url=http://localhost:3000/cart",{value}, {
    headers: {
        token : localStorage.getItem('token')
    }
} ).then((data) => {
    toast.success("Check out Done")
    return data
}).catch((err) => {
    console.log("ERROR WITH ADD TO CART");
    console.log(err);
});
}


export default function GetProductDetails({children}){

let {data}= useQuery("getDataApi" , getDataApi)



const [Counter, setCounter] = useState(counterTwo)

  return  <GetProduct.Provider value={{checkOut , getDataApi , PostToCart , getUserCart , Counter, setCounter , deleteFromCart ,updateCart , deleteAllCart }}>
        
{children}
    </GetProduct.Provider>


}