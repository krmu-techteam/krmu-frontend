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
};

const SchoolInfoStatistics = ({
  heading,
  subheading,
  desc,
  counters,
}: Props) => {
  return (
    <section className="py-10 lg:py-20 px-5 bg-blue-100/50">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col md:flex-row sm:items-center gap-10">
        <div className="w-full md:w-1/2 xl:w-1/3 relative h-[660px]">
          <Image
            src="/info.webp"
            fill
            alt=""
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 text-black">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:mt-10">
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
