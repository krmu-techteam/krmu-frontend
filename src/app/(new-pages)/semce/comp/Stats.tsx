const Stats = () => {
  return (
    <section className="p-5 sm:p-20 bg-[#0060AA] bg-[url(/semce/grid.svg)]">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-5"> 
        <div className="flex flex-col sm:flex-row gap-5">
          <span className="statsbg w-full sm:w-1/3">
            <strong>100%</strong> Practical Exposure
          </span>
          <span className="statsbg w-full sm:w-2/3">
            <strong>20+</strong> Industry and International <br className="hidden sm:block xl:hidden" /> Tie-ups
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <span className="statsbg w-full sm:w-1/2">
            <strong>₹6-10</strong> LPA Top Packages
          </span>
          <span className="statsbg w-full sm:w-1/2">
            <strong>10+</strong> Student Led Platforms
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
