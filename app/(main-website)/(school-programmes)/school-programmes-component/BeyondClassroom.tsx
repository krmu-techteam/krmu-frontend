import { StrapiMedia } from "@/lib/types/common";
import BeyondClassroomSlider from "../school-prog-global-comps/BeyondClassroomSlider";
type Props = {
  heading: string;
  highlight: string;
  desc: string;
  beyondclassimages: StrapiMedia[];
};
const BeyondClassroom = ({
  heading,
  highlight,
  desc,
  beyondclassimages,
}: Props) => {
  return (
    <section className="prog-global-padding py-8 md:py-16 bg-[#0a41a0]">
      <div className="max-w-[1440px] mx-auto w-full px-4">
        <div className="text-center">
          <h2 className="text-[28px] md:text-[45px] font-semibold text-white pb-4 md:pb-0 mb-0 md:mb-5">
            {heading} {highlight}
          </h2>
          <p className="text-lg md:text-xl text-white/80 text-center">{desc}</p>
        </div>
      </div>
      {beyondclassimages && (
        <BeyondClassroomSlider slideimages={beyondclassimages} />
      )}
    </section>
  );
};

export default BeyondClassroom;
