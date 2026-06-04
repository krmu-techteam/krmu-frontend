import { StrapiMedia } from "@/lib/types/common";
import { InstitutionCarousel } from "../components";
import SectionDivider from "@/components/common/SectionDivider";

interface GroupInstitutionsSectionProps {
  title: string;
  subtitle: string;
  description: string;
  krmBranchData: StrapiMedia[];
}

const GroupInstitutionsSection = ({
  title,
  subtitle,
  description,
  krmBranchData,
}: GroupInstitutionsSectionProps) => {
  return (
    <section className="relative py-6 md:py-8 lg:py-12 xl:py-16 overflow-hidden">
      <SectionDivider className="!top-0 !bottom-auto" />
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="text-center max-w-[1200px] mx-auto mb-10 lg:mb-14">
          <h3 className="text-white text-[34px] lg:text-[42px] font-serif font-bold leading-tight mb-5">
            {title}
          </h3>
          <h4 className="text-white text-[16px] text-pretty lg:text-left font-poppins md:text-lg font-semibold leading-[1.5] mb-5 px-16 lg:px-0">
            {subtitle}
          </h4>
          <p className="text-white/85 text-justify lg:text-left font-poppins text-[16px] lg:text-[16px] leading-[1.9]">
            {description}
          </p>
        </div>
        <div>
          <InstitutionCarousel krmBranchImages={krmBranchData} />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default GroupInstitutionsSection;
