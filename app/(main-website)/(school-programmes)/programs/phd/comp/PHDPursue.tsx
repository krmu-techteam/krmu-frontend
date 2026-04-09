import { STRAPI_URL } from "@/app/constant";
import { Pursue } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  pursueContent: Pursue;
};
const PHDPursue = ({ pursueContent }: Props) => {
  return (
    <section
      className="relative bg-cover bg-no-repeat py-[60px] px-4 overflow-hidden"
      style={{
        background: `url(${STRAPI_URL}${pursueContent?.bgimage?.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 flex flex-col lg:flex-row max-w-[1664px] mx-auto w-full">
        <div className="lg:w-2/5 text-white">
          <h3 className="text-3xl md:text-[64px] font-semibold leading-[1.2] mb-5">
            {pursueContent?.title}
          </h3>
          <div className="lg:leading-[2]">
            <BlocksRenderer content={pursueContent?.pursue} />
          </div>
        </div>
        <div className="w-3/5"></div>
      </div>
    </section>
  );
};

export default PHDPursue;
