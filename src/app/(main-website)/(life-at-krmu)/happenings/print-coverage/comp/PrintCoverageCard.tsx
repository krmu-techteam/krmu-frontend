import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";

interface PrintCoverageCardProps {
  data: {
    id: number;
    Title: string;
    desc: string;
    createdAt: string;
    upload_data: {
      url: string;
      name: string;
    };
  };
}

const PrintCoverageCard = ({ data }: PrintCoverageCardProps) => {
  return (
    <div className="p-5 bg-[#141444] flex text-white w-full  rounded-2xl">
      <div className="w-[70%]">
        <h4 className="text-lg font-semibold mb-2.5">{data.Title}</h4>
        <h5>{data?.desc}</h5>
      </div>
      <div className="w-[30%] flex justify-center items-start">
        {data.upload_data?.url ? (
          <a href={`${STRAPI_URL}${data.upload_data.url}`} target="_blank" rel="noopener noreferrer">
            <Image
              src="/life-at-krmu/pdficon.webp"
              width={30}
              height={39}
              alt="pdf icon"
            />
          </a>
        ) : (
          <Image
            src="/life-at-krmu/pdficon.webp"
            width={30}
            height={39}
            alt="pdf icon"
          />
        )}
      </div>
    </div>
  );
};

export default PrintCoverageCard;
