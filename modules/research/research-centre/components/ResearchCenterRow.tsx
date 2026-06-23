import Link from "next/link";
import { ResearchCentreProps } from "../types";

const ResearchCenterRow = ({
  idx,
  researchCenter,
}: {
  idx: number;
  researchCenter: ResearchCentreProps;
}) => {
  return (
    <tr
      key={idx}
      className="border-b border-gray-200 last:border-b-0 hover:bg-[#0B3D66]/20 transition-colors"
    >
      <td className="px-6 py-5">
        <Link
          href={researchCenter?.reportUrl || ""}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white hover:text-blue-100 transition-colors"
        >
          {researchCenter?.title}
        </Link>
      </td>

      <td className="px-6 py-5 text-right">
        <Link
          href={researchCenter?.viewUrl || ""}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xs bg-[#0a3457] px-4 py-2 text-sm font-normal text-white hover:bg-[#124977] transition-colors"
        >
          {researchCenter?.viewText}
        </Link>
      </td>
    </tr>
  );
};
export default ResearchCenterRow;
