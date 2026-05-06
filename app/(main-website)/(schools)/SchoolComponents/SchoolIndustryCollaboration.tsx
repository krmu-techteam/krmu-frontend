import { ParagraphBlock } from "@/lib/types/about";
import IndustryCollabCarousel from "./schoolglobalcomponent/IndustryCollabCarousel";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { CollabCards } from "@/lib/types/schools";
type Props = {
  title: ParagraphBlock[];
  collabCards: CollabCards[];
};

const SchoolIndustryCollaboration = ({ title, collabCards }: Props) => {
  return (
    <section className="bg-[#051630] pt-8 pb-40 xl:py-20 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="w-full">
          <div className="text-3xl lg:text-5xl text-white font-semibold leading-tight schIndCollbaheadingPara text-center mb-10">
            {title && <BlocksRenderer content={title} />} 
          </div>
        </div>
        <div className="w-full md:px-16 2xl:px-[100px]">
          <IndustryCollabCarousel collabData={collabCards} />
        </div>
      </div>
    </section>
  );
};

export default SchoolIndustryCollaboration;
