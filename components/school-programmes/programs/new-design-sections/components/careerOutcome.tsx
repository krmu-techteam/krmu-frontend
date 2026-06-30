import React from "react";
import Image from "next/image";
import { getCareerOutcomeContent } from "../lib/getContent";
import { Fraunces, Inter, Poppins } from "next/font/google";
import * as Icons from "lucide-react";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

type Props = {
  slug?: string;
};

const CareerOutcome = ({ slug }: Props) => {
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
      <section className="w-full bg-[#F7F0E0]  text-[#012D52]">
        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-20">
          {/* Badge */}
          <span
            className={`${inter.className} text-[#87601A] text-[10px] sm:text-[12px] lg:text-[15px] font-semibold tracking-[0.7px] uppercase block mb-3 sm:mb-4`}
          >
            {content.badge}
          </span>

          {/* Heading */}
          <h2
            className={`${fraunces.className} text-[#0F2A4D] text-xl sm:text-2xl md:text-3xl lg:text-[38px] xl:text-[42px]  font-semibold max-w-4xl mb-8 sm:mb-10 `}
          >
            {content.title}
          </h2>

          {/* Stats Grid — 1 col mobile, 3 col md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {content.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#FDF7EB] border border-[#EADCB9] rounded-[5px] flex flex-col justify-start shadow-[0_4px_20px_rgba(181,142,61,0.05)] min-h-[180px] sm:min-h-[200px] md:min-h-[220px] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full h-[3px] bg-[#7D662F] " />
                <div className="p-5 sm:p-6 md:p-8">
                  <div>
                    <div className="mb-4 sm:mb-6">{renderIcon(stat.icon)}</div>
                    <div
                      className={`${fraunces.className} text-[#0F2A4D] text-2xl sm:text-3xl md:text-[38px] font-semibold mb-2 sm:mb-3`}
                    >
                      {stat.value}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#0F2A4D] font-bold text-[13px] sm:text-[14px] md:text-[16px] mb-1">
                      {stat.label}
                    </div>
                    <div
                      className={`${inter.className} font-light text-[#0F2A4D] text-[12px] sm:text-[13px] md:text-[16px] tracking-[0.06em]`}
                    >
                      {stat.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Image + Features List ── */}
      <section className="w-full bg-[#FDF7EB]  text-[#012D52]">
        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-20">
          {/* Stack on mobile, side-by-side on lg+ */}
          <div className="flex flex-col lg:flex-row w-full justify-center items-end gap-4">
            {/* Left Column: Heading + Image */}
            <div className="w-full lg:w-[45%]">
              <h3
                className={`${fraunces.className} text-[#0F2A4D] text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] leading-tight font-medium mb-5 sm:mb-6`}
              >
                {content.sectionTwo.heading}
              </h3>
              <div className="relative w-full max-w-full lg:max-w-[500px] min-h-[461px] overflow-hidden shadow-xl shadow-slate-900/10">
                <Image
                  src={
                    slug === "mba-fintech"
                      ? content.sectionTwo.image
                      : slug === "mba-digital-marketing"
                        ? "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1541_1_c2efd0af99.jpg"
                        : slug === "mba"
                          ? "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1541_fa1c297a76.jpg"
                          : ""
                  }
                  alt="MBA Students discussing career outcomes"
                  width={1024}
                  height={1024}
                  className="object-cover w-full h-[461px]"
                />
              </div>
            </div>

            {/* Right Column: Features List */}
            <div className="w-full lg:w-[55%] flex flex-col gap-3 sm:gap-4">
              {content.sectionTwo.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F0E0] rounded-[8px] p-4 sm:p-5 flex items-start gap-3 sm:gap-4"
                >
                  <div className="mt-1 sm:mt-3 flex-shrink-0">
                    {renderIcon(feature.icon)}
                  </div>
                  <div className="flex flex-col">
                    <h4
                      className={`${fraunces.className} text-[#012D52] text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold mb-1`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={`${inter.className} font-light text-[#012D52] text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] leading-relaxed`}
                    >
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

export default CareerOutcome;
