import PlacementStrategyGrid from "./PlacementStrategyGrid";
import CourseScrollButton from "../../common/CourseScrollButton";

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
            By virtue of being on the list of the best private B.Tech. Colleges
            in Delhi NCR, KRMU, not only focus on conceptual clarity but
            career-readiness as well. Our multifaceted approach ensures you are
            well-prepared for the professional world.
          </p>
        </div>
        <PlacementStrategyGrid />
        <div className="text-center mt-12">
          <div className="closing-statement">
            <h3 className="mb-2">
              Start with Confusion, graduate with a Career portfolio &
              Connections at KRMU, one of the best colleges in
              <span className="highlight-text"> Delhi NCR for B.Tech.</span>
            </h3>
            <CourseScrollButton
              targetId="apply-section"
              highlightClass="flash-border"
              btnClass="commonbtn2 mt-4 scroll-btn"
              data-target="formSection"
            >
              Start Your Journey Today
            </CourseScrollButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStrategy;
