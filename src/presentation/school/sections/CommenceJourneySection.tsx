"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { STRAPI_URL } from "@/app/constant";
import { common_btn } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import {
    CommenceJourneyStepCard,
    CommenceJourneyMobileStepCard,
} from "@/presentation/school/components";

type Props = {
    highlight_heading: string;
    heading: string;
    imgUrl: string;
    btn: common_btn;
    admBtn?: {
        buttonlink?: string;
        buttontext?: string;
    };
};

const CommenceJourneySection = ({
    highlight_heading,
    heading,
    imgUrl,
    btn,
    admBtn,
}: Props) => {
    const [activeStep] = useState(5); // Static active step at index 5 (Step 6)

    const rawLink = (admBtn?.buttonlink || btn?.btn_link || "").trim();

    let applyLink = "https://admissions.krmangalam.edu.in/";
    if (rawLink) {
        if (rawLink.startsWith("http://") || rawLink.startsWith("https://")) {
            applyLink = rawLink;
        } else if (rawLink.startsWith("?")) {
            applyLink = `https://admissions.krmangalam.edu.in/${rawLink}`;
        } else if (rawLink !== "/" && rawLink !== "#") {
            applyLink = rawLink.startsWith("/")
                ? `https://admissions.krmangalam.edu.in${rawLink}`
                : `https://admissions.krmangalam.edu.in/${rawLink}`;
        }
    }

    const applyText = btn?.btn_text || admBtn?.buttontext || "APPLY NOW";

    const steps = [
        {
            number: 1,
            title: "Start Your Application at",
            linkText: "admissions.krmangalam.edu.in",
            linkUrl: "https://admissions.krmangalam.edu.in/",
            desc: "",
        },
        {
            number: 2,
            title: "Complete Payment & Submit",
            desc: "Pay the required application Fee.",
        },
        {
            number: 3,
            title: "Take the entrance",
            desc: "K.R. Mangalam University Entrance Examination (KREE).",
        },
        {
            number: 4,
            title: "Appear for Interaction",
            desc: "Attend our Faculty-Led Interview.",
        },
        {
            number: 5,
            title: "Get the Admission Offer",
            desc: "You will receive the offer letter after the successful interaction.",
        },
        {
            number: 6,
            title: "Get Enrolled",
            desc: "Be prepared to embark on your journey.",
        },
    ];

    return (
        <section
            id="admission-process"
            className="relative w-full pt-10 sm:pt-12 xl:pt-20 pb-10 sm:pb-12 lg:pb-0 overflow-hidden font-poppins scroll-mt-28"
        >
            {/* Background radial spec glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.05)_0%,transparent_70%)] rounded-full blur-[80px] z-0 pointer-events-none opacity-50"></div>

            <div className="w-full max-w-[1530px] mx-auto relative z-10">
                {/* Title */}
                <div className="text-center mb-6 lg:mb-8">
                    <h2 className="heading-primary">
                        {highlight_heading}{" "}
                        <span className="text-white font-normal block sm:inline">
                            {heading}
                        </span>
                    </h2>
                </div>

                {/* Desktop 3-Column Staggered Grid */}
                <div className="hidden lg:grid grid-cols-12 gap-2 xl:gap-3 items-center max-w-[1530px] px-4 md:px-6 xl:px-8 mx-auto">
                    {/* Left Column: Steps 1, 3, 5 */}
                    <div className="col-span-4 flex flex-col gap-6 xl:gap-8 items-end z-20 -translate-y-20 xl:-translate-y-32">
                        {/* Step 1: Shifted right (forehead level) */}
                        <div className="transform translate-x-16 xl:translate-x-24 2xl:translate-x-28">
                            <CommenceJourneyStepCard
                                step={steps[0]}
                                isActive={0 === activeStep}
                            />
                        </div>
                        {/* Step 3: Shifted left */}
                        <div className="transform translate-x-6 xl:translate-x-4 2xl:translate-x-12">
                            <CommenceJourneyStepCard
                                step={steps[2]}
                                isActive={2 === activeStep}
                            />
                        </div>
                        {/* Step 5: Shifted further left */}
                        <div className="transform -translate-x-2 xl:-translate-x-6 2xl:translate-x-4">
                            <CommenceJourneyStepCard
                                step={steps[4]}
                                isActive={4 === activeStep}
                            />
                        </div>
                    </div>

                    {/* Center Column: Girl Image with BG */}
                    <div className="col-span-4 flex justify-center relative z-10 translate-y-2 xl:translate-y-4">
                        <div className="relative w-full max-w-[600px] h-[720px] flex items-end justify-center">
                            {/* Background shape (width: 643px, height: 349px, opacity: 0.7) */}
                            <div className="absolute bottom-0 w-[643px] max-w-[643px] h-[349px] pointer-events-none flex items-end justify-center">
                                <Image
                                    src="/images/school/commence-journey/girl-bg.png"
                                    alt="Background Shape"
                                    width={643}
                                    height={349}
                                    className="object-contain object-bottom w-full h-full"
                                    priority
                                />
                            </div>

                            {/* Cutout student girl image (width: 600px, height: 720px) */}
                            <div className="relative z-10 w-[600px] max-w-[600px] h-[720px]">
                                <Image
                                    src="/images/school/commence-journey/girl.png"
                                    alt="Commence Journey Student"
                                    width={600}
                                    height={720}
                                    className="object-contain object-bottom w-full h-full scale-115 lg:scale-135 2xl:scale-125 origin-bottom"
                                    priority
                                />
                            </div>

                            {/* Apply Now Overlay Button */}
                            <div className="absolute bottom-20 right-4 sm:-right-20 z-30">
                                <Button
                                    variant="primary"
                                    href={applyLink}
                                    icon={ArrowUpRight}
                                    iconPosition="right"
                                    target="_blank"
                                    className="!px-5 !py-2.5 !h-auto !text-xs !w-auto !rounded-[2px]"
                                >
                                    {applyText}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Steps 2, 4, 6 */}
                    <div className="col-span-4 flex flex-col gap-6 xl:gap-8 items-start z-20 -translate-y-20 xl:-translate-y-32">
                        {/* Step 2: Shifted left (forehead level) */}
                        <div className="transform -translate-x-16 xl:-translate-x-24 2xl:-translate-x-28">
                            <CommenceJourneyStepCard
                                step={steps[1]}
                                isActive={1 === activeStep}
                            />
                        </div>
                        {/* Step 4: Shifted right */}
                        <div className="transform -translate-x-6 xl:-translate-x-4 2xl:-translate-x-12">
                            <CommenceJourneyStepCard
                                step={steps[3]}
                                isActive={3 === activeStep}
                            />
                        </div>
                        {/* Step 6: Shifted further right */}
                        <div className="transform translate-x-2 xl:translate-x-6 2xl:-translate-x-4">
                            <CommenceJourneyStepCard
                                step={steps[5]}
                                isActive={5 === activeStep}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile View Layout */}
                <div className="lg:hidden px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <CommenceJourneyMobileStepCard
                            title="Start your Application"
                            linkText="admissions.krmangalam.edu.in"
                            linkUrl="https://admissions.krmangalam.edu.in/"
                            iconSrc="/schools/start01.svg"
                        />
                        <CommenceJourneyMobileStepCard
                            title="Complete payment and submit"
                            desc="Pay the required Application Fee"
                            iconSrc="/schools/card.svg"
                        />
                        <CommenceJourneyMobileStepCard
                            title="Take an entrance test"
                            desc="K.R. Mangalam University Entrance Examination (KREE)"
                            iconSrc="/schools/doc.svg"
                        />
                        <CommenceJourneyMobileStepCard
                            title="Appear for interaction"
                            desc="Attend our Faculty-Led Interview."
                            iconSrc="/schools/communications.svg"
                        />
                        <CommenceJourneyMobileStepCard
                            title="Get the admission offer"
                            desc="You will receive the offer letter after the successful interaction"
                            iconSrc="/schools/business-people.svg"
                        />
                        <CommenceJourneyMobileStepCard
                            title="Get Enrolled"
                            desc="Be prepared to embark on your journey"
                            iconSrc="/schools/like.svg"
                            isActive={true}
                        />
                    </div>

                    <div className="flex justify-center mt-6 mb-2">
                        <Button
                            variant="primary"
                            href={applyLink}
                            icon={ArrowUpRight}
                            iconPosition="right"
                            target="_blank"
                            className="!w-auto !h-[45px] !px-8"
                        >
                            {btn?.btn_text || "APPLY NOW"}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommenceJourneySection;
