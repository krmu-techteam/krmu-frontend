import SectionDivider from "@/components/common/SectionDivider";
import { ResearchHighlightSlider } from "../components";
import { ResearchHighlightsProps } from "@/features/research/research-and-innovation/types";

const ResearchHighlightSection = ({
  researchHighlightSection,
}: {
  researchHighlightSection: ResearchHighlightsProps;
}) => {
  const { title, highlights } = researchHighlightSection;

  return (
    <section
      className="relative bg-[url(/research/gradient-1.webp)] bg-cover bg-no-repeat py-8 md:py-12 xl:py-20"
      id="_res-highlights"
    >
      <div className="text-white max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
        <h3 className="text-3xl md:text-[42px] font-semibold">{title}</h3>

        <div className="w-full mt-10">
          <ResearchHighlightSlider highlights={highlights} />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ResearchHighlightSection;
