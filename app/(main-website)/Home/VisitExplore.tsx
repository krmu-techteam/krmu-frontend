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
      <div className="max-w-[1664px] mx-auto w-full bg-gray-50 pt-10">
        <div className="text-black text-center max-w-[1045px] mx-auto w-full">
          <h4 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-5">
            {title1} <br /> <span className="text-[#034272]">{title2}</span>
          </h4>

          <p className="mb-5 text-lg">{desc}</p>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {visitexplorebtns &&
              visitexplorebtns.map((btn) => {
                return (
                  <Link
                    key={btn?.id}
                    href={btn?.buttonlink}
                    className={`bg-[#034272] border-2 text-white flex justify-center items-center px-5 py-1.5 rounded-md gap-4 ${btn?.buttonclass}`}
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
