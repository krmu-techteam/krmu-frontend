import { Dot } from "lucide-react";
import Image from "next/image";

const PhdWhyphd = () => {
  return (
    <section className="bg-[#F8F9FA] py-[140px] px-4">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="whyphdHeading relative">
          <h2 className="text-[32px] font-semibold mb-2.5 text-center">
            Why Choose a Ph.D. at KRMU?
          </h2>
          <div
            className="faded-text font-bold text-gray-300 opacity-30
      tracking-wide uppercase
      select-none pointer-events-none"
          >
           Why Choose a Ph.D. at KRMU?
          </div>
          <div className="custom-border absolute left-[50%] translate-x-[-50%]"></div>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 mt-20">
          <div className="w-full xl:w-1/2">
            <Image
              src="/landingpage/phd/whyphd.webp"
              width={644}
              height={532}
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-full xl:w-1/2">
            <ul>
              <li className="flex items-start gap-2 border-b-2 border-[#E2E8F0] pb-3 text-lg">
                <div className="mt-1">
                  {/* <Image
                    src="/landingpage/phd/why-phd/item-1.svg"
                    width={18}
                    height={24}
                    alt=""
                    className="w-12 h-12"
                  /> */}
                  
                </div>
                <div className="font-light text-justify text-balance">
                  K.R. Mangalam University offers an intellectually stimulating environment for doctoral candidates across diverse disciplines. With expert faculty mentorship, state-of-the-art labs, and a multi-disciplinary approach, our Ph.D. programmes empower researchers to address real-world challenges and make meaningful academic contributions.
                </div>
              </li>
              </ul>
              <ul>
              <li className="flex items-center gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  {/* <Image
                    src="/landingpage/phd/why-phd/item-2.svg"
                    width={18}
                    height={24}
                    alt=""
                  /> */}
                  <Dot size={30} strokeWidth={3} />
                </span>
                <div className="font-semibold">
                  Interdisciplinary Research Across Multiple Disciplines
                </div>
              </li>

              <li className="flex items-center gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  {/* <Image
                    src="/landingpage/phd/why-phd/item-3.svg"
                    width={18}
                    height={24}
                    alt=""
                  /> */}
                  <Dot size={30} strokeWidth={3} />
                </span>
                <div className="font-semibold">
                 Renowned Faculty, Mentors, and Research Collaborators
                </div>
              </li>

              <li className="flex items-center gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  {/* <Image
                    src="/landingpage/phd/why-phd/item-4.svg"
                    width={18}
                    height={24}
                    alt=""
                  /> */}
                  <Dot size={30} strokeWidth={3} />
                </span>
                <div className="font-semibold">
                 Access to Advanced Laboratories, Libraries, and Digital resources
                </div>
              </li>
              <li className="flex items-center gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  {/* <Image
                    src="/landingpage/phd/why-phd/item-2.svg"
                    width={18}
                    height={24}
                    alt=""
                  /> */}
                  <Dot size={30} strokeWidth={3} />
                </span>
                <div className="font-semibold">
                  Flexible Course Structure with Emphasis on Original Research
                </div>
              </li>
              <li className="flex items-center gap-2 border-b-2 border-[#E2E8F0] py-3 text-lg">
                <span className="mt-1">
                  {/* <Image
                    src="/landingpage/phd/why-phd/item-5.svg"
                    width={24}
                    height={24}
                    alt=""
                  /> */}
                  <Dot size={30} strokeWidth={3} />
                </span>
                <div className="font-semibold">
                  Opportunities to Publish in Reputed Journals and Represent at Conferences
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdWhyphd;
