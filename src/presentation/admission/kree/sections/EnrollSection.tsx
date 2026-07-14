"use client";

import React, { useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { KREEEnrollAcc } from "@/lib/types/kree";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
  kreeEnrolData: KREEEnrollAcc[];
};

const EnrollSection = ({ kreeEnrolData }: Props) => {
  // Track selected school tab on desktop
  const [activeTabId, setActiveTabId] = useState<number | string>(
    kreeEnrolData?.[0]?.id || ""
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (id: number | string) => {
    setActiveTabId(id);
    if (containerRef.current) {
      const yOffset = -140; // Offset to clear the sticky header
      const y = containerRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Find currently active item details for desktop view
  const activeItem = kreeEnrolData?.find((item) => item.id === activeTabId) || kreeEnrolData?.[0];

  return (
    <section className="relative z-4 py-[6%] lg:py-[5%] px-16">
      <div className="max-w-[1530px] mx-auto w-full">
        {/* Title Section */}
        <h2 className="heading-primary text-center mt-2.5 mb-[15px]">
          KREE 2026
        </h2>

        <p className="mb-8 text-center font-poppins w-full md:w-2/3 mx-auto text-white/90 text-sm md:text-base leading-relaxed">
          KR Entrance Exam is a gateway to enrolment for the preferred
          Undergraduate and Postgraduate programme at K.R. Mangalam University.
          The entrance exam comprises sections on objective-type questions for
          sentence completion, matching, multiple-choice, and true-false.
        </p>

        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold font-serif text-white">
            Programmes For Enrolment
          </h3>
          <h5 className="text-lg md:text-xl mt-2 mb-[15px] font-poppins text-white/70">
            Undergraduate and Postgraduate Programmes
          </h5>
        </div>

        {/* 1. DESKTOP LAYOUT (Side-by-Side Tabs) - Visible on lg and above */}
        <div ref={containerRef} className="hidden lg:flex gap-8 items-start">
          {/* Left Column: Vertical tab list of school headings */}
          <div className="w-[35%] sticky top-[150px] flex flex-col gap-2">
            {kreeEnrolData?.map((item) => {
              const isActive = item.id === activeTabId;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full text-left font-poppins py-2.5 px-4 rounded-[4px] border transition-all duration-300 text-sm font-medium cursor-pointer ${
                    isActive
                      ? "bg-[#0055A4] border-[#0055A4] text-white shadow-[0_4px_15px_rgba(0,85,164,0.2)]"
                      : "bg-[#132431]/60 border-gray-600/50 text-white/80 hover:bg-[#132431] hover:text-white"
                  }`}
                >
                  {item.heading}
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected school content pane */}
          <div className="w-[65%] bg-[#132431]/60 rounded-[6px] border border-gray-600/40 p-8 shadow-xl sticky top-[150px]">
            {activeItem ? (
              <div className="prose prose-invert max-w-none font-poppins text-white/95 leading-relaxed kree-toggles">
                <h4 className="text-xl font-semibold text-white mb-6 pb-3 border-b border-white/10">
                  {activeItem.heading}
                </h4>
                <div
                  dangerouslySetInnerHTML={{ __html: activeItem.kree_enrol_html }}
                />
              </div>
            ) : (
              <div className="text-white/50 text-center py-12">
                Select a school to view programmes.
              </div>
            )}
          </div>
        </div>

        {/* 2. MOBILE & TABLET LAYOUT (Standard Accordion) - Visible below lg */}
        <div className="lg:hidden">
          <Accordion
            type="single"
            collapsible
            className="w-full kree-accordion"
            defaultValue=""
          >
            {kreeEnrolData?.map((item) => (
              <AccordionItem
                key={item.id}
                value={`kree-${item.id}`}
                className="mb-2.5"
              >
                <AccordionTrigger className="bg-[#132431] rounded-[3px] border border-gray-500 font-poppins py-[15px] px-5 text-white text-base cursor-pointer hover:no-underline">
                  {item.heading}
                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-4 font-poppins text-white text-balance py-5 md:p-5 kree-toggles">
                  <div
                    className="prose text-white/95"
                    dangerouslySetInnerHTML={{ __html: item?.kree_enrol_html }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer Subtext */}
        <p className="text-right font-poppins text-sm mt-4 text-muted-foreground">
          ** Subject to Approval
        </p>
      </div>

      {/* Injecting Lucide ChevronRight icon SVG as bullets for list items */}
      <style>{`
        .kree-toggles ul {
          list-style-type: none !important;
          padding-left: 0 !important;
        }
        .kree-toggles ul li {
          position: relative !important;
          padding-left: 26px !important;
          list-style-type: none !important;
          margin-bottom: 12px !important;
        }
        .kree-toggles ul li::before {
          content: "" !important;
          position: absolute !important;
          left: 0 !important;
          top: 7px !important;
          width: 16px !important;
          height: 16px !important;
          background-size: contain !important;
          background-repeat: no-repeat !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-opacity='0.75' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='m12 5 7 7-7 7'/%3E%3C/svg%3E") !important;
        }
        /* Custom scrollbar for the right side inner scrollable container */
        .kree-scroll-container::-webkit-scrollbar {
          width: 6px;
        }
        .kree-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .kree-scroll-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15) ;
          border-radius: 3px;
        }
        .kree-scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3) ;
        }
      `}</style>

      <SectionDivider />
    </section>
  );
};

export default EnrollSection;
