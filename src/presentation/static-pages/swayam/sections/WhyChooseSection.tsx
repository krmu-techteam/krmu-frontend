import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface FeatureCardProps {
  title: string;
  gradient: string;
  icon: string;
}

const featureCards: FeatureCardProps[] = [
  {
    title: "Free Online Courses",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #C9F5D1 100%)",
    icon: "/swayam/icons/a1.png",
  },
  {
    title: "Credit Transfer",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #FFD89A 100%)",
    icon: "/swayam/icons/a2.png",
  },
  {
    title: "National Platform",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #FFD3D3 100%)",
    icon: "/swayam/icons/a3.png",
  },
  {
    title: "Digital Certificates",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #D2EBFF 100%)",
    icon: "/swayam/icons/a4.png",
  },
  {
    title: "Expert Faculty",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #FFEFBF 100%)",
    icon: "/swayam/icons/a5.png",
  },
  {
    title: "Flexible Learning",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #FFD2DB 100%)",
    icon: "/swayam/icons/a6.png",
  },
  {
    title: "Self-paced Learning",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #D2EBFF 100%)",
    icon: "/swayam/icons/a7.png",
  },
  {
    title: "Interactive Assessments",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #E2CDBE 100%)",
    icon: "/swayam/icons/a8.png",
  },
];

const navButtons = [
  "Student Dashboard",
  "FAQs",
  "SWAYAM SOP",
  "SWAYAM Advisory Committee",
];

const bulletPoints = [
  "University has officially adopted SWAYAM MOOCs.",
  "Students can earn academic credits.",
  "Credit transfer is permitted as per UGC Regulations and University approval.",
  "Flexible and technology-enabled learning ecosystem.",
  "Supports NEP 2020 vision for multidisciplinary and lifelong learning.",
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="relative w-full pt-8 overflow-hidden">
      {/* Background Image: uni-back.jpg */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/swayam/uni-back.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] pb-20">
        {/* Top Action Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
          {navButtons.map((buttonText, index) => (
            <button
              key={index}
              className="min-w-[217px] px-6 h-[48px] lg:h-[60px] flex items-center justify-center  text-[#000000] font-bold text-[16px] border-2 border-[#000000] rounded-[4px] lg:rounded-[10px]  cursor-pointer"
            >
              <span className="text-center whitespace-nowrap">
                {buttonText}
              </span>
            </button>
          ))}
        </div>

        {/* Main Translucent Card Container */}
        <div
          className="mx-auto max-w-[1260px] rounded-[4px] lg:rounded-[10px] p-6 sm:p-8 xl:p-16 relative overflow-hidden flex flex-col justify-between"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(255, 255, 255, 0.25) 100%)",
          }}
        >
          {/* Top Half: Image & Why Choose SWAYAM Bullet Points */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6 lg:mb-8">
            {/* Left Image Column (Flush Left Alignment, Exact Figma 402x481px) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full lg:w-[402px] max-w-full h-[340px] sm:h-[420px] lg:h-[481px] rounded-[16px] overflow-hidden shrink-0">
                <Image
                  src="/swayam/why-girl.jpg"
                  alt="Why Choose SWAYAM Student"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Right Bullet Points Column (Clean Pure Text without dark background shadow) */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <h2 className="text-white text-2xl md:text-[28px] xl:text-[42px] font-bold tracking-tight">
                Why Choose SWAYAM
              </h2>

              <ul className="space-y-2 lg:space-y-4">
                {bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-[24px] h-[24px] text-white shrink-0 mt-0.5" />
                    <span className="text-white text-[16px] md:text-[18px] xl:text-[22px] font-semibold">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* "Key Features" Gradient Banner Container (Edge-to-Edge Full Width) */}
          <div
            className="w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] lg:w-[calc(100%+8rem)] -mx-6 sm:-mx-8 lg:-mx-16 h-[50px] lg:h-[60px] xl:h-[74px] flex items-center justify-center my-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(217, 217, 217, 0) 4.33%, #FFFFFF 49.52%, rgba(115, 115, 115, 0) 100%)",
            }}
          >
            <h3 className="text-slate-900 text-2xl lg:text-[34px] xl:text-[42px] font-bold tracking-wide">
              Key Features
            </h3>
          </div>

          {/* 8 Key Feature Cards Grid (Increased Horizontal Left/Right Gap: gap-x-6 lg:gap-x-8) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-6 w-full mx-auto justify-between mb-0">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="w-full min-h-[145px] rounded-[4px] lg:rounded-[10px] p-3 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  background: card.gradient,
                }}
              >
                {/* Figma Spec: 88px x 88px circle background, 72px x 72px icon image inside */}
                <div
                  className="w-[88px] h-[88px] rounded-full flex items-center justify-center mb-2 relative shrink-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.44)",
                  }}
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={72}
                    height={72}
                    className="object-contain w-[72px] h-[72px] p-[6px]"
                  />
                </div>
                <h4 className="text-slate-900 text-[16px] font-normal">
                  {card.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
