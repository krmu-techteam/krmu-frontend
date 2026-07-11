import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  gallerImages: StrapiMedia[];
};
const PhotoGrid = async ({ gallerImages }: Props) => {
  return (
    <div className="max-w-[1664px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 py-10 px-4">
      {gallerImages &&
        gallerImages.map((image) => {
          return (
            <div
              key={image?.id}
              className="overflow-hidden" // ensures image doesn't overflow when scaling
            >
              <Image
                src={`${STRAPI_URL}${image?.url}`}
                width={400}
                height={325}
                alt=""
                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-150"
              />
            </div>
          );
        })}
    </div>
  );
};

export default PhotoGrid;
