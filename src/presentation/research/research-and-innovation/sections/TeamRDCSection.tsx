import SectionDivider from "@/components/common/SectionDivider";
import { TeamRDCCard } from "../components";
import { TeamRDCSectionProps } from "@/features/research/research-and-innovation";

const TeamRDCSection = ({
  teamRdcSection,
}: {
  teamRdcSection: TeamRDCSectionProps;
}) => {
  const { title, teamRDCMembers } = teamRdcSection;
  return (
    <section className="relative max-w-[1530px] mx-auto w-full py-8 md:py-12 xl:py-20 px-6 md:px-7 xl:px-16">
      <h3 className="text-3xl md:text-5xl text-white font-bold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {teamRDCMembers &&
          teamRDCMembers?.map((item, i) => {
            return (
              <TeamRDCCard
                key={i}
                name={item?.name}
                designation={item?.designation}
                facultyUrl={item?.facultyUrl}
                facultyImageUrl={item?.facultyImageUrl}
              />
            );
          })}
      </div>
      <SectionDivider />
    </section>
  );
};

export default TeamRDCSection;
