import { STRAPI_URL } from "@/app/constant";
import { IDEAFORGE } from "@/lib/types/industry-connect";
import Image from "next/image";
type Props = {
  forgeData: IDEAFORGE;
};

const IdeaForge = ({ forgeData }: Props) => {
  return (
    <section className="py-[50px] bg-[#051630] px-4">
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-14">
        <div className="lg:w-1/2 text-white">
          <h3 className="text-2xl md:text-[38px] font-bold mb-5 leading-[1.2]">
            {forgeData?.heading ? (
              forgeData?.heading
            ) : (
              <>
                Workshop on Idea Forge:
                <br className="hidden md:block" />
                Navigating Problem Solving
                <br className="hidden md:block" />
                Ideation
              </>
            )}
          </h3>

          <p>{forgeData?.desc}</p>
        </div>
        <div className="lg:w-1/2 border border-white rounded-sm mt-5 md:mt-0">
          <Image
            src={`${STRAPI_URL}${forgeData?.idea_forge_img_1?.url}`}
            width={766}
            height={430}
            alt={
              forgeData?.heading ||
              forgeData?.idea_forge_img_1?.alternativeText ||
              ""
            }
            className="md:h-[430px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default IdeaForge;
