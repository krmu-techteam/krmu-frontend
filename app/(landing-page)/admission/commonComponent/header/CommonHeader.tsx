import Image from "next/image";
import ScrollButton from "../../CommonComponent2026/ScrollButton";
import KRMUTimer from "../../CommonComponent2026/KRMUTimer";

export const CommonHeader = () => {
  return (
    <header
      className="p-2 bg-white"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >

      
      <div className="px-3 flex flex-col xl:flex-row justify-between items-center gap-3">
        <div className="w-full xl:w-3/6 2xl:w-1/3 flex  justify-center xl:justify-start gap-5">
          <Image
            src="/wp-content/landingpage/common/krmlogo.webp"
            width={350}
            height={65}
            alt="MBA Landing Page Logo"
          />
          <ScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="max-w-[180px] w-full py-[10px] px-[25px] text-white bg-[#e31e24] rounded-[10px] hidden sm:block 2xl:hidden"
          >
            Apply Now
          </ScrollButton>
        </div>
        <div className="w-full xl:w-3/6 2xl:w-2/3  flex justify-center xl:justify-end gap-5">
          {/* <button className="max-w-[180px] w-full py-[15px] px-[25px] text-white bg-[#e31e24] rounded-[15px]">
            Apply Now
          </button> */}
          {/* <AnimatedCounter targetDate="February 28, 2026 6:30 PM" /> */}
         <KRMUTimer targetDate="2026-04-14T00:00:00" />
         
          <ScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="max-w-[180px] w-full py-[10px] px-[25px] text-white bg-[#e31e24] rounded-[10px] hidden 2xl:block"
          >
            <span className="text-shadow-lg">Apply Now</span>
          </ScrollButton>
        </div>
      </div>
    </header>
  );
};
