import React, { useState, useContext, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlinePhoneArrowUpRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import productsContext from "../../contexts/productContext";
import { PiSmileySad } from "react-icons/pi";

export default function MobileHeader() {
  const [openMenu, setopenMenu] = useState(false);
  const [openMenu2, setopenMenu2] = useState(false);

  const contextData = useContext(productsContext);

  const totalPrice =
    contextData &&
    contextData.userCart &&
    contextData.userCart.reduce((acc, product) => {
      const price = parseFloat(
        product.DiscountPrice.toString().replace(/,/g, "")
      );
      return acc + price * product.count;
    }, 0);

  const openMenuHandler = () => {
    setopenMenu(!openMenu);
  };

  const closeMenuHandler = () => {
    setopenMenu(!openMenu);
  };

  const openMenuHandler2 = () => {
    setopenMenu2(!openMenu2);
  };
  const closeMenuHandler2 = () => {
    setopenMenu2(!openMenu2);
  };

  const Menus = ["کاسیو", "رولکس", "امگا", "سیکو", "سیتیزن", "مشاهده همه"];
  const [open, setopen] = useState(false);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <div className="w-full h-14 md:hidden bg-gray-300 fixed top-0 text-neutral-800 dark:bg-neutral-700 dark:text-gray-300 z-50">
        <div className="flex items-center justify-between p-3 text-2xl">
          <HiBars3 className="cursor-pointer" onClick={openMenuHandler} />
          <span>فروشگاه ساعت</span>
          <div className="relative">
            <HiOutlineShoppingCart
              className="cursor-pointer"
              onClick={openMenuHandler2}
            />
            {contextData?.userCart?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {contextData.userCart.length}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        {openMenu && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-opacity duration-300"
            onClick={closeMenuHandler}
          ></div>
        )}

        <div
          className={`w-1/2 h-[100%] z-50 fixed md:hidden bg-gray-100 top-0 right-0 dark:bg-zinc-700
    transition-transform duration-300 ${
      openMenu ? "translate-x-0" : "translate-x-full"
    }`}
        >
          <div className="flex items-center justify-between p-2 text-xl tracking-tighter dark:text-gray-300">
            <span>فروشگاه ساعت</span>
            <HiXMark
              onClick={closeMenuHandler}
              className="nav-closebtn cursor-pointer"
            />
          </div>

          <div className="w-[95%] mx-auto h-px bg-gray-400"></div>

          <div>
            <ul className="leading-10 text-zinc-700 p-3 text-xl tracking-tighter dark:text-gray-300">
              <Link to="/">
                <li className="flex items-center gap-2 bg-gray-300 p-1 rounded-lg hover:text-orange-400 dark:text-gray-700 dark:bg-zinc-400">
                  <IoHomeOutline />
                  صفحه اصلی
                </li>
              </Link>
              <span className="flex items-center justify-between">
                <li
                  onClick={() => setopen(!open)}
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <HiOutlineShoppingCart />
                  فروشگاه
                </li>
                <IoIosArrowDown
                  onClick={() => setopen(!open)}
                  className={`submenu-open-btn transition-transform duration-300 ease-in-out cursor-pointer ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </span>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  open ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="bg-gray-300 dark:bg-zinc-500 p-3 text-lg rounded-md">
                  <ul className="flex flex-col">
                    {Menus.map((menu) => (
                      <Link to="/ProductsInfo" key={menu}>
                        <li className="hover:bg-gray-400 rounded-lg p-1 hover:scale-110 hover:transition-all cursor-pointer">
                          {menu}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
              <Link to="">
                <li className="flex items-center gap-2">
                  <IoChatboxEllipsesOutline />
                  دیکشنری
                </li>
              </Link>
              <Link to="">
                <li className="flex items-center gap-2">
                  <HiOutlineBriefcase />
                  درباره ما
                </li>
              </Link>
              <Link to="">
                <li className="flex items-center gap-2">
                  <IoDocumentTextOutline />
                  بلاگ
                </li>
              </Link>
              <Link to="">
                <li className="flex items-center gap-2">
                  <HiOutlinePhoneArrowUpRight />
                  تماس با ما
                </li>
              </Link>
            </ul>
          </div>

          <div className="w-[95%] mx-auto h-px bg-gray-400"></div>

          <div className="flex flex-col gap-3 pr-3 text-orange-400 dark:text-orange-400">
            <div className="pt-6">
              <div className="flex items-center text-xl">
                <HiArrowLeftEndOnRectangle className="size-6" />
                <Link to="/LoginForm">
                  <button className="">ورود | ثبت نام</button>
                </Link>
              </div>
            </div>
            <div>
              <div className="flex items-center text-xl">
                <HiOutlineShoppingCart className="size-6" />
                <Link href="/shopingcard">
                  <button className="">سبد خرید</button>
                </Link>
              </div>
            </div>
            <div>
              <div className="flex items-center text-lg">
                <IoMoonOutline
                  onClick={toggleTheme}
                  className=" size-6 inline-block dark:hidden "
                />
                <IoSunnyOutline
                  onClick={toggleTheme}
                  className="size-6 hidden dark:inline-block"
                />
                <button
                  onClick={toggleTheme}
                  className="inline-block dark:hidden"
                >
                  تم تیره
                </button>
                <button
                  onClick={toggleTheme}
                  className="hidden dark:inline-block"
                >
                  تم روشن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {openMenu2 && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-opacity duration-300"
            onClick={closeMenuHandler2}
          ></div>
        )}

        <div
          className={`w-1/2 h-[100%] z-50 fixed md:hidden bg-gray-100 top-0 left-0 dark:bg-zinc-700
      transition-transform duration-300 ${
        openMenu2 ? "translate-x-0" : "-translate-x-full"
      }`}
        >
          <div>
            <div className="flex items-center justify-between p-2 text-xl tracking-tighter pb-5 dark:text-gray-300">
              <HiXMark className="cursor-pointer" onClick={closeMenuHandler2} />
              <span>سبد خرید</span>
            </div>
            <div className="w-[95%] mx-auto h-px bg-gray-400"></div>
            <div className="max-h-[740px] overflow-y-auto px-3 overflow-hidden">
              {contextData?.userCart?.length > 0 ? (
                contextData.userCart.map((product, index) => (
                  <div
                    key={product.id}
                    className="flex flex-col items-center gap-4 pt-6 text-zinc-800 dark:text-gray-200 w-full animate-fadeIn"
                  >
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src={product.image}
                      alt={product.information}
                    />
                    <div className="flex flex-col items-center text-center mx-auto space-y-1 tracking-tight px-3">
                      <span className="text-base font-medium whitespace-normal break-words">
                        {product.inpormation}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full">
                      <span className="text-red-500 line-through text-sm">
                        {product.price}
                      </span>
                      <span className="text-green-500 dark:text-green-400 text-lg">
                        {product.DiscountPrice}
                      </span>
                    </div>
                    <div className="border border-spacing-1 w-16 pr-2 rounded-lg p-1 text-sm">
                      تعداد: {product.count}
                    </div>
                    <div className="w-full border-t border-gray-300 mt-4"></div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center text-center text-gray-500 py-6 text-lg dark:text-gray-300">
                  سبد خرید شما خالی است
                  <PiSmileySad className="size-10 mt-2" />
                </div>
              )}
            </div>
          </div>
          <div className="flex absolute bg-zinc-800 w-[100%] bottom-0 flex-col gap-1 tracking-tighter pr-1">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className="flex flex-col text-center dark:text-gray-300">
              <span className="text-xs">مبلغ قابل پرداخت</span>
              <span className="text-lg">
                {totalPrice?.toLocaleString()} تومان
              </span>
            </div>
            <Link to="/LoginForm">
              <button className="w-[100%] h-12 bg-green-700 hover:bg-green-600 text-white rounded-xl">
                ثبت سفارش
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <script src="/scripts"></script> */}
    </>
  );
}
