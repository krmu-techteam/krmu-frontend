"use client";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    title: "State of the Art Infrastructure",
    description: "Modern Labs, Well-Equipped Library, Smart Classrooms, 35+ Acres of Lush Green Campus, Artistic & Modern Infrastructure",
    image: "/admission2/sai.png",
    alt: "Infrastructure",
  },
  {
    title: "Global Exposure and Partnerships",
    description: "Collaboration with Esteemed Learning Partners, Partnership with International Universities, International Study Tours, Seminars and Workshops with International Speakers",
    image: "/admission2/gep.png",
    alt: "Global Exposure",
  },
  {
    title: "Multidisciplinary Approach",
    description: "Specially Curated Programmes for Holistic Learning, Theory Blended with Practical Learning, Experienced Mentors, Industry Relevant Curriculum",
    image: "/admission2/ma.png",
    alt: "Approach",
  },
  {
    title: "Campus Life",
    description: "A sprawling, eco-friendly campus inspiring creativity, State-of-the-art sports facilities, fitness centres, and recreational zones, On-campus dining options with a variety of cuisines to suit every taste",
    image: "/admission2/cl.png",
    alt: "Campus Life",
  },
  {
    title: "Placements and Career Support",
    description: "Over 800 On-Campus Recruiters, 100% Placement Assistance, Placement Interview Training, Internship Opportunities",
    image: "/wp-content/images/pc-support.png",
    alt: "Placements",
  },
];

const Admission2WhatMakes = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? cards : cards.slice(0, 4);

  return (
    <section className="py-8 md:py-16 px-4 md:px-0">
      <div className="max-w-[1440px] mx-auto w-full md:px-48">
        <h3 className="mb-5 text-2xl md:text-[40px] font-bold text-black text-center leading-[1.2]">
          What Makes K.R. Mangalam <br className="hidden md:block" /> University The Best?
        </h3>
        <p className="font-medium text-center text-gray-600 max-w-4xl mx-auto">
          K.R. Mangalam University has established itself as the pinnacle of
          excellence fostering innovation and personal growth in students. By
          offering a learning environment that nurtures creativity, leadership,
          critical thinking, and other valuable skills essential to excel in
          this ever-evolving world.
        </p>
      </div>
<div className="flex items-center justify-center pt-5">
  <Link
            href="/campus-life/virtual-tour"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center  justify-center gap-2 bg-[#0060aa] text-white px-8 py-3 rounded-sm md:rounded-full font-medium border border-transparent hover:bg-white hover:text-[#0060aa] hover:border-[#0060aa] transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
          >
            Explore our Campus <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
</div>
      <div className="max-w-[1440px] mx-auto w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="flex items-stretch md:items-center gap-0 bg-white rounded-sm md:rounded-md border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
            >
              <div className="relative w-[110px] flex-shrink-0 overflow-hidden min-h-[110px] md:h-[140px]">
                <Image
                  src={card.image}
                  fill
                  className="object-cover md:object-contain"
                  alt={card.alt}
                />
              </div>
              <div className="flex-1 p-4 md:p-5">
                <h5 className="text-md md:text-xl font-bold text-[#0060aa] mb-1 leading-tight">
                  {card.title}
                </h5>
                <p 
                  className="text-[14px] md:text-[15px] text-gray-600 leading-snug line-clamp-2 md:line-clamp-none" 
                  title={card.description}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 mt-12">
          {cards.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex justify-center  items-center gap-2 border-2 border-[#0060aa] text-[#0060aa] px-8 py-2.5 rounded-sm md:rounded-full font-semibold cursor-pointer hover:bg-[#0060aa] hover:text-white transition-all duration-300"
            >
              {showAll ? "Show Less" : "Read More"}
              {showAll ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          )}

           
        </div>
      </div>
    </section>
  );
};

export default Admission2WhatMakes;

