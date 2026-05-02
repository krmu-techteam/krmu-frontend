"use client";
import { useState } from "react";
import { HiglightCard } from "@/lib/types/school-programme";
import ProgrammeHighlightCard from "../school-prog-global-comps/ProgrammeHighlightCard";

type Props = {
  heading: string;
  highlightHeading: string;
  desc: string;
  highlights: HiglightCard[];
};

const ProgrammeHighlight = ({
  heading,
  highlightHeading,
  desc,
  highlights,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayCount = isExpanded ? highlights?.length : 6;
  const visibleHighlights = highlights?.slice(0, displayCount);

  return (
    <section className="prog-global-padding bg-[#f9f9f9] py-8 md:py-16">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="text-[28px] md:text-[45px] font-bold text-gray-900 leading-tight tracking-tight">
            {heading} {highlightHeading}
          </h2>
          <p className="text-gray-600 text-base md:text-xl font-medium">{desc}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-10 px-4 md:px-0">
          {visibleHighlights &&
            visibleHighlights.map((highlight) => (
              <ProgrammeHighlightCard
                key={highlight.id}
                title={highlight?.title}
                desc={highlight?.subtitle}
                highlightimg={highlight?.highlightimage}
              />
            ))}
        </div>

        {highlights && highlights.length > 6 && (
          <div className="flex justify-center mt-8 px-4 md:px-0">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:px-8 w-full md:w-auto py-2 text-center md:py-3 border-2 border-[#0a41a1] text-[#0a41a1] font-semibold rounded-md hover:bg-[#0a41a1] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgrammeHighlight;
