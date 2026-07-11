import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {

  const formId = "bc75880ade367265cef841c19ef47621";

  return (
    <section
      className="bg-[#132737] pt-[140px] pb-[20px] lg:pb-[50px] px-6 sm:px-10 xl:px-16 min-h-[600px] flex items-end relative"
    >
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        
        {/* Mobile Text Block */}
        <div className="sm:hidden w-full z-10 pb-6 flex flex-col items-center text-center order-2">
          <h1 className="text-white leading-[1.15] font-bold text-[32px] mb-3">
            Unlock Your <br />
            Future at 
          </h1>
          <h2 className="text-white text-[32px] font-extrabold mb-5">
            K.R. Mangalam <br />
            University
          </h2>
          <p className="text-white/90 font-poppins w-full text-[16px] mb-8 font-medium">
            Dive into a world of diverse programmes curated to guide you on your
            successful journey
          </p>
          <Link
            href="https://admissions.krmangalam.edu.in/"
            target="_blank" rel="noopener noreferrer"
            className="bg-[#e61f21] rounded-sm font-poppins border border-white/10 py-2.5 px-6 flex items-center justify-center w-full max-w-[280px] text-white text-md font-medium gap-4 shadow-xl active:scale-95 transition-all duration-300"
          >
            Apply Now <ArrowRight color="#ffffff" className="w-5 h-5" />
          </Link>
        </div>

        {/* Desktop/Tablet Text Block */}
        <div className="hidden sm:flex flex-col justify-center lg:w-1/2 lg:pr-10 order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left items-center lg:items-start">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#006CB5] via-[#E5685B] to-[#83A2D1] font-serif text-4xl md:text-[46px] xl:text-[52px] 2xl:text-[60px] leading-[1.15] font-bold pb-2">
            Step Into A Successful <br className="hidden lg:block" />
            Future With K.R. <br className="hidden lg:block" />
            Mangalam University
          </h1>

          <p className="text-white/90 font-poppins mt-5 mb-8 text-[17px] max-w-lg leading-relaxed">
            Dive into a world of diverse programmes curated to guide you on your
            successful journey
          </p>

          {formId && (
            <NpfPopup
              formId={formId}
              btnClass={`bg-[#e61f21] rounded-[3px] border border-white/10 py-2.5 px-8 w-fit text-white text-[17px] font-medium shadow-2xl active:scale-95 font-poppins npfWidget-bc75880ade367265cef841c19ef47621`}
              btnText="Apply Now"
              showIcon={true}
            />
          )}
        </div>

        {/* Image Block */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
          <Image src="/admission2/hero.png" width={636} height={523} alt="K.R. Mangalam University Students" className="w-full max-w-[500px] lg:max-w-none h-auto object-contain drop-shadow-2xl" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
