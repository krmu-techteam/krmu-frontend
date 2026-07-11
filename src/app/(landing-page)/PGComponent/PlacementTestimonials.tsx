"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ProminentRecruiterContent } from "../admission/PGType";

type Props = {
  data: ProminentRecruiterContent;
};

const PlacementTestimonials = ({ data }: Props) => {
  const featuredPerson = data?.people?.[0];
  const sliderPeople = data?.people?.slice(1) || [];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    if (sliderRef.current && sliderPeople.length > 0) {
      const { scrollLeft, scrollWidth } = sliderRef.current;
      // Calculate item width including gap (gap-6 = 24px)
      const itemWidth = (scrollWidth + 24) / sliderPeople.length;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, sliderPeople.length - 1));
    }
  }, [sliderPeople.length]);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && sliderPeople.length > 0) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const itemWidth = (scrollWidth + 24) / sliderPeople.length;
        
        // If we've reached the end, go back to start
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by one item width
          sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderPeople.length]);

  const scrollToIndex = (index: number) => {
    if (sliderRef.current && sliderPeople.length > 0) {
      const { scrollWidth } = sliderRef.current;
      const itemWidth = (scrollWidth + 24) / sliderPeople.length;
      sliderRef.current.scrollTo({ left: index * itemWidth, behavior: "smooth" });
    }
  };

  return (
    <section
      id="placements"
      className="relative py-10 px-0 overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(11,103,194,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.08),transparent_35%),linear-gradient(135deg,rgba(248,250,252,1),rgba(241,245,249,1)_50%,rgba(226,232,240,0.8)_100%)]"
    >
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(255,255,255,0.1),transparent 20%),linear-gradient(90deg,rgba(20,59,108,0.04) 1px,transparent 1px),linear-gradient(rgba(20,59,108,0.04) 1px,transparent 1px)`,
          backgroundSize: 'auto, 64px 64px, 64px 64px'
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] gap-10 items-start">
          
          {/* Featured Profile Card */}
          {featuredPerson && (
            <div className="bg-white/94 border border-[#143b6c]/10 rounded-lg p-[1.6rem] shadow-[0_24px_54px_rgba(31,67,118,0.12)] lg:sticky lg:top-[110px] backdrop-blur-md">
              <div className="relative rounded-md overflow-hidden mb-[1.4rem] bg-gradient-to-br from-[#0b67c2]/10 to-[#143b6c]/05 aspect-[4/5]">
                <span className="absolute top-4 left-4 inline-flex items-center px-[0.8rem] py-[0.45rem] rounded-md bg-white/95 text-[#0b67c2] text-[0.7rem] font-bold tracking-widest uppercase shadow-sm">
                  Top Achiever
                </span>
                <Image
                  src={featuredPerson.profileImage.src}
                  alt={featuredPerson.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="font-['Rajdhani',sans-serif] text-[2.2rem] font-bold text-[#12233d] leading-tight">
                {featuredPerson.name}
              </div>
              <div className="text-[0.9rem] font-semibold text-[#0b67c2]/90 mt-2 uppercase tracking-wide">
                Placed at {featuredPerson.companyName}
              </div>
              <div className="font-['Rajdhani',sans-serif] text-[2.8rem] font-bold text-[#0b67c2] mt-[0.6rem] leading-none">
                {featuredPerson.package}
              </div>
              <p className="text-[#12233d]/65 text-[0.9rem] leading-[1.7] mt-[1rem]">
                A standout KRMU placement story that reflects global exposure, practical
                learning, and strong career outcomes.
              </p>
            </div>
          )}

          {/* Content Area */}
          <div className="min-w-0">
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-['Rajdhani',sans-serif] text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] text-[#12233d]">
                The World&apos;s Leading Companies<br />
                <span className="text-[#0b67c2]">Hire Our Talent</span>
              </h2>
              <p className="max-w-[700px] text-[#12233d]/70 text-[1.05rem] leading-[1.8] mt-3">
                KRMU students secure opportunities with top brands through strong
                industry connections, career mentoring, and placement-driven learning designed for real
                hiring success.
              </p>
            </div>
            {/* Slider Section Container */}
            <div className="relative p-6 md:p-8 rounded-lg bg-white/50 border border-white shadow-[0_32px_64px_rgba(31,67,118,0.08)] backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="h-1px flex-grow bg-gradient-to-r from-transparent via-[#143b6c]/10 to-transparent"></div>
              </div>

              {/* Slider List */}
              <div
                ref={sliderRef}
                onScroll={checkScroll}
                className="grid grid-auto-flow-col auto-cols-[calc(100%-1rem)] md:auto-cols-[calc(50%-1rem)] lg:auto-cols-[calc(25%-1rem)] gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2"
                style={{ gridAutoFlow: 'column' }}
              >
                {sliderPeople.map((item, idx) => (
                  <div key={idx} className="snap-start min-w-0">
                    <div className="bg-white rounded-md p-7 text-center shadow-[0_12px_28px_rgba(31,67,118,0.06)] hover:shadow-[0_18px_38px_rgba(31,67,118,0.12)] transition-all duration-300 h-full">
                      <div className="relative mx-auto mb-5 w-[90px] h-[90px]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0b67c2]/20 to-[#143b6c]/10 -m-1"></div>
                        <Image
                          src={item.profileImage.src}
                          alt={item.name}
                          width={90}
                          height={90}
                          className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-md bg-white"
                          loading="lazy"
                        />
                      </div>
                      <div className="font-bold text-lg text-[#12233d] line-clamp-1">
                        {item.name}
                      </div>
                      <div className="text-[0.75rem] text-[#12233d]/50 mt-1 mb-3 font-medium uppercase tracking-wider line-clamp-1">
                        {item.companyName}
                      </div>
                      <div className="font-['Rajdhani',sans-serif] text-[1.8rem] font-bold text-[#0b67c2] leading-none">
                        {item.package}
                      </div>
                      <div className="text-[0.65rem] text-[#12233d]/40 font-bold tracking-[0.2em] uppercase mt-2">
                        Placed
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Centered Dots Navigation */}
              <div className="flex justify-center gap-2 mt-8">
                {sliderPeople.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "w-8 bg-[#0b67c2]" : "w-2.5 bg-[#143b6c]/20 hover:bg-[#143b6c]/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementTestimonials;
