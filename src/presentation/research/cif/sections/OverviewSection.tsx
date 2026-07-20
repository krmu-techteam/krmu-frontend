import { CIFGallerySlider } from "../components";
import { OverviewSectionProps } from "@/features/research/cif";

const OverviewSection = ({
  overviewSection,
}: {
  overviewSection: OverviewSectionProps;
}) => {
  const {
    description,
    objectives: { title, list },
    images,
  } = overviewSection;

  return (
    <section className="bg-[url(/research/ciintegralbg.webp)] bg-cover bg-no-repeat bg-center py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full text-white ciful md:flex gap-10 px-6 md:px-8 xl:px-16">
        <div className="md:w-3/5">
          <p className="font-poppins">{description}</p>
          <br />
          <p className="font-poppins font-medium">{title}</p>
          <br />
          <ul className="space-y-2 font-poppins">
            {list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/5">
          <CIFGallerySlider images={images} />
        </div>
      </div>
    </section>
  );
};
export default OverviewSection;
