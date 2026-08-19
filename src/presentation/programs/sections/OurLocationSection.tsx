import React from "react";
import Image from "next/image";
import { STRAPI_URL } from "@/app/constant";
import SectionDivider from "@/components/common/SectionDivider";
import { OurLocationSectionProps } from "@/features/programs";

const OurLocationSection = ({ badgetext, img1, img2 }: OurLocationSectionProps) => {
  return (
    <section className="relative z-4 py-10 md:py-10 lg:py-10 xl:py-20 px-4 md:px-8 lg:px-16 2xl:px-0 sm:px-6">
      <div className="max-w-[1440px] mx-auto w-full p-4 md:p-6 lg:p-10 xl:p-12 bg-[#000000]/30 rounded-md sm:flex gap-3 md:gap-4 lg:gap-10 xl:gap-12 text-center sm:text-left">
        <div className="sm:w-5/12">
          <Image
            src={`${STRAPI_URL}${img1?.url}`}
            width={486}
            height={418}
            className="w-full h-full border-[2px] p-1 border-slate-100 rounded-[4px] object-cover"
            alt={img1?.alternativeText || "Our Location"}
          />
        </div>
        <div className="sm:w-7/12 pt-6 px-0 lg:px-0 xl:px-3">
          <span className="py-2.5 font-normal rounded-md font-poppins text-slate-100 text-sm tracking-wider inline-block">
            {badgetext}
          </span>
          <h3 className="text-slate-100 text-[20px] font-poppins lg:text-[25px] font-medium mb-4">
            Learn at One of India’s Biggest Business Hubs, Gurgaon
          </h3>

          <Image
            src={`${STRAPI_URL}${img2?.url}`}
            alt={img2?.alternativeText || "our location Map"}
            width={608}
            height={258}
            className="w-full h-auto border-[2px] p-1 border-slate-100 rounded-[4px] inline-block"
          />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default OurLocationSection;
