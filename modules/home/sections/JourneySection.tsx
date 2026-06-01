'use client';

import React from 'react';
import Image from 'next/image';
import { Download, ArrowUpRight, Play, PlayCircle } from 'lucide-react';
import Button from '@/components/common/Button';
import SectionDivider from '@/components/common/SectionDivider';
import { JOURNEY_VIDEOS } from '../constants';

export default function JourneySection() {
  return (
    <section className="relative w-full overflow-hidden py-6 px-11 xl:px-0 md:py-12 xl:py-20 font-poppins text-center transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.08)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-10 xl:mb-12">
          <h2 className="text-3xl md:text-4xl xl:text-[42px] font-serif font-bold text-white mb-6 leading-[1.2] tracking-tight">
            Your Journey to Excellence Begins Here
          </h2>

          <p className="max-w-4xl mx-auto text-white/70 text-base md:text-[16px] leading-relaxed mb-8 xl:mb-10 font-light font-poppins">
            Our multidisciplinary approach to education ensures students receive a well-rounded experience, blending theoretical knowledge with real-world applications. As the leading university in Gurugram, we commit to providing students with the necessary skills and knowledge to thrive in the ever-changing world.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 xl:gap-5 px-4 md:px-0">
            <Button 
               href="#" 
               variant="outline"
               icon={ArrowUpRight}
               iconPosition="right"
               iconClassName="rotate-45 group-hover:rotate-0 transition-transform"
            >
              Explore Programs
            </Button>
            
            <Button 
               href="#" 
               variant="outline"
               icon={Download}
               iconPosition="right"
               iconClassName="group-hover:translate-y-0.5 transition-transform"
            >
              Download Brochure
            </Button>
 
            <Button 
               href="#" 
               variant="primary"
               icon={ArrowUpRight}
               iconPosition="right"
               className="px-6 hover:bg-[#CB000D]/80"
            >
              Apply Now
            </Button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5 mb-8 xl:mb-10">
          {JOURNEY_VIDEOS.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-[3px] shadow-xl mb-5 bg-black">
                <Image 
                   src={video.thumbnail}
                   alt={video.title}
                   fill
                   sizes="(max-width: 768px) 100vw, 33vw"
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#CB000D] text-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-105 transition-all duration-300">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                </div>

                {/* <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-tighter">
                  {video.duration}
                </div> */}
              </div>

              <div className="px-4 text-center">
                <h3 className="text-white font-poppins font-normal text-[16px] mb-1.5 leading-[1.4] transition-colors group-hover:text-secondary max-w-[320px] mx-auto">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
           <Button 
            href="#" 
            variant="outline"
            icon={PlayCircle}
            className="h-auto py-3 px-6 text-[12px] tracking-[0.2em] border-white/20"
            iconClassName="group-hover:scale-110 transition-transform"
          >
            Watch More
          </Button>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
