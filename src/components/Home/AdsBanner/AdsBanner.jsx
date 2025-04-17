import { useEffect, useState } from "react";

const brands = [
  "Rolex", "Omega", "Heuer", "Philippe", "Piguet",
  "Breitling", "Cartier", "Hublot", "IWC", "Seiko", "Casio", "Tissot",
  "Longines", "Panerai", "Bulgari", "Zenith", "Hamilton", "Citizen"
];

const colors = [
  "text-red-500", "text-blue-500", "text-green-500", "text-yellow-500",
  "text-purple-500", "text-pink-500", "text-orange-500", "text-teal-500",
  "text-indigo-500", "text-rose-500", "text-emerald-500", "text-amber-500"
];


const brandColors = brands.reduce((acc, brand, index) => {
  acc[brand] = colors[index % colors.length];
  return acc;
}, {});

export default function WatchBrandsSlider() {
  const [offset, setOffset] = useState(0);
  const [clonedBrands, setClonedBrands] = useState([...brands, ...brands]);
  const itemWidth = 160;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset - 2;
        if (Math.abs(newOffset) >= itemWidth) {
          setClonedBrands((prevBrands) => [...prevBrands.slice(1), prevBrands[0]]);
          return 0;
        }
        return newOffset;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [clonedBrands]);

  return (
    <div className="w-full mb-16 md:bottom-[-9.5px] md:mb-0 py-4 overflow-hidden relative flex flex-col md:flex-row items-center px-4 md:px-10 dark:bg-zinc-700 bg-gray-200">
      <div className="font-bold mr-8 whitespace-nowrap dark:text-gray-200 text-zinc-700 text-sm md:text-xl md:mb-0 mb-4">
        برترین برند های ساعت
      </div>
      <div 
        className="flex ml-auto w-full md:w-[80%] overflow-hidden items-center"
        style={{ transform: `translateX(${offset}px)`, transition: "transform 0.1s linear" }}
      >
        {clonedBrands.map((brand, index) => (
          <div
            key={index}
            className={`text-sm md:text-lg font-semibold text-center dark:bg-zinc-600 bg-gray-400/50 px-4 py-2 md:px-6 md:py-3 rounded-lg min-w-[80px] md:min-w-[160px] mx-2 flex items-center justify-center ${
              brandColors[brand]
            }`}
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}
