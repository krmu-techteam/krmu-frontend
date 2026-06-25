import React from "react";
import Image from "next/image";
import { getCareerOutcomeContent } from "../lib/getContent";
import { Fraunces, Inter, Playfair_Display } from "next/font/google";
import * as Icons from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const CareerOutcome = () => {
  const data = getCareerOutcomeContent();
  const content = data.careerOutcome;

  // Helper to dynamically render Lucide Icons by name
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-[35px] h-[35px]  text-[#B08233]" />;
    }
    return <Icons.HelpCircle className="w-7 h-7 text-[#B58E3D]" />;
  };

  return (
    <>
      <section className="w-full bg-[#F7F0E0] py-16 md:py-20 text-[#012D52]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* TOP SECTION: Heading & Stats */}
          <div className="">
            <span
              className={`${inter.className} text-[#B58E3D] text-xs sm:text-[15px] font-bold tracking-[0.17em] uppercase block mb-4`}
            >
              {content.badge}
            </span>
            <h2
              className={`${fraunces.className} text-[#0F2A4D] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-medium max-w-4xl mb-12`}
            >
              {content.title}
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {content.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#FDF7EB] border border-[#EADCB9] rounded-[5px]  flex flex-col justify-between shadow-[0_4px_20px_rgba(181,142,61,0.05)] min-h-[220px] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full h-[3px] bg-[#7D662F] top-[3px]" />
                  <div className="p-8">
                    <div>
                      <div className="mb-6">{renderIcon(stat.icon)}</div>
                      <div
                        className={`${fraunces.className} text-[#0F2A4D] text-3xl sm:text-[38px] font-semibold mb-3`}
                      >
                        {stat.value}
                      </div>
                    </div>
                    <div>
                      <div className="text-[#0F2A4D] font-bold text-[14px] sm:text-[16px] mb-1">
                        {stat.label}
                      </div>
                      <div className="text-[#0F2A4D] text-[13px] sm:text-[16px] tracking-[0.06em]">
                        {stat.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FDF7EB] py-16 md:py-20 text-[#012D52] ">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* BOTTOM SECTION: Four things a typical MBA doesn't give you */}
          <div className="flex w-full justify-center items-end">
            {/* Left Column: Image */}
            <div className="w-[45%]">
              <h3
                className={`${fraunces.className} text-[#0F2A4D] text-2xl sm:text-3xl md:text-[38px] leading-tight font-medium mb-6 `}
              >
                {content.sectionTwo.heading}
              </h3>
              <div className="relative w-full max-w-[470px] max-h-[461px] aspect-[1/1] sm:aspect-[4/3] lg:aspect-[1/1] rounded-[10px] overflow-hidden shadow-xl shadow-slate-900/10">
                <Image
                  src={content.sectionTwo.image}
                  alt="MBA Students discussing career outcomes"
                  width={1024}
                  height={1024}
                  className="object-cover w-full h-full "
                />
              </div>
            </div>

            {/* Right Column: Features List */}
            <div className="w-[60%] flex flex-col gap-4">
              <div className="flex flex-col gap-4 ">
                {content.sectionTwo.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F7F0E0] rounded-[8px] p-5 flex items-start gap-4"
                  >
                    <div className="mt-3 flex-shrink-0">
                      {renderIcon(feature.icon)}
                    </div>
                    <div className="flex flex-col">
                      <h4
                        className={`${fraunces.className} text-[#012D52] text-[17px] sm:text-[22px] font-semibold text-[#012D52] mb-1`}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-[#012D52] text-[13px] sm:text-[16px]   leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerOutcome;
