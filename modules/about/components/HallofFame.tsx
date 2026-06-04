"use client";

import { HALLFAME } from "@/lib/types/about";
import { Award } from "lucide-react";
import { useState, useEffect } from "react";

interface HALLFAMEPROP {
  fameData: HALLFAME[];
}

const HallofFame: React.FC<HALLFAMEPROP> = ({ fameData }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(8); // xl (4 columns) -> 8 items
      } else if (window.innerWidth >= 1024) {
        setVisibleCount(6); // lg (3 columns) -> 6 items
      } else if (window.innerWidth >= 640) {
        setVisibleCount(4); // sm (2 columns) -> 4 items
      } else {
        setVisibleCount(3); // mobile (1 column) -> 3 items
      }
    };
    
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const displayedData = fameData?.slice(0, visibleCount);

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-0">
        {displayedData &&
          displayedData.map((fame) => {
            return (
              <div
                key={fame?.id}
                className="relative p-[2px] rounded-[4px] h-full text-left transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(136.56deg, rgba(0, 102, 255, 0.55) 3.59%, rgba(255, 255, 255, 0.55) 97.91%)",
                }}
              >
                <div className="bg-[#121c27] w-full h-full rounded-[2px] p-6 md:p-8 flex flex-col backdrop-blur-sm">
                  <div className="mb-5 text-[#E7C268]">
                    <Award size={28} strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[18px] md:text-[24px] font-serif font-semibold text-white mb-3 leading-tight">
                    {fame?.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-md font-poppins text-white/80 leading-[1.6]">
                    {fame?.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HallofFame;
