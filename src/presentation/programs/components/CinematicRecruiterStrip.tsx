import { CinematicRecruiterStripProps } from "@/features/programs/types";
import RecruiterCarousel from "./RecruiterCarousel";

const CinematicRecruiterStrip = ({
  dreamcareerSection,
  logos,
}: CinematicRecruiterStripProps) => {
  return (
    <div className="w-full pt-16 py-8 pb-16 md:pt-20 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 2xl:px-0 relative">
        {/* Centered Heading Badge */}
        <div className="absolute -top-1 md:-top-[119px] left-1/2 -translate-x-1/2 bg-[#152635]/85 backdrop-blur-md border-t border-white/10 px-6 py-1.5 rounded-t-sm shadow-lg flex items-center justify-center z-20">
          <h5 className="text-white font-poppins text-[14px] sm:text-[17px] font-normal whitespace-nowrap">
            {dreamcareerSection?.heading}
          </h5>
        </div>

        {/* Logo Container */}
        <div className="min-h-[60px]">
          <RecruiterCarousel logos={logos} />
        </div>
      </div>
    </div>
  );
};

export default CinematicRecruiterStrip;
