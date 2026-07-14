import Image from "next/image";
import { GuidelineCard } from "../components";
import { GUIDELINES } from "@/features/placement/the-placements-process";

const PlacementGuidelineSection = () => {
 
  return (
    <>
      <section className="py-[60px] pb-10 px-[30px]">
        <div className="max-w-[1530px] mx-auto w-full flex">
          <div className="lg:w-1/2 text-white font-poppins">
            {GUIDELINES.map((guideline, index) => {
              return <GuidelineCard key={index} {...guideline} />;
            })}
          </div>
          <div className="lg:w-1/2"></div>
        </div>
        <div className="max-w-[1530px] mx-auto w-full -mt-[15%] hidden lg:block">
          <Image
            src="/programmes/placementprocessbannermidpic.webp"
            width={1554}
            height={724}
            alt="student encouraged"
          />
        </div>
      </section>
    </>
  );
};

 

export default PlacementGuidelineSection;
