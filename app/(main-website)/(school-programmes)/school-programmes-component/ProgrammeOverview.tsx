"use client";

import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const ProgrammeOverview = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const overviewEl = document.getElementById("programme-overview-section");
    if (overviewEl) {
      const nextEl = overviewEl.nextElementSibling;
      if (nextEl) {
        nextEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="programme-overview-section"
      className={`${inter.className} w-full bg-white py-12 px-4 sm:px-6 md:px-8`}
    >
      <div className="max-w-[1500px] mx-auto px-2">
        <div className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(90deg,#0161B0_0%,#001228_100%)] py-10 px-10  z-10  flex flex-col justify-center text-left">
          {/* Halftone circular dots design overlay */}

          {/* Card Content */}
          <div className="relative z-10  flex flex-col items-start">
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-[30px] leading-tight mb-4 tracking-wide">
              Programme Overview
            </h2>

            <p className="text-white/90 text-sm sm:text-base md:text-[18px] mb-4 tracking-wide">
              The B.Tech. in Computer Science and Engineering programme at K.R.
              Mangalam University is designed to provide students with
              theoretical knowledge and practical applications of core CS and
              engineering concepts.
            </p>

            <a
              href="#"
              onClick={handleScroll}
              className="inline-block font-semibold text-white text-sm sm:text-base underline underline-offset-4 decoration-1 hover:text-white/80 hover:decoration-2 transition-all duration-300 cursor-pointer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
