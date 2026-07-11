import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
type Props = {
  title: string;
  content: string;
  imgUrl: string;
};
const PedaInnovativeRelevant = ({ title, content, imgUrl }: Props) => {
  return (
    <section className="px-4">
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-14">
        <div className="lg:w-1/2">
          <h3 className="text-2xl lg:text-5xl text-center lg:text-left lg:leading-[1.5] font-semibold mt-2.5 mb-[15px]">
            {title}
          </h3>
          <p>{content}</p>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
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

export default PedaInnovativeRelevant;
