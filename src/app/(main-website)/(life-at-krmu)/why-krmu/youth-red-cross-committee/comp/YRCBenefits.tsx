import Image from "next/image";
import React from "react";

const YRCBenefits = () => {
  return (
    <section className="bg-[url(/bg-gradient-2.webp)] py-[50px]">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 mb-5">
          <div className="py-[30px] px-4 md:pl-[40px] md:pr-[30px] text-white border border-[#0060aa5e] bg-[#0060aa5e] mx-4 md:mx-8  rounded-b-[20px]">
            <p className="text-2xl mt-2.5 mb-[15px]">
              Benefits of Youth Red Cross Committee Participation:
            </p>
            <ul className="mt-2.5">
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Preference in admissions and employment.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Development of leadership and teamwork skills.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Enhancement of personality and self-confidence.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Close interaction with communities.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Participation in national and state-level programs.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Recognition for outstanding contributions.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Eligibility for prestigious national awards.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Networking opportunities.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Practical training in first aid and disaster management.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Promotion of universal humanitarian values.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 text-white">
          <div className="text-center flex justify-center flex-col items-center">
            <Image
              src="/life-at-krmu/benefits.webp"
              width={851}
              height={567}
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YRCBenefits;
