import Link from "next/link";
import HomeYourJourneyForm from "../components/Forms/HomeYourJourneyForm";
import { Button } from "@/lib/types/home";
import CommonLeadPopup from "../components/CommonLeadPopup";

interface YourJourneyProps {
  title: string;
  content: string;
  buttons: Button[];
}

const YourJourney = ({ title, content, buttons }: YourJourneyProps) => {
  return (
    <>
      <section
        className="px-4 py-12 bg-[#00074b]"
        style={{
          backgroundImage:
            'url("/home/your-journey.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col max-w-[1664px] mx-auto w-full text-white xl:flex-row">
          <div className="w-full xl:w-1/2">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 md:mb-5 sm:max-w-sm leading-tight">
              {title}
            </h4>
            <p className="xl:max-w-lg w-full text-center xl:text-left mb-5">
              {content}
            </p>
            <div className="flex items-center justify-center xl:justify-start flex-col lg:flex-row gap-5">
              {/* <Link
                    key={i}
                    className={`text-[#e31e24] bg-white px-5 py-1.5 rounded-md font-bold ${
                      button.buttonclass || ""
                    }`}
                    href={button.buttonlink}

                  >
                    {button.buttontext}
                  </Link> */}
              {buttons &&
                buttons.map((button, i) =>
                  button.buttonclass === "yourJourneyPopup" ? (
                    <CommonLeadPopup
                      key={i}
                      buttonText={button.buttontext || "Download Prospectus"}
                      buttonClassName={`text-[#034272] bg-white px-5 py-1.5 rounded-md font-bold ${
                        button.buttonclass || ""
                      }`}
                      redirectUrl={button.buttonlink || "#"}
                      form_name={button.buttontext || ""}
                    />
                  ) : (
                    <Link
                      key={i}
                      className={`bg-[#cb000d] text-white font-bold px-5 py-1.5 rounded-md  ${
                        button.buttonclass || ""
                      }`}
                      href={button.buttonlink || "#"}
                      target="_blank" rel="noopener noreferrer"
                    >
                      {button.buttontext}
                    </Link>
                  ),
                )}
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
            <div className="max-w-md w-full">
              <HomeYourJourneyForm />
              <Link
                href="/programmes"
                className="py-1.5 px-5 bg-[#034272] text-white w-full text-center rounded-md font-bold inline-block"
                target="_blank" rel="noopener noreferrer"
              >
                Explore Our Programmes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourJourney;
