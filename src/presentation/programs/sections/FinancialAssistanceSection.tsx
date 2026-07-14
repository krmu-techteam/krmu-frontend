import React from "react";
import { FinancialAssistanceSectionProps } from "@/features/programs/types";
import { FinancialPointCard, FinancialPartnerLogo } from "../components";

const FinancialAssistanceSection = ({
  heading,
  highlightheading,
  description,
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  point7,
  logos,
}: FinancialAssistanceSectionProps) => {
  const points = [point1, point2, point3, point4, point5, point6, point7].filter(Boolean);

  return (
    <section className="prog-global-padding py-8 md:p-6 lg:py-10 xl:py-20 px-4 lg:px-16 2xl:px-0">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Header Title and Description */}
        <div className="common-prog-container !max-w-7xl">
          <h2 className="heading-primary mb-2 2xl:mb-4">
            {heading}{" "}{highlightheading} 
          </h2>
          <p className="text-lg md:text-[17px] font-poppins text-white/90 px-36 text-center md:mb-4">
            {description}
          </p>
        </div>

        {/* Points Layout */}
        <div className="mt-4 lg:mt-6 2xl:mt-10 flex flex-col gap-8">
          {/* Row 1: First 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {points.slice(0, 4).map((point, index) => (
              <FinancialPointCard
                key={index}
                point={point}
                className="h-full"
              />
            ))}
          </div>

          {/* Row 2: Remaining Items (Centered) */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-8">
            {points.slice(4).map((point, index) => (
              <FinancialPointCard
                key={index + 4}
                point={point}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(26%-18px)]"
              />
            ))}
          </div>
        </div>

        {/* Financial Partner Logos Grid */}
        <div className="mt-4 lg:mt-12 2xl:mt-16 flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-4 xl:gap-8 w-full sm:w-full">
            {logos &&
              logos.map((logo) => (
                <FinancialPartnerLogo
                  key={logo?.id}
                  logo={logo}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAssistanceSection;
