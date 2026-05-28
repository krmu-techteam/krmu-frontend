import { ADecadeLeftCol, ADecadeRightCol } from "@/lib/types/home";
import Image from "next/image";
import Link from "next/link";

interface ADecadeProps {
  leftContent: ADecadeLeftCol;
  rightContent: ADecadeRightCol;
}
type Counter = {
  counterText: string;
  counterContent: string;
};
const ADecade = ({ leftContent, rightContent }: ADecadeProps) => {
  const counters: Counter[] = [
    {
      counterText: rightContent.counter1text,
      counterContent: rightContent.counter1content,
    },
    {
      counterText: rightContent.counter2text,
      counterContent: rightContent.counter2content,
    },
    {
      counterText: rightContent.counter3text,
      counterContent: rightContent.counter3content,
    },
    {
      counterText: rightContent.counter4text,
      counterContent: rightContent.counter4content,
    },
  ];

  return (
    <>
      <section className="py-10 xl:py-20 px-5 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-5 xl:max-w-7xl 2xl:max-w-[1664px] mx-auto text-center lg:text-left">
          <div className="w-full xl:w-1/2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-2 md:mb-5 text-black">
              {leftContent.adecadetitle}
            </h2>
            <h3 className="mb-4 text-xl md:text-4xl font-light text-[#001732]">
              {leftContent.adecadesubtitle}
            </h3>
            <p className="text-lg mb-5 text-justify">
              {leftContent.adecadedescription}
            </p>
            <div className="flex flex-col sm:flex-row  justify-center md:justify-start md:items-start gap-2.5 sm:gap-5">
              {leftContent.button1link && (
                <Link
                  href={leftContent.button1link}
                  // className="bg-[#001732] text-white   px-6 py-4 sm:py-2.5 rounded-md font-semibold col-span-2 text-center flex items-center justify-center h-14"

                  className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-[#001732] text-white border-1 border-transparent shadow-lg "
                >
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                  {leftContent.button1text}

                  {/* <Image
                    src="/arrow-2.svg"
                    alt="arrow 2"
                    width={39}
                    height={8}
                  /> */}
                </Link>
              )}
              {leftContent.button2link && (
                <Link
                  href={leftContent.button2link}
                  className=" border border-[#d8d8d8] px-6 py-4 sm:py-2.5 rounded-sm font-medium col-span-2 text-center flex items-center justify-center  h-14 leading-none tracking-wide text-[14px] md:text-base"
                >
                  {leftContent.button2text}

                  {/* <Image
                    src="/arrow-2.svg"
                    alt="arrow 2"
                    width={39}
                    height={8}
                  /> */}
                </Link>
              )}
            </div>
          </div>
          <div className="w-full grid grid-cols-2 xl:w-1/2 text-center gap-2.5 lg:text-left">
            {counters.map(({ counterText, counterContent }, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center text-center border rounded-md p-5 xl:p-0"
              >
                <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-black">
                  {counterText}
                </span>
                <span className="text-sm xl:text-lg 2xl:text-lg font-normal leading-[1.3] text-black  sm:w-[54%] lg:w-[67%]">
                  {counterContent}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ADecade;
