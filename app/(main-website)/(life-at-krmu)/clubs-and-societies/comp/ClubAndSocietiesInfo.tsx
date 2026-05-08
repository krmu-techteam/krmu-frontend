import { ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  content: ParagraphBlock[];
};

const ClubAndSocietiesInfo = ({ content }: Props) => {
  return (
    <>
      <section className="py-[50px]">
        <div className="max-w-[1440px] text-md md:text-lg text-center mx-auto w-full px-4">
          <BlocksRenderer content={content} />
        </div>
      </section>
    </>
  );
};

export default ClubAndSocietiesInfo;
