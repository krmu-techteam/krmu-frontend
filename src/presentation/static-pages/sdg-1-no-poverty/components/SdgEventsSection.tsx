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
    image:
      "https://www.krmangalam.edu.in/wp-content/uploads/2025/11/kathputli.jpg",
    pdfUrl:
      "https://www.krmangalam.edu.in/pdfs/sdg/policy-on-no-poverty/supporting-sustainable-livelihoods-through-education-and-cultural-entrepreneurship.pdf",
  },
  {
    id: "event-2",
    title: "Report on Training & Capacity Building Activities",
    image: "https://www.krmangalam.edu.in/wp-content/uploads/2025/11/DST.jpg",
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

        {/* 2 Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {eventItems.map((item) => (
            <a
              key={item.id}
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#081a28] border border-[#0D7377]/40 hover:border-[#00BAC2] rounded-[10px] overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a1824]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Title Bar */}
              <div className="p-4 sm:p-5 bg-[#071724]">
                <h3 className="text-base sm:text-lg font-serif font-medium text-[#d8c397] group-hover:text-[#00BAC2] transition-colors leading-snug">
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
