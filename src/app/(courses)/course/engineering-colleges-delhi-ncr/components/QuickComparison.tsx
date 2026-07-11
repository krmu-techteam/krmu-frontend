import QuickComparisonTable from "./QuickComparisonTable";

const QuickComparison = () => {
  return (
    <section
      className="py-[50px] px-4 googleSansFamily scroll-mt-30"
      id="courses"
    >
      <div className="max-w-[1296px] mx-auto w-full">
        <div className="text-center mb-12">
          {/* <span className="bg-[#e2eefb] text-[#003666] px-[15px] py-[5px] rounded-[20px] text-[12px] font-bold uppercase tracking-[1px]">
            Quick Comparison
          </span> */}
          <h3 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold text-[#0d1216] leading-snug mt-4 mb-2 googleSansFontFamily">
            Explore Industry-Led Courses at the Best Engineering College in
            Delhi NCR
          </h3>
          <p className="text-[#6a7c8a] font-normal">
            While there are many engineering colleges near Delhi NCR, KRMU
            stands out by offering specialised, industry-led programmes that
            ensure our students are recruited by leading companies in India and
            beyond.
          </p>
        </div>
        <QuickComparisonTable />
      </div>
    </section>
  );
};

export default QuickComparison;
