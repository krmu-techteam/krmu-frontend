import HowWeComparisonCard from "./HowWeComparisonCard";

const HowWeCompare = () => {
  return (
    <section
      className="py-[50px] googleSansFamily compare-section px-4 scroll-mt-50"
      id="how-we-compare"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-12 w-[100%]">
          <span className="bg-[#e2eefb] text-[#003666] px-[15px] py-[5px] rounded-[20px] text-[12px] font-bold uppercase tracking-[1px]">
            WHY KRMU B.TECH.?
          </span>
          <h2 className="compare-heading mt-4 mb-2  ">
            Why Choose KRMU Over Other B.Tech. Colleges in Gurgaon?
          </h2>
          <p className="compare-subheading">
            Known as one of the best colleges for B.Tech. in Gurgaon (now
            Gurugram), KRMU not just focuses on practical learning but also
            prepares its students for the real-world’s competitive professional
            market.
          </p>
        </div>
        <HowWeComparisonCard />
      </div>
    </section>
  );
};

export default HowWeCompare;
