import { STRAPI_URL } from "@/app/constant";
import { ScholarSponsoredPartTime } from "@/lib/types/phd-programmes";
import Image from "next/image";

type Props = {
  scholarShipsData: ScholarSponsoredPartTime;
};

const PHDScholar = ({ scholarShipsData }: Props) => {
  return (
    <section
      style={{
        background:
          "linear-gradient(97.54deg,#ab192d -29.54%,#061731 62.42%,#0161ab 108.83%)",
      }}
      className="overflow-hidden px-4"
    >
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 pt-[50px] lg:pr-[50px]">
          <h2 className="text-white text-[40px]">{scholarShipsData?.title1}</h2>
          <p className="text-[#b2b2b2] mb-5">{scholarShipsData?.desc1}</p>
          <h2 className="text-white text-[40px]">{scholarShipsData?.title2}</h2>
          <p className="text-[#b2b2b2] mb-5">{scholarShipsData?.desc2}</p>
          <h2 className="text-white text-[40px]">{scholarShipsData?.title3}</h2>
          <p className="text-[#b2b2b2] mb-5">{scholarShipsData?.desc3}</p>
        </div>
        <div className="w-full lg:w-2/3 relative">
          <span className="lg:absolute top-[-65px] w-full lg:w-[85%]">
            <Image
              src={`${STRAPI_URL}${scholarShipsData?.scholarshipimg?.url}`}
              width={942}
              height={667}
              alt={scholarShipsData?.title1 || ""}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default PHDScholar;
