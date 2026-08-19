import React from "react";
import Image from "next/image";
import SectionDivider from "@/components/common/SectionDivider";

const ScholarshipBannerSection = () => {
  return (
    <section className="relative w-full  pb-10 md:pt-10 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      {/* Dark Navy Card Container */}
      <div className="relative w-full bg-[#0B1823] rounded-[4px] lg:rounded-[6px] min-h-fit md:min-h-[329px] flex items-center p-5 sm:p-8 lg:px-14 lg:py-8 overflow-visible shadow-xl">
        {/* Left Content Area */}
        <div className="w-full md:max-w-[420px] lg:max-w-[580px] z-10 py-1 sm:py-2">
          <h2 className="font-serif text-[26px] sm:text-3xl md:text-[38px] lg:text-[42px] font-medium text-white tracking-tight leading-tight">
            Scholarship 2026
          </h2>
          <p className="font-poppins text-[14px] sm:text-[16px] text-gray-300 leading-relaxed max-w-xl mt-3 md:mt-4 text-justify md:text-left">
            We offer up to 100% scholarships for academic toppers, sports
            achievers, and students across multiple categories, ensuring that
            ambition, hard work, and potential always find their way forward.
          </p>
          <div className="mt-4 sm:mt-6">
            <a
              href="/admission/scholarship"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins text-[14px] md:text-[16px] font-medium text-white underline underline-offset-4 hover:text-[#E5C268] transition-colors inline-block"
            >
              Explore
            </a>
          </div>
        </div>

        {/* Right Image Graphic Area (Overflowing Top out of 329px Card) */}
        <div className="hidden md:block absolute bottom-0 right-2 lg:right-10 w-[380px] lg:w-[440px] h-[329px] overflow-visible pointer-events-none">
          {/* Semi-circular gradient background arch at bottom */}
          <div className="absolute bottom-0 right-0 w-[280px] lg:w-[370px] h-[170px] lg:h-[195px] z-0">
            <Image
              src="/images/programs/s-bg.png"
              alt="Scholarship Gradient Background"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Graduate Student cutout extending ~120px ABOVE the 329px card */}
          <div className="absolute bottom-0 right-4 lg:right-8 z-10 w-[240px] lg:w-[330px] h-[410px] lg:h-[450px]">
            <Image
              src="/images/programs/s-girl.png"
              alt="Graduate Student"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ScholarshipBannerSection;
