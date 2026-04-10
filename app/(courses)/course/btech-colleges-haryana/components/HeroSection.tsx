import Image from "next/image";
import NoPaperFormsWidget from "../../../../(landing-page)/admission/CommonComponent2026/NoPaperFormsWidget";
import CourseScrollButton from "../../common/CourseScrollButton";

const formId = "31c1452015d32698095f833b3e7eb9c5";

const HeroSection = () => {
  return (
    <section className="relative">
      <Image
        src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_hero_bg_1_6bfcbf6655.webp"
        fill
        className="object-cover"
        alt=""
      />
      <div className="px-4 md:px-12 z-50 py-40 flex flex-col lg:flex-row justify-between items-center relative">
        <div className="w-full lg:w-1/2 xl:w-1/3">
          <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-3">
            <span className="mt-[10px] px-[14px] py-[8px] rounded-[20px] text-[14px] font-semibold bg-[#f5a623] text-black">
              NAAC A Accredited
            </span>

            <span className="mt-[10px] px-[14px] py-[8px] rounded-[20px] text-[14px] font-semibold bg-[rgba(255,255,255,0.2)] text-white">
              UGC Recognised
            </span>

            <span className="mt-[10px] px-[14px] py-[8px] rounded-[20px] text-[14px] font-semibold bg-[rgba(255,255,255,0.2)] text-white">
              Est. 2013
            </span>
          </div>
          <h3 className="text-white font-bold mb-3 leading-[1.5] text-3xl  lg:text-5xl 2xl:text-[46px] w-full lg:w-[110%]">
            Enrol At KRMU
            <br />
            One Of The Best <br />
            B.Tech. Colleges in Haryana
            <br />
            For Admissions 2026-27
          </h3>
          <p className="text-white mb-6">
            Build your future with KRMU, one of the top B.Tech. Colleges in
            Haryana, offering an array of B.Tech. CSE courses that drive
            success!
          </p>
          <div className="text-white flex flex-wrap gap-2 sm:justify-center md:justify-start text-sm">
            <span>100% Placement Support</span>
            <span>|</span>
            <span>9 Engineering Specialisations</span>
            <span>|</span>
            <span>₹56.6 LPA Highest Package</span>
          </div>
          <CourseScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="flex items-center justify-center gap-2 commonbtn2 mt-4"
          >
            <span>Apply Now</span>

            <svg
              width="18"
              height="18"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </CourseScrollButton>
        </div>
        <div
          className="w-full lg:w-1/2 xl:w-2/3 mt-5 sm:mt-0 scroll-mt-28 lg:scroll-mt-32"
          id="apply-section"
        >
          <div className="flex justify-center lg:justify-end">
            {formId && (
              <div className="heroBannerFormcourse__form max-w-[500px] w-full">
                <div className="heroBannerFormcourse-header">
                  <h3 className="mb-0 text-center">
                    <strong>
                      Apply Today for <br />
                      <span className="uppercase">
                        K.R. Mangalam University
                      </span>
                    </strong>
                  </h3>
                </div>

                <NoPaperFormsWidget widgetId={formId} height="480px" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
