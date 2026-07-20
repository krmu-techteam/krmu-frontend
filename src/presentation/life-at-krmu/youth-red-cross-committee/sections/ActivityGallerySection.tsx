import Image from "next/image";
import { ActivityGallerySectionProps } from "@/features/life-at-krmu/youth-red-cross-committee";
import SectionDivider from "@/components/common/SectionDivider";

const ActivityGallerySection = ({
  activityGallerySection,
}: {
  activityGallerySection: ActivityGallerySectionProps;
}) => {
  const { heading, categories } = activityGallerySection;
  return (
    <>
      <section className="relative py-8 md:py-12 xl:py-20">
        <div className="max-w-[1530px] mx-auto w-full text-white font-poppins px-6 md:px-8 xl:px-16">
          <h4 className="text-2xl font-semibold">{heading}</h4>
          {categories?.map((category, idx) => {
            return (
              <div key={idx} className="mb-5">
                <h5 className="font-semibold my-3 text-2xl">
                  {category.title}
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category?.images?.map((image, idx) => {
                    return (
                      <div key={idx}>
                        <Image src={image} width={526} height={314} alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <SectionDivider />
      </section>
    </>
  );
};

export default ActivityGallerySection;
