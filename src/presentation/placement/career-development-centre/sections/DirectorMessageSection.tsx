"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { DirectorMessageProps } from "@/features/placement/career-development-centre/types";
import { useGSAPScrollReveal } from "@/hooks/useGSAPScrollReveal";

const DirectorMessageSection = ({
  title,
  directorName,
  designation,
  email,
  contactNumber,
  profileImage,
  message,
}: DirectorMessageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply the reusable GSAP scroll reveal hook
  useGSAPScrollReveal(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative  px-6 sm:px-10 lg:px-12 xl:px-16 overflow-hidden bg-transparent"
    >
      <div className="max-w-[1530px] mx-auto w-full text-white z-10 relative py-12 sm:py-16 md:py-20">
        
        {/* Section Header */}
        <h3 className="gsap-reveal-up heading-primary mb-10 lg:mb-14 text-center opacity-0">
          {title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-start">
          
          {/* Left side: Profile Card */}
          <div className="lg:col-span-4 gsap-reveal-up opacity-0">
            <div className="group relative flex flex-col bg-[#0b1a27] rounded-[12px] border border-white/10 hover:border-[#00A0E3] transition-colors duration-300 overflow-hidden shadow-xl max-w-[400px] mx-auto">
              
              {/* Image container */}
              <div className="relative aspect-square w-full bg-white/5 overflow-hidden border-b border-white/10">
                <Image
                  src={profileImage.url}
                  alt={profileImage.alternativeText || directorName}
                  fill
                  sizes="(max-width: 1024px) 400px, 400px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text / Contact Info */}
              <div className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-[20px] sm:text-[22px] font-serif font-semibold text-white leading-tight mb-1.5">
                    {directorName}
                  </h4>
                  <p className="text-[#00A0E3] text-[12px] sm:text-[13px] font-poppins font-medium uppercase tracking-wider mb-4">
                    {designation}
                  </p>
                </div>

                <div className="space-y-3.5 border-t border-white/10 pt-4">
                  {email && (
                    <div className="flex items-center gap-3">
                      <Mail size={15} className="text-white/60 shrink-0" />
                      <Link
                        href={`mailto:${email}`}
                        className="text-white/80 hover:text-[#00A0E3] text-[13px] sm:text-[14px] font-poppins transition-colors break-all"
                      >
                        {email}
                      </Link>
                    </div>
                  )}
                  {contactNumber && (
                    <div className="flex items-center gap-3">
                      <Phone size={15} className="text-white/60 shrink-0" />
                      <Link
                        href={`tel:${contactNumber}`}
                        className="text-white/80 hover:text-[#00A0E3] text-[13px] sm:text-[14px] font-poppins transition-colors"
                      >
                        {contactNumber}
                      </Link>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right side: Message paragraphs */}
          <div className="lg:col-span-8 gsap-stagger-up-container flex flex-col justify-center h-full">
            <div className="space-y-6 lg:space-y-8">
              {message?.map((msg, index) => (
                <p
                  key={index}
                  className="gsap-stagger-item text-white/90 font-poppins text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] font-light md:text-justify opacity-0"
                >
                  {msg?.content}
                </p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DirectorMessageSection;
