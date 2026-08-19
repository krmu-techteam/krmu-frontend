import { StrapiMedia } from "@/lib/types/common";
import { BeyondClassroomCarousel } from "../components";
type Props = {
  heading: string;
  highlight: string;
  desc: string;
  beyondclassimages?: StrapiMedia[];
};
const BeyondClassroomSection = ({
  heading,
  highlight,
  desc,
  beyondclassimages,
}: Props) => {
  return (
    <section className="prog-global-padding bg-[#000000]/30 py-10 md:py-10 lg:p-16 xl:py-20">
      <div className="max-w-full mx-auto w-full px-0 lg:px-0 xl:px-16">
        <div className="text-center px-4">
          <h2 className="heading-primary pb-4 md:pb-5 mb-0 lg:mb-3 2xl:mb-5">
            {heading} {highlight}
          </h2>
          <p className="text-[16px] text-justify md:text-[17px] font-poppins text-white/90 lg:text-center">
            {desc}
          </p>
        </div>
      </div>
      <BeyondClassroomCarousel />
    </section>
  );
};

export default BeyondClassroomSection;
