import SectionDivider from "@/components/common/SectionDivider";
import { StatCard } from "@/components/common/StatCard";
import { HighlightSectionProps } from "../types";

const HighlightSection = ({ stats }: HighlightSectionProps) => {
  return (
    <section className="relative w-full overflow-hidden px-6 md:px-11 xl:px-16 py-8 md:py-12 xl:py-20 font-poppins text-center transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xl:gap-5">
          {/* Card 1: Recruiters */}
          {stats?.map((item) => {
            return (
              <StatCard
                key={item?.id}
                bgColor={item?.bgColor}
                number={item?.number}
                label={item?.label}
              />
            );
          })}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default HighlightSection;
