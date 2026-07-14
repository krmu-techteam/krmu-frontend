import { NSSMottoSectionProps } from "@/features/life-at-krmu/community-connect";

const NssMottoSection = ({
  nssMottoSection,
}: {
  nssMottoSection: NSSMottoSectionProps;
}) => {
  const { heading, description } = nssMottoSection;
  return (
    <section
      className="py-[50px]"
      style={{
        backgroundImage: "linear-gradient(97deg,#051630 0%,#0060aa 99%)",
      }}
    >
      <div className="max-w-[1530px] font-poppins mx-auto w-full text-white px-6 md:px-7 xl:px-16">
        <div className="w-full lg:w-1/2">
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

export default NssMottoSection;
