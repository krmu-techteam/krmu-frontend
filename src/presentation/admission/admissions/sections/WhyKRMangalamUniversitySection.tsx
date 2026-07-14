"use client";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { WHY_KRMANGALAM_UNIVERSITY_CARDS } from "@/features/admission/admissions/constants";
import Button from "@/components/common/Button";
import SectionDivider from "@/components/common/SectionDivider";

 

const WhyKRMangalamUniversitySection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? WHY_KRMANGALAM_UNIVERSITY_CARDS : WHY_KRMANGALAM_UNIVERSITY_CARDS.slice(0, 4);

  return (
    <section className="relative z-4 py-8 md:py-12 lg:py-16 px-6 md:px-8 lg:px-11 xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full  text-center">
        <h3 className="font-serif text-3xl text-white md:text-4xl lg:text-[42px] leading-[1.2] font-bold mb-4">
          What Makes K.R. Mangalam <br className="hidden md:block" /> University
          The Best?
        </h3>
        <p className="text-white/90 text-[16px] md:text-[17px] font-poppins mb-2 lg:mb-5 leading-relaxed mx-auto max-w-4xl">
          K.R. Mangalam University has established itself as the pinnacle of
          excellence fostering innovation and personal growth in students. By
          offering a learning environment that nurtures creativity, leadership,
          critical thinking, and other valuable skills essential to excel in
          this ever-evolving world.
        </p>
      </div>
      <div className="flex items-center justify-center pt-5">
        <Button
          href="/campus-life/virtual-tour"
          target="_blank"
          variant="primary"
          icon={ArrowRight}
          iconPosition="right"
          className="font-poppins w-fit text-[17px]"
          iconClassName="group-hover:translate-x-1.5 transition-transform duration-300"
        >
          Explore our Campus
        </Button>
      </div>
      <div className="max-w-[1440px] mx-auto w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="flex items-stretch md:items-center gap-0 bg-[#132737] rounded-sm border border-[#132737] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
            >
              <div className="relative w-[110px] md:w-[120px] flex-shrink-0 overflow-hidden min-h-[130px] md:h-[140px] ">
                <Image
                  src={card.image}
                  fill
                  className="object-cover w-full md:object-cover "
                  alt={card.alt}
                />
              </div>
              <div className="flex-1 p-4 md:p-5">
                <h5 className="text-md md:text-[19px] font-poppins font-medium text-white mb-1 leading-tight">
                  {card.title}
                </h5>
                <p
                  className="text-[14px] md:text-[15px] font-poppins text-white/80 leading-snug "
                  title={card.description}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 mt-6 lg:mt-12">
          {WHY_KRMANGALAM_UNIVERSITY_CARDS.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex justify-center  items-center gap-2 text-white font-poppins text-md cursor-pointer hover:text-white/80 transition-colors duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
              {showAll ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default WhyKRMangalamUniversitySection;
