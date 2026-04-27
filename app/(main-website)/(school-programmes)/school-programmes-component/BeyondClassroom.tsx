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
    <section className="prog-global-padding bg-[#0a41a1] px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold text-white pb-4 md:pb-0">
            {heading} {highlight}
          </h2>
          <p className="sub-heading text-white text-justify md:text-pretty">{desc}</p>
        </div>
      </div>
      {beyondclassimages && (
        <BeyondClassroomSlider slideimages={beyondclassimages} />
      )}
    </section>
  );
};

export default BeyondClassroom;
