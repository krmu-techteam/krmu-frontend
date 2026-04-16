import HowWeComparisonCard from "./HowWeComparisonCard";

const HowWeCompare = () => {
  return (
    <section
      className="py-[50px] googleSansFamily compare-section px-4 scroll-mt-30 lg:scroll-mt-50"
      id="how-we-compare"
    >
      <div className="max-w-[1296px] mx-auto w-full">
        <div className="text-center mb-12">
          <span className="bg-[#e2eefb] text-[#003666] px-[15px] py-[5px] rounded-[20px] text-[12px] font-bold uppercase tracking-[1px]">
            Why KRMU for Engineering in 2026?
          </span>
          <h2 className="compare-heading mt-4 mb-2">How Do We Compare?</h2>
          <p className="compare-subheading">
            See the difference between KRMU's engineering programmes and typical
            university programmes.
          </p>
        </div>
        <HowWeComparisonCard />
      </div>
    </section>
  );
};

export default HowWeCompare;
