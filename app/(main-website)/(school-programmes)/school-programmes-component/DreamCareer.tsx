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
    <section className="py-12 md:pt-12 md:pb-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#1a1a1a] mb-12">
          {heading}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {logos?.map((logo) => (
            <div
              key={logo.id}
              className="bg-white border border-gray-100 rounded-lg p-5 h-[120px] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
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
