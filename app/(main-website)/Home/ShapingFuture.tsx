import { CounterItem, StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";
import { STRAPI_URL } from "../../constant";

interface ShapingFutureProp {
  highlight: string;
  subtitle: string;
  afterHighLight: string;
  desc: string;
  link1text: string;
  link1: string;
  link2text: string;
  link2: string;
  shapingimage: StrapiMedia;
  mobShapimage: StrapiMedia;
  shapingCounters: CounterItem[];
}

const ShapingFuture = ({
  highlight,
  subtitle,
  desc,
  afterHighLight,
  link1text,
  link1,
  link2text,
  link2,
  shapingimage,
  mobShapimage,
  shapingCounters,
}: ShapingFutureProp) => {
  return (
    <>
      <section className="px-4">
        <div className="py-8 max-w-[1664px] mx-auto w-full">
          <div className="lg:flex lg:bg-white lg:rounded-t-[50px] lg:pb-8 shadow-xl/20">
            <div className="px-5 lg:w-3/5 lg:mx-8 xl:pl-8">
              <div className="pt-12 mx-1">
                <div className="my-2">
                  <h3 className="text-2xl ">{subtitle}</h3>
                  <h3 className="text-2xl mt-5 font-semibold lg:text-[64px] lg:leading-none">
                    <span className="text-[#034272]">{highlight}</span>
                    {afterHighLight}
                  </h3>
                </div>
                <p className="mb-2 mt-5">{desc}</p>
              </div>
              <div className="lg:flex ">
                {shapingCounters &&
                  shapingCounters.map((counter) => {
                    return (
                      <div
                        key={counter?.id}
                        className="flex flex-col text-center items-center justify-center mb-5 lg:items-start lg:mx-4 lg:justify-start lg:text-left lg:w-1/4"
                      >
                        <span className="text-[#034272] font-bold mb-[10px] text-4xl xl:text-5xl">
                          {counter?.countertext}
                        </span>
                        <span className="text-base font-semibold">
                          {counter?.countercontent}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="lg:w-2/5 lg:mx-8">
              <div className="mt-8">
                <Image
                  src={`${STRAPI_URL}${shapingimage.url}`}
                  width={292}
                  height={292}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="hidden lg:block"
                  alt="Shaping Future"
                />

                <div className="lg:hidden">
                  <Image
                    src={`${STRAPI_URL}${mobShapimage?.url}`}
                    width={292}
                    height={292}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="Shaping Future"
                  />
                </div>
              </div>
              <div className="text-center pt-2.5 pb-5 px-2.5 bg-[#034272] flex justify-center flex-col items-center text-white rounded-b-[41px] lg:hidden">
                <Link
                  href={link1}
                  className={`text-[14px]  font-semibold my-2 flex gap-2.5 items-center`}
                >
                  <span>{link1text}</span>
                  <Image
                    src="/arrow-4.svg"
                    alt="arrow4"
                    className="brightness-100 invert"
                    width={10}
                    height={32}
                  />
                </Link>
                <Link
                  href={link2}
                  className={`text-[14px]  font-semibold flex gap-2.5 items-center`}
                >
                  <span>{link2text}</span>{" "}
                  <Image
                    src="/arrow-4.svg"
                    alt="arrow4"
                    className="brightness-100 invert"
                    width={10}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center  py-2.5 pl-32 bg-[#034272] justify-start items-center text-white rounded-b-[41px] hidden lg:flex">
            <Link
              href={link1}
              className={`text-[18px]  font-semibold  flex gap-2.5 my-2.5 items-center w-1/4`}
            >
              <span>{link1text}</span>{" "}
              <Image
                src="/arrow-4.svg"
                alt="arrow4"
                className="brightness-100 invert"
                width={10}
                height={32}
              />
            </Link>
            <Link
              href={link2}
              className={`text-[18px]  font-semibold  gap-2.5 my-2.5 w-1/4 flex items-center justify-center`}
            >
              <span>{link2text}</span>{" "}
              <Image
                src="/arrow-4.svg"
                alt="arrow4"
                className="brightness-100 invert flex items-center justify-center"
                width={10}
                height={32}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShapingFuture;
