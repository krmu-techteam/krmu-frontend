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
            How do we achieve a 92% placement rate @ KRMU? <br />
            <span className="highlight-text">Here's How We Do It!</span>
          </h2>
          <p className="compare-subheading">
            As one of the best engineering colleges in Delhi NCR, KRMU doesn't
            just focus on practical learning but also prepares you for the
            real-world professional market.
          </p>
        </div>
        <PlacementStrategyGrid />
        <div className="text-center mt-12">
          <div className="closing-statement">
            <h3 className="mb-2">
              Take Charge of
              <span className="highlight-text"> Your Passion Today</span>
            </h3>
            <CourseScrollButton
              targetId="apply-section"
              highlightClass="flash-border"
              btnClass="commonbtn2 mt-4 scroll-btn"
              data-target="formSection"
            >
              Enrol Now!
            </CourseScrollButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStrategy;
