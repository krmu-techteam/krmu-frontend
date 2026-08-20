import React from "react";
import Image from "next/image";
import { getLogoContent } from "../lib/getContent";
import Link from "next/link";

const trackLinks: Record<string, string> = {
  "Analytics track": "/programs/mba",
  "Fintech track": "/programs/mba-fintech",
  "Digital Marketing track": "/programs/mba-digital-marketing",
};

export const LogoSection = () => {
  const data = getLogoContent();
  const logos = data.logo;

  return (
    <section className="relative w-full bg-[#FDF7EB]">
      <div className="max-w-[1200px] mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
        {/* Label */}
        <h2 className="font-inter font-medium text-[#0F2A4D] text-center sm:text-left text-[13px] sm:text-[14px] leading-[21.7px] tracking-[0.7px] uppercase shrink-0">
          Specialisations and Curriculum <br />
          Delivered with
        </h2>

        {/* Track Logos Map */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {logos.map((item, index) => (
            <Link
              key={index}
              href={trackLinks[item.heading] || "#"}
              target="_blank"
              className="group transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-col justify-end h-[66px] sm:h-[72px] items-center text-center">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={100}
                  height={50}
                  className="mb-1.5 object-contain h-[34px] sm:h-[38px] md:h-[40px] w-auto transition-opacity group-hover:opacity-90 mx-auto"
                />
                <h2 className="font-poppins text-[#0F2A4D] text-center text-[11px] sm:text-[12px] font-medium whitespace-nowrap">
                  {item.heading}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* Harvard Business Impact */}
        <h2 className="font-fraunces text-[#0F2A4D] text-center text-[18px] sm:text-[20px] font-bold whitespace-nowrap shrink-0">
          Harvard Business Impact
        </h2>
      </div>
    </section>
  );
};

export default LogoSection;
