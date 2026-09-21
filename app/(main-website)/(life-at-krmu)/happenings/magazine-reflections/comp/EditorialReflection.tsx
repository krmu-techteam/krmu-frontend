import { ListBlock, ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  content: ParagraphBlock[] | ListBlock[];
};

const EditorialReflection = ({ content }: Props) => {
  return (
    <>
      <section className="py-5 md:py-[50px] px-4">
        <div className="max-w-[1664px] mx-auto w-full magazineref">
          <BlocksRenderer content={content} />
        </div>
      </section>
    </>
  );
};

export default EditorialReflection;
