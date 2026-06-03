"use client";

import { HALLFAME } from "@/lib/types/about";
import { Award } from "lucide-react";

interface HALLFAMEPROP {
  fameData: HALLFAME[];
}

const HallofFame: React.FC<HALLFAMEPROP> = ({ fameData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
      {fameData &&
        fameData.map((fame) => {
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
  );
};

export default HallofFame;
