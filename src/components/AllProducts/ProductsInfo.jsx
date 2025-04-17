import React, { useState } from "react";
import Allproducts from "./Allproducts";
import Header from "../Home/Header/Header";
import MobileHeader from "../Home/Header/MobileHeader";
import Footer from "../Home/Footer/Footer";
import { watchProducts } from "../../Datas";
import productsContext from "../contexts/productContext";
import Shopingcard from "../Shoping_card/Shopingcard";
import MobileFooter from "../Home/Footer/mobileFooter/MobileFooter";


export default function ProductsInfo() {
  const [allProducts, setallProducts] = useState(watchProducts);
  const [userCart , setuserCart] = useState([])

  return (
    <>
      <productsContext.Provider value={{
        allProducts,
        userCart,
        setuserCart,

      }}>
        <Header />
        <MobileHeader />
        <div className="flex flex-wrap gap-5 mt-32 px-5 tracking-tight ">
            <Allproducts  />
        </div>
        {/* <Shopingcard/> */}
        <Footer />
        <MobileFooter/>
      </productsContext.Provider>
    </>
  );
}
