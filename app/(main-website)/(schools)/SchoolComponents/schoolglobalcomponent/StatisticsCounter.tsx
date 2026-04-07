type Props = {
  title: string;
  desc: string;
};

const StatisticsCounter = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col justify-center text-center border rounded-md p-5 bg-white shadow-sm hover:shadow-2xl">
      <span className="text-2xl 2xl:text-5xl leading-[1.3] font-bold text-blue-500">
        {title}
      </span>
      <span className="text-lg sm:text-xl">{desc}</span>
    </div>
  );
};

export default StatisticsCounter;
