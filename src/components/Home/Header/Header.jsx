import React, { useContext, useState, useEffect, useRef } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import productsContext from "../../contexts/productContext";
import { PiSmileySad } from "react-icons/pi";
import { AuthContext } from "../../contexts/authContext";
import { auth } from "../../../firebaseConfig";
export default function Header() {
  const contextData = useContext(productsContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const totalPrice =
    contextData &&
    contextData.userCart &&
    contextData.userCart.reduce((acc, product) => {
      const price = parseFloat(
        product.DiscountPrice.toString().replace(/,/g, "")
      );
      return acc + price * product.count;
    }, 0);
  const { user } = useContext(AuthContext); // دریافت وضعیت کاربر از AuthContext
  return (
    <>
      {/* <img className="w-screen" src="/bg.png" alt="" /> */}
      <div className="fixed md:flex hidden items-center justify-between px-10 top-0 right-0 left-0 w-[90%] h-[90px] z-50 bg-gray-700/50 backdrop-blur-[6px] mx-auto rounded-3xl mt-3 ">
        {/* Left Section */}
        <div>
          <ul className="flex items-center md:gap-4 md:text-lg lg:text-xl lg:gap-8 text-gray-100 tracking-tighter text-xl">
            <Link to="/">
              <li className="text-gray-100 hover:text-orange-300">صفحه اصلی</li>
            </Link>
            <li className="relative group">
              <Link
                to=""
                className="group-hover:text-orange-300 transition-colors"
              >
                فروشگاه
              </Link>
              <div className="absolute w-48 opacity-0 invisible leading-9 group-hover:opacity-100 group-hover:visible bg-white text-zinc-600 p-7 mt-2 rounded-lg transition-all delay-75 dark:bg-zinc-700 dark:text-white ">
                <ul className="">
                  <li className=" hover:bg-gray-200 rounded-xl pr-2 w-full transition-all hover:scale-110 hover:text-orange-400">
                    <Link to="">کاسیو</Link>
                  </li>
                  <li className=" hover:bg-gray-200 rounded-xl pr-2 w-full transition-all hover:scale-110 hover:text-orange-400">
                    <Link to="">رولکس</Link>
                  </li>
                  <li className=" hover:bg-gray-200 rounded-xl pr-2 w-full transition-all hover:scale-110 hover:text-orange-400">
                    <Link to="">امگا</Link>
                  </li>
                  <li className=" hover:bg-gray-200 rounded-xl pr-2 w-full transition-all hover:scale-110 hover:text-orange-400">
                    <Link to="">سیکو</Link>
                  </li>
                  <li className=" hover:bg-gray-200 rounded-xl pr-2 w-full transition-all hover:scale-110 hover:text-orange-400">
                    <Link to="">سیتیزن</Link>
                  </li>
                  <li className=" text-rose-500 hover:bg-gray-200 rounded-xl pr-2 w-full transition-all hover:scale-110 hover:text-rose-600">
                    <Link to="/ProductsInfo">مشاهده همه</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hover:text-orange-300 cursor-pointer">دیکشنری</li>
            <li className="hover:text-orange-300 cursor-pointer">درباره ما</li>
            <li className="hover:text-orange-300"><a href="#footer">تماس با ما</a></li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="flex items-center justify-between gap-10">
          <div className="">
            <ul className="flex gap-4 text-gray-100">
              <li className="relative group">
                <div className="relative">
                  <HiOutlineShoppingCart className="size-8 cursor-pointer" />
                  {contextData?.userCart?.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {contextData.userCart.length}
                    </span>
                  )}
                </div>

                <div className="absolute w-[400px] left-0 opacity-0 invisible leading-9 group-hover:opacity-100 group-hover:visible bg-gray-100 text-zinc-600 p-3 mt-2 rounded-lg transition-all delay-75 dark:bg-zinc-700">
                  {/* Basket */}
                  <div>
                    <div className="flex items-center justify-between ">
                      <span className="dark:text-gray-300">محصولات</span>
                      <div className="flex items-center text-orange-300">
                        <Link to="/shopingcard">مشاهده سبد خرید</Link>
                        <IoIosArrowBack />
                      </div>
                    </div>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto">
                    {contextData?.userCart?.length > 0 ? (
                      contextData.userCart.map((product) => (
                        <div key={product.id}>
                          <div className="block w-full h-px bg-gray-300/50"></div>
                          <div className="flex items-center pt-9 pb-6 dark:text-gray-300">
                            <img
                              className="w-[150px] h-[150px]"
                              src={product.image}
                              alt=""
                            />
                            <div className="pr-3">
                              <h4>{product.inpormation}</h4>
                              <div className="flex flex-col pt-6">
                                <span className="line-through text-red-500 text-sm">
                                  {product.price}
                                </span>
                                <span className="text-green-600">
                                  {product.DiscountPrice}
                                </span>
                                <div className="border border-spacing-1 w-20 pr-2 rounded-lg p-1">
                                  تعداد : {product.count}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center text-center text-gray-500 py-6 text-lg dark:text-gray-300">
                        سبد خرید شما خالی است
                        <PiSmileySad className="size-10" />
                      </div>
                    )}
                  </div>
                  <div className="flex gap-4 tracking-tighter bottom-0 pt-3">
                    <Link to="/LoginForm">
                      <button className="w-24 h-12 bg-green-700 hover:bg-green-600 text-white rounded-xl">
                        ثبت سفارش
                      </button>
                    </Link>
                    <div className="flex flex-col dark:text-gray-300">
                      <span className="text-xs">مبلغ قابل پرداخت</span>
                      <span className="text-lg">
                        {totalPrice?.toLocaleString()} تومان
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="cursor-pointer theme">
                  <IoMoonOutline
                    onClick={toggleTheme}
                    className="size-8 inline-block dark:hidden w-8 h-8 "
                  />
                  <IoSunnyOutline
                    onClick={toggleTheme}
                    className="size-8 hidden dark:inline-block  w-8 h-8"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <span className="block w-px h-14 bg-white/30"></span>
          </div>
          <div className="flex text-gray-100 text-xl">
            {user ? (
              <div className="flex items-center gap-2">
                <span>سلام، {user.displayName || user.email.slice(0, 5)}</span>
                <button
                  onClick={() => {
                    auth.signOut(); // خروج از سیستم
                  }}
                  className="flex text-gray-100 text-xl"
                >
                  <HiArrowLeftEndOnRectangle className="size-8 cursor-pointer" />
                  <span>خروج</span>
                </button>
              </div>
            ) : (
              <Link to="/LoginForm">
                <div className="flex text-gray-100 text-xl">
                  <HiArrowLeftEndOnRectangle className="size-8 cursor-pointer" />
                  <span>ورود | ثبت نام</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
