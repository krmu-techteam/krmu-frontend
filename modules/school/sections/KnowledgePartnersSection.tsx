import { StrapiMedia } from "@/lib/types/common";
import { KnowledgePartnerLogos } from "@/modules/school";

type Props = {
  title: string;
  logos: StrapiMedia[];
};
const KnowledgePartnersSection = ({ title, logos }: Props) => {
  return (
    <section className="py-10 sm:py-20 px-4">
      <div className="max-w-[1530px] mx-auto w-full">
        <div className="w-full">
          <h4 className="text-white font-semibold text-2xl sm:text-4xl  text-center mb-5">
            {title}
          </h4>
        </div>
        <div className="w-full mt-10">
          <KnowledgePartnerLogos logos={logos} />
        </div>
      </div>
    </section>
  );
};

export default KnowledgePartnersSection;
