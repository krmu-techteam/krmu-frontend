import React from "react";
import { CareerOptions } from "@/lib/types/phd-programmes";
import { Newsreader } from "next/font/google";
import { Briefcase } from "lucide-react";

import Image from "next/image";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

type Props = {
    careerOptions: CareerOptions;
};

const StudentAvatar = ({ index }: { index: number }) => {
    const avatarSrc =
        index % 2 === 0
            ? "/images/phd/men-avatar.png"
            : "/images/phd/girl-avatar.png";

    return (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0">
            <Image
                src={avatarSrc}
                alt="Student Profile"
                fill
                className="object-cover"
            />
        </div>
    );
};

const PHDCareer = ({ careerOptions }: Props) => {
    if (!careerOptions) return null;

    const pointers = careerOptions?.careerpointers || [];
    const testimonials = careerOptions?.testimonials || [];

    return (
        <section
            id="career"
            className="w-full bg-[#F7F2E7] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[51px] scroll-mt-24"
        >
            <div className="max-w-[1440px] mx-auto w-full">
                {/* SUBTITLE */}
                <span className="text-[#B08233] uppercase text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] block mb-2">
                    WHERE THIS PROGRAMME LEADS
                </span>

                {/* HEADING */}
                <h2
                    className={`${newsreader.className} text-[36px] sm:text-[44px] lg:text-[48px] font-medium text-[#14233D] tracking-[-0.02em] leading-tight mb-8 sm:mb-10`}
                >
                    Career options
                </h2>

                {/* 5 CAREER CARDS GRID */}
                {pointers.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                        {pointers.map((item) => {
                            const formattedTitle = item.listtext
                                ?.replace(/:\s*$/, "")
                                ?.replace(/\s*\/\s*/g, " / ");

                            return (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-[14px] p-5 lg:p-6 flex flex-col justify-start shadow-[0px_6px_18px_0px_#14233D12] border border-[#E5E8F0]"
                                >
                                    <div className="w-[44px] h-[44px] rounded-[10px] bg-[#F2EDE0] flex items-center justify-center mb-5 shrink-0">
                                        <Briefcase className="w-[20px] h-[20px] text-[#B08233]" />
                                    </div>
                                    <h3 className="font-bold text-[#14233D] text-[15px] sm:text-[16px] leading-snug mb-3 break-words [overflow-wrap:anywhere] min-h-[44px] sm:min-h-[48px]">
                                        {formattedTitle}
                                    </h3>
                                    <p className="text-[#59616B] text-[13px] sm:text-[13.5px]font-normal break-words">
                                        {item.listlink}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* WHAT OUR STUDENTS SAYS */}
                {testimonials.length > 0 && (
                    <>
                        <h3
                            className={`${newsreader.className} text-[32px] sm:text-[38px] lg:text-[44px] font-medium text-[#14233D] tracking-[-0.02em] leading-tight mt-16 sm:mt-20 mb-8`}
                        >
                            {careerOptions?.testimonialheading ||
                                "What our Students says:"}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {testimonials.map((item, idx) => (
                                <div
                                    key={item.id || idx}
                                    className="bg-[#FFFCF6] border border-[#CCCCCC] p-6 sm:p-8 flex items-start gap-4 sm:gap-5"
                                >
                                    <StudentAvatar index={idx} />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-[#14233D] text-[16px] sm:text-[17px] mb-2 leading-tight">
                                            {item.countertext}
                                        </h4>
                                        <p className="text-[#14233D] text-[13px] sm:text-[14px] font-normal">
                                            {item.countercontent}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default PHDCareer;
