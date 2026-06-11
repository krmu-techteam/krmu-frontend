"use client";

import { useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import { common_btn } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";
import { CommenceJourneyStepCard, CommenceJourneyMobileStepCard } from "@/modules/school/components";

type Props = {
  highlight_heading: string;
  heading: string;
  imgUrl: string;
  btn: common_btn;
};

const CommenceJourneySection = ({
  highlight_heading,
  heading,
  imgUrl,
  btn,
}: Props) => {
  const [activeStep] = useState(5); // Static active step at index 5 (Step 6)

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
    <section className="relative w-full px-0 xl:px-0 py-12 xl:py-20 overflow-hidden font-poppins">
      {/* Background radial spec glow */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.05)_0%,transparent_70%)] rounded-full blur-[80px] z-0 pointer-events-none opacity-50"
      ></div>

      <div className="w-full max-w-[1530px] mx-auto relative z-10 px-4 lg:px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="heading-primary">
            {highlight_heading}{" "}
            <span className="text-white font-normal block sm:inline">
              {heading}
            </span>
          </h2>
        </div>

        {/* Desktop Interactive Grid */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center max-w-[1280px] mx-auto">
          {/* Left Column: Image Card */}
          <div className="relative w-full max-w-[540px] aspect-[3/3.83] xl:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border border-white/10 group mx-auto">
            {imgUrl && (
              <Image
                src="/modules/school/commence-your-journey.jpg"
                alt={heading || "Commence Journey"}
                fill
                className="object-cover"
                sizes="540px"
                priority
              />
            )}
            {/* Apply Now Overlay Button */}
            {btn?.btn_link && (
              <Link
                href={btn.btn_link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 px-6 py-3 bg-[#cb000d] text-white font-poppins font-semibold text-sm rounded-sm shadow-lg hover:bg-red-700 transition-all flex items-center gap-1.5 group-hover:shadow-[0_0_20px_rgba(203,0,13,0.4)] z-10"
              >
                {btn.btn_text || "APPLY NOW"} <span className="text-xs">↗</span>
              </Link>
            )}
          </div>

          {/* Right Column: Steps List */}
          <div className="flex flex-col gap-4 w-full">
            {steps.map((step, index) => (
              <CommenceJourneyStepCard
                key={step.number}
                step={step}
                isActive={index === activeStep}
              />
            ))}
          </div>
        </div>

        {/* Mobile View Layout */}
        <div className="lg:hidden px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <div className="flex justify-center mt-5">
            {btn?.btn_link && (
              <Link
                href={btn?.btn_link || "#"}
                className={`py-2.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-white transition-all relative overflow-hidden group ${
                  btn?.btn_class || ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                {btn?.btn_text || "APPLY NOW"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommenceJourneySection;
