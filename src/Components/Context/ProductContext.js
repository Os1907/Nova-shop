import axios from "axios";
import { createContext, useContext, useState } from "react";




export let conTextProduct = createContext()


let basicApi="https://ecommerce.routemisr.com/api/v1/"
function getProduct(pageNumb){
    return  axios.get( basicApi + "products?limit=20&page="+ pageNumb )
    .then((data)=>{
        return data
    }).catch((err)=>{
           console.log(err)
    })
    }
    getProduct()









export default function CreatContextProduct({children}){





    return   <conTextProduct.Provider value={{getProduct}}  >
                    {children}
            </conTextProduct.Provider>
}