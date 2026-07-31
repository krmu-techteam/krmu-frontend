"use client";

import React from "react";
import Image from "next/image";

interface EventItem {
  id: string;
  title: string;
  image: string;
  pdfUrl: string;
}

const eventItems: EventItem[] = [
  {
    id: "event-1",
    title: "Local Start-Up Assistance",
    image: "/images/sustainability/sdg-1-no-poverty/a1.jpg",
    pdfUrl:
      "https://www.krmangalam.edu.in/pdfs/sdg/policy-on-no-poverty/supporting-sustainable-livelihoods-through-education-and-cultural-entrepreneurship.pdf",
  },
  {
    id: "event-2",
    title: "Report on Training & Capacity Building Activities",
    image: "/images/sustainability/sdg-1-no-poverty/a2.jpg",
    pdfUrl: "https://krmangalam.edu.in/pdfs/sdg/events/sdg-1/Report-1.pdf",
  },
];

export const SdgEventsSection: React.FC = () => {
  return (
    <section className="w-full text-white py-8 sm:py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto space-y-8 sm:space-y-10">
        {/* Header Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
          Events And Activities
        </h2>

        {/* Event Cards Grid with exact Figma specs */}
        <div className="flex flex-wrap gap-3">
          {eventItems.map((item) => (
            <a
              key={item.id}
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-[274px] h-[329px] overflow-hidden p-[4px] shadow-lg transition-all duration-300 shrink-0 cursor-pointer"
              style={{
                border: "1px solid",
                borderImageSource:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #173452 100%)",
                borderImageSlice: 1,
                background:
                  "linear-gradient(180deg, #061623 0%, rgba(24, 52, 83, 0) 100%)",
              }}
            >
              {/* Image Box: 264px x 251px */}
              <div className="relative w-[264px] h-[251px] overflow-hidden bg-[#0a1824] shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="264px"
                />
              </div>

              {/* Title Bar */}
              <div className="px-2 py-2 flex items-start grow">
                <h3 className="text-[16px] font-serif font-medium text-[#E7C268] group-hover:text-[#E7C268]/90 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
