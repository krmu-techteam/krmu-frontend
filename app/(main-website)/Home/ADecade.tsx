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
      <section className="px-4 py-5 sm:py-20">
        <div className="flex flex-col text-center lg:flex-row gap-5  max-w-[1664px] mx-auto md:text-left">
          <div className="w-full xl:w-1/2">                     
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-2 md:mb-5 text-black">
              {leftContent.adecadetitle}
            </h2>
            <h3 className="mb-4 text-2xl md:text-4xl font-light text-[#034272]">
              {leftContent.adecadesubtitle}
            </h3>
            <p className="text-lg mb-5">{leftContent.adecadedescription}</p>
            <div className="flex flex-col sm:flex-row  md:items-start gap-2.5 sm:gap-5">
              {leftContent.button1link && (
                <Link
                  href={leftContent.button1link}
                  className="bg-primary text-white flex justify-center items-center px-5 py-1.5 rounded-md gap-4"
                >
                  <span className="text-sm sm:text-xl">
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
                  className="bg-primary text-white flex justify-center items-center px-5 py-1.5 rounded-md gap-4"
                >
                  <span className="text-xs sm:text-xl">
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
              <div key={idx} className="flex flex-col justify-center text-center">
                <span className="text-4xl sm:text-6xl md:text-6xl font-medium text-[#0060aa]">
                  {counterText}
                </span>
                <span className="text-sm md:text-xl font-normal leading-[1.3] text-black">
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
