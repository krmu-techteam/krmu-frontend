import { MottoSectionProps } from "@/features/life-at-krmu/youth-red-cross-committee";

const MottoSection = ({
  mottoSection,
}: {
  mottoSection: MottoSectionProps;
}) => {
  const { heading, description } = mottoSection;
  return (
    <section
      className="py-8 md:py-12 xl:py-20"
      style={{
        backgroundImage: "linear-gradient(97deg,#051630 0%,#0060aa 99%)",
      }}
    >
      <div className="max-w-[1530px] mx-auto w-full text-white px-6 md:px-7 xl:px-16 font-poppins">
        <div className="w-full lg:w-2/3">
          <h3 className="text-3xl md:text-5xl font-semibold mb-5 leading-[1.2]">
            {heading}
          </h3>
          <p>{description}</p>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default MottoSection;
