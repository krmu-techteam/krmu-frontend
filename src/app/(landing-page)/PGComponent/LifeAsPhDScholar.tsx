import Image from "next/image";
import { Home } from "lucide-react";
import { LifeAsPhDScholarSection } from "../admission/PGType";

type Props = {
  data: LifeAsPhDScholarSection;
};

const LifeAsPhDScholar = ({ data }: Props) => {
  return (
    <section className="py-16 md:pt-10 bg-gray-50">
      <div className="px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[#003d7a] text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
            {data.heading}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[450px] xl:h-[600px] overflow-hidden mb-12 rounded-xl">
          {/* <Image
            src={data.image.src}
            fill
            alt={data.image.alt}
            className="object-cover"
            priority
          /> */}
          <Image
            src="/wp-content/landingpage/common/Collage-img.webp"
            fill
            alt="Life @ KRMU"
            className="w-full  object-contain sm:object-cover"
            priority
          />
        </div>

        {/* Facilities – Row 1 */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mb-6">
          {data.facilities.map((facility) => (
            <div
              key={facility.id}
              className="flex items-start gap-3 text-gray-600"
            >
              <Home size={18} className="text-gray-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base leading-snug">
                {facility.title}
              </span>
            </div>
          ))}
        </div>

        {/* Facilities – Row 2 */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.additionalFacilities.map((facility) => (
            <div
              key={facility.id}
              className="flex items-start gap-3 text-gray-600"
            >
              <Home size={18} className="text-gray-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base leading-snug">
                {facility.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAsPhDScholar;
