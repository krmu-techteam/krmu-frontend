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
      <section>
        <div className="xl:max-w-7xl 2xl:max-w-[1664px] mx-auto w-full xl:mt-20 px-5 xl:px-0">
          <div className="lg:flex lg:bg-white gap-5 2xl:gap-10 items-center">
            <div className="lg:w-1/2 2xl:w-3/5">
              <div className="pt-8 mx-1 text-center lg:text-left">
                <div className="my-2">
                  <h3 className="font-weight-500 text-lg uppercase tracking-[1px] mb-3">
                    {subtitle}
                  </h3>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                    <span className="text-[#001732]">{highlight}</span> <br />
                    {afterHighLight}
                  </h3>

                  {/* <Link
                  href={leftContent.button1link}
                  className="bg-primary text-white flex justify-center items-center px-5 py-1.5 rounded-md gap-4"
                >
                  <span className="text-sm sm:text-xl">
                    Research
                  </span>
                  <Image
                    src="/arrow-2.svg"
                    alt="arrow 2"
                    width={39}
                    height={8}
                  />
                </Link> */}
                </div>
                <p className="mb-2 mt-5 text-lg ">{desc}</p>
              </div>
              <div className="relative   ">
                <div className="grid grid-cols-2 my-10">
                  {/* Vertical Line */}
                  <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-300 -translate-x-1/2" />

                  {/* Horizontal Line */}
                  <div className="absolute top-1/2 left-0  w-full h-[1px] bg-gray-300 -translate-y-1/2" />
                  {shapingCounters &&
                    shapingCounters.map((counter) => {
                      return (
                        <div
                          key={counter?.id}
                          className="flex flex-col text-center items-center justify-center w-full p-4 lg:items-start lg:justify-start lg:text-left "
                        >
                          <span className="text-2xl mt-5 font-semibold sm:text-4xl lg:text-5xl lg:leading-none ">
                            {counter?.countertext}
                          </span>
                          <span className=" p-1 text-base">
                            {counter?.countercontent}
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start sm:items-center gap-3">
                <Link
                  href={link1}
                  className="bg-[#001732] text-white border  px-6 py-4 sm:py-2.5 rounded-md font-semibold col-span-2 text-center flex items-center justify-center  h-14"
                >
                  <span className="text-sm sm:text-base">{link1text}</span>
                </Link>
                <Link
                  href={link2}
                  className=" text-black  border  px-6 py-4 sm:py-2.5 rounded-sm font-semibold col-span-2 text-center flex items-center justify-center h-14"
                >
                  <span className="text-sm sm:text-base">{link2text}</span>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 2xl:w-2/5 mt-10 lg:mt-0 rounded-2xl overflow-hidden">
              <div className="relative min-h-[300px] md:min-h-96 lg:min-h-[800px] xl:min-h-[596px] h-full rounded-2xl overflow-hidden">
                <Image
                  src="/wp-content/home2/shaping/engage-shaping.webp"
                  fill
                  className="z-10 object-cover  "
                  alt="Shaping Future"
                />

                {/* <div className="lg:hidden">
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
                </div> */}
              </div>
              {/* <div className="text-center pt-2.5 pb-5 px-2.5 bg-[#034272] flex justify-center flex-col items-center text-white rounded-b-[41px] lg:hidden">
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
              </div> */}
            </div>
          </div>
          {/* <div className="text-center  py-2.5 pl-32 bg-[#034272] justify-start items-center text-white rounded-b-[41px] hidden lg:flex">
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ShapingFuture;
