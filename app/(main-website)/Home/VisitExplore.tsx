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
    <section className="xl:max-w-7xl 2xl:max-w-[1664px] mx-auto w-full  px-5 ">
      <div className="p-5 sm:p-15   rounded-3xl bg-[#F5F5F5]">
        <div className="text-black text-center max-w-[1045px] mx-auto w-full">
          <h4 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-5">
            {title1} <br /> <span className="text-[#001732]">{title2}</span>
          </h4>

          <p className="mb-5 text-lg text-justify sm:text-center">{desc}</p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-5 items-center justify-center w-full max-w-[500px] sm:max-w-none mx-auto">
            {visitexplorebtns &&
              visitexplorebtns.map((btn) => {
                return (
                  <Link
                    key={btn?.id}
                    href={btn?.buttonlink}
                    className={` w-full sm:w-auto flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[13px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-[#001732] text-white border-1 border-transparent hover:bg-[#001732] shadow-lg px-6 hover:bg-[#001732] ${btn?.buttonclass}`}
                  >
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
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
