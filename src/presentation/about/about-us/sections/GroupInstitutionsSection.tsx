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
    <section className="relative py-8 md:py-12 xl:py-20 overflow-hidden">
      <SectionDivider className="!top-0 !bottom-auto" />
      <div className="relative z-10 max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <div className="text-center max-w-[1200px] mx-auto mb-10 lg:mb-14">
          <h3 className="heading-primary mb-6">{title}</h3>
          <h4 className="text-white text-[16px] text-center font-poppins font-semibold leading-[1] mb-5 tracking-normal">
            {subtitle}
          </h4>
          <p className="text-white/85 text-center font-poppins text-[16px] font-normal  tracking-normal">
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
