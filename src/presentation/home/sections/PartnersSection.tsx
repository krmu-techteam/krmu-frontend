import Image from "next/image";
import { PARTNER_UNIVERSITIES } from "@/features/home";
import { Carousel } from "@/components/common/Carousel";
import { SectionTitle } from "@/components/common/SectionTitle";

export function PartnersSection() {
  return (
    <section className="relative w-full pt-8 md:pt-12 xl:pt-20 overflow-hidden font-poppins">
      {/* Institutional Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.05)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="w-full max-w-[1530px] mx-auto relative z-10 text-center">
        <SectionTitle title="Global Partners" />

        <p className="max-w-5xl mx-auto text-white/70 text-base md:text-[16px] leading-relaxed mb-6 md:mb-16 font-light">
          K.R. Mangalam University is dedicated to broadening educational and
          research opportunities through strategic international partnerships
          with esteemed universities and institutions around the world. These
          collaborations enhance our academic landscape, offering unique global
          perspectives and industry insights.
        </p>

        <Carousel
          autoScroll={true}
          autoScrollSpeed={1}
          autoplay={false}
          showArrows={true}
          showDots={false}
          className="px-12 md:px-16"
          containerClassName="items-center"
          slideClassName="basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6 pl-2 md:pl-4"
          prevArrowClassName="left-1 md:left-2 lg:left-3 !rounded-[4px] !bg-[#2C516E] !text-[#ffffff] !border-none hover:bg-brand-blue"
          nextArrowClassName="right-1 md:right-2 lg:right-3 !rounded-[4px] !bg-[#2C516E] !text-[#ffffff] !border-none hover:bg-brand-blue"
        >
          {PARTNER_UNIVERSITIES.map((partner, i) => (
            <div
              key={i}
              className="h-[70px] md:h-[110px] bg-white rounded-[3px] px-4 py-2 flex items-center justify-center shadow-md hover:shadow-xl cursor-pointer m-1 w-auto max-w-full mx-auto"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={90}
                className="h-full w-auto object-contain max-h-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
