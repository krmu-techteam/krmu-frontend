import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-38 pb-10 bg-[linear-gradient(180deg,#1C2822_0%,#33624E_100%)]">
      <div className="max-w-6xl mx-auto flex items-center gap-10">
        <div className="w-[55%] space-y-6">
          <p className="text-[#C3A342] text-xs font-bold tracking-[1.5px]">
            3RD INTERNATIONAL CONFERENCE · 22–23 JANUARY 2027
          </p>
          <h1 className="text-[42px] font-lora font-bold text-white leading-tight">
            Advanced Materials for Green and Sustainable Environment
          </h1>
          <p className="text-[#BFC7BF] text-base">
            AMGSE 2027 · SBAS, K. R. Mangalam University, Gurugram
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="bg-[#C3A342] text-black rounded-md inline-block py-3.5 px-[22px] font-semibold"
            >
              Submit an Abstract
            </Link>
            <Link
              href="#"
              className="border-2 border-[#bfc7bf] text-white rounded-md inline-block py-3.5 px-[22px] font-semibold leading-[18px]"
            >
              View Registration Fees
            </Link>
          </div>
          <div className="flex gap-6 text-[#8C948C] text-xs font-light tracking-[1.5px]">
            <p>SBAS · KRMU</p>
            <p>association with CSIR-CSIO Chandigarh</p>
          </div>
        </div>
        <div className="w-[45%] flex items-center justify-center">
          <Image
            src="https://krmangalam.edu.in/images/sbas-conference/sbas-hero.webp"
            width={435}
            height={436}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
