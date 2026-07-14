import Link from "next/link";
import { getOverviewEvents } from "@/lib/api/overviewslide";
import Image from "next/image";
import { NewsEventsCarousel } from "../components";
import { StudentLifeSectionProps } from "@/features/life-at-krmu/overview";
const StudentLifeSection = async ({
  studentLifeSection,
}: {
  studentLifeSection: StudentLifeSectionProps;
}) => {
  const data = await getOverviewEvents();

  const {
    title,
    subTitleOne,
    subTitleTwo,
    subTitleThree,
    description,
    buttonLink,
    buttonText,
    campusHappenings,
  } = studentLifeSection;

  return (
    <section className="md:px-4 px-0 bg-white">
      <div className="max-w-[1440px] mx-auto w-full shadow-sm overflow-hidden bg-white font-poppins">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-[30%] bg-gradient-to-br from-[#051630] to-[#071d3d] px-6 py-12 lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px] text-white">
            <p className="mb-5 opacity-80 uppercase tracking-widest text-xs font-bold">
              {title}
            </p>
            <h4 className="text-3xl md:text-5xl font-bold leading-tight">
              {subTitleOne} <br className="hidden md:block" />
              {subTitleTwo} <br className="hidden md:block" /> {subTitleThree}
            </h4>
          </div>

          <div className="lg:w-[70%] bg-gradient-to-r from-[#0060aa] to-[#0084e6] px-6 py-12 lg:py-16 text-white flex flex-col justify-between">
            <p className="text-lg md:text-2xl mb-8 leading-relaxed max-w-[800px] font-medium">
              {description}
            </p>
            <Link
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-10 bg-white text-[#0060aa] rounded-[4px] text-base font-extrabold inline-block hover:bg-gray-100 transition-all shadow-md hover:-translate-y-1 w-fit"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-[30%] flex flex-col">
            <div className="bg-gradient-to-br from-[#0060aa] to-[#0076cc] px-6 py-12 lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px] text-white flex-grow">
              <p className="mb-5 opacity-90 uppercase tracking-widest text-xs font-bold">
                {campusHappenings.title}
              </p>
              <h4 className="text-3xl md:text-4xl font-bold leading-tight">
                {campusHappenings.subTitleOne}{" "}
                <br className="hidden md:block" />{" "}
                {campusHappenings.subTitleTwo}{" "}
                <br className="hidden md:block" />{" "}
                {campusHappenings.subTitleThree}
              </h4>
            </div>
            <div className="w-full text-center flex flex-col justify-center items-center p-8 bg-white border-y border-gray-100">
              <div className="max-w-[388px] group cursor-pointer">
                <Image
                  src={campusHappenings.instaImageUrl}
                  width={388}
                  height={90}
                  alt="Instagram feed"
                  className="rounded-sm mb-4 transition-transform duration-500 group-hover:scale-105"
                />
                <p className="text-sm text-gray-500 mb-5 font-bold uppercase tracking-wider">
                  {campusHappenings.instaHandle}
                </p>
                <Link
                  href={campusHappenings.instaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[3px] border-[#0060aa] py-2.5 px-10 rounded-full text-[#0060aa] font-extrabold inline-block hover:bg-[#0060aa] hover:text-white transition-all shadow-sm"
                >
                  {campusHappenings.instaLabel}
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-[70%] bg-gradient-to-br from-[#051630] to-[#0b264d] px-6 py-12 lg:p-12 text-white flex flex-col">
            <div className="flex-grow flex items-center">
              <NewsEventsCarousel data={data} />
            </div>
            <div className="flex justify-center mt-10">
              <Link
                href={campusHappenings.viewMoreLink}
                className="text-[#051630] bg-white py-4 px-12 rounded-[4px] font-extrabold hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {campusHappenings.viewMoreText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
