import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  CircleArrowRight,
  IndianRupee,
} from "lucide-react";

type criteriaProps = {
  Duration: string;
  eligibility_criteria: string;
  eligibility_utm_links: string;
  id: number;
  programme_fee_per_year: string;
  semester_i: string;
  semester_ii: string;
};

type progProps = {
  criteria: criteriaProps;
  documentId: string;
  highlightitle: string | null;
  id: number;
  // order_num: number;
  programmeslug: string;
  title: string;
};

interface Props {
  prog: progProps;
  criteria?: criteriaProps;
  setShow: (value: boolean) => void;
  progNewLine: string[];
}

const ProgramCardContent = ({
  prog,
  criteria,
  setShow,
  progNewLine,
}: Props) => {
  return (
    <>
      <Link
        href={`/programs/${prog.programmeslug || "#"}`}
        className="block w-full text-white text-base pr-10 z-20"
        target="_blank"
        rel="noopener noreferrer"
        dangerouslySetInnerHTML={{
          __html: `${prog.title}`,
        }}
      />

      {criteria && (
        <div className="flex flex-col sm:flex-row border-y border-[rgba(255,255,255,0.2)] sm:gap-5 z-20">
          <div className="w-fit flex py-2.5 gap-2 text-sm cursor-text text-white items-center">
            <span>
              <Calendar size={20} />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-normal text-xs">Duration:</span>
              <span className="text-xs">{prog.criteria?.Duration}</span>
            </div>
          </div>
          <div className="w-fit flex py-2.5 gap-2 text-sm cursor-text text-white items-center">
            <span>
              <IndianRupee size={20} />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-normal text-xs">Programme Fee:</span>
              <span className="text-xs">
                Rs. {prog.criteria?.programme_fee_per_year} / Year{" "}
                {prog.programmeslug === "bhmct-hotel-management"
                  ? "(2025-26)"
                  : ""}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-1.5 sm:gap-2.5 items-center pt-2.5 z-20">
        <button
          // className="border rounded-sm p-2.5 2xl:px-5 2xl:py-2.5 text-xs cursor-pointer border-white text-white w-full sm:w-1/2"
          className="bg-white cursor-pointer text-sm text-[#0161B0] border border-[#999999] rounded-[5px] p-2.5 2xl:px-5 2xl:py-2.5 w-1/2"
          onClick={() => setShow(true)}
        >
          Fee Structure
        </button>
        {prog.criteria?.eligibility_utm_links && (
          <Link
            href={prog.criteria.eligibility_utm_links}
            target="_blank"
            className="bg-[#cb000d] block text-sm text-white text-center border border-[#cb000d] rounded-[5px] p-2.5 2xl:px-5 2xl:py-2.5 w-1/2"
          >
            Apply Now
          </Link>
        )}

        {/* <Link
          href={`/programs/${prog.programmeslug || "#"}`}
          target="_blank"
          className="text-white rounded-sm py-2.5 2xl:py-2.5 text-sm flex items-center gap-2"
        >
          <CircleArrowRight /> View Programme
        </Link> */}
      </div>
      {progNewLine.includes(prog.programmeslug) && (
        <div className="text-white text-[11px] text-center font-normal relative leading-tight z-20">
          3-Year Lateral Entry option also available for eligible students
        </div>
      )}
    </>
  );
};

export default ProgramCardContent;
