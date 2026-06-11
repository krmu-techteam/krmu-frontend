import Link from "next/link";
import { ArrowRightCircle, ArrowUpRight } from "lucide-react";
import { HeroBannerProps, splitTitleByFor } from "@/modules/school";

const AdmissionOpenBanner = ({ title, admBtn }: HeroBannerProps) => {
  const { boldText, normalText } = splitTitleByFor(title);

  return (
    <section className="w-full relative z-20 py-6 lg:py-8 px-6 md:px-8 lg:px-11 2xl:px-16">
      <div className="max-w-[1530px] mx-auto px-5 sm:px-3 py-4 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-6 bg-[linear-gradient(90deg,#8B3D22_11.06%,#003763_100%)] rounded-sm">
        {/* Heading */}
        <h3 className="text-center font-poppins md:text-left text-xl xl:text-[25px] text-white">
          <span className="font-semibold">{boldText}</span>
          {normalText && <span className="font-normal">{normalText}</span>}
        </h3>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/programmes"
            className="inline-flex font-poppins items-center justify-center border border-white/60 px-5 py-2.5 text-md font-medium text-white rounded-sm whitespace-nowrap hover:bg-white/10 transition-colors"
          >
            <ArrowRightCircle className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Explore Programmes
          </Link>

          {(admBtn?.buttonlink || admBtn?.buttonclass) && (
            <Link
              href={admBtn?.buttonlink || "#"}
              className={`inline-flex w-full sm:w-auto items-center justify-center border border-[#CB000D] bg-[#CB000D] hover:bg-[#CB000D] px-6 py-2.5 text-md font-medium font-poppins text-white rounded-sm whitespace-nowrap transition-all relative overflow-hidden group ${admBtn.buttonclass || ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
              {admBtn?.buttontext || "APPLY NOW"}
              <ArrowUpRight className="w-4 h-4 ml-2" strokeWidth={2.5} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdmissionOpenBanner;
