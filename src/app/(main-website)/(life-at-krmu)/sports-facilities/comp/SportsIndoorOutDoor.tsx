import { SportFacilityGridItem } from "@/lib/api/sport-facility";

import SportFacilitySlide from "./SportFacilitySlide";

type Props = {
  data: SportFacilityGridItem[];
};

const SportsIndoorOutDoor = ({ data }: Props) => {
  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50">
      <div className="max-w-[1440px] mx-auto w-full">
        {data &&
          data.map((item, index) => (
            <div 
              key={index} 
              className="mb-8 md:mb-16 last:mb-0"
            >
              <div className="text-center md:text-left mb-8 md:mb-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#051630]">
                  {item?.heading}
                </h3>
              </div>

              {/* Slider inside Card */}
              <div className="w-full relative rounded-[2px] overflow-hidden bg-gray-50">
                <SportFacilitySlide data={item?.sport_fac_img} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SportsIndoorOutDoor;
