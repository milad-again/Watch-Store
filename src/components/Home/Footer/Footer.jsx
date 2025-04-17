import React from "react";
import FooterContainer from "./FooterContainer";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" h-[600px] tracking-tighter bg-gray-200 mt-5 dark:bg-zinc-700 dark:transition-all hidden md:block">
      <div className=" flex items-center justify-between text-zinc-700 p-10 dark:text-gray-300">
        <div>
          <span className="text-xl">فروشگاه اینترنتی ساعت</span>
          <ul className="flex gap-3 pt-3">
            <li>تلفن تماس : 09011834990</li>
            <li>|</li>
            <li>واتس اپ : 09395720153</li>
            <li>|</li>
            <li className="hidden md:inline-block">برای کمک و راهنمایی همیشه در کنار شما هستیم😊</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-5 text-3xl  ">
          <a className="hover:text-blue-500 transition-all" href="">
            <FaTelegramPlane />
          </a>
          <a className="hover:text-pink-500 transition-all" href="">
            <FaInstagram />
          </a>
          <a className="hover:text-blue-700 transition-all" href="">
            <FaLinkedin />
          </a>
          <a className="hover:text-blue-400 transition-all" href="">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="w-[95%] mx-auto h-px bg-gray-500/40"></div>
      <FooterContainer/>
    </div>
  );
}
