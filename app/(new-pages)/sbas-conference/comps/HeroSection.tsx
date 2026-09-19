import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="px-5 pt-28 pb-10 sm:pt-32 md:pt-36 lg:pt-38 xl:px-0 bg-[linear-gradient(180deg,#1C2822_0%,#33624E_100%)]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-8 xl:gap-10">
        {/* Content */}
        <div className="w-full lg:w-[55%] space-y-4 md:space-y-5 lg:space-y-6">
          <p className="text-[#C3A342] text-[11px] sm:text-xs font-bold tracking-[1.2px] sm:tracking-[1.5px]">
            3RD INTERNATIONAL CONFERENCE · 22–23 JANUARY 2027
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] font-lora font-bold text-white leading-[1.15]">
            Advanced Materials for Green and Sustainable Environment
          </h1>

          <p className="text-[#BFC7BF] text-sm sm:text-base">
            AMGSE 2027 · SBAS, K. R. Mangalam University, Gurugram
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="#"
              className="bg-[#C3A342] text-black rounded-md py-3.5 px-[22px] font-semibold text-center"
            >
              Submit an Abstract
            </Link>

            <Link
              href="/sbas-conference/#reg-fees"
              className="border-2 border-[#bfc7bf] text-white rounded-md py-3.5 px-[22px] font-semibold text-center leading-[18px]"
            >
              View Registration Fees
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-[#8C948C] text-[10px] sm:text-xs font-light tracking-[1px] sm:tracking-[1.5px]">
            <p>SBAS · KRMU</p>
            <p>association with CSIR-CSIO Chandigarh</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[45%] flex items-center justify-center">
          <Image
            src="https://krmangalam.edu.in/images/sbas-conference/sbas-hero.webp"
            width={435}
            height={436}
            alt=""
            className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-none h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
