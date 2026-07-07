import React from "react";
import { getExpectationsContent } from "../lib/getContent";
import { Fraunces, Inter, Poppins } from "next/font/google";
import { CircleArrowRight } from "lucide-react";

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

const Expectations = () => {
  const data = getExpectationsContent();
  const content = data.expectations;

  return (
    <section className="w-full bg-[#F7F0E0] text-[#012D52]">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-20">
        {/* Header */}
        <div className="mb-8">
          <span
            className={`${inter.className} text-[#7A5821] text-xs sm:text-[11px] font-medium tracking-[1.54px] uppercase block mb-2`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} text-[#0F2A4D] text-2xl sm:text-3xl md:text-4xl lg:text-[38px]  font-semibold max-w-4xl`}
          >
            {content.title}
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {content.sections.map((section) => {
            const isFullWidth = section.id === "ask-of-us";

            return (
              <div
                key={section.id}
                className={`border border-[#BDB092] rounded-[10px] bg-[#FDF7EB] px-6 py-5 flex flex-col justify-between ${
                  isFullWidth ? "col-span-1 md:col-span-2" : "col-span-1"
                }`}
              >
                <div>
                  {/* Card Title */}
                  <h3
                    className={`${fraunces.className} text-xl sm:text-2xl md:text-[21px]  text-[#0F2A4D] mb-3`}
                  >
                    {section.title}
                  </h3>

                  {/* Card Subtitle */}
                  <p
                    className={`${inter.className} text-sm sm:text-[14px] text-[#0F2A4D]  mb-6`}
                  >
                    {section.subtitle}
                  </p>

                  {/* List Items */}
                  <ul className="space-y-2 mb-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CircleArrowRight
                          size={15}
                          className="flex-shrink-0 mt-[2px]"
                        />
                        <span
                          className={`${inter.className} text-sm sm:text-[14px] text-[#0F2A4D]`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Text (For Card 2 - What will you become?) */}
                {section.footerText && (
                  <div className="">
                    <p
                      className={`${inter.className} text-xs sm:text-[13px]  text-[#0F2A4D] `}
                    >
                      {section.footerText}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expectations;
