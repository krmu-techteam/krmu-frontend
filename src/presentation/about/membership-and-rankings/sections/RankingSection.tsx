import { RankingCard } from "@/features/about/membership-and-rankings";
import { Ranking } from "../components";
import SectionDivider from "@/components/common/SectionDivider";

interface RankingSectionProps {
  title: string;
  rankingData: RankingCard[];
}

const RankingSection = ({ title, rankingData }: RankingSectionProps) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 px-4 lg:px-0 text-center md:text-left">
          <h3 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight font-poppins leading-tight">
            {title}
          </h3>
        </div>

        <div className="overflow-hidden w-full">
          <Ranking rankingData={rankingData} />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default RankingSection;
