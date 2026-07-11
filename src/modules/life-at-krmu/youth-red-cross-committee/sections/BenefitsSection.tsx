import Image from "next/image";
import React from "react";
import { BenefitsSectionProps } from "../types";

const BenefitsSection = ({
  benefitsSection,
}: {
  benefitsSection: BenefitsSectionProps;
}) => {
  const { heading, points, imageUrl } = benefitsSection;
  return (
    <section className="bg-[url(/bg-gradient-2.webp)] py-8 md:px-12 xl:py-20">
      <div className="max-w-[1530px] font-poppins mx-auto w-full flex flex-col lg:flex-row gap-10 px-6 md:px-7 xl:px-16">
        <div className="lg:w-1/2 mb-5">
          <div className="py-[30px] md:pl-[40px] md:pr-[30px] text-white border border-[#0060aa5e] bg-[#0060aa5e] rounded-xs">
            <p className="text-2xl mt-2.5 mb-[15px]">{heading}</p>
            <ul className="mt-2.5">
              {points?.map((point, idx) => {
                return (
                  <li key={idx} className="flex items-start gap-3 py-[8px]">
                    <Image
                      src="/white-location-arrow.svg"
                      width={22}
                      height={26}
                      alt=""
                    />{" "}
                    <span>{point}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 text-white">
          <div className="text-center flex justify-center flex-col items-center">
            <Image
              src={imageUrl}
              width={851}
              height={567}
              alt=""
              className="h-full w-full rounded-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
