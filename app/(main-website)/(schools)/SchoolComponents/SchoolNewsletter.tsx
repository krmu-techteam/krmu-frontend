import Popup from "@/app/(main-website)/components/Popup";
import { STRAPI_URL } from "@/app/constant";
import { Button } from "@/lib/types/home";
import Link from "next/link";

type Props = {
  heading: string;
  desc: string;
  btns: Button[];
  newsletterbg: string;
};

const SchoolNewsletter = ({ heading, desc, btns, newsletterbg }: Props) => {
  return (
    <section
      className="bg-cover bg-center py-14 mt-14 px-4"
      style={{
        background: `url(${STRAPI_URL}${newsletterbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="w-full xl:w-2/3 text-white text-center">
          <h4 className="text-3xl sm:text-6xl lg:text-8xl font-medium mb-5 lg:mb-0">
            {heading}
          </h4>
          <p className="text-sm sm:text-2xl lg:text-[32px] font-normal mb-5">
            {desc}
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-5 md:gap-12">
            {btns &&
              btns.map((btn) => {
                if (btn?.buttonclass === "propPopup") {
                  return (
                    <Popup
                      key={btn?.id}
                      buttonText={btn.buttontext || "Apply Now"}
                      buttonClass={`py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-sm md:text-base ${btn?.buttonclass}`}
                      buttonIcon=""
                    >
                      <p>This is the content inside the popup.</p>
                    </Popup>
                  );
                } else {
                  return (
                    <Link
                      key={btn?.id}
                      href={btn?.buttonlink || ""}
                      className={`py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-sm md:text-base ${btn?.buttonclass}`}
                      target="_blank" rel="noopener noreferrer"
                    >
                      {btn?.buttontext}
                    </Link>
                  );
                }
              })}
          </div>
        </div>
        <div className="w-full xl:w-1/3"></div>
      </div>
    </section>
  );
};

export default SchoolNewsletter;
