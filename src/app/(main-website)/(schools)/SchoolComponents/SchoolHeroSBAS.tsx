import { Button } from "@/lib/types/home";
import Link from "next/link";

type Props = {
  title: string;
  subheading: string;
  heroBtns: Button[];
};

const SchoolHeroSBAS = ({ title, subheading, heroBtns }: Props) => {
  return (
    <section className="pt-[12%] pb-[8%] bg-[url(/sbasbg.webp)] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="w-full lg:w-1/2 text-white z-10 relative">
          <h2 className="text-sm md:text-[28px] lg:mb-5 font-medium">
            {subheading}
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold leading-[1.2]">
            {title}
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-5 my-4">
            {heroBtns?.map((btn) =>
              btn?.buttontext === "Explore Programmes" ? (
                <Link
                  key={btn.id}
                  href={btn.buttonlink}
                  className={`py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm text-sm md:text-base ${
                    btn.buttonclass || ""
                  }`}
                >
                  {btn.buttontext}
                </Link>
              ) : (
                <Link
                  key={btn.id}
                  href={btn.buttonlink}
                  className={`py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm text-sm md:text-base ${
                    btn.buttonclass || ""
                  }`}
                  target="_blank" rel="noopener noreferrer"
                >
                  {btn.buttontext}
                </Link>
              ),
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2"></div>
      </div>
    </section>
  );
};

export default SchoolHeroSBAS;
