import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden pt-32 pb-8 md:pt-40 md:pb-10 px-4 md:px-8 font-poppins">
      <div className="mx-auto max-w-[1536px] lg:px-3 ">
        <div className="w-full rounded-sm relative z-10 bg-brand-navy-deep backdrop-blur-sm overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row items-stretch gap-0">
            <div className="w-full md:w-1/2 px-6 py-6 md:pl-8 lg:pl-16 md:py-12 text-center md:text-left flex flex-col justify-center">
              <span className="text-white/60 text-xs md:text-sm uppercase tracking-[0.2em] font-light font-poppins block">
                Academics
              </span>
              <div className="space-y-4 mb-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white font-serif leading-tight">
                  Programs
                </h1>
                <div className="w-52 lg:w-90 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent md:from-white/40 md:via-white/20 md:to-transparent mx-auto md:ml-0" />
              </div>
              <p className="text-white/70 text-sm md:text-base lg:text-lg font-light font-poppins max-w-lg leading-relaxed mx-auto md:ml-0">
                Transform your Life with the Right Programme
              </p>  
              <Link href="/contact" className="w-fit mx-auto md:ml-0 mt-6 block">
                <button className="px-5 py-2.5 bg-[#0161B0] text-white/90 rounded-[3px] capitalize font-normal text-[14px] md:text-[15px] tracking-wide hover:bg-[#0161B0]/90 transition-all duration-300 shadow-lg shadow-[#0161B0]/10 cursor-pointer">
                  Book a Guidance Call
                </button>
              </Link>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-end">
              <div className="relative h-[220px] md:h-[340px] lg:h-[400px] lg:rounded-r-md overflow-hidden">
                 <Image
                  src="/modules/programmes/hero/university.jpg"
                  alt="Programs at KRMU"
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover opacity-40"
                  priority
                  unoptimized
                />
                <Image
                  src="/modules/programmes/hero/women.png"
                  alt="Programs at KRMU"
                  fill 
                  className="object-contain object-bottom"
                  priority 
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default HeroSection;