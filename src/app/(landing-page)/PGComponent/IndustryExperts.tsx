import { IndustryExpertsContent } from "../admission/PGType";
import IndustryExpertCard from "./IndustryExpertCard";

type Props = {
  data: IndustryExpertsContent;
};

const IndustryExperts = ({ data }: Props) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#051630] px-4">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl mb-5 text-white">
            {data?.title}
          </h4>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            {data?.description}
          </p>
        </div>

        {/* Grid */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-5"> */}
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mt-5 md:mt-5 gap-5">
          {data?.experts &&
            data?.experts.map((expert, index) => (
              <IndustryExpertCard key={index} data={expert} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExperts;
