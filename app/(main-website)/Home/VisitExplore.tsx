import { ButtonType } from "@/lib/types/common";
import Link from "next/link";

interface VisitExploreProp {
  title1: string;
  title2: string;
  desc: string;
  visitexplorebtns: ButtonType[];
}

const VisitExplore = ({
  title1,
  title2,
  desc,
  visitexplorebtns,
}: VisitExploreProp) => {
  return (
    <section> 
      <div className="xl:max-w-7xl 2xl:max-w-[1664px] mx-auto w-full bg-gray-50 px-5 xl:px-0 pt-10">
        <div className="text-black text-center max-w-[1045px] mx-auto w-full">
          <h4 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-5">
            {title1} <br /> <span className="text-[#034272]">{title2}</span>
          </h4>

          <p className="mb-5 text-lg text-justify sm:text-center">{desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center w-full max-w-[500px] sm:max-w-none mx-auto">
            {visitexplorebtns &&
              visitexplorebtns.map((btn) => {
                return (
                  <Link
                    key={btn?.id}
                    href={btn?.buttonlink}
                    className={`bg-[#034272] text-sm sm:text-base font-semibold border-2 text-white flex justify-center items-center px-5 py-3 sm:py-1.5 rounded-md gap-4 w-full sm:w-auto min-h-[50px] sm:min-h-0 ${btn?.buttonclass}`}
                  >
                    {btn?.buttontext}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitExplore;
