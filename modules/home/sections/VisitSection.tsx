'use client';

import React from 'react';
import {   CalendarCheck } from 'lucide-react';
import Image from 'next/image';
import SectionDivider from '@/components/common/SectionDivider';
 

export default function VisitSection() {
  return (
    <section className="relative w-full py-6 md:py-12 xl:py-20 overflow-hidden font-poppins">
      <style dangerouslySetInnerHTML={{ __html: `
        .visit-left-col {
          padding-left: 1rem;
        }
        @media (min-width: 768px) {
          .visit-left-col {
            padding-left: 1.5rem;
          }
        }
        @media (min-width: 1530px) {
          .visit-left-col {
            padding-left: calc((100vw - 1530px) / 2 + 1.5rem) !important;
          }
        }
      `}} />

      <div className="w-full flex flex-col lg:flex-row items-stretch gap-6">
        
        {/* Left Column - Content */}
        <div className="visit-left-col w-full lg:w-[45%] flex flex-col justify-center pl-6 md:pl-0 py-12 lg:py-20 pr-6 relative z-10">
          <div className="w-full max-w-[620px] lg:ml-0 flex flex-col">
            <h2 className="text-3xl md:text-[42px] font-serif font-bold text-white mb-6 leading-tight md:leading-[1.2]">
              Visit and Explore<br />
              <span className="">K.R. Mangalam University</span>
            </h2>
            
            <p className="text-white/70 text-base md:text-md leading-relaxed mb-6 font-light">
              Located in Gurugram&#39;s tech hub and the expansive NCR, K.R. Mangalam University is a blend of urban innovation and natural beauty. Schedule a campus visit or take our online 360-degree tour to experience our inspiring environment, surrounded by the tranquil Aravalli hills.
            </p>

            <div className="flex flex-row items-center justify-start gap-4 md:gap-8">
              {/* Schedule Visit */}
              <button className="flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-sm border border-white/80 group max-w-[240px] md:max-w-[280px] text-left shadow-lg h-[60px] md:h-[80px] text-white/80">
                <div>
                  <CalendarCheck size={26}  />
                </div>
                <div>
                  <h4 className="text-white/80 font-medium text-sm md:text-[17px] leading-tight">Schedule your visit to KRMU Campus</h4>
                </div>
              </button>

              {/* Virtual Tour */}
              <button className="relative group transition-all shrink-0 w-20 h-20 md:w-24 md:h-24">
                <div className="relative h-full w-full">
                  <Image 
                    src="/modules/home/hero/virtual-tour.png" 
                    alt="360 Virtual Tour" 
                    fill
                    sizes="96px"
                    priority
                    className="object-contain"
                  />
                </div> 
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Full Width Image */}
        <div className="w-full lg:w-[55%] h-[450px] md:h-[550px] lg:h-auto relative">
          <div className="absolute inset-0 lg:rounded-l-md overflow-hidden shadow-2xl border-l border-t border-b border-white/10 group">
            <Image 
              src="/modules/home/visit/campus-visit.jpg" 
              alt="KRMU Campus Facade" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Dark Gradient Overlay for better contrast */}
            <div className="absolute inset-0 bg-linear-to-r from-brand-dark/40 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
