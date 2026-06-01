'use client';

import React from 'react';
import Image from 'next/image';
import SectionDivider from '@/components/common/SectionDivider';
import { RESEARCH_STATS } from '../constants';

 

export default function ResearchSection() {
  return (
    <section className="relative w-full py-6 px-6 md:px-11 xl:px-0 md:py-12 xl:py-20 overflow-hidden font-poppins">
      

      <div className="w-full max-w-[1285px] mx-auto xl:px-0 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start relative xl:h-[750px]">
          
          {/* Left Column - Image and Stats */}
          <div className="w-full lg:w-[58%] xl:w-[925px]">
            <div className="relative w-full aspect-video xl:aspect-auto xl:w-[925px] xl:h-[464px] rounded-[4px] overflow-hidden mb-16 border border-white/5 shadow-2xl">
              <Image 
                src="/modules/home/research/researcher.jpg" 
                alt="Research at KRMU" 
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="grid grid-cols-2 max-w-2xl px-0 lg:px-12 xl:max-w-[600px] xl:mx-16">
              {RESEARCH_STATS.map((stat, i) => {
                const borderClass = 
                  i === 0 ? "border-r border-b border-[#262626] pb-5 px-3 md:px-5" :
                  i === 1 ? "border-b border-[#262626] pb-5 px-3 md:px-5" :
                  i === 2 ? "border-r border-[#262626] pt-5 px-3 md:px-5" :
                  "pt-5 px-3 md:px-5";
                return (
                  <div key={i} className={`flex flex-col justify-center items-center ${borderClass}`}>
                    <span className="text-brand-gold text-2xl md:text-3xl font-normal mb-2 text-center">{stat.value}</span>
                    <p className="text-white/70 text-sm xl:text-base leading-snug whitespace-pre-line text-center">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Floating Info Card */}
          <div className="w-full lg:w-[47%] lg:-ml-[5%] lg:mt-16 xl:absolute xl:left-[728px] xl:top-[192px] xl:w-[557px] xl:h-[557px] xl:m-0 z-20">
            <div className="bg-brand-navy border-12 border-brand-dark p-8 xl:p-12 rounded-[4px] h-full shadow-2xl backdrop-blur-xl flex flex-col justify-center">
              <p className="text-center text-white/90 text-lg tracking-wide font-normal mb-4">Shaping Futures, Embracing Innovation</p>
              <h2 className="text-4xl md:text-[42px] font-serif text-white leading-tight font-bold text-center">Engage in Leading-Edge Research</h2>
              
              <div className="w-7 h-1 bg-secondary mb-8 mx-auto rounded-md"></div>
              
              <p className="text-white/70 text-base md:text-md text-center mb-6 font-light">
                K.R. Mangalam University thrives on innovation, bringing together a dedicated faculty and over 5000 students across various disciplines. Our research is driven by a commitment to the United Nations’ Sustainable Development Goals, aiming for global impact and research excellence.
              </p>
              
              <div className="flex flex-col gap-6 justify-center items-center">
                <button className="bg-brand-research-button hover:bg-brand-research-button/80 text-white px-16 py-2.5 rounded-[3px] font-medium transition-all w-fit flex items-center gap-2 group cursor-pointer">
                  Research
                </button>
                
                <a href="#" className="text-white/90 underline underline-offset-4 decoration-text-white/90 hover:decoration-text-white/90 transition-all text-sm font-medium w-fit">
                  Innovation and Entrepreneurship
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section Divider */}
      <SectionDivider />
    </section>
  );
}
