import { ProminentRecruiterContent } from "../admission/PGType";
import ProminentRecruiterCard from "./ProminentRecruiterCard";

type Props = {
  data: ProminentRecruiterContent;
};

const PlacementTestimonials = ({ data }: Props) => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="relative overflow-hidden mt-20">
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" /> */}

          <div className="flex w-max animate-marquee gap-8">
            {[...data?.people, ...data?.people].map((person, i) => (
              <ProminentRecruiterCard key={i} data={person} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementTestimonials;
