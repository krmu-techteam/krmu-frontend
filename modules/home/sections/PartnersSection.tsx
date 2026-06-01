'use client';
 
import Image from 'next/image';
import { PARTNER_UNIVERSITIES } from '../constants';
import { Carousel } from '@/components/common/Carousel';
import SectionDivider from '@/components/common/SectionDivider';
 
export default function PartnersSection() {
  return (
    <section className="relative w-full py-6 px-11 xl:px-0 md:py-12 xl:py-16 overflow-hidden font-poppins">
      {/* Institutional Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.05)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-[42px] font-serif font-bold text-white mb-6 leading-tight md:leading-[1.2]">
          Global Partners
        </h2>
        
        <p className="max-w-3xl mx-auto text-white/70 text-base md:text-[16px] leading-relaxed mb-16 font-light">
          K.R. Mangalam University is dedicated to broadening educational and research opportunities through strategic 
          international partnerships with esteemed universities and institutions around the world. These collaborations 
          enhance our academic landscape, offering unique global perspectives and industry insights.
        </p>

        <Carousel
          autoScroll={true}
          autoScrollSpeed={1}
          autoplay={false}
          showArrows={true}
          showDots={false}
          className="px-4"
          containerClassName="items-center"
          slideClassName="basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6 pl-2 md:pl-4"
          prevArrowClassName="-left-2 md:-left-6 lg:-left-8 bg-brand-navy/50 border-white/10 hover:bg-brand-blue"
          nextArrowClassName="-right-2 md:-right-6 lg:-right-8 bg-brand-navy/50 border-white/10 hover:bg-brand-blue"
        >
          {PARTNER_UNIVERSITIES.map((partner, i) => (
            <div 
              key={i} 
              className="h-[70px] md:h-[90px] bg-white rounded-[3px] px-4 py-2 flex items-center justify-center shadow-md hover:shadow-xl cursor-pointer m-1 w-auto max-w-full mx-auto"
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
      <SectionDivider />
    </section>
  );
}
