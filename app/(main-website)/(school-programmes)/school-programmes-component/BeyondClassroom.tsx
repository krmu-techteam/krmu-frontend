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
    <section className="prog-global-padding bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-center">
          <h2 className="text-[40px] font-semibold text-black">
            {heading} {highlight}
          </h2>
          <p className="sub-heading text-center">{desc}</p>
        </div>
      </div>
      {beyondclassimages && (
        <BeyondClassroomSlider slideimages={beyondclassimages} />
      )}
    </section>
  );
};

export default BeyondClassroom;
