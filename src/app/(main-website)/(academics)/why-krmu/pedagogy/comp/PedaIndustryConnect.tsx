import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";

type Props = {
  title: string;
  subheading: string;
  industry_connect_content: string;
  bgImgUrl: string;
  imgUrl: string;
};

const PedaIndustryConnect = ({
  title,
  subheading,
  industry_connect_content,
  bgImgUrl,
  imgUrl,
}: Props) => {
  return (
    <section className="my-10 px-4">
      <div
        className={`
    max-w-[1664px] mx-auto w-full min-h-[580px] pt-5 px-8 lg:px-[60px]
    bg-[#b2010a] xl:bg-cover xl:bg-center xl:bg-no-repeat
    rounded-[90px] xl:flex items-center gap-14 overflow-hidden
  `}
        style={{
          backgroundImage: `url(${STRAPI_URL}${bgImgUrl})`,
        }}
      >
        <div className="xl:w-1/2 text-white">
          <h4 className="text-2xl lg:text-5xl text-center lg:text-left mt-2.5 mb-[15px] font-semibold leading-[1.5]">
            {title}
          </h4>
          <h4 className="text-xl font-semibold mb-5">{subheading}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: industry_connect_content,
            }}
          />
        </div>
        <div className="xl:w-1/2 mt-10 xl:mt-0">
          {imgUrl && (
            <Image
              src={`${STRAPI_URL}${imgUrl}`}
              width={768}
              height={542}
              alt={title || ""}
              className="w-full xl:hidden"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PedaIndustryConnect;
