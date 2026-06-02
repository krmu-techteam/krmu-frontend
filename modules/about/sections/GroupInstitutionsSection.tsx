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
    <section className="relative py-[60px] lg:py-[90px] overflow-hidden">
      <SectionDivider className="!top-0 !bottom-auto" />
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[1200px] mx-auto mb-10 lg:mb-14">
          <h3 className="text-white text-[34px] lg:text-[42px] font-serif font-bold leading-tight mb-5">
            {title}
          </h3>
          <h4 className="text-white text-[16px] font-poppins md:text-lg font-semibold leading-[1.5] mb-5">
            {subtitle}
          </h4>
          <p className="text-white/85 font-poppins text-[14px] sm:text-[16px] lg:text-[16px] leading-[1.9]">
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
