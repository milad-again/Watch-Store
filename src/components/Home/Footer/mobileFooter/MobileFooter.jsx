import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MobileFooter() {
  const [active, setActive] = useState(null);

  const handleClick = (button) => {
    setActive(button);
    setTimeout(() => setActive(null), 500);
  };

  return (
    <div className="block md:hidden w-full h-18 mt-5 fixed bottom-0 bg-gray-300 dark:bg-neutral-700">
      <div className="flex items-center justify-between px-16 py-2 text-neutral-900 dark:text-gray-300">
        <Link to="/">
        <div
          className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
            active === "home" ? "text-orange-400 scale-110 opacity-80" : ""
          }`}
          onClick={() => handleClick("home")}
        >
          <IoHomeOutline className="size-8" />
          <span>خانه</span>
        </div>    
        </Link>

        <div
          className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
            active === "search" ? "text-orange-400  scale-110 opacity-80" : ""
          }`}
          onClick={() => handleClick("search")}
        >
          <IoIosSearch className="size-8" />
          <span>جستجو</span>
        </div>
        <Link to="/loginform">
          <div
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              active === "profile"
                ? "text-orange-400  scale-110 opacity-80"
                : ""
            }`}
            onClick={() => handleClick("profile")}
          >
            <CiUser className="size-8" />
            <span>پروفایل</span>
          </div>
        </Link>
        <Link to="/ProductsInfo">
          <div
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              active === "products"
                ? "text-orange-400 scale-110 opacity-80"
                : ""
            }`}
            onClick={() => handleClick("products")}
          >
            <AiOutlineProduct className="size-8" />
            <span>محصولات</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
