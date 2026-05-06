import Image from "next/image";
import { ProminentRecruit } from "../law-2026/contentype";
import PlacementTestimonials from "../../PGComponent/PlacementTestimonials";
import { prominentRecruiterContent } from "../mba-2026/content";

type Props = {
  recruiters: ProminentRecruit[];
};
const prominentData = prominentRecruiterContent;

const ProminentRecruiter = ({ recruiters }: Props) => {
  return (
    <>
      <section className="px-4 overflow-hidden bg-[#f0f0f0]">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* <h3 className="text-4xl text-center text-[#003fa1] font-semibold">Our Prominent Recruiters</h3> */}
          <h3 className="text-2xl md:text-[40px] mb-4 font-bold text-center pt-10">
            Our Prominent Recruiters
          </h3>

          {/* Infinite Scroll Wrapper */}
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee gap-10 my-10">
              {/* duplicate list for seamless loop */}
              {[...recruiters, ...recruiters].map((rec, i) => (
                <div
                  key={i}
                  className="prominentrecruitShadow flex items-center justify-center min-w-[200px] bg-white"
                >
                  <Image
                    src={rec.imgUrl}
                    width={170}
                    height={35}
                    alt={rec.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PlacementTestimonials data={prominentData} />
    </>
  );
};

export default ProminentRecruiter;
