import { ObjectivesSectionProps } from "@/features/life-at-krmu/community-connect";
import { Magazine, ObjectivesList } from "../components";

const ObjectivesSection = ({
  objectivesSection,
}: {
  objectivesSection: ObjectivesSectionProps;
}) => {
  const { heading, points, magazine } = objectivesSection;
  return (
    <section className="bg-[url(/bg-gradient-2.webp)]">
      <div className="max-w-[1530px] mx-auto font-poppins w-full flex flex-col lg:flex-row gap-10 px-6 md:px-7 xl:px-16">
        <ObjectivesList heading={heading} points={points} />
        <Magazine magazine={magazine} />
      </div>
    </section>
  );
};

export default ObjectivesSection;
