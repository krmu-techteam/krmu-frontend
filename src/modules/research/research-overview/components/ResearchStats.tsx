type Props = {
  stats: {
    value: string;
    title: string;
  }[];
};

const ResearchStats = ({ stats }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="p-2 bg-[#051630] rounded-[14px] flex flex-col items-center justify-center text-center min-h-42"
        >
          <span className="text-[34px] md:text-[42px]">
            {item.value}
          </span>

          <span className="text-xl">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ResearchStats;