import Image from "next/image";
import React from "react";

const ProgrammeOverviewSection = () => {
    return (
        <section
            id="about-program"
            className={`w-full bg-transparent py-8 md:py-12 xl:py-20 scroll-mt-28`}
        >
            <div className="max-w-[1530px] mx-auto px-8 md:px-8 xl:px-16">
                <div
                    className="relative overflow-hidden rounded-[15px] py-10 px-6 sm:px-10 z-10 flex flex-col justify-center text-left"
                    style={{
                        background:
                            "linear-gradient(90deg, #0161B0 0%, #001228 100%)",
                    }}
                >
                    {/* Dashed Gradient Border */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1.5"
                            y="1.5"
                            width="calc(100% - 3px)"
                            height="calc(100% - 3px)"
                            rx="16"
                            ry="16"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            strokeDasharray="6 6"
                        />

                        <defs>
                            <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#001732" />
                                <stop offset="100%" stopColor="#004698" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Background Decoration */}
                    <div className="absolute bottom-0 right-0 pointer-events-none w-[220px] h-[212px] z-0 overflow-hidden select-none">
                        <Image
                            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_636_1_a5c11e2e58.png"
                            alt="bg image"
                            width={1024}
                            height={1024}
                            className="w-full h-full"
                        />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-start w-full">
                        <h2 className="heading-primary mb-4">
                            Programme Overview
                        </h2>

                        {/* Hidden Checkbox - Peer trigger for zero-JS CSS expand/collapse */}
                        <input
                            type="checkbox"
                            id="programme-overview-toggle"
                            className="peer hidden"
                        />

                        {/* Always visible initial paragraph */}
                        <p className="mb-4 text-white text-[16px] leading-[130%] font-light w-full font-poppins">
                            The B.Tech. in Computer Science and Engineering
                            programme at K.R. Mangalam University is designed to
                            provide students with theoretical knowledge and
                            practical applications of core CS and engineering
                            concepts.
                        </p>

                        {/* Direct Sibling Expandable Container - Smooth CSS Grid transition driven by peer-checked */}
                        <div className="grid grid-rows-[0fr] opacity-0 peer-checked:grid-rows-[1fr] peer-checked:opacity-100 transition-all duration-500 ease-in-out text-white text-[16px] leading-[130%] font-light w-full font-poppins">
                            <div className="overflow-hidden">
                                <p className="mb-4">
                                    Students build a strong foundation in data
                                    structures, algorithms, operating systems,
                                    computer networks, databases, and software
                                    engineering while developing specialised
                                    expertise in the most in-demand domains such
                                    as AI/ML, Data Science, Cyber Security, Full
                                    Stack Development, Robotics & AI, UX/UI.
                                </p>

                                <p className="mb-4">
                                    All B.Tech. programmes are offered in
                                    academic partnership with industry leaders
                                    such as IBM, Microsoft, EC-Council, and
                                    ImaginXP, depending on the chosen
                                    specialisation. These collaborations equip
                                    students with industry-relevant skills,
                                    practical exposure, and the expertise needed
                                    to tackle real-world challenges and build
                                    successful engineering careers.
                                </p>

                                <p>
                                    After completing the programme, students
                                    work in multidisciplinary teams, solve
                                    engineering challenges, and design solutions
                                    independently in corporate development
                                    environments.
                                </p>
                            </div>
                        </div>

                        {/* Direct Sibling Label Trigger - Toggles Checkbox via CSS */}
                        <label
                            htmlFor="programme-overview-toggle"
                            className="inline-block font-normal text-white text-[16px] underline underline-offset-4 decoration-1 hover:text-white/80 hover:decoration-2 transition-all duration-300 cursor-pointer mt-4 select-none"
                        >
                            <span className="inline peer-checked:hidden">
                                Read More
                            </span>
                            <span className="hidden peer-checked:inline">
                                Read Less
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProgrammeOverviewSection;
