import React from "react";
import Image from "next/image";

interface KeyFeature {
    title: string;
    description: string;
}

const keyFeatures: KeyFeature[] = [
    {
        title: "Comprehensive Course Library",
        description:
            "Courses from premier institutions such as IITs, IIMs, and central universities.",
    },
    {
        title: "Interactive Learning",
        description:
            "Video lectures, quizzes, assignments, and discussion forums for an engaging experience.",
    },
    {
        title: "Certification & Credit Transfer",
        description:
            "Learners can earn certificates and transfer credits to their academic programs",
    },
    {
        title: "Inclusivity & Accessibility",
        description:
            "Designed to bridge the digital divide, ensuring education reaches every learner, including those in remote areas.",
    },
];

export const WhyChooseSection: React.FC = () => {
    return (
        <section
            id="about"
            style={{ scrollMarginTop: "140px" }}
            className="w-full bg-[#FFFDF9] py-10 md:py-12 px-4 sm:px-6 lg:px-12 scroll-mt-28 md:scroll-mt-36"
        >
            <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-0 items-center">
                    {/* Left Column: Image of Student (why-girl.jpg) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[310px] sm:max-w-[340px] lg:max-w-[360px] h-[340px] sm:h-[380px] lg:h-[430px] xl:h-[450px]  rounded-[16px] overflow-hidden">
                            <Image
                                src="/swayam/why-girl.jpg"
                                alt="Why Choose SWAYAM Student"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Key Features Of SWAYAM Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        {/* Section Heading */}
                        <h2 className="text-[#000000] font-poppins text-2xl sm:text-3xl lg:text-[34px] font-medium tracking-[0px] leading-[100%] mb-7 sm:mb-9">
                            Key Features Of SWAYAM
                        </h2>

                        {/* Features List with Circle Checkmark Icons */}
                        <div className="space-y-6 sm:space-y-7 lg:space-y-8">
                            {keyFeatures.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3.5 sm:gap-4"
                                >
                                    {/* Circle Checkmark Icon */}
                                    <div className="shrink-0 mt-0.5">
                                        <svg
                                            className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#000000]"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </div>

                                    {/* Title and Description */}
                                    <div className="flex flex-col">
                                        <h3 className="text-[#000000] text-base sm:text-[17px] lg:text-[18px] font-bold leading-snug">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[#2B2B2B] text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-relaxed mt-1">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
