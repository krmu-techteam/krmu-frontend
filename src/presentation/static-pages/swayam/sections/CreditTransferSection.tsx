"use client";

import React from "react";

interface ActionButton {
    label: string;
    href?: string;
    external?: boolean;
    modalType?: "mentors";
}

const actionButtons: ActionButton[] = [
    {
        label: "SWAYAM SOP",
        href: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/ugc_swayam_framework_6ce1e5ccaa.pdf",
        external: true,
    },
    {
        label: "SWAYAM Nodal Officer",
        href: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/nomination_of_swayam_nodal_officer_257cba7217.pdf",
        external: true,
    },
    { label: "SWAYAM Mentors", modalType: "mentors" },
    {
        label: "SWAYAM Advisory Committee",
        href: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/constitution_of_swayam_advisory_committee_for_the_academic_year_9a82fdfe8f.pdf",
        external: true,
    },
    {
        label: "Approval for adopting Mooc",
        href: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/official_letter_for_swayam_moocs_adoption_4a435df6c1.pdf",
        external: true,
    },
];

export const CreditTransferSection: React.FC = () => {
    return (
        <>
            <section
                className="relative w-full bg-cover bg-top bg-no-repeat min-h-[560px] sm:min-h-[640px] lg:h-[835px] flex items-end justify-center px-0 pb-0 overflow-hidden"
                style={{
                    backgroundImage: "url('/swayam/uni-bg.jpg')",
                }}
            >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                {/* Main White Translucent Bar: Full Width edge-to-edge, h-[368px], opacity 0.88, background #FFFFFF */}
                <div
                    className="relative z-10 w-full min-h-[300px] lg:h-[368px] shadow-2xl py-8 sm:py-10 lg:py-12 flex flex-col justify-center overflow-hidden"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.88)",
                    }}
                >
                    <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-20">
                        <div className="max-w-[1060px]">
                            {/* Heading: About K.R Mangalam University */}
                            <h2 className="text-[#000000] font-poppins text-2xl sm:text-3xl lg:text-[34px] tracking-normal mb-4 sm:mb-6 leading-tight">
                                <span className="font-medium">About </span>
                                <span className="font-bold">
                                    K.R Mangalam University
                                </span>
                            </h2>

                            {/* Description Text */}
                            <p className="text-[#000000] font-poppins text-[15px] sm:text-[17px] lg:text-[18px] xl:text-[18.5px] font-normal leading-[1.75] sm:leading-[1.8] lg:leading-[1.85]">
                                K.R Mangalam University has allowed credit
                                transfer from SWAYAM, enabling students to
                                integrate online courses into their academic
                                programs. A maximum of 40% of the total courses
                                in a particular program per semester can be
                                taken through the SWAYAM platform, providing
                                students with extra learning opportunities
                                without contributing to credit requirements.
                                This initiative aligns with K.R Mangalam
                                University’s commitment to flexible and
                                technology-driven education, allowing students
                                to enhance their knowledge through high-quality
                                online resources
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Buttons Bar directly below section */}
            <div className="w-full bg-[#FFFDF9] py-8 sm:py-10 px-4 sm:px-8 border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
                    {actionButtons.map((btn, idx) =>
                        btn.modalType ? (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                    window.dispatchEvent(
                                        new CustomEvent("open-swayam-modal", {
                                            detail: btn.modalType,
                                        })
                                    );
                                }}
                                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white border border-[#000000] rounded-[6px] text-[#000000] font-bold text-sm sm:text-[15px] shadow-xs hover:bg-[#000000] hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer"
                            >
                                {btn.label}
                            </button>
                        ) : (
                            <a
                                key={idx}
                                href={btn.href}
                                target={btn.external ? "_blank" : undefined}
                                rel={
                                    btn.external
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white border border-[#000000] rounded-[6px] text-[#000000] font-bold text-sm sm:text-[15px] shadow-xs hover:bg-[#000000] hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer"
                            >
                                {btn.label}
                            </a>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default CreditTransferSection;
