import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  title: string;
  logos: StrapiMedia[];
};

const IndustryPartenerships = ({ title, logos }: Props) => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h2 className="text-2xl md:text-[38px] text-center font-bold mb-10">
          {title}
        </h2>
        <div className="flex flex-col items-center justify-center sm:gap-10 sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {logos &&
            logos.map((logo) => {
              return (
                <Image
                  key={logo?.id}
                  src={`${STRAPI_URL}${logo?.url}`}
                  width={234}
                  height={134}
                  alt={logo?.alternativeText || ""}
                  className="object-contain"
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default IndustryPartenerships;
