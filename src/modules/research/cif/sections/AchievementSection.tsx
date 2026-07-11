import { AchievementSectionProps } from "../types";
import { AchievementList } from "../components";

const AchievementSection = ({
  achievementSection,
}: {
  achievementSection: AchievementSectionProps;
}) => {
  const { title, achievements } = achievementSection;
  return (
    <section className="bg-[#2c172f] py-8 md:px-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
        <h4 className="text-3xl md:text-5xl font-bold text-white mb-10">
          {title}
        </h4>
        <AchievementList achievements={achievements} />
      </div>
    </section>
  );
};

export default AchievementSection;
