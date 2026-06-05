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
    <section className="relative py-8 md:py-12 lg:py-16">
      <div className="max-w-[1530px] mx-auto w-full px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="flex justify-center pb-6 md:mb-4">
          <h2 className="heading-primary">
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
