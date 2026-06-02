import { StrapiMedia } from "@/lib/types/common";
import { AccreditationCarousel } from "../components";
import SectionDivider from "@/components/common/SectionDivider";

const AccreditationSection = ({
  title,
  logosData,
}: {
  title: string;
  logosData: StrapiMedia[];
}) => {
  return (
    <section className="relative py-8 md:py-12 lg:py-20">
      <div className="max-w-[1530px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center pb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl xl:text-[42px] font-serif font-bold text-white leading-[1.2] tracking-tight">
            {title}
          </h2>
        </div>
        <div className="w-full">
          <AccreditationCarousel logosData={logosData} />
        </div>
      </div>
      <SectionDivider className="!top-0 !bottom-auto" />
    </section>
  );
};
export default AccreditationSection;
