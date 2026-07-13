// import { ParagraphBlock } from "@/lib/types/about";
import Image from "next/image";
import StatisticsCounter from "./schoolglobalcomponent/StatisticsCounter";
import { CounterItem } from "@/lib/types/common";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";
type Props = {
  heading: string;
  subheading: string;
  // desc: ParagraphBlock[];
  desc: string;
  counters: CounterItem[];
  slug: string;
};

const infoStaticImages: Record<string, string> = {
  "school-of-engineering-and-technology":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soet_info_d088e58b5e.webp",
  "school-of-management-and-commerce":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/school_of_management_and_commerce_c064a2d99d.png",
  "school-of-legal-studies":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sols_info_356ffbbb2f.webp",
  "school-of-medical-and-allied-sciences":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/smas_info_a437a7a78f.webp",
  // 'school-of-physiotherapy-and-rehabilitation-sciences': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sprs_info_ab151f554d.webp',
  // 'school-of-physiotherapy-and-rehabilitation-sciences': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sprs_scope_24ba1deb85.webp',
  "school-of-physiotherapy-and-rehabilitation-sciences":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/healthcare_1_930ae5c0d9.webp",
  "school-of-liberal-arts":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sola_info_0bea1c1947.webp",
  "school-of-architecture-design":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soad_scope_ee5ccb0f5f.webp",
  // 'school-of-architecture-design': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soad_info_fb5a40c9cc.png',
  "school-of-basic-and-applied-sciences":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sbas_info_a4df052f90.webp",
  "school-of-emerging-media-and-creator-economy":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Untitled_121_8b1ed1d1df.png",
  // 'school-of-emerging-media-and-creator-economy': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sjmc_info_4152524039.webp',
  // 'school-of-hotel-management-and-catering-technology': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/shmct_info_902ba1a177.webp',
  "school-of-hotel-management-and-catering-technology":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/hotel_mgmt_9cad25aca6.png",
  "school-of-agriculutural-sciences":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soas_info_fc180558e4.webp",
  "school-of-education":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soed_info_bc9daec6fd.webp",
};

const SchoolInfoStatistics = ({
  heading,
  subheading,
  desc,
  counters,
  slug,
}: Props) => {
  return (
    <section className="pt-10 lg:pt-20 px-5">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row sm:items-center gap-5 sm:gap-10 sm:px-2.5 md:px-10 rounded-2xl">
        <div className="w-full lg:w-1/2 xl:w-1/3 relative h-[400px] sm:h-[500px] lg:h-[660px]">
          <Image
            src={infoStaticImages[slug] || "/info.webp"}
            fill
            alt=""
            className="object-cover object-top md:object-contain lg:object-cover rounded-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 xl:w-2/3 text-black">
          {slug === "school-of-engineering-and-technology" && (
            <div className="flex gap-4 mb-4 items-center">
              <a
                href="https://www.instagram.com/soet_krmu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white text-gray-700 transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                title="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://in.linkedin.com/company/soetkrmu?trk=public_post_feed-actor-name"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#0077b5] hover:text-white text-gray-700 transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/soetkrmu/61564560825037/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#1877f2] hover:text-white text-gray-700 transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                title="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@soetkrmu/shorts?app=desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#ff0000] hover:text-white text-gray-700 transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                title="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          )}
          <p className="text-lg sm:text-2xl font-medium mb-2.5">{subheading}</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight mb-2.5 sm:mb-5">
            {heading}
          </h3>
          {/* <BlocksRenderer content={desc} /> */}
          <div
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
            className="text-sm"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 xl:mt-10">
            {counters &&
              counters.map((counter) => {
                return (
                  <StatisticsCounter
                    key={counter.id}
                    title={counter?.countertext}
                    desc={counter?.countercontent}
                  />
                );
              })}
          </div>
        </div>
        {/* <div className="w-full xl:w-3/12  flex flex-col gap-5 mt-5 xl:mt-0">
      
        </div> */}
      </div>
    </section>
  );
};

export default SchoolInfoStatistics;
