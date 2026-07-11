import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";

type Props = {
  title: string;
  content: string;
  imgUrl: string;
};

const PedaMentorProgramme = ({ title, content, imgUrl }: Props) => {
  return (
    <section className="my-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full pt-5 px-8 md:px-[60px] bg-[#0060aa] rounded-[90px] xl:flex items-center gap-14 overflow-hidden">
        <div className="xl:w-1/2 text-white">
          <h4 className="text-2xl lg:text-5xl text-center lg:text-left mt-2.5 mb-[15px] font-semibold 2xl:leading-[1.5]">
            {title}
          </h4>
          <p>{content}</p>
        </div>
        <div className="xl:w-1/2 mt-10 xl:mt-0">
          {imgUrl && (
            <Image
              src={`${STRAPI_URL}${imgUrl}`}
              width={768}
              height={542}
              alt={title || ""}
              className="w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PedaMentorProgramme;
