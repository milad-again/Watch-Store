import React, { useContext, useState } from "react";
import Header from "../Home/Header/Header";
import MobileHeader from "../Home/Header/MobileHeader";
import Footer from "../Home/Footer/Footer";
import { FiShoppingBag } from "react-icons/fi";
import { RiEBike2Line } from "react-icons/ri";
import { IoMdWallet } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import productsContext from "../contexts/productContext";

export default function Shopingcard() {


const [count , setcount] = useState(0)

const minesCount = ()=> {
 
  setcount(prevCount => {
    return count - 1
  })
}
  const plusCount = ()=> {
  setcount(prevCount => {
    return count + 1
  })
}

const contextData = useContext(productsContext)



  return (
    <>
    <Header/>
    <MobileHeader/>
      <div className="hidden md:flex items-center justify-center gap-4 tracking-tighter text-gray-700 mb-8 mt-32 dark:text-gray-200">
        <div className="flex items-center gap-2 border-2 border-dashed p-2 rounded-xl">
          <div className="flex items-center justify-center rounded-lg w-7 h-7 bg-gray-200">
            <FiShoppingBag className="text-green-500" />
          </div>
          <span>سبد خرید</span>
        </div>
        <div className="h-px w-20 bg-gray-600"></div>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-lg w-7 h-7 bg-gray-200">
            <RiEBike2Line className="text-green-500" />
          </div>
          <span>اطلاعات ارسال</span>
        </div>
        <div className="h-px w-20 bg-gray-600"></div>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-lg w-7 h-7 bg-gray-200">
            <IoMdWallet className="text-green-500" />
          </div>
          <span>اطلاعات پرداخت</span>
        </div>
      </div>
      <div className="hidden md:flex gap-5 px-2">
        <div className="w-[70%] h-[45%] border border-zinc-400 rounded-xl">
          <div className="w-[98%] m-2 h-10 bg-gray-100 dark:bg-zinc-700">
            <div className="flex justify-between p-2 text-gray-600 dark:text-gray-300">
              <span>سبد خرید شما</span>
              <div>
                <ul className="flex gap-16">
                  <li>قیمت واحد</li>
                  <li>تعداد</li>
                  <li>قیمت نهایی</li>
                  <li>حذف</li>
                </ul>
              </div>
            </div>
          </div>

       {
        contextData?.userCart.map((product) => (
          <div className="flex gap-52 text-gray-600 dark:text-gray-200">
          <div className="flex items-center leading-8">
            <img className="w-40" src={product.image} alt=''/>
            <div className="flex flex-col text-gray-700 dark:text-gray-200">
              <span className="text-xl pb-3"></span>
              <span>کد کالا :</span>
              <span>گارانتی: یک سال</span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div>
              <div className="flex gap-2">
                <span className="line-through"> تومان</span>
                <div className="flex items-center justify-center text-white text-sm w-7 h-6 bg-rose-500 rounded-xl">
                  %
                </div>
              </div>
              <span> تومان</span>
            </div>
            <div className="w-20 h-8 rounded-2xl border border-gray-400">
              <div className="flex items-center justify-around text-sm p-1">
                <span>+</span>
                <span></span>
                <span>-</span>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-xl w-7 h-7 bg-gray-200 hover:bg-gray-400">
              <a href="">
                <FaTrash className="dark:text-neutral-700" />
              </a>
            </div>
          </div>
        </div>
        
        ))
       }
         
  

        </div>
        <div className="w-[25%] h-[330px] bg-gray-100 rounded-lg dark:bg-zinc-700">
          <div className="text-gray-500 tracking-tighter mt-5 dark:text-gray-200">
            <div className="flex justify-between p-2">
              <span>مبلغ کل سفارش:</span>
              <span>1,110,000 تومان</span>
            </div>
            <div className="flex justify-between p-2">
              <span>هزینه ارسال:</span>
              <span className="text-green-500">
                رایگان (بدون محدودیت مبلغ سفارش)
              </span>
            </div>
            <div className="flex justify-between p-2">
              <span>سود شما از این خرید:</span>
              <span>65,000 تومان</span>
            </div>
            <div className="h-px w-[95%] mx-auto bg-gray-400 mt-5"></div>
            <div className="flex justify-between p-2 mt-5">
              <span>مبلغ کل سفارش:</span>
              <span className="text-rose-500">1,045,000 تومان</span>
            </div>
            <a href="/loginform">
              <div className="flex items-center justify-center gap-2 w-[95%] h-14 rounded-2xl mx-auto mt-4 bg-green-700 hover:bg-green-900">
                <FiShoppingBag className="text-white" />
                <span className="text-white">ادامه فرایند خرید</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 w-[700px] hidden md:inline-block m-5 p-2 rounded-md dark:bg-zinc-700">
        <p className="text-gray-600 tracking-tighter dark:text-gray-200">
          افزودن کالا به سبد خرید به معنی رزرو آن نیست با توجه به محدودیت موجودی
          سبد خود را ثبت و خرید را تکمیل کنید.
        </p>
      </div>
      <Footer/>
    </>
  );
}
