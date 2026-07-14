import SectionDivider from "@/components/common/SectionDivider";
import { UniversityComparisonSectionProps } from "@/features/school/types";
import { UniversityComparisonHeading, UniversityComparisonTable } from "@/presentation/school/components";;

const UniversityComparisonSection = ({
  content,
  list1,
  list2,
  list3,
  slug,
}: UniversityComparisonSectionProps) => {
  return (
    <section className="py-12 xl:py-20 bg-transparent font-poppins relative z-10 px-6 md:px-8 lg:px-11 2xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full flex flex-col items-center">
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
