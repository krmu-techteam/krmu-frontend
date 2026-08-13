import { Check, X } from "lucide-react";
import { UniversityComparisonSectionProps } from "@/features/school";

type UniversityComparisonTableProps = Omit<
  UniversityComparisonSectionProps,
  "content" | "slug"
>;

const UniversityComparisonTable = ({
  list1,
  list2,
  list3,
}: UniversityComparisonTableProps) => {
  return (
    <div className="w-full border border-[#0084ff]/70 rounded-[4px] py-4 md:py-4 xl:py-7">
      {/* Table Header Row (Desktop View) */}
      <div className="hidden lg:grid grid-cols-3 gap-6 pb-4 border-b border-[#0084ff]/30 px-6 lg:px-8 xl:px-14">
        <div></div> {/* Empty top-left */}
        <div className="text-lg md:text-xl font-bold text-white col-span-1">
          {list2?.listheading || "Traditional College"}
        </div>
        <div className="text-lg md:text-xl font-bold text-white col-span-1">
          {list3?.listheading || "SOET"}
        </div>
      </div>

      {/* Table Body Rows */}
      <div className="flex flex-col">
        {list1?.map((item, index) => {
          const tradItem = list2?.listsitems?.[index];
          const krmuItem = list3?.listsitems?.[index];

          return (
            <div
              key={item?.id || index}
              className="py-4 px-4 sm:px-6 lg:px-8 xl:px-14 border-b border-[#0084ff]/25 last:border-b-0"
            >
              {/* ── Mobile & Tablet View (< lg) ── */}
              <div className="lg:hidden flex flex-col gap-3">
                {/* Feature Title */}
                <div className="text-[16px] sm:text-[17px] text-white font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0084ff] inline-block shrink-0" />
                  {item?.listtext}
                </div>

                {/* Comparison Cards (1 col mobile, 2 cols tablet) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-1">
                  {/* Traditional College (Red) */}
                  <div className="bg-[#ff4d4d]/10 border border-[#ff4d4d]/20 rounded-[4px] p-3 sm:p-4 flex flex-col gap-1.5">
                    <div className="text-[#ff8080] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <X className="w-4 h-4 text-[#ff6b6b] shrink-0" strokeWidth={2.5} />
                      <span>{list2?.listheading || "Traditional College"}</span>
                    </div>
                    <p className="text-[14px] sm:text-[15px] text-[#ffb3b3] leading-relaxed font-light">
                      {tradItem?.listtext}
                    </p>
                  </div>

                  {/* SOET (Gold) */}
                  <div className="bg-[#facc15]/10 border border-[#facc15]/25 rounded-[4px] p-3 sm:p-4 flex flex-col gap-1.5">
                    <div className="text-[#facc15] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-[#facc15] shrink-0" strokeWidth={2.5} />
                      <span>{list3?.listheading || "SOET"}</span>
                    </div>
                    <p className="text-[14px] sm:text-[15px] text-[#fef08a] leading-relaxed font-light">
                      {krmuItem?.listtext}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Desktop View (>= lg) ── */}
              <div className="hidden lg:grid grid-cols-3 gap-6 items-start">
                {/* Feature Title */}
                <div className="text-[16px] md:text-[17px] text-white/90 font-medium md:pt-1">
                  {item?.listtext}
                </div>

                {/* Traditional College (Red) */}
                <div className="flex items-start gap-4">
                  <X
                    className="w-5 h-5 md:w-6 md:h-6 text-[#ff6b6b] shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] md:text-[16.5px] text-[#ff9999] leading-relaxed">
                    {tradItem?.listtext}
                  </span>
                </div>

                {/* SOET (Gold) */}
                <div className="flex items-start gap-4">
                  <Check
                    className="w-5 h-5 md:w-6 md:h-6 text-[#facc15] shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] md:text-[16.5px] text-[#fef08a] leading-relaxed">
                    {krmuItem?.listtext}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UniversityComparisonTable;
