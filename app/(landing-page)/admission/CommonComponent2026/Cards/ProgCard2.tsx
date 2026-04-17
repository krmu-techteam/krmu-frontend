// import Link from "next/link";

// const ProgCard2 = () => {
//   return (
//     <article
//       className="relative bg-white rounded-2xl overflow-hidden flex flex-col  transition-all
//     duration-[250ms]
//     shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1)]
//     ease-[cubic-bezier(0.16,1,0.3,1)]
//     hover:-translate-y-2
//     hover:shadow-[0_20px_25px_-5px_rgb(0_0_0/0.1),0_8px_10px_-6px_rgb(0_0_0/0.1)] w-full"
//     >
//       <div className="absolute top-4 left-4 py-1 px-3 text-xs font-bold bg-[#e31e24] text-white uppercase rounded-full z-10">Core</div>
//       <div className="pt-12 px-6 pb-6">
//         <h4 className="text-base mb-1 text-[#002d73] font-bold">B.Tech CSE</h4>
//         <p className="text-[#6b7280] text-sm mb-3 font-semibold">Foundational Computer Science</p>
//         <p className="text-[#4b5563] mb-5">
//           Strong foundation in algorithms, data structures, software
//           engineering, and systems design. Prepares you for any tech career
//           path.
//         </p>
//         <div className="flex flex-col mb-5 gap-2 p-4 bg-[#f9fafb] rounded-xl">
//           <div className="flex justify-between text-sm">
//             <span className="text-[#6b7280]">Duration</span>
//             <span className="text-[#1f2937] font-semibold">4 Years</span>
//           </div>
//           <div className="flex justify-between text-sm">
//             <span className="text-[#6b7280]">Annual Fee</span>
//             <span className="text-[#1f2937] font-semibold">₹2,30,000</span>
//           </div>

//         </div>
//         <Link href="#apply-form" className="w-full text-white bg-[#002d73] hover:bg-[#0052cc] hover:-translate-y-0.5 cursor-pointer py-3 px-5 mt-auto min-h-12 text-base font-semibold rounded-xl inline-flex justify-center items-center">
//           Apply for CSE
//         </Link>
//       </div>
//     </article>
//   );
// };

// export default ProgCard2;

import Link from "next/link";
import { ProgrammeCardItem } from "../../law-2026/contentype";
import ScrollButton from "../ScrollButton";

type Props = {
  data: ProgrammeCardItem;
};

const blueBadge: string[] = [
  "ImaginXP",
  "IBM",
  "Microsoft Certifications",
  "Xebia",
  "IIDE",
  "Safexpress",
  "EY",
  "EC-Council",
  "Samatrix.io",
  "GCEC Global Foundation",
  "Grant Thornton",
  "Emversity",
  "IBM & Microsoft Certifications",
  "EC-Council & IBM",
];

const ProgCard2 = ({ data }: Props) => {
  return (
    <article
      className="relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all
      duration-[250ms]
      shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1)]
      ease-[cubic-bezier(0.16,1,0.3,1)]
      hover:-translate-y-2
      hover:shadow-[0_20px_25px_-5px_rgb(0_0_0/0.1),0_8px_10px_-6px_rgb(0_0_0/0.1)] w-full"
    >
      {/* TAG */}

      {data?.tag?.trim() && (
        <div
          className={`absolute top-4 left-4 py-1 px-3 text-xs font-bold ${blueBadge?.find((item) => item === data?.tag?.trim()) ? "bg-[#002d73]" : "bg-[#e31e24]"} text-white uppercase rounded-full z-10`}
        >
          {data.tag}
        </div>
      )}

      {/* <div className="absolute top-4 left-4 py-1 px-3 text-xs font-bold bg-[#e31e24] text-white uppercase rounded-full z-10">
        {data.tag}
      </div> */}

      <div className="pt-12 px-6 pb-6 flex flex-col h-full">
        {/* TITLE */}
        <h4 className="text-base mb-1 text-[#002d73] font-bold">
          {data.title}
        </h4>

        <p className="text-[#6b7280] text-sm mb-3 font-semibold">
          {data.subtitle}
        </p>

        <p className="text-[#4b5563] mb-5">{data.desc}</p>

        {/* INFO BOX */}
        {/* <div className="flex flex-col mb-5 gap-2 p-4 bg-[#f9fafb] rounded-xl">
          <div className="flex justify-between text-sm">
            <span className="text-[#6b7280]">Duration</span>
            <span className="text-[#1f2937] font-semibold">
              {data.duration}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-[#6b7280]">Annual Fee</span>
            <span className="text-[#1f2937] font-semibold">
              {data.fee}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-[#6b7280]">Eligibility</span>
            <span className="text-[#1f2937] font-semibold">
              Passed 12th with 50% aggregate marks
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-[120px_1fr] gap-y-2 mb-5 p-4 bg-[#f9fafb] rounded-xl text-sm">
          <span className="text-[#6b7280]">Duration</span>
          <span className="text-[#1f2937] font-semibold text-right">
            {data.duration}
          </span>

          {data.fees && (
            <>
              <span className="text-[#6b7280]">Annual Fee</span>
              <span className="text-[#1f2937] font-semibold text-right">
                {data.fees}
              </span>
            </>
          )}

          <span className="text-[#6b7280]">Eligibility</span>
          <span className="text-[#1f2937] font-semibold text-right">
            {data.eligibility ?? "Passed 12th with 50% aggregate marks."}
          </span>

          {/* <span className="text-[#1f2937] font-semibold text-right">
    Passed 12th with 50% aggregate marks
  </span> */}
        </div>

        {/* CTA */}

        <ScrollButton
          targetId="apply-section"
          highlightClass="flash-border"
          btnClass="w-full text-white bg-[#002d73] hover:bg-[#0052cc]
          hover:-translate-y-0.5 py-3 px-5 mt-auto min-h-12
          text-base font-semibold rounded-xl inline-flex justify-center items-center"
        >
          {data.ctaText}
        </ScrollButton>
      </div>
    </article>
  );
};

export default ProgCard2;
