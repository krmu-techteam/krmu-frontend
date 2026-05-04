import { StrapiMedia } from "@/lib/types/common";
import SchoolKnowledgeLogos from "./SchoolKnowledgeLogos";

type Props = {
  title: string;
  logos: StrapiMedia[];
};
const SchoolKnowledgePartner = ({ title, logos }: Props) => {
  return (
    <section className="py-10 sm:py-20 bg-[#051630] px-4 border-t border-[#d9d9d930]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="w-full">
          <h4 className="text-white font-semibold text-2xl sm:text-5xl leading-tight text-center mb-5">
            {title}
          </h4>
        </div>
        <div className="w-full mt-10">
          <SchoolKnowledgeLogos logos={logos} />
        </div>
      </div>
    </section>
  );
};

export default SchoolKnowledgePartner;
