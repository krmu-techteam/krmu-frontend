"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ProminentRecruiterContent } from "../admission/PGType";
import { Crown, CheckCircle } from "lucide-react";

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
      // Calculate item width including gap (gap-4 = 16px)
      const itemWidth = (scrollWidth + 16) / sliderPeople.length;
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
        const itemWidth = (scrollWidth + 16) / sliderPeople.length;

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
      const itemWidth = (scrollWidth + 16) / sliderPeople.length;
      sliderRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050816_0%,#111827_40%,#312E81_75%,#0060AA_100%)] py-8 md:py-12 xl:py-20">
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
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(255,255,255,0.05),transparent 20%),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)`,
          backgroundSize: "auto, 64px 64px, 64px 64px",
        }}
      ></div>

      <div className="container relative z-10 mx-auto max-w-[1530px] px-6 md:px-7 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] gap-10 items-start">
          {/* Featured Profile Card */}
          {featuredPerson && (
            <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-[1.6rem] shadow-[0_24px_50px_rgba(0,0,0,0.4)] lg:sticky lg:top-[110px] backdrop-blur-xl transition-all duration-300 hover:border-amber-500/20">
              <div className="relative rounded-xl overflow-hidden mb-[1.4rem] bg-slate-900/80 aspect-[5/5] border border-white/5 group">
                <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[0.65rem] font-black tracking-widest uppercase shadow-md">
                  <Crown size={12} className="fill-slate-950 stroke-[2]" />
                  Top Achiever
                </span>
                <Image
                  src={featuredPerson.profileImage.src}
                  alt={featuredPerson.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="font-['Rajdhani',sans-serif] text-center text-[2.2rem] font-bold text-white leading-tight">
                {featuredPerson.name}
              </div>
              <div className="text-[0.85rem] text-center font-bold text-[#1d86d6] mt-2 uppercase tracking-wider">
                Placed at {featuredPerson.companyName}
              </div>
              <div className="font-['Rajdhani',sans-serif] text-center text-[3rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 mt-[0.6rem] leading-none">
                {featuredPerson.package}
              </div>
              <p className="text-slate-300/80 text-[0.9rem] text-center leading-[1.7] mt-[1.2rem] border-t border-white/5 pt-4">
                A standout KRMU placement story that reflects global exposure,
                practical learning, and strong career outcomes.
              </p>
            </div>
          )}

          {/* Content Area */}
          <div className="min-w-0">
            {/* Header */}
            <div className="mb-4">
              <h2 className="font-['Rajdhani',sans-serif] text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] text-white">
                The World&apos;s Leading Companies
                <br />
                <span className="text-white">Hire Our Talent</span>
              </h2>
              <p className="max-w-[700px] text-white/70 text-[1.05rem] leading-[1.8] mt-3">
                KRMU students secure opportunities with top brands through
                strong industry connections, career mentoring, and
                placement-driven learning designed for real hiring success.
              </p>
            </div>

            {/* Slider Section Container */}
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>

              {/* Slider List */}
              <div
                ref={sliderRef}
                onScroll={checkScroll}
                className="grid grid-auto-flow-col auto-cols-[calc(100%-1rem)] md:auto-cols-[50%] lg:auto-cols-[calc((100%-32px)/4)] gap-6 overflow-x-auto snap-x scrollbar-hide py-6 pl-6 pr-8"
                style={{ gridAutoFlow: "column" }}
              >
                {sliderPeople.map((item, idx) => (
                  <div key={idx} className="snap-start min-w-0">
                    <div className="bg-slate-950/30 hover:bg-slate-900/50 border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 text-center h-full transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] flex flex-col items-center justify-between">
                      <div className="w-full">
                        <div className="relative mx-auto mb-4 w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-white/50 to-[#035EA8]/50 shadow-lg">
                          <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-950 bg-slate-900">
                            <Image
                              src={item.profileImage.src}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="font-bold text-base text-white tracking-wide line-clamp-1">
                          {item.name}
                        </div>
                        <div className="text-[0.7rem] text-slate-400 mt-1 mb-3 font-semibold uppercase tracking-wider line-clamp-1">
                          {item.companyName}
                        </div>
                      </div>
                      <div className="w-full mt-auto">
                        <div className="font-['Rajdhani',sans-serif] text-[1.95rem] font-bold text-white leading-none">
                          {item.package}
                        </div>
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[0.65rem] font-bold tracking-widest uppercase mt-3 border border-emerald-500/20">
                          <CheckCircle size={10} className="stroke-[3]" />
                          Placed
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Centered Dots Navigation */}
              <div className="flex justify-center gap-2 mt-4">
                {sliderPeople.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
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
