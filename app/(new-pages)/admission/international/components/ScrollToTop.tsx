"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
    
  fixed
  bottom-4
  lg:bottom-4
  right-4
  z-[999999999]
  flex
  h-12
  w-12
  items-center
  justify-center
  rounded-full
  bg-white
  text-[#001732]
  shadow-lg
  transition-all
  duration-300
  hover:scale-110
  cursor-pointer
  animate-bounce
  scrolltoptest
"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;
