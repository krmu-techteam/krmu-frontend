import SectionDivider from "@/components/common/SectionDivider";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  content: any;
};

const EditorialSection = ({ content }: Props) => {
  return (
    <>
      <section className="relative py-6 xl:py-8">
        <div className="max-w-[1530px] mx-auto font-poppins text-white w-full magazineref px-6 md:px-7 xl:py-16">
          <BlocksRenderer content={content} />
        </div>
        <SectionDivider />
      </section>
    </>
  );
};

export default EditorialSection;
