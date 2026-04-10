import HowWeComparisonCard from "./HowWeComparisonCard";

const HowWeCompare = () => {
  return (
    <section className="py-[50px] googleSansFamily compare-section px-4">
      <div className="max-w-[1296px] mx-auto w-full">
        <div className="text-center mb-12">
          <span className="bg-[#e2eefb] text-[#003666] px-[15px] py-[5px] rounded-[20px] text-[12px] font-bold uppercase tracking-[1px]">
            WHY KRMU B.TECH.?
          </span>
          <h2 className="compare-heading mt-4 mb-2">How We Compare</h2>
          <p className="compare-subheading">
            Know why KRMU is regarded as one of the best private colleges in
            Delhi NCR for B.Tech​. By comprehending the difference between
            KRMU’s B.Tech. programmes and other typical university programmes.
          </p>
        </div>
        <HowWeComparisonCard />
      </div>
    </section>
  );
};

export default HowWeCompare;
