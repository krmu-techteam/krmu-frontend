import { StrapiMedia } from "@/lib/types/common";
import { Button } from "@/lib/types/home";
import Link from "next/link";
import { HighlightSlider } from "../components";
import SectionDivider from "@/components/common/SectionDivider";
type Props = {
  heading: string;
  slideImages: StrapiMedia[];
  btn: Button;
};
const HighlightSection = ({ heading, slideImages, btn }: Props) => {
  return (
    <>
      <section className="relative z-5 py-[30px] mt-5 px-6 md:px-8 xl:px-16">
        <div className="max-w-[1530px] mx-auto w-full mb-7">
          <h2 className="heading-primary text-center mb-7">{heading}</h2>
          <div className="">
            <HighlightSlider slideImages={slideImages} />
          </div>
          <div className="text-center mt-7">
            {btn && (
              <Link
                href={btn?.buttonlink}
                className={`text-white text-[15px] md:text-md font-normal font-poppins hover:text-white/80 transition-all duration-300 inline-block ${
                  btn?.buttonclass || ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {btn?.buttontext}
              </Link>
            )}
          </div>
        </div>
        <SectionDivider />
      </section>
    </>
  );
};

export default HighlightSection;
