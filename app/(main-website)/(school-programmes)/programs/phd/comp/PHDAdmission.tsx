import { ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  title1: ParagraphBlock[];
  title2: ParagraphBlock[];
  desc1: ParagraphBlock[];
  desc2: ParagraphBlock[];
};

const PHDAdmission = ({ title1, title2, desc1, desc2 }: Props) => {
  return (
    <section
      className="py-[50px] px-4"
      style={{
        background:
          "linear-gradient(245.65deg,#0161ab -18.61%,#061731 46.18%,#ab192d 112.29%)",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 md:px-[100px] text-white">
          <div className="text-3xl md:text-5xl text-white font-semibold mb-10">
            <BlocksRenderer content={title1} />
          </div>
          <div className="admission-process-section relative p-5 [&_p]:mb-5 md:[&_p]:mb-1 [&_p]:leading-relaxed [&_p]:text-white">
            <BlocksRenderer content={desc1} />
          </div>
        </div>
        <div className="lg:w-1/2 md:px-[100px] text-white mt-5">
          <div className="text-3xl md:text-5xl text-white font-semibold mb-5 md:mb-10">
            <BlocksRenderer content={title2} />
          </div>
          <div className="selection-process-section relative p-5 [&_p]:mb-5 md:[&_p]:mb-1 [&_p]:leading-relaxed [&_p]:text-white">
            <BlocksRenderer content={desc2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PHDAdmission;
