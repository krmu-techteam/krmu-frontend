import { CIFFacilitiesSectionProps } from "@/features/research/cif/types";
import { CIFFacilityList } from "../components";

const CIFFacilitiesSection = ({
  cifFacilitiesSection,
}: {
  cifFacilitiesSection: CIFFacilitiesSectionProps;
}) => {
  const { title, facilities } = cifFacilitiesSection;
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-[url(/research/facbg.webp)] bg-cover bg-center">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
        <h4 className="text-3xl md:text-5xl text-white font-semibold mb-5">
          {title}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {facilities.length > 0 &&
            facilities.map((item, idx) => {
              return <CIFFacilityList key={idx} facilities={item} idx={idx} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default CIFFacilitiesSection;
