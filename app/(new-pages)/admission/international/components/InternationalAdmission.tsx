import Image from "next/image";
import { LifeInternationalAdmissionSection } from "../constant";

type Props = {
  data: LifeInternationalAdmissionSection;
};

const InternationalAdmission = ({ data }: Props) => {
  return (
    <section className="pt-5 sm:py-1 md:pt-10 bg-gray-50">
      <div className="px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-[40px] font-bold text-center mb-5">
            {/* {data.heading} */}
            Life @ KRMU
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[150px] sm:h-[250px] md:h-[250px] lg:h-[400px] xl:h-[600px] overflow-hidden mb-12 ">
          <Image
            src="/wp-content/landingpage/common/Collage-img.webp"
            fill
            alt="Life @ KRMU"
            className="w-full  object-contain  rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default InternationalAdmission;
