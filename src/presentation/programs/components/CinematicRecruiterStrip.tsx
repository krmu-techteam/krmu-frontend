import { CinematicRecruiterStripProps } from "@/features/programs";
import RecruiterCarousel from "./RecruiterCarousel";

const CinematicRecruiterStrip = ({
  dreamcareerSection,
  logos,
}: CinematicRecruiterStripProps) => {
  if (!logos || logos.length === 0) return null;

  return (
    <div className="w-full pt-10 py-8 pb-10 lg:pt-20">
      <div className="max-w-[1440px] mx-auto px-0 md:px-0 lg:px-10 2xl:px-0 relative">
        {/* Centered Heading Badge */}
        <div className="absolute -top-[77px] sm:-top-1 md:-top-[119px] left-1/2 -translate-x-1/2 bg-[#152635]/85 px-6 py-2 rounded-t-[4px] flex items-center justify-center z-20">
          <h5 className="text-white font-poppins text-[14px] sm:text-[17px] font-normal whitespace-nowrap">
            {dreamcareerSection?.heading || "Connecting Talent to Dream Careers"}
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
