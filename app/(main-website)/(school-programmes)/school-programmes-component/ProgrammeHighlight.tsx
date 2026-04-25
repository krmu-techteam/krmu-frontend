import { HiglightCard } from "@/lib/types/school-programme";
import ProgramHighlightSlider from "../school-prog-global-comps/ProgramHighlightSlider";
import ProgrammeHighlightCard from "../school-prog-global-comps/ProgrammeHighlightCard";

type Props = {
  heading: string;
  highlightHeading: string;
  desc: string;
  highlights: HiglightCard[];
};

const ProgrammeHighlight = ({
  heading,
  highlightHeading,
  desc,
  highlights,
}: Props) => {
  return (
    <section className="prog-global-padding bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="heading">
            {heading} {highlightHeading}
          </h2>
          <p className="  text-gray-600 text-xl font-medium">{desc}</p>
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-5 mt-12">
          {highlights &&
            highlights.map((highlight) => (
              <ProgrammeHighlightCard
                key={highlight.id}
                title={highlight?.title}
                desc={highlight?.subtitle}
                highlightimg={highlight?.highlightimage}
              />
            ))}
        </div>
        <div className="lg:hidden">
          <ProgramHighlightSlider highlights={highlights} />

          {/* <ProgramHighlightSlider /> */}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeHighlight;
