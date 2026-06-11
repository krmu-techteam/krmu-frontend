import { Check, X } from "lucide-react";
import { UniversityComparisonSectionProps } from "@/modules/school";

type UniversityComparisonTableProps = Omit<UniversityComparisonSectionProps, 'content' | 'slug'>;

const UniversityComparisonTable = ({ list1, list2, list3 }: UniversityComparisonTableProps) => {
  return (
    <div className="w-full border border-[#0084ff]/70 rounded-sm shadow-2xl py-4 md:py-4 xl:py-7">
      {/* Table Header Row */}
      <div className="hidden md:grid grid-cols-3 gap-6 pb-4 border-b border-[#0084ff]/30 px-6 md:px-8 xl:px-14">
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
              className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 items-start py-4 px-6 md:px-8 xl:px-14"
            >
              {/* Feature Title */}
              <div className="text-[16px] md:text-[17px] text-white/90 font-medium md:pt-1">
                {item?.listtext}
              </div>
              
              {/* Traditional College (Red) */}
              <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
                <div className="md:hidden text-white/50 text-sm mb-1 uppercase tracking-wider font-semibold">
                  {list2?.listheading || "Traditional College"}
                </div>
                <div className="flex items-start gap-4">
                  <X className="w-5 h-5 md:w-6 md:h-6 text-[#ff6b6b] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-[15px] md:text-[16.5px] text-[#ff9999] leading-relaxed">
                    {tradItem?.listtext}
                  </span>
                </div>
              </div>

              {/* SOET (Gold) */}
              <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
                <div className="md:hidden text-white/50 text-sm mb-1 uppercase tracking-wider font-semibold mt-4">
                  {list3?.listheading || "SOET"}
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-[#facc15] shrink-0 mt-0.5" strokeWidth={2.5} />
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
