"use client";

import React from "react";
import {   ArrowRight } from "lucide-react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import SectionDivider from "@/components/common/SectionDivider";
import { TESTIMONIALS } from "../constants";
 

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-6 md:py-10 lg:py-16 xl:py-20 font-poppins">
      {/* Precision Spec Lines - Gradient Style */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-[42px] font-serif font-bold text-white text-left leading-tight md:leading-[1.2] px-6 lg:px-12">
          What our Learners say?
        </h2>

        <Carousel showArrows={false} autoplayDelay={6000}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="grid grid-cols-1 lg:grid-cols-10 items-center px-12 md:px-16 pt-12 md:pt-12 mb-4 gap-8 lg:gap-6"
            >
              {/* Left Column - Content */}
              <div className="lg:col-span-6 flex flex-col md:min-h-[400px] relative pt-4 md:pt-0">
                <div className="absolute -top-10 left-0 md:-top-12 md:-left-16 pointer-events-none">
                  <Image 
                    src="/modules/home/testimonial/quote.png" 
                    alt="Quote Icon" 
                    width={130} 
                    height={100} 
                    className="w-20 md:w-[150px] h-auto brightness-0 invert opacity-20"
                  />
                </div>

                <div className="relative  h-auto mb-8 max-w-[690px] z-10 pt-4 md:pt-6">
                  <p className="text-lg md:text-[23px] text-white font-serif font-medium leading-relaxed md:leading-[36px] opacity-90">
                    {t.quote}
                  </p>
                </div>

                <div className="w-16 h-1 bg-brand-gold mb-6"></div>

                <div className="mb-8 md:mb-10">
                  <h4 className="text-white font-poppins font-semibold text-base md:text-[18px] leading-tight mb-1">
                    {t.name}
                  </h4>
                  <p className="text-white/60 font-poppins font-normal text-sm md:text-[14px]">
                    {t.role}
                  </p>
                </div>

                <button className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors group cursor-pointer w-fit mb-12 lg:mb-0">
                  <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all">
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                  <span className="font-poppins font-medium text-xs md:text-[15px] tracking-wide">
                    View All Testimonials
                  </span>
                </button>
              </div>

              {/* Right Column - Image Card */}
              <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-square rounded-sm overflow-hidden border border-white/10 bg-brand-navy-deep">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={t.id === 1}
                  />
                  {/* Subtle glass overlay frame */}
                  <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <SectionDivider />
    </section>
  );
}
