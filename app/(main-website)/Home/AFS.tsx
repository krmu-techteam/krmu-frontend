import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import { STRAPI_URL } from "../../constant";
import Link from "next/link";

interface AFSDataProp {
  content1: string;
  content2: string;
  content3: string;
  image1: StrapiMedia;
  image2: StrapiMedia;
  image3: StrapiMedia;
  link1: string;
  link2: string;
  link3: string;
}

const AFS = ({
  content1,
  content2,
  content3,
  image1,
  image2,
  image3,
  link1,
  link2,
  link3,
}: AFSDataProp) => {
  return (
    <>
      <section className="pb-8 px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="flex flex-wrap gap-2.5 justify-center sm:grid md:grid-col-2 lg:grid-cols-3">
            {link1 && (
              <Link href={link1} className="flex items-center gap-2.5">
                <Image
                  src={`${STRAPI_URL}${image1.url}`}
                  width={33}
                  height={33}
                  alt="ADM"
                />
                <span className="text-lg font-medium">{content1}</span>
                <Image
                  src="/arrow-1.svg"
                  width={17}
                  height={32}
                  alt="Black Arrow"
                />
              </Link>
            )}
            {link2 && (
              <Link href={link2} className="flex items-center gap-2.5">
                <Image
                  src={`${STRAPI_URL}${image2.url}`}
                  width={38}
                  height={38}
                  alt="ADM"
                />
                <span className="text-lg font-medium">{content2}</span>
                <Image
                  src="/arrow-1.svg"
                  width={17}
                  height={32}
                  alt="Black Arrow"
                />
              </Link>
            )}
            {link3 && (
              <Link href={link3} className="flex items-center gap-2.5">
                <Image
                  src={`${STRAPI_URL}${image3.url}`}
                  width={54}
                  height={43}
                  alt="ADM"
                />
                <span className="text-lg font-medium">{content3}</span>
                <Image
                  src="/arrow-1.svg"
                  width={17}
                  height={32}
                  alt="Black Arrow"
                />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AFS;
