import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#001732] min-h-auto lg:min-h-[620px] pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-0 text-white flex flex-col items-center justify-center">
      {/* Background Pattern Layer using /swayam/swayam-hero-bg.png */}
      <div
        className="absolute inset-0 pointer-events-none no-repeat"
        style={{
          backgroundImage: "url('/swayam/swayam-hero-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1520px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6 items-center">
          {/* Text Content Column: Centered below navbar header */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-8 flex flex-col items-start space-y-5 sm:space-y-6 lg:space-y-7 bg-[#071224] lg:bg-transparent -mx-4 sm:-mx-6 lg:mx-0 px-6 sm:px-10 lg:px-0 py-6 lg:py-4 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-full">
            {/* SWAYAM Logo Badge Container */}
            <div className="w-[150px] sm:w-[187px] h-[65px] sm:h-[80px] bg-white rounded-[4px] lg:rounded-[10px] flex items-center justify-center p-0">
              <Image
                src="/swayam/swayam-logo.png"
                alt="SWAYAM Logo"
                width={187}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Main Text Description */}
            <p className="text-white text-base sm:text-[18px] lg:text-[21px] xl:text-[25px] font-semibold tracking-normal w-full max-w-full leading-relaxed md:leading-[1.5]">
              SWAYAM (Study Webs of Active Learning for Young Aspiring Minds) is
              the Government of India&apos;s national online learning platform
              developed by the Ministry of Education. It provides high-quality
              online courses offered by IITs, IIMs, Central Universities, NPTEL,
              CEC, AICTE, IGNOU and other National Coordinators, enabling
              learners to access quality education anytime and anywhere.
            </p>

            {/* Visit SWAYAM Button */}
            <div className="pt-1 sm:pt-2">
              <a
                href="https://swayam.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[160px] lg:w-[204px] h-[48px] lg:h-[52px] bg-[#CB000D] hover:bg-[#b80000] text-white text-[16px] lg:text-lg font-semibold lg:font-bold rounded-[4px] lg:rounded-[10px] shadow-md hover:shadow-lg transition-colors duration-200"
              >
                Visit SWAYAM
              </a>
            </div>
          </div>

          {/* Girl Image Column: Anchored flush to bottom while centered in layout */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end items-end relative mt-0 px-4 sm:px-6 lg:px-0 w-full lg:w-fit lg:ml-auto">
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[440px] xl:w-[495px] xl:max-w-[495px] h-[360px] sm:h-[460px] md:h-[540px] lg:h-[580px] xl:h-[718px]">
              <Image
                src="/swayam/swayam-hero-girl.png"
                alt="SWAYAM Learner"
                fill
                sizes="(max-width: 1024px) 100vw, 495px"
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
