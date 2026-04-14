import Image from "next/image";
import NoPaperFormsWidget from "../../CommonComponent2026/NoPaperFormsWidget";

type Props = {
  formId: string;
};

const PhdHeroSection = ({ formId }: Props) => {
  return (
    <section
      className="pt-[84px] pb-[120px] px-4"
      style={{
        background: `url(/wp-content/landingpage/phd-2026/phd-hero-bg.webp)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} 
    >
      <div className="max-w-[1300px] mx-auto w-full flex items-center flex-col md:flex-row gap-5 xl:gap-0">
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl text-center sm:text-left sm:not-first:text-[40px] text-white leading-[1.3] font-semibold">
            Ready to Add ‘Dr.’ to Your Name? <br /> Enroll in a <br />
            <span className="text-4xl sm:text-8xl xl:text-[190px] font-bold">
              Ph.D.
            </span>{" "}
            <br />
            <span className="hidden sm:block">
              Programme Today
            </span>
          </h1>
          <h3 className="text-xl mx-auto sm:mx-0 sm:text-2xl md:text-3xl font-semibold bg-white p-5 w-fit my-5 text-center sm:text-left">
            Full-Time | Part-Time
          </h3>
          <h4 className="text-white text-sm sm:text-2xl text-center sm:text-left">
            14 Disciplines | Attractive Fellowship
          </h4>
        </div>
        <div className="w-1/3 hidden xl:block">
          <Image
            src="/landingpage/phd/hero-main.webp"
            width={570}
            height={735}
            alt="Hero"
            className="-mb-20 xl:-mb-10"
          />
        </div>
        <div className="w-full md:w-2/3 xl:w-1/3 flex justify-end">
          {/* {formId && (
            <NoPaperFormsWidget
              widgetId={formId}
              height="550px"
              formClass="phdForm"
            />
          )} */}

          {formId && (
            <div id="apply-form" className="w-full scroll-mt-24">
              <NoPaperFormsWidget widgetId={formId} height="700px" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhdHeroSection;
