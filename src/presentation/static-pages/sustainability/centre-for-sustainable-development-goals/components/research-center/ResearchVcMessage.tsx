"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import { missionPoints, objectivePoints } from "./data";

const ResearchVcMessage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
      {/* Left Column: Vice Chancellor's Message Card */}
      <div
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #E7C268 100%)",
        }}
        className="w-full lg:w-[489px] max-w-[489px] rounded-[10px] text-[#1A1A1A] p-6 sm:p-[31px] flex flex-col justify-start relative overflow-hidden shrink-0 mx-auto lg:mx-0"
      >
        <div>
          <h3 className="text-xl sm:text-[22px] font-bold text-[#000000] mb-[10px] font-sans">
            Vice Chancellor’s Message
          </h3>
          {/* Quotation Icon Image */}
          <div className="mb-2">
            <Image
              src="/images/sustainability/quote.png"
              alt="Quote"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <div className="space-y-3.5 text-[#000000] font-poppins font-normal text-[16px] leading-[24px] tracking-normal text-justify">
            <p>
              At K.R. Mangalam University, sustainability is not an initiative;
              it is a responsibility embedded in our institutional vision and
              everyday practices. Guided by the United Nations’ Sustainable
              Development Goals (SDGs), we are committed to creating a
              future-ready campus that balances environmental stewardship,
              social responsibility, and academic excellence.
            </p>
            <p>
              The Centre for Sustainable Development Goals at the University
              acts as a catalyst for integrating sustainability into teaching,
              research, and community engagement. Through interdisciplinary
              collaboration, experiential learning, and innovation-driven
              projects, we empower our students to address real-world
              challenges such as climate change, sustainable infrastructure,
              and responsible consumption.
            </p>
            <p>
              Our campus initiatives, including energy-efficient systems,
              water-conservation measures, waste-management practices, and
              green infrastructure, are designed to translate policy into
              practice. More importantly, we strive to cultivate a culture of
              sustainability where every stakeholder becomes an active
              participant in this shared journey.
            </p>
            <p>
              As we move forward, K.R. Mangalam University remains committed to
              building partnerships, fostering innovation, and contributing
              meaningfully to the global sustainability agenda. Together, we
              aim to create not just a greener campus, but a more sustainable
              and resilient future for all.
            </p>
          </div>
        </div>

        {/* VC Profile Footer */}
        <div className="pt-4 mt-3 border-t border-black/15 flex items-center gap-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/sustainability/profile/anil-kumar-saini.png"
              alt="Prof. (Dr.) Anil Kumar Saini"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <h4 className="text-[#1A1A1A] font-bold text-sm sm:text-base leading-tight">
              Prof. (Dr.) Anil Kumar Saini
            </h4>
            <p className="text-xs text-[#333333] font-medium mt-0.5">
              Vice Chancellor
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Vision, Mission & Objectives Stacked Cards */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Vision Card */}
        <div className="rounded-[20px] border-[4px] border-[#E7C268] bg-transparent p-5">
          <h3 className="text-[22px] font-bold text-white font-serif mb-3">
            Vision
          </h3>
          <p className="text-gray-300 text-xs sm:text-[16px] leading-[24px] font-light text-justify">
            To emerge as a nationally impactful and globally engaged centre of
            excellence that advances sustainable development through
            interdisciplinary research, innovation-driven solutions, policy
            engagement, and community-centred initiatives, thereby generating
            measurable environmental, social, and economic sustainability
            outcomes.
          </p>
        </div>

        {/* Mission Card */}
        <div className="rounded-[20px] border-[4px] border-[#A5F6FF] bg-transparent p-5">
          <h3 className="text-[22px] font-bold text-white font-serif mb-4">
            Mission
          </h3>
          <ul className="space-y-3">
            {missionPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-xs sm:text-[16px] text-gray-300 font-light"
              >
                <ArrowRightCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Objectives Card */}
        <div className="rounded-[20px] border-[4px] border-[#FFA7E8] bg-transparent p-5">
          <h3 className="text-[22px] font-bold text-white font-serif mb-4">
            Objectives
          </h3>
          <ul className="space-y-3">
            {objectivePoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-xs sm:text-[16px] text-gray-300 font-light"
              >
                <ArrowRightCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchVcMessage;
