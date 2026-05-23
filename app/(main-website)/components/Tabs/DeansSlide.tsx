"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const deans = [
  { name: "Dr. Tanaya Verma", role: "Dean- SOAD", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Tanaya_Verma_SOAD_0c930f1c6b.jpg" },
  { name: "Dr. Tania Gupta", role: "Professor & Dean- SOED", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Tania_Gupta_SOED_3cafa605a2.jpg" },
  { name: "Dr. Joginder Singh Yadav", role: "Professor & Dean- SOAS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Dr_J_S_Yadav_SOAS_06631d634a.png" },
  { name: "Dr. Pankaj Agarwal", role: "Professor & Dean, SOET", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Pankaj_Agarwal_DEAN_SOET_2e63c16f24.png" },
  { name: "Dr. Hema Chaudhary", role: "Professor & Dean, SMAS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Hema_Chaudhary_f8b6ce6363.jpg" },
  { name: "Dr. Meena Bhandari", role: "Associate Professor & Dean, SBAS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Meena_Bhandari_SBAS_81ba776ac8.jpg" },
  { name: "Dr. Amit Chawla", role: "Professor & Dean, SEMCE", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Amit_Chawla_SEMCE_54fb0f6497.png" },
  { name: "Prof (Dr.) Kaveri Sharma", role: "Professor & Dean, SOLS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/16_5ba7e2ac00.jpg" },
  { name: "Mamta Shankar", role: "School Coordinator, SPRS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Mamta_Shankar_P_T_SPRS_7350075f69.jpg" },
  { name: "Prof. Shravan Kumar", role: "Professor and Dean, SOLA", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Shravan_Kumar_095984b81a.png" },
];

const ITEMS_PER_LOAD = 5;

const DeansSlide = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate a brief loading delay for better UX
    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {deans.slice(0, visibleCount).map((dean, index) => (
          <div
            key={index}
            className="group relative flex flex-col bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
          >
            {/* Person Image */}
            <div className="w-full h-80 relative overflow-hidden bg-white p-2">
              <Image
                src={dean.img}
                alt={dean.name}
                width={300}
                height={400}
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Text Content */}
            <div className="p-5 flex flex-col flex-grow text-center">
              <h5 className="text-lg font-bold text-slate-900 leading-tight mb-2">
                {dean.name}
              </h5>
              <div className="w-8 h-1 bg-[#051630] mb-3 mx-auto rounded-full transition-all duration-500 group-hover:w-12" />
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {dean.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < deans.length && (
        <div className="flex justify-center mt-12">
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            className={`group inline-flex items-center gap-2 cursor-pointer px-8 py-6 bg-[#051630] hover:bg-[#051630]/70 text-white border-[#051630] font-semibold text-lg rounded-lg transition-all duration-300 ${
              isLoading ? "bg-[#051630] text-white" : "text-white"
            }`}
          >
            {isLoading ? "Loading..." : "Load More"}
            {!isLoading && (
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Button>
        </div>
      )}
    </>
  );
};

export default DeansSlide;
