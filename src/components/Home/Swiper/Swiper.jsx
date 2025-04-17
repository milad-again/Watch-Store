import React from "react";
import { motion } from "framer-motion";

export default function ScrollingProductCarousel() {
  const products = [
    {
      id: 1,
      image: "/images/Products/1.png",
      inpormation: "ساعت مچی عقربه‌ ای مردانه نیوی فورس مدل ۹۱۴۸ کد ۰۵",
      starValue: "4.2",
      button: "افزودن به سبد خرید",
      Price: "780,000 تومان",
      DiscountPercentage: "33%",
      DiscountPrice: "522,000 تومان",
      count: 1,
    },
    {
      id: 2,
      image: "/images/Products/2.png",
      inpormation: "ساعت مچی دیجیتال مردانه اسکیمی مدل ۱۲۶۰ کد... ۱",
      starValue: "8.5",
      button: "افزودن به سبد خرید",
      Price: "980,000 تومان",
      DiscountPercentage: "25%",
      DiscountPrice: "735,000 تومان",
      count: 1,
    },
    {
      id: 3,
      image: "/images/Products/3.png",
      inpormation: "ساعت مچی عقربه ای مردانه مدل بندفلزی کد ۴۴۴ شاخدار",
      starValue: "2.2",
      button: "افزودن به سبد خرید",
      Price: "390,000 تومان",
      DiscountPercentage: "8%",
      DiscountPrice: "358,000 تومان",
      count: 1,
    },
    {
      id: 4,
      image: "/images/Products/4.png",
      inpormation: "ساعت مچی عقربه ای مردانه کورن واتچ مدل b-2683488.........",
      starValue: "9.4",
      button: "افزودن به سبد خرید",
      Price: "1,800,000 تومان",
      DiscountPercentage: "21%",
      DiscountPrice: "1,422,000 تومان",
      count: 1,
    },
    {
      id: 5,
      image: "/images/Products/7.png",
      inpormation: "ساعت مچی عقربه ای مدل یورلی هیلز یولو کلاب مدلb-53389",
      starValue: "4.9",
      button: "افزودن به سبد خرید",
      Price: "5,500,000 تومان",
      DiscountPercentage: "45%",
      DiscountPrice: "3,300,000 تومان",
      count: 1,
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-100 p-6 dark:bg-zinc-700">
      {[...Array(2)].map((_, index) => (
        <motion.div
          key={index}
          className="flex gap-5 py-4 md:gap-8"
          initial={{ x: index % 2 === 0 ? "100%" : "-100%" }}
          animate={{ x: index % 2 === 0 ? "-100%" : "100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="relative w-60 sm:w-52 p-4 bg-white shadow-lg rounded-xl dark:bg-zinc-800 transform transition-transform hover:scale-105 flex flex-col items-center text-center"
            >
              <span className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs sm:text-sm font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg rotate-[-5deg] sm:rotate-[-10deg]">
                🔥 فروش فوق‌العاده
              </span>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 sm:h-40 object-cover rounded-t-xl"
              />

              <div className="p-3 tracking-tight flex flex-col justify-between flex-grow">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white hidden md:block">
                  {product.inpormation}
                </h3>
                <h3 className=" text-gray-900 dark:text-white block md:hidden">
                  ...
                </h3>

                <div className="mt-3 space-y-1">
                  <div className="flex justify-center items-center gap-4 ">
                    <p className="text-xs sm:text-sm text-red-700 line-through">
                      {product.Price}
                    </p>
                    <h1 className="w-10 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
                      {product.DiscountPercentage}
                    </h1>
                  </div>
                  <p className="text-lg font-bold text-green-800">
                    {product.DiscountPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
