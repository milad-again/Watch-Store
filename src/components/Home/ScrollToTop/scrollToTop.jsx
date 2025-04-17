import { useEffect, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { LiaTelegram } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-20 md:bottom-5 right-5 flex flex-col items-end gap-2">
      {isVisible && (
        <div
          className={`absolute right-16 bottom-0 bg-white dark:bg-zinc-800 shadow-xl rounded-xl p-4 flex flex-col items-start gap-1 transform transition-all duration-500 ${
            isMenuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-4 opacity-0 scale-95"
          }`}
        >
          <a
            href="https://t.me/only_god_for_mee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-4 py-2 text-neutral-800 dark:text-white rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <span>تلگرام</span>
            <LiaTelegram className="size-8 text-blue-500 transition-transform duration-300 hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/milad-abdi-75ab67341"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-4 py-2 text-neutral-800 dark:text-white rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <span>لینکدین</span>
            <CiLinkedin className="size-8 text-blue-500 transition-transform duration-300 hover:scale-110" />
          </a>
          <a
            href="tel:+989011834990"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-4 py-2 text-neutral-800 dark:text-white rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <span>تماس</span>
            <IoMdCall className="size-8 text-blue-500 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      )}

      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`p-3 bg-blue-600 text-white rounded-full shadow-lg transition-opacity duration-300`}
        >
          <ArrowUp size={24} />
        </button>
      )}

      {isVisible && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-3 bg-green-500 text-white rounded-full shadow-lg relative`}
        >
          {isMenuOpen ? <X size={24} /> : <FiPhoneCall size={24} />}
        </button>
      )}
    </div>
  );
}
