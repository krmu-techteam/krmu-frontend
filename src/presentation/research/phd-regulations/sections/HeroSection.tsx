import { PHDRegulationCarousel } from "../components";
import { HeroSectionProps } from "@/features/research/phd-regulations/types";

const HeroSection = ({ heroSection }: { heroSection: HeroSectionProps }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-20">
      <div className="w-full xl:w-3/5 text-white">
        <h1 className="text-3xl md:text-[42px] font-bold mb-5">
          {heroSection?.title}
        </h1>
        <p className="text-justify font-poppins leading-[2]">
          {heroSection?.description?.split("\n\n")[0] || ""}
        </p>
      </div>
      <div className="w-full xl:w-2/5">
        <PHDRegulationCarousel />
      </div>
    </div>
  );
};

export default HeroSection;
