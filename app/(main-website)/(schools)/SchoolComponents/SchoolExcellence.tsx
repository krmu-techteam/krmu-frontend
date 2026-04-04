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
    <section className="relative py-16 px-4 bg-gradient-to-r from-[#071c33] via-[#0a3a63] to-[#071c33] overflow-hidden">
      
      <div className="max-w-[1664px] mx-auto w-full grid lg:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center transition duration-300 hover:scale-[1.03] hover:shadow-2xl">
          
          <h4 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 font-semibold leading-snug">
            {title1}
          </h4>

          {(btn1?.buttonlink || btn1?.buttonclass) && (
            <Link
              href={btn1?.buttonlink}
              className={`inline-block py-3.5 px-8 rounded-lg font-medium text-sm sm:text-base 
              bg-white text-[#071c33] border border-white
              transition duration-300 
              hover:bg-transparent hover:text-white hover:border-white
              ${btn1?.buttonclass}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn1?.buttontext}
            </Link>
          )}
        </div>

        {/* Card 2 */}
        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center transition duration-300 hover:scale-[1.03] hover:shadow-2xl">
          
          <h4 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 font-semibold leading-snug">
            {title2}
          </h4>

          {(btn2?.buttonlink || btn2?.buttonclass) && (
            <Link
              href={btn2?.buttonlink}
              className={`inline-block py-3.5 px-8 rounded-lg font-medium text-sm sm:text-base 
              bg-white text-[#071c33] border border-white
              transition duration-300 
              hover:bg-transparent hover:text-white hover:border-white
              ${btn2?.buttonclass}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn2?.buttontext}
            </Link>
          )}
        </div>

      </div>

      {/* Darker Glow Effects */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-900 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-900 opacity-30 rounded-full blur-3xl"></div>

    </section>
  );
};

export default SchoolExcellence;