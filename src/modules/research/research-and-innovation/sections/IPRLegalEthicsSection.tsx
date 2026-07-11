import Link from "next/link";
import { IPRSlider } from "../components";
import { IPRLegalEthicsSectionProps } from "../types";
import SectionDivider from "@/components/common/SectionDivider";

const IPRLegalEthicsSection = ({
  iprLegalEthicsSection,
}: {
  iprLegalEthicsSection: IPRLegalEthicsSectionProps;
}) => {
  const {
    title,
    description_one,
    description_two,
    description_three,
    linkInfo,
    images,
  } = iprLegalEthicsSection;
  return (
    <section className="relative py-10 bg-[#051630] px-8 md:px-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row items-center gap-10 px-6 md:px-7 xl:px-16">
        <div className="lg:w-1/2 text-white font-poppins">
          <h2 className="text-3xl md:text-[42px] font-semibold font-serif">
            {title}
          </h2>
          <br />
          <p>{description_one}</p>
          <br />
          <p>{description_two}</p>
          <br />
          <p>{description_three}</p>
          <Link href={linkInfo?.url} className="blink-effect common-btn-3 mt-5">
            {linkInfo?.label}
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <IPRSlider images={images} />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default IPRLegalEthicsSection;
