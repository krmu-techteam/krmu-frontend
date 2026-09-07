import React from "react";
import Image from "next/image";

const footerNavLinks = [
    { label: "Visit SWAYAM", href: "https://swayam.gov.in/", external: true },
    { label: "SWAYAM Mentor List", href: "#mentors" },
    { label: "FAQ", href: "#faq" },
    {
        label: "SWAYAM Sop",
        href: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/ugc_swayam_framework_6ce1e5ccaa.pdf",
        external: true,
    },
    {
        label: "Advisory Committee",
        href: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/constitution_of_swayam_advisory_committee_for_the_academic_year_9a82fdfe8f.pdf",
        external: true,
    },
];

export const NodalOfficerSection: React.FC = () => {
    return (
        <>
            <section
                id="nodal-officer"
                style={{
                    background:
                        "linear-gradient(101.86deg, #001732 57.77%, #002002 88.06%)",
                    scrollMarginTop: "140px",
                }}
                className="w-full min-h-auto md:h-[495px] py-10 md:py-0 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center scroll-mt-28 md:scroll-mt-36"
            >
                <div className="container mx-auto max-w-[1260px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-14">
                    {/* Left Column: Portrait Image */}
                    <div className="shrink-0">
                        <div className="relative w-[200px] sm:w-[240px] md:w-[276px] max-w-full h-[202px] sm:h-[242px] md:h-[279px] rounded-[9px] overflow-hidden">
                            <Image
                                src="/swayam/swayam-nodal-officer.jpg"
                                alt="Ms. Vidhi Gaur - SWAYAM Nodal Officer"
                                fill
                                unoptimized
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Exact Text Content matching Figma */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left text-white space-y-3 sm:space-y-4">
                        {/* Header Block */}
                        <div>
                            <h2 className="text-white text-[22px] sm:text-[26px] font-bold tracking-tight leading-tight">
                                SWAYAM Nodal Officer
                            </h2>
                            <p className="text-white/90 text-sm sm:text-[16px] font-normal mt-0.5">
                                K.R. Mangalam University
                            </p>
                        </div>

                        {/* Officer Details Block */}
                        <div className="space-y-0.5 text-white/90 text-sm sm:text-[16px]">
                            <p className="text-white font-bold text-sm sm:text-[16px] mb-1">
                                Ms. Vidhi Gaur
                            </p>
                            <p className="leading-snug">SWAYAM Nodal Officer</p>
                            <p className="leading-snug">
                                Assistant Dean – Online and Digital Learning
                            </p>
                            <p className="leading-snug">
                                Member Secretary – LMS & E-Learning Committee
                            </p>
                        </div>

                        {/* Contact Details Block */}
                        <div className="space-y-0.5 text-white/90 text-sm sm:text-[16px] pt-1">
                            <p>
                                <span className=" text-white">Phone:</span>{" "}
                                +91-8448390215
                            </p>
                            <p className="break-all sm:break-normal">
                                <span className=" text-white">Email:</span>{" "}
                                swayam-uno-0700@krmangalam.edu.in
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Links Bar directly below Nodal Officer Section */}
            <div className="w-full bg-[#FFFDF9] pt-6 sm:pt-7 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1260px] mx-auto border-b border-[#CCCCCC] pb-6 sm:pb-7 flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-12">
                    {footerNavLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={
                                link.external
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="text-[#1F2937] hover:text-[#CB000D] font-poppins font-medium text-sm sm:text-[15px] transition-colors duration-200 whitespace-nowrap cursor-pointer"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NodalOfficerSection;
