import { CinematicRecruiterStripProps } from "@/features/programs";
import RecruiterCarousel from "./RecruiterCarousel";

const CinematicRecruiterStrip = ({
  dreamcareerSection,
  logos,
}: CinematicRecruiterStripProps) => {
  if (!logos || logos.length === 0) return null;

  return (
    <div className="w-full pt-10 pb-10 lg:pt-16 md:pb-16 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 2xl:px-0 relative flex flex-col items-center">
        {/* Centered Heading Badge */}
        <div className="mb-4 md:mb-0 md:absolute lg:-top-[105px] md:left-1/2 md:-translate-x-1/2 bg-[#152635]/90 px-5 sm:px-6 py-1.5 sm:py-2 rounded-[4px] md:rounded-t-sm md:rounded-b-none shadow-lg flex items-center justify-center z-20">
          <h5 className="text-white font-poppins text-[13px] sm:text-[15px] md:text-[17px] font-medium whitespace-nowrap">
            {dreamcareerSection?.heading || "Connecting Talent to Dream Careers"}
          </h5>
        </div>

        {/* Logo Container */}
        <div className="w-full min-h-[60px]">
          <RecruiterCarousel logos={logos} />
        </div>
      </div>
    </div>
  );
};

export default CinematicRecruiterStrip;
