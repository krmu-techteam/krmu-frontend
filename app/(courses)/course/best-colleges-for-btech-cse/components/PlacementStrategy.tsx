import PlacementStrategyGrid from "./PlacementStrategyGrid";

const PlacementStrategy = () => {
  return (
    <section className="googleSansFamily py-[50px] px-4">
      <div className="max-w-[1269px] mx-auto w-full text-center">
        <div className="mb-12">
          <span className="bg-[#e2eefb] text-[#003666] px-[15px] py-[5px] rounded-[20px] text-[12px] font-bold uppercase tracking-[1px]">
            Career Readiness
          </span>
          <h2 className="compare-heading mt-4 mb-2 leading-tight">
            92% Placement Rate @ KRMU: Possible? <br />
            <span className="highlight-text">Here's How We Do It!</span>
          </h2>
          <p className="compare-subheading">
            Touted as the best private college for B.Tech. CSE in India​, KRMU focuses not just on conceptual clarity but career-readiness as well. Our multifaceted approach ensures you are well-prepared for the professional world.
          </p>
        </div>
        <PlacementStrategyGrid />
        <div className="text-center mt-12">
          <div className="closing-statement">
            <h3 className="mb-2">
              You enter KRMU with Confusion but leave it with a
              <span className="highlight-text">
              {" "}  Career Portfolio &amp; Connections!
              </span>
            </h3>
            <button
              className="commonbtn2 mt-4 scroll-btn"
              data-target="formSection"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStrategy;
