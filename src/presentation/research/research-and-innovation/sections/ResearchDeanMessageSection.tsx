import SectionDivider from "@/components/common/SectionDivider";
import { ResearchDeanMessageProps } from "@/features/research/research-and-innovation";

const ResearchDeanMessageSection = ({
  researchDeanMessageSection,
}: {
  researchDeanMessageSection: ResearchDeanMessageProps;
}) => {
  const {
    title,
    subTitle,
    description_one,
    description_two,
    description_three,
    description_four,
  } = researchDeanMessageSection;
  return (
    <section className="relative pb-8 md:pb-12 xl:pb-20 max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16 text-white flex flex-col lg:flex-row items-center gap-10 mt-10 lg:mt-0">
      <div className="lg:w-1/2">
        <h3 className="text-3xl md:text-[42px] font-bold mb-5">{title}</h3>
        <div className="  text-white leading-[2] text-justify">
          <p className="text-lg font-medium">{subTitle}</p>
          <br />
          <p className="font-poppins">{description_one}</p>
          <br />
          <p className="font-poppins">{description_two}</p>
        </div>
      </div>
      <div className="lg:w-1/2 leading-[1.8] font-poppins">
        <p className="font-poppins">{description_three}</p>
        <br />
        <p className="font-poppins">{description_four}</p>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ResearchDeanMessageSection;
