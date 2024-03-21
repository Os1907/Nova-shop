import Register from "./Components/Register/Register";
import SigninUser from "./Components/Login/SigninUser";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import { RouterProvider , createBrowserRouter, createHashRouter } from "react-router-dom"
import NotFound from "./Components/NotFound/NotFound";
import Categories from "./Components/Categories/Categories";
import Wishlist from "./Components/wishlist/Wishlist";
import ConTextProvider from "./Components/Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import ProductPage from "./Components/Home/ProductCard/ProductPage/ProductPage";
import CreatContextProduct from "./Components/Context/ProductContext";
import ProductDetails from "./Components/Home/ProductDetails";
import GetProductDetails from "./Components/Context/GetProduct";
import Brands from "./Components/Brands/Brands";
import Cart from "./Components/Cart/Cart";
import CheckOutWay from "./Components/Cart/CheckOut/CheckOutWay";
import CashCheck from "./Components/Cart/CheckOut/Cash/CashCheck";
import CreditCheck from "./Components/Cart/CheckOut/Credit/CreditCheck";
import Order from "./Components/Cart/CheckOut/Cash/Order/Order";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";

const routes = createHashRouter([
  {path: '/', element : <Layout/> , children: [
    {index : true , element: <Home/>},
    {path: 'home', element: <Home/>},
    {path: 'register', element: <Register/>},
    {path: 'categories', element: <Categories/>},
    {path: 'signinUser', element: <SigninUser/>},
    {path: 'wishlist', element:  <ProtectedRoutes> <Wishlist/> </ProtectedRoutes>},
    {path: 'home', element: <Home/>},
    {path: 'brands', element: <Brands/>},
    {path: 'cart', element:   <ProtectedRoutes> <Cart/> </ProtectedRoutes>  },
    {path: 'checkoutway', element:  <ProtectedRoutes> <CheckOutWay/>  </ProtectedRoutes>    },
    {path: 'cashcheck/:id', element:   <ProtectedRoutes><CashCheck/>   </ProtectedRoutes>   },
    {path: 'creditcheck/:id', element:   <ProtectedRoutes><CreditCheck/>   </ProtectedRoutes> },
    {path: 'allorders', element:   <ProtectedRoutes> <Order/>  </ProtectedRoutes>}, 
    {path: 'products', element: <ProductPage/>},
    {path: 'ProductPage/:id', element: <ProductPage/>},
    {path: 'ProductDetails/:id', element: <ProductDetails/>},
    
    {path: '*', element: <NotFound/> },

  ]
}])
function App() {
  return (
    <>
            <ToastContainer theme="light"/>
        <ConTextProvider>
          <CreatContextProduct>
            <GetProductDetails>
            <RouterProvider router={routes} />
            </GetProductDetails>
          </CreatContextProduct>
        </ConTextProvider>  
    </>
  );
}

export default App;
