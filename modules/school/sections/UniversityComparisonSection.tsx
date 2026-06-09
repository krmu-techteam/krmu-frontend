import SectionDivider from "@/components/common/SectionDivider";
import {
  UniversityComparisonSectionProps,
  UniversityComparisonHeading,
  UniversityComparisonTable,
} from "@/modules/school";

const UniversityComparisonSection = ({
  content,
  list1,
  list2,
  list3,
  slug,
}: UniversityComparisonSectionProps) => {
  return (
    <section className="py-16 md:py-20 bg-transparent px-4 font-poppins relative z-10">
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
