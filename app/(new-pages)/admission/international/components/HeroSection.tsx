import NoPaperFormsWidget from "@/app/(landing-page)/admission/CommonComponent2026/NoPaperFormsWidget";

type Props = {
  formId: string;
};
const HeroSection = ({ formId }: Props) => {
  return (
    <section className="bg-[#edece4] relative px-5 2xl:px-0 py-10 xl:py-0">
      <div className="bg-white absolute right-0 top-0 max-w-[420px] 2xl:max-w-[500px] w-full h-[750px] form-white-container hidden xl:flex items-center justify-center"  id="apply-section">
        <div className="relative z-30 w-full">
          <div className="text-center">
            <h3 className="text-center font-poppins font-bold text-2xl">
              <span className="text-[#cb000d]">
                Apply for International Admission
              </span>{" "}
              <br /> at K.R. Mangalam University Today
            </h3>
          </div>
          <NoPaperFormsWidget widgetId={formId} height="600px" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-[1427px] mx-auto">
        <div className="w-full md:w-1/2 xl:w-8/12 flex items-start left-container">
          <div className="w-full xl:w-1/2 2xl:w-3/5 col-1">
            <h1 className="font-host text-5xl md:text-6xl xl:text-8xl font-extrabold mb-5 leading-none main-heading">
              International Admissions
            </h1>
            <h4 className="text-2xl lg:text-3xl text-[#E11F23] font-bold font-host main-heading-2">
              Open For The Session 2026–27
            </h4>
            <h5 className="text-[#001732] italic text-4xl lg:text-5xl mb-5 leading-tight font-fraunces mt-5">
              Study in India. <br className="hidden md:block" /> Lead the World.
            </h5>
            <p className="font-inter text-xl">
              Join one of India's fastest-growing{" "}
              <strong>NAAC ‘A’ accredited</strong> universities and experience
              internationally recognised education in the heart of Gurugram,
              India's leading corporate and innovation hub.
            </p>

            <div className="xl:hidden mt-5">
              <span className="text-4xl xl:text-6xl text-[#001732] font-bold font-fraunces heading-1">
                Up to
              </span>
              <p className="text-6xl xl:text-9xl leading-none text-[#E11F23] font-bold font-fraunces heading-2">
                60<span className="font-light">%</span>
              </p>
              <span className="text-3xl xl:text-[40px] text-[#001732] font-bold font-fraunces heading-3">
                Scholarship
              </span>
            </div>
          </div>
          <div className="hidden xl:block w-1/2 2xl:w-2/5 col-2">
            <div className="-mt-10 text-center middle-container">
              <span className="text-6xl text-[#001732] font-bold font-fraunces heading-1">
                Up to
              </span>
              <p className="text-9xl leading-none text-[#E11F23] font-bold font-fraunces heading-2">
                60<span className="font-light">%</span>
              </p>
              <span className="text-[40px] text-[#001732] font-bold font-fraunces heading-3">
                Scholarship
              </span>
              <p
                className="
 bg-[linear-gradient(347.33deg,_#CAC492_9.54%,_#CB000D_68.63%)]
    bg-clip-text
    text-transparent
    [-webkit-background-clip:text]
    [-webkit-text-fill-color:transparent]
    opacity-20
    font-bold
    text-7xl
    2xl:text-[90px]
    leading-none
    font-big-shoulder
    heading-4
  "
              >
                Scholarship
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[750px] md:h-[900px] lg:h-[700px] xl:h-[750px] md:w-1/2 bg-white xl:bg-transparent xl:w-4/12 relative outer-right-container flex items-center justify-center rounded-2xl sm:pt-10 md:pt-0">
          <div className="relative z-30 w-full pt-5 sm:pt-0 sm:p-4 md:p-5 xl:hidden">
            <div className="text-center">
              <h3 className="text-center font-poppins font-bold text-sm sm:text-base md:text-lg xl:text-2xl">
                <span className="text-[#cb000d]">
                  Apply for International Admission
                </span>{" "}
                <br /> at K.R. Mangalam University Today
              </h3>
            </div>
            <NoPaperFormsWidget widgetId={formId} height="650px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
