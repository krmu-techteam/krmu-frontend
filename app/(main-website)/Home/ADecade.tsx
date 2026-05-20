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
            <h3 className="mb-4 text-2xl md:text-4xl font-light text-[#001732]">
              {leftContent.adecadesubtitle}
            </h3>
            <p className="text-lg mb-5">{leftContent.adecadedescription}</p>
            <div className="flex flex-col sm:flex-row  justify-center md:justify-start md:items-start gap-2.5">
              {leftContent.button1link && (
                <Link
                  href={leftContent.button1link}
                  className="bg-[#001732] text-white   px-6 py-4 sm:py-2.5 rounded-md font-semibold col-span-2 text-center flex items-center justify-center text-sm h-14"
                  // bg-[#e31e24] text-white border  px-6 py-2.5 rounded-sm font-semibold col-span-2 text-center flex items-center justify-center text-sm
                >
                  <span className="text-sm sm:text-base">
                    {leftContent.button1text}
                  </span>
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
                  className=" border border-[#d8d8d8] px-6 py-4 sm:py-2.5 rounded-sm font-semibold col-span-2 text-center flex items-center justify-center sm:text-sm h-14 "
                >
                  <span className="text-sm sm:text-base">
                    {leftContent.button2text}
                  </span>
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
                className="flex flex-col justify-center text-center border rounded-md p-5 xl:p-0"
              >
                <span className="text-4xl sm:text-6xl md:text-6xl font-medium text-[#001732]">
                  {counterText}
                </span>
                <span className="text-sm xl:text-lg 2xl:text-xl font-normal leading-[1.3] text-black">
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
