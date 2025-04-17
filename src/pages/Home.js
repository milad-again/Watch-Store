import React from "react";
// import Header from "../components/Home/Header/Header";
// import TopBanner from "../components/Home/TopBanner/TopBanner";
// import Products from "../components/Home/Products/Products";
import ProductsInfo from "../components/Home/Products/ProductsInfo";
import EndBanner from "../components/Home/EndBanner/EndBanner";
import AdsBanner from "../components/Home/AdsBanner/AdsBanner";
import Footer from "../components/Home/Footer/Footer";
// import MobileHeader from "../components/Home/Header/MobileHeader";
import FirstBanner from "../components/Home/FirstBanner/FirstBanner";
import Carousel from "../components/Home/carousel/Carousel";
import MobileFooter from "../components/Home/Footer/mobileFooter/MobileFooter";
import Swiper from "../components/Home/Swiper/Swiper";
import ScrollToTop from "../components/Home/ScrollToTop/scrollToTop";
import Tizer from "../components/Home/tizer/Tizer";

// import { slides } from "../Datas";

export default function Home() {
  return (
    
<>
      {/* <Header /> */}
      {/* <MobileHeader /> */}
      <FirstBanner />
      <ProductsInfo />
      <Carousel/>
      <EndBanner />
      <Swiper />
      <Tizer />
      {/* <TopBanner /> */}
      <AdsBanner />
      <ScrollToTop />
      <MobileFooter />    
      <Footer />
</>
    
  );
}
