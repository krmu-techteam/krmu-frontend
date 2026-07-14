import { LibraryContentProps } from "@/features/life-at-krmu/library";
import LateFineRuleList from "../LateFineRuleList";
import MemberLoanPolicyTable from "../MemberLoanPolicyTable";

const LateFine = ({
  libraryContent,
}: {
  libraryContent?: LibraryContentProps;
}) => {
  if (!libraryContent?.lateFine) return null;
  const { tagLine, heading, description, fineRules, memberLoanPolicy } =
    libraryContent?.lateFine;
  return (
    <div className="libtabcontent font-poppins text-white">
      <p>{tagLine}</p>
      <br />
      <h2>{heading}</h2>
      <p>{description}</p>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/2 p-5 bg-[#051630] text-white rounded-[20px]">
          <LateFineRuleList fineRules={fineRules} />
        </div>
        <div className="w-full lg:w-1/2">
          <MemberLoanPolicyTable memberLoanPolicy={memberLoanPolicy} />
        </div>
      </div>
    </div>
  );
};

export default LateFine;
