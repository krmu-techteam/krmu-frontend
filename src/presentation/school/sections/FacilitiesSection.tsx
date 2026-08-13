"use client";

import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import { FacilitySlide } from "@/lib/types/schools";
import { STRAPI_URL } from "@/app/constant";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
  fac_slides: FacilitySlide[];
};

const FacilitiesSection = ({ fac_slides }: Props) => {
  return (
    <section className="relative w-full pb-6 xl:pb-14 pt-10  xl:pt-20 overflow-hidden font-poppins">
      {/* Precision Spec Glow (Bottom Left) */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.08)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none opacity-40 transition-opacity"></div>

      <div className="w-full max-w-[1530px] mx-auto relative z-10 text-center mb-8 md:mb-12 px-6">
        <h2 className="font-serif font-bold text-[32px] xl:text-[49px] leading-[1.2] text-white antialiased tracking-wide">
          Facilities
        </h2>
      </div>

      <div className="relative w-full mb-8">
        <Carousel
          autoScroll={true}
          autoScrollSpeed={1}
          showArrows={true}
          showDots={false}
          className="w-full"
          containerClassName="gap-0"
          slideClassName="basis-full md:basis-[720px] group"
          options={{ loop: true, align: "center" }}
          nextArrowClassName="!rounded-[4px] !bg-[#1A4575] !border-none"
          prevArrowClassName="!rounded-[4px] !bg-[#1A4575] !border-none"
        >
          {fac_slides.map((slide) => (
            <div
              key={slide.id}
              className="relative aspect-[16/9] overflow-hidden grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-data-[active=true]:grayscale-0 group-data-[active=true]:opacity-100 transition-all duration-700 ease-in-out border-r border-white/5 mx-0"
            >
              {slide?.facility_img?.url && (
                <Image
                  src={`${STRAPI_URL}${slide.facility_img.url}`}
                  alt={slide.title || ""}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 720px"
                  loading="lazy"
                  unoptimized
                />
              )}
              {slide.title && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 md:p-8 pointer-events-none">
                  <h4 className="text-white font-poppins font-medium text-lg md:text-xl leading-tight tracking-wide antialiased transition-colors duration-300 group-hover:text-brand-gold group-data-[active=true]:text-brand-gold">
                    {slide.title}
                  </h4>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
      <SectionDivider />
    </section>
  );
};

export default FacilitiesSection;
