import Image from "next/image";
import React from "react";

const Committee = () => {
  return (
    <>
      <section className="py-[50px] bg-[url(/bg-gradient.webp)] px-4">
        <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 text-white">
            <h3 className="text-2xl mb-5 font-semibold">Committee:</h3>
            <p>
              The Youth Red Cross (YRC) unit at KR Mangalam University (KRMU) is
              essential in fostering a sense of social responsibility and
              humanitarian values among students through various community
              service initiatives. One key activity involved participating in a
              TB awareness survey in Lakhuwas village, under the supervision of
              the District Red Cross Society, where volunteers educated the
              community about TB prevention and treatment. This initiative
              helped raise awareness about public health issues in rural areas,
              giving volunteers practical experience in health outreach.
            </p>
            <br />
            <p>
              Additionally, KRMU YRC volunteers participated in the Saras Mela
              Internship, organized under the District Commissioner’s Office,
              where they gained skills in event management, coordination, and
              teamwork while contributing to the successful organization of a
              major trade fair. Volunteers also attended adventure and training
              camps by the State Red Cross, enhancing their leadership,
              emergency response, and teamwork skills.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Image src="/life-at-krmu/committee.png" width={714} height={427} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Committee;
