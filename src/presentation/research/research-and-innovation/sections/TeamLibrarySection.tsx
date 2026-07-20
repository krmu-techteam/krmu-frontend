import SectionDivider from "@/components/common/SectionDivider";
import { TeamLibrarySlider } from "../components";
import { TeamLibrarySectionProps } from "@/features/research/research-and-innovation";

const TeamLibrarySection = ({
  teamLibrarySection,
}: {
  teamLibrarySection: TeamLibrarySectionProps;
}) => {
  const { title, teamLibrarySliders } = teamLibrarySection;

  return (
    <section className="relative max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16 py-8 md:py-12 xl:py-20">
      <h3 className="text-3xl mb-5 lg:mb-0 md:text-5xl font-semibold text-white">
        {title}
      </h3>
      <div className="profile-card">
        {teamLibrarySliders &&
          teamLibrarySliders?.map((item, i) => {
            return (
              <TeamLibrarySlider
                key={i}
                imageUrl={item?.imageUrl}
                content={item?.content}
              />
            );
          })}
      </div>
      <SectionDivider />
    </section>
  );
};

export default TeamLibrarySection;
