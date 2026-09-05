import { Newsreader } from "next/font/google";
import Image from "next/image";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1287px] border-b border-[#ccc] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-16 xl:py-20">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-8 lg:gap-12">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#7A1F2B] sm:text-base">
              For Students
            </p>

            <h1
              className={`${newsreader.className} mb-5 text-4xl font-semibold leading-[1.15] sm:text-5xl md:text-[48px] lg:text-6xl lg:leading-[70px]`}
            >
              Comprehensive <br className="hidden lg:block" />
              placement guidelines, <br className="hidden lg:block" />
              schedules and policies.
            </h1>

            <p className="mb-7 text-base leading-relaxed sm:text-lg md:mb-8 lg:mb-10 lg:text-xl">
              For the current academic year. Review all requirements before
              portal access.
            </p>

            <button className="w-full max-w-[224px] bg-[#001836] px-6 py-3 text-base text-white transition duration-300 hover:bg-[#002957] sm:px-10 sm:text-lg">
              Book your slot
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/test/img-1.jpg"
              alt="Hero Image"
              width={606}
              height={387}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
