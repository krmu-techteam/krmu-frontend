import Image from "next/image";
import Link from "next/link";

const YRCMagazines = () => {
  return (
    <section className="bg-[url(/bg-gradient-2.webp)]  px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 mb-5">
          <div className="py-[30px] px-4 md:pl-[40px] md:pr-[30px] text-white border border-[#0060aa5e] bg-[#0060aa5e] mx-4 md:mx-8 min-h-[1px] h-full rounded-b-[20px]">
            <p className="text-2xl mt-2.5 mb-[15px]">
              The broad objectives of the Youth Red Cross Committee are to:
            </p>
            <ul className="mt-2.5">
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Promote selfless service and humanitarian values through
                  community interconnectedness.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Identify and resolve health and social challenges with
                  sustainable solutions.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Encourage social responsibility and active societal
                  participation.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Apply innovative expertise to tackle individual and community
                  challenges.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Foster teamwork, cooperation, and shared responsibilities in
                  group settings.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Mobilize community participation through inclusive
                  initiatives.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Gain skills in mobilizing community participation.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Develop leadership, decision-making skills, and a democratic
                  attitude.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Prepare individuals to respond effectively to emergencies and
                  disasters.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Promote peace, harmony, and integration across cultural and
                  social boundaries.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 text-white">
          <div className="text-center flex justify-center flex-col items-center">
            <h3 className="text-4xl font-semibold mt-2.5 mb-3.5">
              YRC Magazine
            </h3>
            <div className="flex flex-col sm:flex-row gap-5  mb-[30px]">
              <Link
                href="http://krmangalam.edu.in/pdfs/yrc-magazine-2023-24.pdf"
                target="_blank" rel="noopener noreferrer"
                className="common-btn-4"
              >
                2023-2024
              </Link>
              <Link
                href="https://krmangalam.edu.in/pdfs/yrc-magazine-2024-2025.pdf"
                target="_blank" rel="noopener noreferrer"
                className="common-btn-4"
              >
                2024-2025
              </Link>
            </div>
            <Image
              src="/life-at-krmu/hv.webp"
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

export default YRCMagazines;
