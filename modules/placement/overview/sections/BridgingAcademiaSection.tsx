import Image from "next/image";
import { OverviewAccordion } from "../components";
import SectionDivider from "@/components/common/SectionDivider";

const BridgingAcademiaSection = () => {
  return (
    <section className="relative z-5 px-4 lg:py-24">
      <div className="max-w-[1530px] mx-auto w-full lg:flex items-center gap-6">
        <div className="lg:w-[40%]">
          <Image src="/placements/67.webp" width={570} height={700} className="w-[90%] h-[600px]" alt="" />
        </div>
        <div className="lg:w-[60%] mt-5">
          <h2 className="heading-primary mb-5">
            Bridging Academia <br /> and Industry
          </h2>
          <p className="mb-10 font-poppins text-white">
            Benefit from our strong ties with leading corporations and startups.
            Our partnerships not only bring in expert speakers but also open
            doors for internships and real-world projects, giving you a
            competitive edge.”
          </p>
          <OverviewAccordion />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default BridgingAcademiaSection;
