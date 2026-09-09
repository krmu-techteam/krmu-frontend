import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 xl:pt-40 px-5">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-14">
        {/* Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xs sm:text-sm md:text-base font-medium tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.4em] uppercase text-[#8d5552] mb-3">
            Placement Records
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-semibold text-[#001836] mb-2 md:mb-5 font-newsreader">
            Every offer, every number, verifiable.
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 md:max-w-[468px]">
            Sector-wise trends, school-by-school outcomes and a searchable log
            of individual accepted offers — published in full for the 2025–26
            cohort.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/placements/records/record-hero.jpg"
            alt="Placement records"
            width={544}
            height={385}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;