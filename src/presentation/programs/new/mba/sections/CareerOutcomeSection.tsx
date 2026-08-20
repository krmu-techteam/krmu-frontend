import React from "react";
import Image from "next/image";
import { getCareerOutcomeContent } from "../lib/getContent";
import * as Icons from "lucide-react";

export interface CareerOutcomeSectionProps {
  slug?: string;
}

export const CareerOutcomeSection = ({ slug }: CareerOutcomeSectionProps) => {
  const data = getCareerOutcomeContent();
  const content = data.careerOutcome;

  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return (
        <IconComponent
          strokeWidth={1.2}
          className="w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] text-[#B08233]"
        />
      );
    }
    return (
      <Icons.HelpCircle strokeWidth={1} className="w-7 h-7 text-[#B58E3D]" />
    );
  };

  return (
    <>
      {/* ── SECTION 1: Badge, Heading & Stats Grid ── */}
      <section className="w-full bg-[#F7F0E0] text-[#012D52]">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-10">
          {/* Badge */}
          <span className="font-inter text-[#87601A] text-[10px] sm:text-[12px] lg:text-[15px] font-semibold tracking-[0.7px] uppercase block mb-2 sm:mb-3">
            {content.badge}
          </span>

          {/* Heading */}
          <h2 className="font-fraunces text-[#0F2A4D] text-xl sm:text-2xl md:text-3xl lg:text-[38px] xl:text-[42px] font-semibold max-w-4xl mb-6 sm:mb-8">
            {content.title}
          </h2>

          {/* Stats Grid — 1 col mobile, 3 col md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {content.stats.map((stat, idx) => {
              const isLast = idx === content.stats.length - 1;
              const shouldCenterOnSm = content.stats.length % 2 === 1 && isLast;

              return (
                <div
                  key={idx}
                  className={`
  bg-[#FDF7EB] border border-[#EADCB9] rounded-[5px]
  flex flex-col justify-start
  shadow-[0_4px_20px_rgba(181,142,61,0.05)]
  min-h-[180px] sm:min-h-[200px] md:min-h-[210px]
  transition-transform duration-300 hover:-translate-y-1
  ${shouldCenterOnSm ? "sm:col-span-2 sm:max-w-[calc(50%-12px)] sm:mx-auto md:col-span-1 md:max-w-none" : ""}
`}
                >
                  <div className="relative w-full h-[3px] bg-[#7D662F]" />

                  <div className="p-5 sm:p-6 md:p-7">
                    <div>
                      <div className="mb-3 sm:mb-4">
                        {renderIcon(stat.icon)}
                      </div>

                      <div className="font-fraunces text-[#0F2A4D] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-2">
                        {stat.value}
                      </div>
                    </div>

                    <div>
                      <div className="font-inter text-[#0F2A4D] font-bold text-[13px] sm:text-[14px] md:text-[15px] mb-1">
                        {stat.label}
                      </div>

                      <div className="font-inter font-light text-[#0F2A4D] text-[12px] sm:text-[13px] md:text-[15px] tracking-[0.06em]">
                        {stat.desc}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Image + Features List ── */}
      <section className="w-full bg-[#FDF7EB] text-[#012D52]">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-10">
          {/* Title on Left side constrained to image width */}
          <div className="mb-4 sm:mb-5">
            <h3 className="font-fraunces text-[#0F2A4D] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-[1.2] font-medium max-w-[496px]">
              {content.sectionTwo.heading}
            </h3>
          </div>

          {/* Row containing Image (left) and Cards (right) */}
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-12 items-start">
            {/* Left Column: Image */}
            <div className="w-full lg:w-[496px] max-w-[496px] shrink-0">
              <div className="relative w-full aspect-[496/486] overflow-hidden shadow-xl shadow-slate-900/10 rounded-[4px]">
                <Image
                  src={
                    slug === "mba-fintech"
                      ? content.sectionTwo.image
                      : slug === "mba-digital-marketing"
                        ? "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/A2_5582d5cb1d.png"
                        : slug === "mba"
                          ? "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1541_fa1c297a76.jpg"
                          : content.sectionTwo.image
                  }
                  alt={
                    slug === "mba-fintech"
                      ? "MBA Fintech students discussing career outcomes at K.R. Mangalam University"
                      : slug === "mba-digital-marketing"
                        ? "MBA in Digital Marketing students discussing career outcomes at KRMU placement session"
                        : slug === "mba"
                          ? "MBA students discussing career outcomes at KRMU placement session"
                          : ""
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 496px"
                />
              </div>
            </div>

            {/* Right Column: Features List with compact gap */}
            <div className="flex-1 w-full flex flex-col gap-2.5 sm:gap-[23px]">
              {content.sectionTwo.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F0E0] rounded-[8px] p-3.5 sm:p-6 flex items-start gap-3.5 border border-[#E8DFC8]/60 transition-all duration-300 hover:shadow-md"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {renderIcon(feature.icon)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-fraunces text-[#012D52] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[19px] font-semibold mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="font-inter font-light text-[#012D52] text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerOutcomeSection;
