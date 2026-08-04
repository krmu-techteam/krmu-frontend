import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#09152b] min-h-auto lg:min-h-[550px] pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-0 lg:pb-0 text-white flex flex-col items-center">
      {/* Background Pattern Layer using /swayam/a.png */}
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          backgroundImage: "url('/swayam/a.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px auto",
          backgroundPosition: "top left",
        }}
      />

      {/* Subtle Overlay for text readability */}
      <div className="absolute inset-0 bg-[#071224]/60 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 max-w-[1440px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-4 xl:gap-1 items-center">
          {/* Girl Image Column (FIRST on mobile/tablet, SECOND on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end items-end relative mt-2 sm:mt-4 lg:mt-0 px-4 sm:px-6 lg:px-0">
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[400px] xl:w-[495px] xl:max-w-[495px] h-[340px] sm:h-[440px] md:h-[520px] lg:h-[500px] xl:h-[718px]">
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

          {/* Text Content Column: 100% full width edge-to-edge on mobile/tablet */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6 lg:space-y-8 bg-[#071224] lg:bg-transparent -mx-4 sm:-mx-6 lg:mx-0 px-6 sm:px-10 lg:px-0 py-8 lg:py-0 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-full">
            {/* SWAYAM Logo Badge Container */}
            <div className="w-[150px] sm:w-[187px] h-[65px] sm:h-[80px] bg-white rounded-[4px] lg:rounded-[10px] flex items-center justify-center p-2 shadow-md">
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
            <p className="text-white text-base sm:text-[18px] lg:text-[18px] xl:text-[25px] font-medium tracking-normal max-w-6xl leading-relaxed md:leading-[1.5]">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
