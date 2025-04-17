import React from "react";

export default function EndBanner() {
  return (
    <div className="bg-gray-200 dark:bg-zinc-800 py-8 px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-evenly h-auto sm:h-[400px] gap-6 sm:gap-0">
        <div className="flex items-center justify-center hover:scale-110 transition-all">
          <img
            className="w-[150px] sm:w-[200px]"
            src="/images/Products/baner.png"
            alt="banner"
          />
        </div>
        <div className="max-w-[90%] sm:max-w-[500px] text-center sm:text-right">
          <h4 className="text-amber-900 text-xl sm:text-2xl dark:text-amber-700">
            قدم در دنیای تکنولوژی
          </h4>
          <p className="text-zinc-900 mt-3 text-sm sm:text-base dark:text-gray-300">
            مجموعه‌ای از با کیفیت‌ترین‌ها و برترین مدل‌های ساعت هوشمند با
            قیمت‌های بسیار ویژه، گارانتی 6 ماهه برای تمامی محصولات این دسته...
          </p>
          <button className="bg-amber-950 dark:bg-amber-700 text-white rounded-2xl px-4 py-2 text-sm mt-5 hover:bg-amber-800">
            ورود به هوشمندها
          </button>
        </div>
      </div>
    </div>
  );
}
