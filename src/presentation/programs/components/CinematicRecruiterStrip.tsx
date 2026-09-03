import { CinematicRecruiterStripProps } from "@/features/programs";
import RecruiterCarousel from "./RecruiterCarousel";

const CinematicRecruiterStrip = ({
    dreamcareerSection,
    logos,
}: CinematicRecruiterStripProps) => {
    if (!logos || logos.length === 0) return null;

    return (
        <div className="w-full bg-[#061623] py-6 lg:py-8 border-t border-white/10">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 2xl:px-0 flex flex-col items-center">
                {/* Centered Heading Badge */}
                <div className="bg-[#152635] px-6 py-1.5 rounded-full flex items-center justify-center mb-6">
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
