import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  heading: string;
  description: string;
  logos: StrapiMedia[];
};

const DreamCareer = ({
  heading,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description,
  logos,
}: Props) => {
  return (
    <section className="py-8 md:py-16 bg-white overflow-hidden px-4 md:px-0">
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-[45px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            {heading}
          </h2>
          {/* {description && (
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              {description}
            </p>
          )} */}
        </div>
        
        <div className="flex flex-wrap justify-center gap-5">
          {logos?.map((logo) => (
            <div
              key={logo.id}
              className="bg-white border border-gray-100 rounded-lg p-5 h-[100px] md:h-[120px] w-[calc(50%-1.25rem)] md:w-[calc(25%-1.25rem)] lg:w-[calc(16.6%-1.25rem)] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-full">
                <Image
                  src={`${STRAPI_URL}${logo?.url}`}
                  fill
                  alt={logo?.alternativeText || "Career Logo"}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamCareer;
