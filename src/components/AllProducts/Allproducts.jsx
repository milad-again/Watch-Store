import React, { useContext } from "react";
import { IoStar } from "react-icons/io5";
import ProductsInfo from "./ProductsInfo";
import Swal from "sweetalert2";
import productsContext from "../contexts/productContext";

export default function Allproducts({
  image,
  inpormation,
  starValue,
  button,
  Price,
  DiscountPercentage,
  DiscountPrice,
}) {
  const contextData = useContext(productsContext);

  const showAlert = () => {
    if (typeof Swal === "undefined") {
      console.error("SweetAlert2 بارگذاری نشده است.");
      return;
    }
  
    const isDarkMode = document.documentElement.classList.contains("dark");
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
  
    Swal.fire({
      title: "محصول  با موفقیت به سبد خرید اضافه شد",
      text: "ادامه می‌دهید؟",
      icon: "success",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      showCancelButton: true,
      background: isDarkMode ? "#1E293B" : "#FFFFFF",
      color: isDarkMode ? "#FFFFFF" : "#000000",
      customClass: {
        popup: isDarkMode
          ? `bg-gray-900 text-white border border-gray-700 shadow-lg ${isMobile ? "w-64 max-h-80 p-3" : "w-96 p-5"}`
          : `bg-white text-black border border-gray-300 shadow-lg ${isMobile ? "w-64 max-h-80 p-3" : "w-96 p-5"}`,
        title: `font-medium ${isMobile ? "text-sm" : "text-lg"}`,
        content: isMobile ? "text-xs" : "text-sm",
        confirmButton: isDarkMode
          ? `bg-gray-700 hover:bg-gray-600 text-white rounded-md ${isMobile ? "px-3 py-1 text-sm" : "px-4 py-2"}`
          : `bg-blue-500 hover:bg-blue-600 text-white rounded-md ${isMobile ? "px-3 py-1 text-sm" : "px-4 py-2"}`,
        cancelButton: `bg-gray-400 hover:bg-gray-500 text-white rounded-md ${isMobile ? "px-3 py-1 text-sm" : "px-4 py-2"}`,
      },
    });
  };
  

  return (
    <>
      <div className="container mb-20 md:mb-0 mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {contextData.allProducts.map((productSection) => (
            <div
              className="dark:border dark:border-gray-500 dark:rounded-lg bg-white dark:bg-zinc-800 rounded-xl shadow-md p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              key={productSection.id}
            >
              <div className="w-full h-auto flex flex-col">
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    className="w-full h-40 sm:h-52 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
                    src={productSection.image}
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 p-2 sm:p-3 dark:text-gray-300">
                  <span className="text-xs sm:text-sm font-medium">
                    {productSection.inpormation}
                  </span>

                  <div className="flex items-center gap-1 justify-end mt-1 sm:mt-2">
                    <IoStar className="text-yellow-300 text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm">
                      {productSection.starValue}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-col items-start">
                      <span className="text-xs sm:text-sm text-red-500 line-through">
                        {productSection.Price}
                      </span>
                      <div className="text-gray-700 dark:text-gray-300 text-xs sm:text-base font-semibold">
                        {productSection.DiscountPrice}
                      </div>
                    </div>
                    <div className="flex items-center justify-center text-[10px] sm:text-xs text-white w-6 h-5 sm:w-8 sm:h-6 bg-rose-600 rounded-full">
                      {productSection.DiscountPercentage}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      showAlert();
                      let isInUsercart = contextData.userCart.some(
                        (bgProduct) => bgProduct.image === productSection.image
                      );
                      if (!isInUsercart) {
                        let newUserCartProduct = {
                          image: productSection.image,
                          inpormation: productSection.inpormation,
                          price: productSection.Price,
                          DiscountPercentage: productSection.DiscountPercentage,
                          DiscountPrice: productSection.DiscountPrice,
                          count: 1,
                        };
                        contextData.setuserCart((prevProducts) => [
                          ...prevProducts,
                          newUserCartProduct,
                        ]);
                      } else {
                        let userCart = [...contextData.userCart];
                        userCart.some((bgProduct) => {
                          if (bgProduct.image === productSection.image) {
                            bgProduct.count += 1;
                            return true;
                          }
                        });
                        contextData.setuserCart(userCart);
                      }
                    }}
                    className="w-full sm:w-auto mt-3 py-1 sm:py-2 bg-green-500 text-white text-xs sm:text-sm rounded-lg transition-all duration-300 hover:bg-green-700 hover:scale-105"
                  >
                    {productSection.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
