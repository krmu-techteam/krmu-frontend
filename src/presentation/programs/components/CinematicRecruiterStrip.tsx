import { CinematicRecruiterStripProps } from "@/features/programs";
import RecruiterCarousel from "./RecruiterCarousel";

const CinematicRecruiterStrip = ({
    dreamcareerSection,
    logos,
}: CinematicRecruiterStripProps) => {
    if (!logos || logos.length === 0) return null;

    return (
        <div className="w-full py-6 lg:py-12">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 2xl:px-0 flex flex-col items-center">
                {/* Centered Heading Badge */}
                <div className="bg-[#061623] px-6 py-1.5 rounded-[3px] flex items-center justify-center mb-6">
                    <h3 className="text-white/90 font-poppins text-[13px] sm:text-[15px] font-medium whitespace-nowrap">
                        {dreamcareerSection?.heading ||
                            "Connecting Talent to Dream Careers"}
                    </h3>
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
