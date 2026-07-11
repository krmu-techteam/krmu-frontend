import Link from "next/link";
import { KEICSlider } from "../components";
import { KEICSectionProps } from "../types";
import SectionDivider from "@/components/common/SectionDivider";

const KEICSection = ({ keicSection }: { keicSection: KEICSectionProps }) => {
  const { title, description, linkInfo, images } = keicSection;
  return (
    <section className="relative bg-black bg-cover bg-center pt-[50px] pb-[30px] px-8 md:px-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row gap-16 items-center px-6 md:px-7 xl:px-16">
        <div className="lg:w-2/5">
          <KEICSlider images={images} />
        </div>
        <div className="text-white lg:w-3/5">
          <h3 className="text-3xl md:text-[48px] font-semibold mb-5 leading-[1.2]">
            {title}
          </h3>
          <p className="font-poppins">{description}</p>
          <Link href={linkInfo?.url} className="font-poppins blink-effect common-btn-3 mt-5">
            {linkInfo?.label}
          </Link>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default KEICSection;
