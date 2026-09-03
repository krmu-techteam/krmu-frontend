import { StrapiMedia } from "@/lib/types/common";
import { KnowledgePartnerLogos } from "@/presentation/school/components";
import SectionDivider from "@/components/common/SectionDivider";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
    title: string;
    logos: StrapiMedia[];
    slug?: string;
    coetitle1?: string;
    coetitle2?: string;
    coebtn1?: any;
    coebtn2?: any;
};

const KnowledgePartnersSection = ({
    title,
    logos,
    slug,
    coetitle1,
    coetitle2,
    coebtn1,
    coebtn2,
}: Props) => {
    const isSoet =
        slug === "school-of-engineering-and-technology" ||
        slug === "school-of-engineering-technology";

    const card1Title =
        coetitle1 ||
        (isSoet ? "Centre of Excellence in Robotics and Automation" : "");
    const card2Title =
        coetitle2 ||
        (isSoet ? "Centre of Excellence- Artificial Intelligence" : "");

    const card1BtnText =
        coebtn1?.buttontext ||
        coetitle1 ||
        (isSoet ? "Centre of Excellence in Robotics and Automation" : "");
    const card1BtnLink = coebtn1?.buttonlink || "/programs/b-tech-cse";

    const card2BtnText =
        coebtn2?.buttontext ||
        coetitle2 ||
        (isSoet ? "Centre of Excellence- Artificial Intelligence" : "");
    const card2BtnLink = coebtn2?.buttonlink || "/programs/bca-ai-data-science";

    const hasCoeCards = Boolean(card1Title || card2Title);

    return (
        <section
            id="knowledge-partners"
            className="relative py-12 xl:py-20 font-poppins scroll-mt-28"
        >
            <div>
                {/* Title */}
                <h2 className="text-center text-white font-serif text-3xl sm:text-4xl md:text-[44px] font-bold mb-6 lg:mb-12 tracking-tight">
                    {title || "Knowledge Partners"}
                </h2>

                {/* Logos Row */}
                <div
                    className={`max-w-[1440px] mx-auto w-full lg:px-12 ${
                        hasCoeCards ? "mb-8 lg:mb-12" : ""
                    }`}
                >
                    <KnowledgePartnerLogos logos={logos} />
                </div>

                {/* COE Dark Blue Gradient Cards (No photo images) */}
                {hasCoeCards && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-12">
                        {card1Title && (
                            <div className="group font-poppins bg-gradient-to-r from-[#061623] to-[#05345B] border-3 border-[#1a3353] rounded-[8px] p-6 xl:p-10 flex flex-col justify-between items-center text-center transition-all duration-300">
                                <div className="flex-1 flex items-center justify-center mb-8">
                                    <div className="text-white text-xl sm:text-2xl xl:text-3xl font-medium leading-relaxed">
                                        {card1Title}
                                    </div>
                                </div>

                                {card1BtnText && (
                                    <Link
                                        href={card1BtnLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm xl:text-base py-3 px-6 text-white rounded-[4px] border border-white/80 hover:border-white hover:bg-white/10 transition-all relative overflow-hidden group"
                                    >
                                        <span>{card1BtnText}</span>
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                                    </Link>
                                )}
                            </div>
                        )}

                        {card2Title && (
                            <div className="group font-poppins bg-gradient-to-l from-[#061623] to-[#05345B] border-3 border-[#1a3353] rounded-[8px] p-6 xl:p-10 flex flex-col justify-between items-center text-center transition-all duration-300">
                                <div className="flex-1 flex items-center justify-center mb-8">
                                    <div className="text-white text-xl sm:text-2xl xl:text-3xl font-medium leading-relaxed">
                                        {card2Title}
                                    </div>
                                </div>

                                {card2BtnText && (
                                    <Link
                                        href={card2BtnLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm xl:text-base py-3 px-6 text-white rounded-[4px] border border-white/80 hover:border-white hover:bg-white/10 transition-all relative overflow-hidden group"
                                    >
                                        <span>{card2BtnText}</span>
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <SectionDivider />
        </section>
    );
};

export default KnowledgePartnersSection;
