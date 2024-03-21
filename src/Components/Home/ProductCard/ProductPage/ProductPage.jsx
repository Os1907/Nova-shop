import React, { useContext, useEffect, useState } from "react";
import { conTextProduct } from "../../../Context/ProductContext";
import { FaStar } from "react-icons/fa6";
import { conText } from "../../../Context/Context";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GetProduct } from "../../../Context/GetProduct";

export default function ProductPage() {
  let { getProduct } = useContext(conTextProduct);
  let { PostToCart, Counter, setCounter } = useContext(GetProduct);
  let { AddToWishList, setwishNum } = useContext(conText);
  const [data, setdata] = useState(null);
  const [pageNumber, setpageNumber] = useState(3);
  const [one, setone] = useState(true);
  const [two, settwo] = useState(false);
  const [three, setthree] = useState(false);

  async function addToWishlist(productId) {
    let data = await AddToWishList(productId);
    console.log(data?.data.data.length);
    setwishNum(data?.data.data.length);
  }

  async function addToCart(productID) {
    let Message = await PostToCart(productID);
    setCounter(Message?.data.numOfCartItems);
  }

  useEffect(() => {
    (async () => {
      let data = await getProduct(pageNumber);
      setdata(data?.data);
    })();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pageNumber]);

  return (
    <>
      <section className='pb-14 pt-20  relative'>

        <div className="lg:mx-20 mx-4 grid grid-cols-12  lg:gap-8 gap-x-2 gap-y-5  ">
          {data ? (
            ""
          ) : (
            <div className="col-span-12 flex justify-center ">
              <div
                className={
                  "  mySpinner md:text-6xl  text-center relative    my-44"
                }
              ></div>
            </div>
          )}

          {data?.data.map((item) => {
            return (
              <>
                <div
                  key={item._id}
                  className=" relative block overflow-hidden xl:col-span-3 col-span-6 md:col-span-4  hover:border-[#fcaf18] hover:border-b-2 hover:border-t-2 bg-white  shadow-sm duration-75 rounded-xl"
                >
                  <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5  ">
                    <span className="sr-only">Wishlist</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 fontColor pointer"
                      onClick={() => {
                        addToWishlist(item._id);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>

                  <Link to={"/ProductDetails/" + item._id}>
                    {item.imageCover ? (
                      <img
                        onClick={() => {}}
                        src={item?.imageCover}
                        alt=""
                        className=" lg:w-44 lg:h-52 w-36 h-44 mx-auto mt-2 rounded-2xl  "
                      />
                    ) : (
                      "   <div className='col-span-12 flex justify-center '><div className={'  mySpinner md:text-6xl  text-center relative    my-44'} >    </div>  </div> "
                    )}
                  </Link>

                  <div className="relative  p-6">
                    <Link to={"/ProductDetails/" + item._id}>
                      <p className="  px-3 py-1.5 text-xs font-medium rounded-full fontColor text-center">
                        {" "}
                        {item.brand.name}{" "}
                      </p>

                      <h3 className="mt-4 lg:text-lg text-sm md:text-base font-medium grayColor text-center">
                        {item.title.split("").slice(0, 17)}
                      </h3>
                      <div className="flex justify-between">
                        <p className="mt-1.5 text-sm grayColor font-semibold">
                          {" "}
                          {item.price} EGP
                        </p>
                        <div className="flex items-center ">
                          <p className="font-semibold grayColor">4.8</p>
                          <FaStar className="mb-1 fontColor ml-1" />
                        </div>
                      </div>
                    </Link>

                    <form className="mt-4">
                      <button
                        type="button"
                        onClick={() => {
                          addToCart(item._id);
                        }}
                        className="block w-full rounded-xl  lg:p-4 p-2 lg:text-sm font-semibold text-white mainColor transition hover:border-white  hover:border-2 text-[12px]"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
              </>
            );
          })}
        </div>







        <div role="tablist" className="tabs tabs-boxed my-5 mx-10 ">
          <button
            onClick={() => {
              setpageNumber(3);
              setone(true);
              settwo(false);
              setthree(false);
            }}
            role="tab"
            className={
              one
                ? " tab font-semibold mainColor text-white"
                : "tab font-semibold"
            }
          >
            Page 1
          </button>

          <button
            onClick={() => {
              setpageNumber(2);
              setone(false);
              settwo(true);
              setthree(false);
            }}
            role="tab"
            className={
              two
                ? "tab font-semibold mainColor text-white"
                : "tab font-semibold"
            }
          >
            Page 2
          </button>
          <button
            onClick={() => {
              setpageNumber(1);
              setone(false);
              settwo(false);
              setthree(true);
            }}
            role="tab"
            className={
              three
                ? "tab font-semibold mainColor text-white"
                : "tab font-semibold"
            }
          >
            Page 3
          </button>
        </div>
      </section>
    </>
  );
}
