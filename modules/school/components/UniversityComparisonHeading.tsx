import { UniversityComparisonSectionProps } from "@/modules/school";

type UniversityComparisonHeadingProps = Pick<UniversityComparisonSectionProps, 'content'>;

const UniversityComparisonHeading = ({ content }: UniversityComparisonHeadingProps) => {
  return (
    <div className="text-center text-3xl md:text-[40px] lg:text-[45px] font-medium leading-snug font-serif mb-8 lg:mb-8 w-full lg:w-[90%] xl:w-[85%] mx-auto text-white">
      {content &&
        content
          .map((block) => block.children?.map((c: any) => c.text || "").join(""))
          .join(" ")
          .replace(/\n/g, " ")}
    </div>
  );
};

export default UniversityComparisonHeading;
