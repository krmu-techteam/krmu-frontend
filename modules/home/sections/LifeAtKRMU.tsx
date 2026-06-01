'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Carousel } from '@/components/common/Carousel';
import SectionDivider from '@/components/common/SectionDivider';
import { LIFE_AT_KRMU_CAROUSEL_CONFIGS, LIFE_AT_KRMU_GALLERY } from '../constants';

export default function LifeAtKRMU() {

  return (
    <section className="relative w-full overflow-hidden py-6 px-11 xl:px-0 md:py-12 xl:py-20 font-poppins">
      
      
      {/* Precision Spec Glow (Bottom Left) - Spec: Blue Institutional Soft Light */}
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.08)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none opacity-40 transition-opacity"
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-12">
        <h3 className="font-serif font-bold text-[32px] xl:text-[49px] leading-[1.2] md:leading-[30px] mb-6 md:mb-11 text-white">Why KRMU?</h3>
        <h2 className="font-poppins font-extralight text-[24px] md:text-[42px] leading-[1.2] md:leading-[30px] text-white mb-6">
          A closer look at Life at KRMU
        </h2>
        <p className="max-w-[933px] mx-auto text-white/80 text-sm md:text-[16px] leading-[1.6] md:leading-[30px] font-normal text-center">
          At K.R. Mangalam University, life goes beyond the classroom. Our campus blends academic excellence with vibrant 
          student life. Students explore their passions through cultural events, sports, and community service. We foster a 
          friendly, positive environment to learn, grow, and build lasting relationships.
        </p>
      </div>

      {/* Image Gallery Belt - Using Unified Carousel */}
      <div className="relative w-full mb-16 md:mb-20 px-4 md:px-0">
        <Carousel 
          autoScroll={true}
          autoScrollSpeed={1}
          showArrows={true}
          showDots={false}
          className="w-full"
          containerClassName="gap-0"
          slideClassName="basis-full md:basis-[500px]"
          options={{ loop: true, align: 'start' }}
        >
          {LIFE_AT_KRMU_GALLERY.map((img) => (
            <div key={img.id} className="aspect-video overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out border-r border-white/5 mx-2 md:mx-0">
              <div className="relative w-full h-full">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Feature Cards Grid - Premium Dark Theme */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-5">
          {LIFE_AT_KRMU_CAROUSEL_CONFIGS.map((card, i) => (
            <div key={i} className="group relative aspect-4/5 rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-end">
              <Image 
                src={card.bg} 
                alt={card.label} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
              
              <div className="relative px-6 py-10 xl:p-10">
                <h4 className="text-white font-poppins font-light  text-[28px] xl:text-[42px] leading-[32px] xl:leading-[47px] mb-6 md:mb-8 whitespace-pre-line group-hover:text-brand-gold transition-colors">
                  {card.title.split('\n').map((line, idx) => (
                    <span key={idx} className={line === card.accent ? 'text-brand-gold' : ''}>
                      {line}{idx !== 2 ? '\n' : ''}
                    </span>
                  ))}
                </h4>
                
                <div className="flex cursor-pointer items-center justify-between border-t border-white/10 pt-4 md:pt-5 mt-4 -mx-6 md:-mx-10 -mb-6 md:-mb-10 px-6 md:px-10 pb-4 md:pb-5 bg-black/20 backdrop-blur-md group-hover:bg-black/60 transition-all">
                  <span className="text-white font-poppins font-medium text-xl xl:text-[24px] leading-tight md:leading-[30px] transition-colors group-hover:text-brand-gold">{card.label}</span>
                  <ArrowUpRight 
                    size={24} 
                    className="text-white group-hover:text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
<SectionDivider />
    </section>
  );
}
