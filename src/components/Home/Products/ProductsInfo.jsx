import React, { useState } from "react";
import Products from "./Products";
import { watchProducts } from "../../../Datas";
import productsContext from "../../contexts/productContext";
import Header from "../Header/Header";
import MobileHeader from "../Header/MobileHeader";

export default function ProductsInfo() {
  const [allProducts, setallProducts] = useState(watchProducts);
  const [userCart, setuserCart] = useState([]);

  return (
    <>
      <productsContext.Provider
        value={{
          allProducts,
          userCart,
          setuserCart,
        }}
      >
        <Header />
        <MobileHeader/>
        <div className="flex flex-wrap justify-center gap-5 mx-auto mt-6">
          <Products />
        </div>
      </productsContext.Provider>
    </>
  );
}
