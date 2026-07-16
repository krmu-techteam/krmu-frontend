import React from "react";
import { getLeaveWithContent } from "../lib/getContent";
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

const LeaveWith = () => {
  const data = getLeaveWithContent();
  const content = data.leaveWith;

  // Helper to dynamically render Lucide Icons by name
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return (
        <IconComponent className="w-[24px] h-[24px] text-[#CFB176] group-hover:scale-105 transition-transform duration-300" />
      );
    }
    return <Icons.HelpCircle className="w-[24px] h-[24px] text-[#CFB176]" />;
  };

  return (
    <section className="w-full  bg-[radial-gradient(40%_80%_at_15%_30%,#024178_0%,#012D52_50%,#012D52_100%)] text-white">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-14">
        {/* Header */}
        <div className="mb-10 ">
          <span
            className={`${inter.className} text-[#E3B259] text-xs sm:text-[15px] font-semibold tracking-[0.7px] uppercase block mb-4`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-medium max-w-4xl`}
          >
            {content.title}
          </h2>
        </div>

        {/* 3x2 Grid Box */}
        <div className="grid grid-cols-1  md:grid-cols-3 border border-[#E7C26840] rounded-[10px] overflow-hidden bg-transparent mb-6">
          {content.items.map((item, idx) => (
            <div
              key={idx}
              className={`group p-6 px-8 flex md:flex-col gap-4 md:gap-0 justify-start h-full md:min-h-[169px] border-white/10 hover:bg-white/5 transition-all duration-300
                ${idx < 5 ? "border-b" : "border-b-0"}
                ${idx < 3 ? "md:border-b" : "md:border-b-0"}
                ${(idx + 1) % 3 !== 0 ? "md:border-r" : "md:border-r-0"}
              `}
            >
              {/* Icon Container */}
              <div className="mb-0 sm:mb-4">{renderIcon(item.icon)}</div>

              {/* Description */}
              <p
                className={`${fraunces.className} text-white text-[15px] sm:text-[16px] lg:text-[19px] leading-relaxed font-semibold pr-4 lg:pr-8`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="pl-0 md:pl-2">
          <p
            className={`${fraunces.className} text-white/90 text-[14px] sm:text-[15px] lg:text-[22px] font-semibold leading-relaxed tracking-[0.7px]`}
          >
            {content.footnote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeaveWith;
