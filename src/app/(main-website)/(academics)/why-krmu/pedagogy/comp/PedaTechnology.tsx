import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
type Props = {
  title: string;
  content: string;
  imgUrl: string;
};

const PedaTechnology = ({ title, content, imgUrl }: Props) => {
  return (
    <section className="bg-[#b2010a] px-4">
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-14">
        <div className="lg:w-1/2 text-white p-[30px]">
          <h3 className="text-2xl  text-center lg:text-left lg:text-5xl mt-2.5 mb-[15px] leading-[1.5] font-semibold">
            {title}
          </h3>
          <p className="leading-[1.8]">{content}</p>
        </div>
        <div className="lg:w-1/2">
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

export default PedaTechnology;
