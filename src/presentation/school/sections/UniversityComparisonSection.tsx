import SectionDivider from "@/components/common/SectionDivider";
import { UniversityComparisonSectionProps } from "@/features/school";
import {
  UniversityComparisonHeading,
  UniversityComparisonTable,
} from "@/presentation/school/components";

const UniversityComparisonSection = ({
  content,
  list1,
  list2,
  list3,
  slug,
}: UniversityComparisonSectionProps) => {
  return (
    <section className="py-12 xl:py-20 bg-transparent font-poppins relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 w-full flex flex-col items-center">
        {/* Heading Component */}
        <UniversityComparisonHeading content={content} />

        {/* Comparison Table Component */}
        <UniversityComparisonTable list1={list1} list2={list2} list3={list3} />
      </div>
      <SectionDivider />
    </section>
  );
};

export default UniversityComparisonSection;
