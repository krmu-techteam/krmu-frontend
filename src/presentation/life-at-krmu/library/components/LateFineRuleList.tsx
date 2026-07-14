import { ChevronsRight } from "lucide-react";
import { FineRule } from "@/features/life-at-krmu/library/types";

const LateFineRuleList = ({ fineRules }: { fineRules?: FineRule[] }) => {
  if (!fineRules) return null;
  return (
    <ul>
      {fineRules?.map((rule, idx) => (
        <li className="flex gap-2.5 text-base pb-1.5" key={idx}>
          <div>
            <ChevronsRight color="#ffffff" size={20} />
          </div>
          <span>{rule?.content}</span>
        </li>
      ))}
    </ul>
  );
};
export default LateFineRuleList;
