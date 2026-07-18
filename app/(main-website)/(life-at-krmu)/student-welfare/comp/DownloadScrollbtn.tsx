"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const DownloadScrollbtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after one full screen (start of the second screen)
      setIsVisible(window.scrollY >= window.innerHeight);
    };

    toggleVisibility(); // Check on initial render

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="group fixed bottom-6 lg:bottom-10 left-6 z-[999] h-[49px] w-[309px] rounded-full bg-[#111D32CC] px-2 transition-all duration-300 hover:scale-105 cursor-pointer  scrolltoptest"
    >
      <Link
        href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/DSW_Magazine_2026_27_8e19b9a92d.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`${poppins.className} gradient-box flex h-full w-full items-center gap-3 text-[20px] font-semibold`}
      >
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-[#D5A647] p-1">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Frame_6d39ae97d2.png"
            alt="download arrow"
            width={1024}
            height={1024}
            className="transition-transform duration-600 group-hover:[transform:rotateY(180deg)]"
          />
        </div>
        DSW Magazine 2025-26
      </Link>
    </div>
  );
};

export default DownloadScrollbtn;
