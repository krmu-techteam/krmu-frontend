import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-8 md:pt-40 md:pb-10  font-poppins">
      <div className="mx-auto max-w-[1536px] px-6 md:px-8 lg:px-10">
        <div className="w-full rounded-[6px] relative z-10 overflow-hidden bg-[#07141E]">
          {/* Background Image - natural aspect ratio, no white corners */}
          <Image
            src="/images/programme/hero/program-hero.jpg"
            alt="Programs Hero Background"
            width={1536}
            height={500}
            priority
            className="w-full h-auto object-contain rounded-[4px] block"
          />

          {/* Hero Overlay Content */}
          <div className="absolute inset-0 z-10 w-full md:w-1/2 px-6 py-4 sm:py-8 md:pl-8 lg:pl-16 flex flex-col justify-center text-center md:text-left">
            <span className="text-white/80 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] font-light font-poppins block">
              Academics
            </span>
            <div className="space-y-1 sm:space-y-2 md:space-y-4 mb-2 sm:mb-4">
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white font-serif leading-tight">
                Programs
              </h1>
              <div className="w-32 sm:w-52 lg:w-90 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent md:from-white/40 md:via-white/20 md:to-transparent mx-auto md:ml-0" />
            </div>
            <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg font-light font-poppins max-w-lg leading-relaxed mx-auto md:ml-0 hidden sm:block">
              Transform your Life with the Right Programme
            </p>
            <Link
              href="/contact"
              className="w-fit mx-auto md:ml-0 mt-2 sm:mt-4 md:mt-6 block"
            >
              <button className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-[#0161B0] text-white/90 rounded-[3px] capitalize font-normal text-[12px] sm:text-[14px] md:text-[15px] tracking-wide hover:bg-[#0161B0]/90 transition-all duration-300 shadow-lg shadow-[#0161B0]/10 cursor-pointer">
                Book a Guidance Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
