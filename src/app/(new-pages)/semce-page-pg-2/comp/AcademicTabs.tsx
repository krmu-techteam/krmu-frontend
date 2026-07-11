"use client";

import { useState } from "react";

const tabs = [
  "Academics",
  "Programmes",
  "Admissions",
  "Placements",
  "Research",
  "Sustainability",
];

const AcademicsTabs = () => {
  const [active, setActive] = useState("Academics");

  return (
    <section className="relative w-full flex justify-center px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-4">
      
      {/* Glass Container */}
      <div
        className="
        w-full
        max-w-[950px]
        flex
        gap-2
        p-2
        sm:p-3
        
        rounded-2xl
        border border-white/30
        bg-white/10
        backdrop-blur-lg
        
        overflow-x-auto
        scrollbar-none
        scroll-smooth
        
        [-webkit-overflow-scrolling:touch]
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`
              flex-shrink-0
              whitespace-nowrap
              
              px-4 py-2
              sm:px-5 sm:py-2.5
              lg:px-6 lg:py-3
              
              text-sm sm:text-base
              font-medium
              rounded-xl
              
              transition-all
              duration-300
              
              ${
                active === tab
                  ? "#cb000d text-white shadow-lg scale-[1.03]"
                  : "text-white hover:bg-white/20"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AcademicsTabs;
