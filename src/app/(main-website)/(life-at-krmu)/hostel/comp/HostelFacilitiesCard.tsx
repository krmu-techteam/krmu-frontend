"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const HostelFacilitiesCard: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Outer 1440px Dark Container (Figma Spec: bg-[#061623], rounded-[23px]) */}
      <div className="w-full max-w-[1440px] mx-auto bg-[#000000]/30 rounded-[23px] p-6 sm:p-10 lg:p-12 text-white">
        {/* Top Header Row: Title & Paragraph */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-10 lg:mb-14">
          {/* Left Column: Heading */}
          <div className="w-full lg:w-[55%]">
            <span className="text-[#E7C268] font-poppins text-lg sm:text-[25px] font-normal block mb-2">
              Discover Your Second Home
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] xl:text-[49px] font-bold text-white leading-tight tracking-tight">
              Hostel Facilities at <br className="hidden sm:inline" />
              K.R. Mangalam University
            </h2>
          </div>

          {/* Right Column: Paragraph */}
          <div className="w-full lg:w-[60%] pt-1 lg:pt-8">
            <p className="font-poppins text-white/90 font-light text-base sm:text-lg lg:text-[18px] leading-relaxed">
              The university offers separate on-campus housing options for
              female and male students.{" "}
              <strong className="text-white font-semibold">
                Gayatri Hostel
              </strong>{" "}
              accommodates female students, while{" "}
              <strong className="text-white font-semibold">
                Vivekanand Hostel
              </strong>{" "}
              provides residence for male students.
            </p>
          </div>
        </div>

        {/* Center Banner Box (Figma Spec: 528px height, gradient overlay) */}
        <div
          onClick={() => setIsVideoModalOpen(true)}
          className="relative w-full mx-auto h-[380px] sm:h-[460px] lg:h-[528px] overflow-hidden shadow-2xl mb-0 cursor-pointer group"
        >
          {/* Background Image */}
          <Image
            src="/images/hostel/hostel-1.jpg"
            alt="Your Dream Hostel - KRMU"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Centered 400px Figma Gradient Overlay Box */}
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] z-10 flex flex-col items-center justify-center text-center px-4"
            style={{
              background:
                "linear-gradient(180deg, #0D1E3C 0%, rgba(24, 49, 93, 0.509615) 65.59%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <p className="font-poppins text-white text-lg sm:text-xl lg:text-[32px] font-normal mb-2 tracking-wide whitespace-nowrap">
              Live. Learn. Thrive.
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[60px] font-bold text-white tracking-tight leading-none mb-6 whitespace-nowrap">
              Your Dream Hostel
            </h3>

            {/* Play Button with 3-Color Circular Gradient Border */}
            <div className="p-[3px] sm:p-[4px] rounded-full bg-gradient-to-b from-[#0069E3] via-[#FF9D00] to-[#DE0000] shadow-xl group hover:scale-110 transition-all duration-300">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVideoModalOpen(true);
                }}
                aria-label="Play Hostel Overview Video"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300 cursor-pointer"
              >
                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-1 group-hover:scale-105 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Dialog */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-6 lg:p-10 transition-all animate-in fade-in duration-200">
          {/* Backdrop Click Close */}
          <div
            className="absolute inset-0"
            onClick={() => setIsVideoModalOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-[1000px] aspect-video bg-black rounded-2xl shadow-2xl border border-white/20 z-10 flex items-center justify-center">
            {/* Close Button (Positioned Outside Top-Right to avoid YouTube controls) */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close Video Modal"
              className="absolute -top-12 right-0 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center border border-white/30 transition-all cursor-pointer shadow-lg"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* YouTube Video Player */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0FECW-Go_oc?autoplay=1&si=HMac9TnoY6KJhWzc"
              title="KRMU Hostel Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HostelFacilitiesCard;
