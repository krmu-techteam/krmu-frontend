import { CdcTeamItem } from "@/lib/api/cdcteam";
import TeamMemberCard from "../global-comp/TeamMemberCard";

type Props = {
  cdcTeamData: CdcTeamItem[];
};

const TeamMembers = ({ cdcTeamData }: Props) => {
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-[1530px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {cdcTeamData &&
              cdcTeamData?.map((item, i) => {
                return <TeamMemberCard key={i} data={item} />;
              })}
            {/* <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
