// import { ParagraphBlock } from "@/lib/types/about";
import Image from "next/image";
import StatisticsCounter from "./schoolglobalcomponent/StatisticsCounter";
import { CounterItem } from "@/lib/types/common";
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
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/somc_info_9a4d158e6c.webp",
  "school-of-legal-studies":
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sols_info_356ffbbb2f.webp",
    'school-of-medical-and-allied-sciences' : 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/smas_info_a437a7a78f.webp',
    'school-of-physiotherapy-and-rehabilitation-sciences': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sprs_info_ab151f554d.webp',
    'school-of-liberal-arts': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sola_info_0bea1c1947.webp',
    'school-of-architecture-design': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soad_info_fb5a40c9cc.png',
    'school-of-basic-and-applied-sciences': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sbas_info_a4df052f90.webp',
    'school-of-journalism-and-mass-communication': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sjmc_info_4152524039.webp',
    'school-of-hotel-management-and-catering-technology' : 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/shmct_info_902ba1a177.webp',
    'school-of-agriculutural-sciences': 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soas_info_fc180558e4.webp',
    'school-of-education' : 'https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soed_info_bc9daec6fd.webp'

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
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row sm:items-center gap-10  bg-blue-100/50 p-2.5 md:p-10 rounded-2xl">
        <div className="w-full lg:w-1/2 xl:w-1/3 relative h-[300px] lg:h-[660px]">
          <Image
            src={infoStaticImages[slug] || "/info.webp"}
            fill
            alt=""
            className="object-cover md:object-contain lg:object-cover rounded-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 xl:w-2/3 text-black">
          <p className="text-2xl font-medium mb-5">{subheading}</p>
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight mb-5">
            {heading}
          </h3>
          {/* <BlocksRenderer content={desc} /> */}
          <div
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
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
