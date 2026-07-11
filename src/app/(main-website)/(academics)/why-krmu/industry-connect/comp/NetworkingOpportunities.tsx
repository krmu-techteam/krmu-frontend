import { STRAPI_URL } from "@/app/constant";
import { NETWORKINGOPPORTUNITIES } from "@/lib/types/industry-connect";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

type Props = {
  netopp: NETWORKINGOPPORTUNITIES;
};

const NetworkingOpportunities = ({ netopp }: Props) => {
  return (
    <>
      <section className="py-[60px] bg-[#faf9f6] px-4">
        <div className="max-w-[1664px] mx-auto w-full text-center">
          <h3 className="mb-5 text-2xl md:text-[38px] font-bold leading-[1]">
            {netopp?.heading}
          </h3>
          <p></p>
        </div>
        <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-10 mt-10 mb-5">
          <div className="lg:w-1/2 rounded-sm border border-[#051630]">
            <Image
              src={`${STRAPI_URL}${netopp?.opportunities_img_1?.url}`}
              width={766}
              height={430}
              alt={netopp?.heading || ""}
              className="h-full md:h-[430px] w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 rounded-sm border border-[#051630] mt-5 lg:mt-0">
            <Image
              src={`${STRAPI_URL}${netopp?.opportunities_img_2?.url}`}
              width={766}
              height={430}
              alt={netopp?.heading || ""}
              className="h-full md:h-[430px] w-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-[1664px] mx-auto w-full">
          <BlocksRenderer content={netopp?.opportunities_content} />
        </div>
      </section>
    </>
  );
};

export default NetworkingOpportunities;
