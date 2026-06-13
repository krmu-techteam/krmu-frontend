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
    <section className="prog-global-padding py-8 md:p-6 lg:p-10 xl:py-20 bg-[#051730]">
      <div className="max-w-full mx-auto w-full px-0 lg:px-10 xl:px-16">
        <div className="text-center px-4">
          <h2 className="text-2xl md:text-[42px] font-semibold md:font-bold md:px-20 lg:px-30 text-white pb-4 md:pb-0 mb-0 lg:mb-3 2xl:mb-5">
            {heading} {highlight}
          </h2>
          <p className="text-md md:text-[17px] lg:text-xl md:px-6 lg:px-8 xl:px-8 2xl:px-16 text-white/80 text-center">{desc}</p>
        </div>
      </div>
      {beyondclassimages && (
        <BeyondClassroomSlider slideimages={beyondclassimages} />
      )}
    </section>
  );
};

export default BeyondClassroom;
