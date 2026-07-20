import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface HeroSectionProps {
  title: BlocksContent;
  main_desc: BlocksContent;
}

const HeroSection = ({ title, main_desc }: HeroSectionProps) => {
  return (
    <section className="pt-40">
      <div className="max-w-[1530px] mx-auto px-6 md:px-8 xl:px-16 w-full flex flex-col lg:flex-row items-center text-white">
        <div className="w-full lg:w-3/5 font-semibold leading-[1.2] text-2xl md:text-3xl lg:text-[64px] mb-5">
          <BlocksRenderer content={title} />
        </div>

        <div className="w-full lg:w-2/5 font-poppins">
          <BlocksRenderer content={main_desc} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
