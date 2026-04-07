import { StrapiMedia } from "@/lib/types/common";
import SchoolKnowledgeLogos from "./SchoolKnowledgeLogos";

type Props = {
  title: string;
  logos: StrapiMedia[];
};
const SchoolKnowledgePartner = ({ title, logos }: Props) => {
  return (
    <section className="py-20 bg-[#051630] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="w-full">
          <h4 className="text-white font-semibold text-5xl leading-tight text-center mb-5">
            {title}
          </h4>
        </div>
        <div className="w-full">
          <SchoolKnowledgeLogos logos={logos} />
        </div>
      </div>
    </section>
  );
};

export default SchoolKnowledgePartner;
