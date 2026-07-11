import { STRAPI_URL } from "@/app/constant";
import { PhDOverview } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

type Props = {
  overviewData: PhDOverview;
};

const PHDOverview = ({ overviewData }: Props) => {
  return (
    <section className="py-[60px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-5 items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl mb-5 md:mb-0 md:text-[64px] font-semibold">{overviewData?.title}</h2>
          <BlocksRenderer content={overviewData?.desc} />
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={`${STRAPI_URL}${overviewData?.overviewimage?.url}`}
            width={768}
            height={396}
            className="w-full"
            alt={overviewData?.title || ""}
          />
        </div>
      </div>
    </section>
  );
};

export default PHDOverview;
