import { StrapiMedia } from "@/lib/types/common";
import { Button } from "@/lib/types/home";
import Link from "next/link";
import Image from "next/image";
import { HighlightSlider } from "../components";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
    heading: string;
    slideImages: StrapiMedia[];
    btn: Button;
};

const HighlightSection = ({ heading, slideImages, btn }: Props) => {
    return (
        <section className="relative z-5 py-12 md:py-16 px-6 md:px-8 xl:px-16 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
                {/* Left Column: Placement Highlights Card */}
                <div className="flex flex-col justify-between relative overflow-hidden min-h-[640px]">
                    <div>
                        <h2 className="heading-primary text-center mb-6">
                            {heading || "Placement Highlights"}
                        </h2>
                        <div className="relative px-2 sm:px-4 my-auto flex justify-center">
                            <HighlightSlider />
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <Link
                            href={btn?.buttonlink || "/placement-highlights"}
                            className="text-white text-sm md:text-[16px] font-poppins font-medium hover:text-white/80 transition-colors duration-300 inline-block underline underline-offset-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {btn?.buttontext || "Know More"}
                        </Link>
                    </div>
                </div>

                {/* Right Column: Your Path to Success Card */}
                <div
                    style={{
                        backgroundImage:
                            "url('/images/placement/bg-placement-highlight.jpg')",
                    }}
                    className="rounded-[4px] p-5 sm:p-8 flex flex-col justify-start relative overflow-hidden min-h-[540px] sm:min-h-[640px] bg-cover bg-center"
                >
                    {/* Subtle Dark Overlay */}
                    <div className="absolute inset-0 bg-[#061623]/50 pointer-events-none" />

                    <div className="relative z-10 w-full text-center">
                        <h2 className="heading-primary text-center mb-3 sm:mb-4">
                            Your Path to Success
                        </h2>
                        <p className="font-poppins text-white/90 text-xs sm:text-sm max-w-[480px] mx-auto leading-relaxed mb-4 sm:mb-6">
                            Students, who once register for a particular
                            company, must present themselves on the day of the
                            visit, failing to which they may get blacklisted for
                            the next two recruitments
                        </p>
                    </div>

                    {/* Responsive Road Image with floating text badges */}
                    <div className="absolute bottom-0 right-0 left-0 sm:left-auto w-full sm:w-[420px] md:w-[466px] max-w-full z-10 h-[340px] sm:h-[420px] md:h-[466px] pointer-events-none overflow-hidden sm:overflow-visible">
                        <Image
                            src="/images/placement/s.png"
                            width={466}
                            height={466}
                            alt="Step-by-step placement path roadmap at K.R. Mangalam University"
                            className="w-full h-full object-contain object-bottom-right"
                            priority
                        />

                        {/* Floating Text Badges */}
                        <span className="absolute top-[8%] right-[8%] sm:right-[12%] bg-[#0e6865] text-white text-[11px] sm:text-xs md:text-sm font-poppins font-medium px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-[4px] pointer-events-auto shadow-md">
                            Group Discussion
                        </span>
                        <span className="absolute top-[32%] left-[8%] sm:left-[16%] bg-[#0a1c2b] text-white text-[11px] sm:text-xs md:text-sm font-poppins font-medium px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/10 shadow-md pointer-events-auto">
                            Interview
                        </span>
                        <span className="absolute top-[54%] left-[24%] sm:left-[36%] bg-[#0a1c2b] text-white text-[11px] sm:text-xs md:text-sm font-poppins font-medium px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/10 shadow-md pointer-events-auto">
                            Written Test
                        </span>
                        <span className="absolute bottom-[8%] left-[4%] bg-[#0a1c2b] text-white text-[11px] sm:text-xs md:text-sm font-poppins font-medium px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/10 shadow-md pointer-events-auto">
                            Pre Placement Talk
                        </span>
                    </div>
                </div>
            </div>

            <SectionDivider />
        </section>
    );
};

export default HighlightSection;
