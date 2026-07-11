import { readybtn } from "@/lib/types/admission";
import Steps from "./Steps";
import Link from "next/link";

interface AdmissionProcessProp {
  highlighttext: string;
  beforehighlight: string;
  badgetext: string;
  desc: string;
  readybtns: readybtn[];
  title2: string;
  descriptions2: string;
  needhelptext: string;
  needhelplink: string;
  needhelplinktext: string;
}

const AdmissionProcess = ({
  highlighttext,
  beforehighlight,
  badgetext,
  desc,
  readybtns,
  title2,
  descriptions2,
  needhelptext,
  needhelplink,
  needhelplinktext,
}: AdmissionProcessProp) => {
  return (
    <>
      <div id="admission">
        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-25 to-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-800 font-bold">
                {beforehighlight}
                <span className="text-university-red">{highlighttext}</span>
              </h2>
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-md mb-6">
                <span className="text-university-blue text-sm uppercase tracking-wide">
                  {badgetext}
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {desc}
              </p>
            </div>
            <div className="max-w-6xl mx-auto mb-12 md:mb-16">
              <Steps />
            </div>
            <div className="text-center">
              <div className="max-w-2xl mx-auto mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl mb-4 text-gray-800 font-bold">
                  {title2}
                </h3>
                <p className="text-gray-600">{descriptions2}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8">
                {readybtns &&
                  readybtns.map((btn) => {
                    return (
                      <Link
                        key={btn.id}
                        href={`tel:${btn.buttonlink}`}
                        className={btn.buttonclass}
                      >
                        {btn.buttontext}
                      </Link>
                    );
                  })}
              </div>
              <p className="text-sm text-gray-500">
                {needhelptext}
                <Link href={needhelplink} className="text-red-500 ml-1">
                  {needhelplinktext}
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdmissionProcess;
