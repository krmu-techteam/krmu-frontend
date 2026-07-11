import type { MembershipGuidelines as MembershipGuidelinesType } from "../../types";
import { MembershipGuidelineCard } from "./MembershipGuidelineCard";

const MembershipGuidelines = ({
  membershipGuidelines,
}: {
  membershipGuidelines: MembershipGuidelinesType[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10">
      {membershipGuidelines?.map((guide, idx) => {
        return <MembershipGuidelineCard key={idx} {...guide} />;
      })}
    </div>
  );
};
export default MembershipGuidelines;
