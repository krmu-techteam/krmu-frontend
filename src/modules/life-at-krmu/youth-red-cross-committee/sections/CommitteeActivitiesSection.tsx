import Image from "next/image";
import React from "react";
import { CommitteeActivitiesSectionProps } from "../types";

const CommitteeActivitiesSection = ({
  committeeActivitiesSection,
}: {
  committeeActivitiesSection: CommitteeActivitiesSectionProps;
}) => {
  const { heading, descriptions, imageUrl } = committeeActivitiesSection;
  return (
    <>
      <section className="py-8 md:py-12 xl:py-20 bg-[url(/bg-gradient.webp)]">
        <div className="max-w-[1530px] font-poppins mx-auto w-full flex flex-col lg:flex-row items-center gap-10 px-6 md:px-7 xl:px-16">
          <div className="w-full lg:w-1/2 text-white">
            <h3 className="text-2xl mb-5 font-semibold">{heading}</h3>
            {descriptions.map((desc, idx) => {
              return (
                <p key={idx} className="mb-5">
                  {desc}
                </p>
              );
            })}
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={imageUrl} width={714} height={427} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CommitteeActivitiesSection;
