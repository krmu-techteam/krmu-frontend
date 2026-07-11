"use client";

import React, { useRef } from "react";
import { STRAPI_URL } from "@/app/constant";
import { CorporateAdvisorItem } from "@/lib/api/corpadvteam";
import Image from "next/image";
import { useGSAPScrollReveal } from "@/hooks/useGSAPScrollReveal";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
  corpData: CorporateAdvisorItem[];
};

const CDCAdvisoryBoardSection = ({ corpData }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply reusable GSAP scroll reveal hook
  useGSAPScrollReveal(containerRef);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-transparent pb-12 sm:pb-16 md:pb-20 px-6 sm:px-10 lg:px-12 xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <h3 className="gsap-reveal-up heading-primary mb-6 lg:mb-10 text-center opacity-0">
          Corporate Advisory Board
        </h3>

        {/* Staggered Grid of Advisory Board Members */}
        <div className="gsap-stagger-up-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {corpData &&
            corpData.map((item, i) => (
              <div key={i} className="gsap-stagger-item group relative flex flex-col bg-[#0b1a27] rounded-[12px] border border-white/10 hover:border-[#00A0E3] transition-colors duration-300 overflow-hidden shadow-xl w-full opacity-0">
                
                {/* Image container */}
                <div className="relative aspect-square w-full bg-white/5 overflow-hidden border-b border-white/10">
                  {item?.corp_adv_img?.url ? (
                    <Image
                      src={`${STRAPI_URL}${item.corp_adv_img.url}`}
                      alt={item.name || "Advisory Member"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/40">
                      No Image Available
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="p-5 flex flex-col items-center justify-center text-center">
                  <h4 className="text-[17px] sm:text-[19px] font-serif font-semibold text-white leading-tight mb-1.5">
                    {item?.name}
                  </h4>
                  
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.corp_adv_info,
                    }}
                    className="font-poppins text-[12px] sm:text-[13px] text-white/80 leading-relaxed [&_strong]:text-[#00A0E3] [&_strong]:font-medium [&_p]:text-white/80 [&_p]:leading-normal"
                  />
                </div>

              </div>
            ))}
        </div>

      </div>
      <SectionDivider />
    </section>
  );
};

export default CDCAdvisoryBoardSection;
