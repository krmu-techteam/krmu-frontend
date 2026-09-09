import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative pt-28 xl:pt-40 bg-[url('/placements/main/pl-hero-bg-image.webp')] bg-cover bg-left-top">
      {/* <Image
        src=""
        alt="Hero Background"
        fill
        className="object-cover object-left w-full"
        priority 
      /> */}
      <div className="max-w-6xl mx-auto w-full z-10 relative flex flex-col md:flex-row items-center lg:items-start px-5 xl:px-0 gap-5 sm:gap-0">
        <div className="w-full md:w-1/2 font-poppins">
          <h3 className="text-base font-medium tracking-[0.4em] uppercase text-[#8d5552] mb-1.5">
            Placement
          </h3>
          <h1 className="text-4xl lg:text-6xl font-semibold text-[#001836] mb-2 md:mb-6 md:max-w-sm font-newsreader">
            Your Career Starts Here. 92% placed.
          </h1>
          <p className="text-xl md:max-w-[468px] mb-6">
            Verifiable data, exceptional outcomes. Discover why top global
            recruiters consistently choose our graduates for leadership roles.
          </p>
          <div className="space-x-2 space-y-2">
            <Link
              href="#"
              className="bg-[#001836] border border-[#001836] text-white py-3 px-5 shadow-[0px_6px_16px_rgba(0,23,51,0.25)] inline-block"
            >
              View Detailed Report
            </Link>
            <Link
              href="#"
              className="border border-[#001836] text-[#001732] bg-white xl:bg-transparent py-3 px-5 inline-block"
            >
              Partner with Us
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/placements/main/pl-hero-girl.webp"
            alt="Hero Girl"
            className="object-contain w-[320px] sm:w-fit"
            width={522}
            height={625}
          />
        </div>    
      </div>
    </section>
  );
};

export default HeroSection;
