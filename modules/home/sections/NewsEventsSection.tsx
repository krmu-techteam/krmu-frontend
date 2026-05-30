'use client';

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from '@/components/common/Carousel';
import { HOME_EVENTS_CONFIGS } from '../constants';

export default function NewsEventsSection() {
  return (
    <section 
      className="relative w-full py-6 md:py-10 lg:py-16 xl:py-20 overflow-hidden font-poppins"
    >
      
      {/* Precision Spec Glow */}
      <div 
        className="absolute -top-[100px] left-[88%] -translate-x-1/2 w-[948px] h-[948px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.05)_0%,transparent_85%)] rounded-full blur-[140px] z-0 pointer-events-none transition-opacity"
        style={{ opacity: 0.66 }}
      ></div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6 md:mb-8">
          <h2 className="text-3xl md:text-[45px] font-serif font-bold text-white leading-tight">News and Events</h2>
          <Link href="#" className="flex cursor-pointer items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium group">
            <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center transition-all shadow-lg">
              <ArrowRight size={16} />
            </div>
            <span className="font-normal tracking-wide text-md">Explore</span>
          </Link>
        </div>

        <Carousel
          options={{ loop: true, align: 'start' }}
          showArrows={false}
          autoplayDelay={5000}
          containerClassName="-ml-5"
          slideClassName="pl-1 basis-[85%] md:basis-1/2 lg:basis-1/4"
        >
          {HOME_EVENTS_CONFIGS.map((event, i) => (
            <div 
              key={i} 
              className="group cursor-pointer p-2"
            >
              <div className="relative aspect-4/5 md:aspect-square rounded-md overflow-hidden mb-6 bg-white/5">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                   <span className="text-white text-[12px] font-normal tracking-wide flex items-center gap-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     Read Full Story <ArrowUpRight size={14} className="text-brand-gold" />
                   </span>
                </div>
              </div>
              
              <p className="text-white/90 text-[16px] tracking-wide font-normal mb-1">
                Published On: {event.date}
              </p>
              <h3 className="text-white font-serif text-lg md:text-xl leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
                {event.title}
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
