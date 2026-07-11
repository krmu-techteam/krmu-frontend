import { STRAPI_URL } from "@/app/constant";
import { SHAPINGCAREER } from "@/lib/types/industry-connect";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

type Props = {
  shapcareer: SHAPINGCAREER;
};

const ShapingCareer = ({ shapcareer }: Props) => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-2xl md:text-[38px] font-bold text-center">
          {shapcareer?.heading}
        </h3>
        <br />
        <BlocksRenderer content={shapcareer?.shaping_career} />
      </div>
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-14 mt-10">
        <div className="lg:w-1/2 rounded-sm border border-black">
          <Image
            src={`${STRAPI_URL}${shapcareer?.shaping_career_img_1?.url}`}
            width={766}
            height={430}
            alt={
              shapcareer?.heading ||
              shapcareer?.shaping_career_img_1?.alternativeText ||
              ""
            }
            className="w-full md:h-[430px] object-cover"
          />
        </div>
        <div className="lg:w-1/2 rounded-sm border border-black mt-5 lg:mt-0">
          <Image
            src={`${STRAPI_URL}${shapcareer?.shaping_career_img_2?.url}`}
            width={766}
            height={430}
            alt={
              shapcareer?.heading ||
              shapcareer?.shaping_career_img_2?.alternativeText ||
              ""
            }
            className="w-full md:h-[430px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ShapingCareer;
