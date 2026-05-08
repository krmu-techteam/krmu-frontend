import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  logos: StrapiMedia[] | undefined;
};

const ConnectingDreamSlider = ({ logos }: Props) => {
  return (
    <>
      {logos?.map((logo) => (
        <div
          key={logo.id}
          className="bg-white px-2.5 flex items-center justify-center rounded-sm"
        >
          <Image
            src={`${STRAPI_URL}${logo?.url}`}
            width={80}
            height={80}
            alt={logo?.alternativeText || "Career Logo"}
            className="object-contain"
          />
        </div>
      ))}
    </>
  );
};

export default ConnectingDreamSlider;
