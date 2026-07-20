import Image from "next/image";
import { PublicationAndAchievementSectionProps } from "@/features/research/research-and-innovation";
import SectionDivider from "@/components/common/SectionDivider";

const PublicationAchievementsSection = ({
  publicationAndAchievementSection,
}: {
  publicationAndAchievementSection: PublicationAndAchievementSectionProps;
}) => {
  const { title, description, imageUrl, statistics } =
    publicationAndAchievementSection;
  return (
    <section
      className="relative pt-[30px] bg-[#393c68]"
      id="_publications-achievements"
    >
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row items-center px-6 md:px-8 xl:px-16">
        <div className="text-white lg:w-1/2">
          <h3 className="text-3xl md:text-[42px] font-semibold mb-5">
            {title}
          </h3>
          <p className="font-poppins">{description}</p>
          <div className="grid grid-cols-1 font-poppins sm:grid-cols-2 md:grid-cols-3">
            {statistics?.map((stat, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center text-center p-8 text-white"
                >
                  <span className="text-[50px] leading-[1]">{stat?.value}</span>
                  <span className="text-xl uppercase">{stat?.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end">
          <Image
            src={imageUrl || ""}
            width={601}
            height={677}
            alt=""
            className=""
          />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default PublicationAchievementsSection;
