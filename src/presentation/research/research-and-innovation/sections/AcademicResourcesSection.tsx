import Image from "next/image";
import Link from "next/link";
import {
  AcademicResourcesImages,
  AcademicResourcesSectionProps,
} from "@/features/research/research-and-innovation";
import SectionDivider from "@/components/common/SectionDivider";

const AcademicResourcesSection = ({
  academicResourcesSection,
}: {
  academicResourcesSection: AcademicResourcesSectionProps;
}) => {
  const {
    title,
    subTitle,
    description_one,
    description_two,
    description_three,
    description_four,
    images,
    linkInfo,
  } = academicResourcesSection;
  return (
    <section className="relative py-8 md:py-12 xl:py-20">
      <div
        className="max-w-[1530px] mx-auto w-full text-white px-6 md:px-8 xl:px-16"
        id="_academics-resources"
      >
        <h3 className="mb-5 text-3xl md:text-[45px] font-semibold">{title}</h3>
        <h4 className="mb-5 text-xl font-semibold">{subTitle}</h4>
      </div>
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row text-white text-justify gap-10 px-6 md:px-8 xl:px-16">
        <div className="lg:w-1/2 font-poppins">
          <p>{description_one}</p>
          <br />
          <p>{description_two}</p>
        </div>
        <div className="lg:w-1/2 font-poppins">
          <p>{description_three}</p>
          <br />
          <p>{description_four}</p>
        </div>
      </div>
      <div className="max-w-[1530px] mx-auto w-full mt-10 px-6 md:px-8 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images?.map((img: AcademicResourcesImages, index: number) => (
            <div key={index}>
              <Image src={`${img?.url}`} width={490} height={278} alt="" />
            </div>
          ))}
        </div>
        <div className="pt-10 flex justify-center">
          <Link href={`${linkInfo?.url}`} className="common-btn-3 font-poppins">
            {linkInfo?.label}
          </Link>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default AcademicResourcesSection;
