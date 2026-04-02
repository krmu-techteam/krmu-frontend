import { Button } from "@/lib/types/home";
import Link from "next/link";
type Props = {
  title1: string;
  title2: string;
  btn1: Button;
  btn2: Button;
};
const SchoolExcellence = ({ title1, title2, btn1, btn2 }: Props) => {
  return (
    <section className="bg-[#004e8a] py-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
        <div className="w-full lg:w-1/2 text-center">
          <h4 className="text-white text-2xl sm:text-3xl md:text-5xl mb-5 font-medium">
            {title1}
          </h4>
          {(btn1?.buttonlink || btn1?.buttonclass) && (
            <Link
              href={btn1?.buttonlink}
              className={`py-3.5 px-8 bg-[#051630] font-bold rounded-sm inline-block text-sm sm:text-base text-white ${btn1?.buttonclass}`}
              target="_blank" rel="noopener noreferrer"
            >
              {btn1?.buttontext}
            </Link>
          )}
        </div>
        <div className="w-full lg:w-1/2 text-center">
          <h4 className="text-white text-2xl  sm:text-3xl  md:text-5xl mb-5 font-medium">
            {title2}
          </h4>
          {(btn2?.buttonlink || btn2?.buttonclass) && (
            <Link
              href={btn2?.buttonlink}
              className={`py-3.5 px-8 bg-[#051630] font-bold rounded-sm inline-block text-sm sm:text-base text-white ${btn2?.buttonclass}`}
              target="_blank" rel="noopener noreferrer"
            >
              {btn2?.buttontext}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default SchoolExcellence;
