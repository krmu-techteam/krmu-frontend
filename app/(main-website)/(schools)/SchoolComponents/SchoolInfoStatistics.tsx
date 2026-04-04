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
    <section className="pb-10 sm:py-10 px-5">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col xl:flex-row sm:items-center gap-10">
        <div className="xl:w-1/3 relative lg:h-[660px]">
          <Image
            src="/info.webp"
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div className="w-full xl:w-1/3 text-black">
          <p className="text-2xl font-medium mb-5">{subheading}</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5">
            {heading}
          </h3>
          {/* <BlocksRenderer content={desc} /> */}
          <div
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          />
        </div>
        <div className="w-full xl:w-1/3  flex flex-col gap-5 mt-5 xl:mt-0">
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
    </section>
  );
};

export default SchoolInfoStatistics;
