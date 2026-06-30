import React from "react";
import Image from "next/image";
import { getExperimentalInfraContent } from "../lib/getContent";
import { Fraunces, Inter, Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const ExperimentalInfra = () => {
  const data = getExperimentalInfraContent();
  const content = data.experimentalInfra;

  return (
    <section className="w-full bg-[#FDF7EB]  text-[#012D52]">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-20">
        {/* Header */}
        <div className="mb-12">
          <span
            className={`${inter.className} text-[#87601A] text-xs sm:text-[15px] font-semibold tracking-[0.7px] uppercase block mb-4`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} text-[#0F2A4D] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-medium max-w-[712px]`}
          >
            {content.title}
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3  ">
          {content.cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-[#F7F0E0] min-h-[368px] min-w-[266px]"
            >
              {/* Upper half: Image / Placeholder */}
              <div className="relative h-[178px] w-full bg-[#F7F0E0] flex items-center justify-center">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Lower half: Text details */}
              <div className="p-5 lg:p-4 flex-1 flex flex-col justify-start">
                {/* Subtitle / Label */}
                <span
                  className={`${fraunces.className} text-[#87601A] font-semibold text-[17px] sm:text-[26px] block mb-2`}
                >
                  {card.label}
                </span>

                {/* Card Title */}
                <h3
                  className={`${fraunces.className} text-lg sm:text-xl lg:text-[26.7px] tracking-[0.7px] leading-[26.7px] font-semibold text-[#000000] mb-4`}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className={`${inter.className} text-[13px] sm:text-[15px]  text-[#1C1C1C] tracking-[0.7px] leading-[21.7px] `}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperimentalInfra;
