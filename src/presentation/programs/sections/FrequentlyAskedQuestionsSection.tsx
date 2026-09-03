"use client";

import React from "react";
import Button from "@/components/common/Button";
import { FAQAccordion } from "../components";
import { FrequentlyAskedQuestionsSectionProps } from "@/features/programs";
import { ArrowUpRight } from "lucide-react";

const FrequentlyAskedQuestionsSection = ({
    heading,
    highlight,
    desc,
    tocfaqs,
    tocbtn,
}: FrequentlyAskedQuestionsSectionProps) => {
    const handleApplyClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        const visibleForm = Array.from(
            document.querySelectorAll(".heroBannerForm__form")
        ).find((el) => el.getBoundingClientRect().height > 0);

        if (visibleForm) {
            visibleForm.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            <section
                id="faqs"
                className="py-10 md:py-16 lg:py-20 relative z-10 scroll-mt-28"
            >
                <div className="flex items-center">
                    <div className="w-full">
                        <div className="mx-auto xl:max-w-[1200px] 2xl:max-w-7xl px-4 md:px-8 lg:px-10">
                            {/* Header block */}
                            <div className="text-center mb-8 md:mb-8">
                                <h3 className="heading-primary mb-5 lg:mb-4 text-white">
                                    {heading} {highlight}
                                </h3>
                                <p className="text-[15px] mb-5 md:text-base font-poppins font-normal text-white/90 max-w-3xl mx-auto leading-relaxed">
                                    {desc}
                                </p>

                                {/* Mobile & Tablet Apply Now Button below description */}
                                {(tocbtn?.buttonclass ||
                                    tocbtn?.buttonlink) && (
                                    <div className="flex lg:hidden items-center justify-center mt-4 sm:mt-5">
                                        <Button
                                            href={tocbtn?.buttonlink || "#"}
                                            onClick={handleApplyClick}
                                            target="_blank"
                                            variant="primary"
                                            icon={ArrowUpRight}
                                            iconPosition="right"
                                            className={`!w-fit !bg-[#CB000D] hover:!bg-[#CB000D]/90 text-white font-bold !text-xs uppercase tracking-wider !h-auto !py-2.5 !px-6 transition-all duration-300 shrink-0 font-poppins ${tocbtn?.buttonclass || ""}`}
                                        >
                                            APPLY NOW
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {/* Tabs and Accordions block */}
                            <div className="relative !p-0 lg:!p-0 rounded-none">
                                <div className="relative z-10 w-full">
                                    <FAQAccordion
                                        tocfaqs={tocfaqs}
                                        tocbtn={tocbtn}
                                    />
                                </div>
                            </div>

                            {/* Bottom centered dynamic button (e.g. View All) */}
                            {(tocbtn?.buttonclass || tocbtn?.buttonlink) && (
                                <div className="flex items-center justify-center mt-8 md:mt-12">
                                    <Button
                                        href={tocbtn?.buttonlink || "#"}
                                        variant="outline"
                                        className={`!w-fit border border-[#0055A4]/60 hover:bg-[#0055A4]/15 hover:border-[#0055A4] text-white transition-all duration-300 tracking-wide ${tocbtn?.buttonclass || ""}`}
                                    >
                                        {tocbtn?.buttontext || "View All"}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FrequentlyAskedQuestionsSection;
