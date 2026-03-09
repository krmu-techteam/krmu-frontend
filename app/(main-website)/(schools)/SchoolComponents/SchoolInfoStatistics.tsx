// import { ParagraphBlock } from "@/lib/types/about";
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
    <section className="py-20">
      <div className="max-w-[1664px] mx-auto w-full flex items-center flex-col xl:flex-row items-center">
        <div className="w-full xl:w-3/5 text-black">
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
        <div className="w-full xl:w-2/5 lg:px-28 flex flex-col gap-5 mt-5 xl:mt-0">
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
