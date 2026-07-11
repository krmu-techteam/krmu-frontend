import Image from "next/image";

import PlacementOverviewAccordion from "../global-comp/PlacementOverviewAccordion";

const BridgingAcademia = () => {
  return (
    <section className="px-4 lg:py-24">
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-6">
        <div className="lg:w-1/2">
          <Image src="/placements/67.webp" width={601} height={744} alt="" />
        </div>
        <div className="lg:w-1/2 mt-5">
          <h2 className="text-[26px] lg:text-5xl leading-[1.4] font-semibold mb-5">
            Bridging Academia <br /> and Industry
          </h2>
          <p className="mb-10">
            Benefit from our strong ties with leading corporations and startups.
            Our partnerships not only bring in expert speakers but also open
            doors for internships and real-world projects, giving you a
            competitive edge.”
          </p>
          <PlacementOverviewAccordion />
        </div>
      </div>
    </section>
  );
};

export default BridgingAcademia;
