import Link from "next/link";
import { CIFSlider } from "../components";
import SectionDivider from "@/components/common/SectionDivider";
import { CIFSectionProps } from "@/features/research/research-and-innovation/types";

const CIFSection = ({ cifSection }: { cifSection: CIFSectionProps }) => {
  const { title, description_one, description_two, images, linkInfo } =
    cifSection;
  return (
    <section className="relative bg-[url(/research/facbg.webp)] bg-cover bg-center py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row gap-10 px-6 md:px-7 xl:px-16">
        <div className="text-white lg:w-3/5">
          <h3 className="text-3xl md:text-[42px] font-semibold mb-5">
            {title}
          </h3>
          <p className="font-poppins">{description_one}</p>
          <br />
          <p className="font-poppins">{description_two}</p>
        </div>
        <div className="lg:w-2/5">
          <CIFSlider images={images} />
        </div>
      </div>
      <div className="max-w-[1530px] mx-auto w-full flex items-center justify-center mt-10">
        <Link
          href={linkInfo?.url}
          className="blink-effect font-poppins bg-[#cb000d] py-2.5 px-5 leading-[1] inline-block text-white rounded-[4px]"
        >
          {linkInfo?.label}
        </Link>
      </div>
      <SectionDivider />
    </section>
  );
};

export default CIFSection;
