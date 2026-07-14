import Image from "next/image";
import { AwardsSectionProps } from "@/features/life-at-krmu/youth-red-cross-committee";

const AwardsSection = ({
  awardsSection,
}: {
  awardsSection: AwardsSectionProps;
}) => {
  const { heading, images, description } = awardsSection;
  return (
    <>
      <section className="py-8 md:px-12 xl:py-20">
        <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
          <h3 className="text-4xl font-bold mb-5 text-white font-poppins">
            {heading}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {images?.map((image, idx) => {
              return (
                <div key={idx}>
                  <Image
                    key={idx}
                    src={image?.url}
                    width={768}
                    height={576}
                    alt=""
                  />
                </div>
              );
            })}
            <div>
              <p className="text-white font-poppins">{description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardsSection;
