import { ResearchAchievementSlider } from "../components";
import { ResearchAchievementSectionProps } from "../types";

const ResearchAchievementsSection = ({
  researchAchievementSection,
}: {
  researchAchievementSection: ResearchAchievementSectionProps;
}) => {
  const { title, achievements } = researchAchievementSection;

  return (
    <section
      className="bg-[url(/research/gradient-3.webp)] bg-cover py-8 md:py-12 xl:py-20"
      id="research-achievements"
    >
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
        <h3 className="text-3xl md:text-[42px] text-white font-semibold mb-5 md:mb-10">
          {title}
        </h3>
        <div>
          <ResearchAchievementSlider achievements={achievements} />
        </div>
      </div>
    </section>
  );
};

export default ResearchAchievementsSection;
