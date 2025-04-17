import React from "react";

export default function FooterContainer() {
  return (
    <>
      <div className="flex justify-between px-10 tracking-tighter text-sm lg:text-lg" >
        <div id="footer" className=" flex flex-wrap gap-10 md:gap-20  p-5 text-zinc-700 dark:text-gray-300 ">
          <ul className="leading-8 tracking-tighter">
            <li className="text-xl text-green-800 pb-3 dark:text-green-600">درباره فروشگاه</li>
            <li>درباره فروشکاه</li>
            <li>تماس با فروشکاه</li>
            <li>حریم خصوصی</li>
          </ul>
          <ul className="leading-8 tracking-tighter hidden md:inline-block">
            <li className="text-xl text-green-800 pb-3  dark:text-green-600">راهنمای مشتریان</li>
            <li>راهنمای خرید از فروشگاه</li>
            <li>روش های ارسال سفارش</li>
            <li>روش های پرداخت</li>
            <li>پرسش های متداول</li>
          </ul>
          <ul className="leading-8 tracking-tighter">
            <li className="text-xl text-green-800 pb-3  dark:text-green-600">خدمات مشتریان</li>
            <li>گارانتی و خدمات پس از فروش</li>
            <li>ضمانت اصالت و گارانتی کالا</li>
            <li>7 روز ضمانت بازگشت کالا</li>
            <li>تضمین بهترین قیمت ها</li>
            <li>شرایط و قوانین</li>
          </ul>
        </div>
        <div>
            <div className="flex flex-wrap gap-5 pt-5">
                <a href="">
                <img className="border border-gray-500/50 rounded-xl w-[100px] h-[100px] md:w-[150px] md:h-[150px]" src="/images/Footer/enamad.png" alt="" />
                </a>
                <a href="">
                <img className="border border-gray-500/50 rounded-xl w-[100px] h-[100px] md:w-[150px] md:h-[150px]"  src="/images/Footer/rezi.webp" alt="" />
                </a>
                <a href="">
                <img className="border border-gray-500/50 rounded-xl w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain"  src="/images/Footer/Bank_Mallat.png" alt="" />
                </a>
                <a href="">
                <img className="border border-gray-500/50 rounded-xl w-[100px] h-[100px] md:w-[150px] md:h-[150px]" src="/images/Footer/Bank_Parsian.png" alt="" />
                </a>
            </div>
        </div>
      </div>
    </>
  );
}
