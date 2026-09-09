import Image from "next/image";
import Link from "next/link";

const StudentHeroSection = () => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 xl:pt-40 px-5">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-14">
        {/* Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xs sm:text-sm md:text-base font-medium tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.4em] uppercase text-[#8d5552] mb-3">
            For Students
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-semibold text-[#001836] mb-2 md:mb-5 font-newsreader">
            Comprehensive placement guidelines, schedules and policies.
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 mb-5">
            For the current academic year. Review all requirements before portal
            access.
          </p>
          <Link
            href="#"
            className="
                  inline-flex w-full max-w-[224px]
                  items-center justify-center
                  bg-[#001836] px-5 py-3.5
                  text-sm font-medium text-white
                  transition-opacity hover:opacity-90
                  sm:py-4
                "
          >
            Book your slot
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/placements/students/stud-hero.jpg"
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

export default StudentHeroSection;
