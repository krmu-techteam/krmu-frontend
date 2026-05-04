import { Button } from "@/lib/types/home";
import Link from "next/link";

type Props = {
  title: string;
  subheading: string;
  heroBtns: Button[];
};

const SchoolHeroSEMCE = ({ title, subheading, heroBtns }: Props) => {
  return (
    <section
      className="py-[140px] md:py-[18%] px-4 common-overlay schoolBanner"
      style={{
        backgroundImage: `url(/semcebg.webp)`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full flex flex-col xl:flex-row items-center">
        <div className="w-full xl:w-1/2 z-10 relative text-center lg:text-left">
          <div>
            <h2 className="text-xl md:text-5xl lg:mb-5 font-semibold sm:font-medium text-white sm:text-black mb-5 sm:mb-0">
              {subheading}
            </h2>
            <h1 className="text-2xl md:text-[55px] text-white font-bold leading-[1.2] uppercase">
              {title}
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-5 my-4 text-white">
              {heroBtns?.map((btn) =>
                btn?.buttontext === "Explore Programmes" ? (
                  <Link
                    key={btn.id}
                    href={btn.buttonlink}
                    className={`text-white max-w-[220px] w-full flex justify-center items-center px-5 py-1.5 rounded-md gap-4 border border-[#c7c7c7] font-semibold ${
                      btn.buttonclass || ""
                    }`}
                  >
                    {btn.buttontext}
                  </Link>
                ) : (
                  <Link
                    key={btn.id}
                    href={btn.buttonlink}
                    className={`text-black max-w-[220px] w-full flex justify-center items-center px-5 py-1.5 rounded-md gap-4 font-semibold bg-white  ${
                      btn.buttonclass || ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {btn.buttontext}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2"></div>
      </div>
    </section>
  );
};

export default SchoolHeroSEMCE;
