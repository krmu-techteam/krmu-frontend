"use client";
import React, { useState, useEffect, useRef } from "react";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getTranslateXMultiplier, getCircularOffset, calculate3DCardStyles } from "@/features/programs";

type Props = {
  slideimages: StrapiMedia[];
};

const BeyondClassroomCarousel = ({ slideimages }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [translateXMultiplier, setTranslateXMultiplier] = useState(160);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const total = slideimages.length;

  // Track responsive screen widths safely to prevent hydration mismatches
  useEffect(() => {
    const handleResize = () => {
      setTranslateXMultiplier(getTranslateXMultiplier(window.innerWidth));
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(handleNext, 4500);
  };

  useEffect(() => {
    autoplayRef.current = setInterval(handleNext, 4500);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [total]);

  if (!slideimages || total === 0) return null;

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    resetAutoplay();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="pt-6 overflow-hidden flex flex-col items-center select-none w-full max-w-[1530px] mx-auto px-4 md:px-6 lg:px-10 xl:px-16">
      {/* 3D Coverflow Viewport Container */}
      <div 
        className="relative w-full h-[220px] sm:h-[320px] md:h-[360px] lg:h-[400px] flex items-center justify-center [transform-style:preserve-3d] [perspective:1200px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slideimages.map((rec, i) => {
          const offset = getCircularOffset(i, activeIndex, total);
          const isActive = offset === 0;
          const cardStyle = calculate3DCardStyles(offset, translateXMultiplier);

          return (
            <div
              key={rec.id || i}
              style={cardStyle}
              onClick={() => {
                setActiveIndex(i);
                resetAutoplay();
              }}
              className={`absolute w-[280px] sm:w-[440px] md:w-[500px] lg:w-[560px] h-[160px] sm:h-[260px] md:h-[300px] lg:h-[340px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#0055A4]/40 transition-[transform,opacity,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [backface-visibility:hidden] [transform-style:preserve-3d] will-change-[transform,opacity] cursor-pointer group`}
            >
              {/* Slide Image */}
              <Image
                src={rec.url}
                alt={rec.alternativeText || `Gallery image ${i + 1}`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                unoptimized
              />

              {/* Cover Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? "opacity-75 group-hover:opacity-90" : "opacity-95"
                }`} 
              />
            </div>
          );
        })}
      </div>

      {/* Navigation and Dots controls */}
      <div className="flex items-center justify-center gap-6 z-20 w-full">
        <button
          onClick={() => {
            handlePrev();
            resetAutoplay();
          }}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#0055A4]/40 hover:bg-[#0055A4]/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Progress indicators */}
        <div className="flex items-center gap-2">
          {slideimages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                resetAutoplay();
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            handleNext();
            resetAutoplay();
          }}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#0055A4]/40 hover:bg-[#0055A4]/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default BeyondClassroomCarousel;
