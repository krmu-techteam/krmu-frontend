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
    <section className="relative py-8 lg:py-12 xl:py-16 overflow-hidden">
      <SectionDivider className="!top-0 !bottom-auto" />
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="text-center max-w-[1200px] mx-auto mb-10 lg:mb-14">
          <h3 className="heading-primary mb-5">
            {title}
          </h3>
          <h4 className="text-white text-[16px] text-center md:text-pretty lg:text-center font-poppins md:text-lg font-medium leading-[1.5] mb-5 px-0 md:px-16 lg:px-0 tracking-[0.02em]">
            {subtitle}
          </h4>
          <p className="text-white/85 text-center md:text-justify lg:text-center font-poppins text-[15px] md:text-[16px] lg:text-[16px] leading-[1.9]">
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
