"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import SectionDivider from "@/components/common/SectionDivider";
import { TESTIMONIALS } from "@/features/home";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TestimonialItem } from "@/lib/constants/testimonial";

export function TestimonialsSection({
  title,
  testimonialsData,
}: {
  title?: string;
  testimonialsData?: TestimonialItem[];
}) {
  const list =
    testimonialsData && testimonialsData.length > 0
      ? testimonialsData.map((t) => ({
          id: t.id,
          name: t.profilename,
          role: t.profiledesignation,
          quote: t.profileinfo,
          image: t.profile?.url || "/modules/home/testimonial/t1.png",
        }))
      : TESTIMONIALS;

  return (
    <section className="relative w-full py-8 md:py-12 xl:py-20 font-poppins max-w-[1530px] mx-auto">
      {/* Precision Spec Lines - Gradient Style */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-[1530px] mx-auto relative z-10">
        <div className="px-6 md:px-8 xl:px-16">
          <SectionTitle
            title={title || "What our Learners say?"}
            className="mb-0"
          />
        </div>

        <Carousel
          showArrows={false}
          autoplayDelay={6000}
          fade={true}
          options={{ loop: true, duration: 60 }}
          className="relative lg:pb-4 [&>div:last-child]:lg:absolute [&>div:last-child]:lg:bottom-0 [&>div:last-child]:lg:right-16 [&>div:last-child]:lg:w-[520px] [&>div:last-child]:lg:justify-center"
          activeDotClassName="bg-brand-gold w-2"
        >
          {list.map((t, index) => (
            <div
              key={t.id}
              className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center pt-8 mb-4 px-6 md:px-8 xl:px-16"
            >
              {/* Left Column - Content */}
              <div className="flex flex-col md:min-h-[400px] relative pt-4 md:pt-0">
                <div className="absolute -top-6 -left-2 md:-top-6 md:-left-8 pointer-events-none z-0">
                  <Image
                    src="/modules/home/testimonial/quote.png"
                    alt="Quote Icon"
                    width={130}
                    height={100}
                    className="w-16 md:w-[100px] h-auto brightness-0 invert opacity-70"
                    unoptimized
                  />
                </div>

                <div className="relative h-auto mb-8 w-full z-10 pt-4 md:pt-6">
                  <p className="text-lg md:text-xl tracking-tight text-justify lg:text-[32px] text-white font-serif font-medium md:leading-[1.4] opacity-90">
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

                <button className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors group cursor-pointer w-fit mb-0 lg:mb-0">
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
              <div className="relative flex justify-center lg:justify-end lg:pt-6">
                <div className="relative rounded-[4px] w-full max-w-[520px] aspect-square">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-[4px]"
                    priority={index === 0}
                  />
                  {/* Subtle glass overlay frame */}
                  <div className="absolute inset-0 pointer-events-none"></div>
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
