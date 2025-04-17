import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  "/Images/Carousel/1.png",
  "/Images/Carousel/2.png",
  "/Images/Carousel/3.png",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[400px] md:h-[400px] lg:h-[500px] overflow-hidden mt-5">
      <div className="flex w-full h-full">
        <AnimatePresence initial={false} custom={index}>
          <motion.div
            key={index}
            className="flex min-w-full h-full"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src={images[index]}
              alt="carousel image"
              className="w-full h-full object-cover"
              onLoad={(e) => e.target.classList.add("opacity-100")}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-1 xs:p-2 sm:p-4">
        <button onClick={prevSlide} className="text-white p-1 xs:p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all">
          <IoIosArrowForward className="size-5 xs:size-6 sm:size-8 md:size-10" />
        </button>
        <button onClick={nextSlide} className="text-white p-1 xs:p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all">
          <IoIosArrowBack className="size-5 xs:size-6 sm:size-8 md:size-10" />
        </button>
      </div>
    </div>
  );
}